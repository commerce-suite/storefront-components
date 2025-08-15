import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ColorSelector } from '../color-selector';
import { colors, colorsWithImage } from '../mocks/colorsMocks';

describe('color-selector', () => {
  it('should render color-selector without any props', async () => {
    const page = await newSpecPage({
      components: [ColorSelector],
      html: `<color-selector></color-selector>`,
    });

    expect(page.root).toEqualHtml(`
      <color-selector>
        <div class="color-selector"></div>
      </color-selector>
    `);
  });

  it('should render color-selector with colors', async () => {
    const page = await newSpecPage({
      components: [ColorSelector],
      template: () => <color-selector colors={colors}></color-selector>,
    });

    expect(page.root).toEqualHtml(`
      <color-selector>
        <div class="color-selector">
          <button aria-label="Vermelho" class="color-option" title="Vermelho">
            <span class="color-dot" style="background-color: #FF0000;"></span>
          </button>
          <button aria-label="Azul" class="color-option" title="Azul">
            <span class="color-dot" style="background-color: #0000FF;"></span>
          </button>
          <button aria-label="Estampado" class="color-option" title="Estampado">
            <span class="color-dot" style="background-image: url(https://example.com/pattern.jpg); background-size: cover; background-position: center;"></span>
          </button>
        </div>
      </color-selector>
    `);
  });

  it('should render color-selector with selected color', async () => {
    const page = await newSpecPage({
      components: [ColorSelector],
      template: () => <color-selector colors={colors} selectedId={2}></color-selector>,
    });

    expect(page.root).toEqualHtml(`
      <color-selector>
        <div class="color-selector">
          <button aria-label="Vermelho" class="color-option" title="Vermelho">
            <span class="color-dot" style="background-color: #FF0000;"></span>
          </button>
          <button aria-label="Azul" class="active color-option" title="Azul">
            <span class="color-dot" style="background-color: #0000FF;"></span>
          </button>
          <button aria-label="Estampado" class="color-option" title="Estampado">
            <span class="color-dot" style="background-image: url(https://example.com/pattern.jpg); background-size: cover; background-position: center;"></span>
          </button>
        </div>
      </color-selector>
    `);
  });

  it('should emit colorSelected event when color is clicked', async () => {
    const page = await newSpecPage({
      components: [ColorSelector],
      template: () => <color-selector colors={colors}></color-selector>,
    });

    const colorSelectedSpy = jest.fn();
    page.root.addEventListener('colorSelected', colorSelectedSpy);

    const colorButton = page.root.querySelector('.color-option') as HTMLButtonElement;
    colorButton.click();

    expect(colorSelectedSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: colors[0],
      }),
    );
  });

  it('should handle colors with image background', async () => {
    const page = await newSpecPage({
      components: [ColorSelector],
      template: () => <color-selector colors={colorsWithImage}></color-selector>,
    });

    const colorDot = page.root.querySelector('.color-dot') as HTMLElement;
    expect(colorDot.style.backgroundImage).toBe('url(https://example.com/floral.jpg)');
    expect(colorDot.style.backgroundSize).toBe('cover');
    expect(colorDot.style.backgroundPosition).toBe('center');
  });
});
