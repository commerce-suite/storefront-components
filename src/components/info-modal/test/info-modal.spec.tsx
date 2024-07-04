import { newSpecPage } from '@stencil/core/testing';

import { InfoModal } from '../info-modal';

describe('info-modal', () => {
  it('should render info-modal without any props', async () => {
    const page = await newSpecPage({
      components: [InfoModal],
      html: `<info-modal></info-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <info-modal>
        <div class="-bottom info-modal">
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">
              Estamos ao vivo!
            </h2>
            <p class="info-modal-header-description">
              Venha conferir nossa live cheia novidades e promoções imperdíveis para você!
            </p>
          </div>
          <div class="info-modal-buttons">
            <button class="info-modal-buttons-primary">
              Assistir agora
            </button>
            <button class="info-modal-buttons-secondary">
              Não, obrigado
            </button>
          </div>
        </div>
      </info-modal>
    `);
  });

  it('should render info-modal without the buttons', async () => {
    const page = await newSpecPage({
      components: [InfoModal],
      html: `<info-modal hide-buttons></info-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <info-modal hide-buttons="">
        <div class="-bottom -hide-buttons info-modal">
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">
              Estamos ao vivo!
            </h2>
            <p class="info-modal-header-description">
              Venha conferir nossa live cheia novidades e promoções imperdíveis para você!
            </p>
          </div>
        </div>
      </info-modal>
    `);
  });

  it('should render info-modal sending title and description as prop', async () => {
    const page = await newSpecPage({
      components: [InfoModal],
      html: `<info-modal modal-title="Título" modal-description="Descrição"></info-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <info-modal modal-description="Descrição" modal-title="Título">
        <div class="-bottom info-modal">
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">
              Título
            </h2>
            <p class="info-modal-header-description">
              Descrição
            </p>
          </div>
          <div class="info-modal-buttons">
            <button class="info-modal-buttons-primary">
              Assistir agora
            </button>
            <button class="info-modal-buttons-secondary">
              Não, obrigado
            </button>
          </div>
        </div>
      </info-modal>
    `);
  });

  it('should render info-modal with titles being passed by prop on buttons', async () => {
    const page = await newSpecPage({
      components: [InfoModal],
      html: `<info-modal primary-button-text="Primeiro botão" secondary-button-text="Segundo botão"></info-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <info-modal primary-button-text="Primeiro botão" secondary-button-text="Segundo botão">
        <div class="-bottom info-modal">
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">
              Estamos ao vivo!
            </h2>
            <p class="info-modal-header-description">
              Venha conferir nossa live cheia novidades e promoções imperdíveis para você!
            </p>
          </div>
          <div class="info-modal-buttons">
            <button class="info-modal-buttons-primary">
              Primeiro botão
            </button>
            <button class="info-modal-buttons-secondary">
              Segundo botão
            </button>
          </div>
        </div>
      </info-modal>
    `);
  });

  it('should render centralized info-modal', async () => {
    const page = await newSpecPage({
      components: [InfoModal],
      html: `<info-modal position="center"></info-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <info-modal position="center">
        <div class="-center info-modal">
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">
              Estamos ao vivo!
            </h2>
            <p class="info-modal-header-description">
              Venha conferir nossa live cheia novidades e promoções imperdíveis para você!
            </p>
          </div>
          <div class="info-modal-buttons">
            <button class="info-modal-buttons-primary">
              Assistir agora
            </button>
            <button class="info-modal-buttons-secondary">
              Não, obrigado
            </button>
          </div>
        </div>
      </info-modal>
    `);
  });

  it('should render info-modal at top', async () => {
    const page = await newSpecPage({
      components: [InfoModal],
      html: `<info-modal position="top"></info-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <info-modal position="top">
        <div class="-top info-modal">
          <div class="info-modal-header">
            <h2 class="info-modal-header-title">
              Estamos ao vivo!
            </h2>
            <p class="info-modal-header-description">
              Venha conferir nossa live cheia novidades e promoções imperdíveis para você!
            </p>
          </div>
          <div class="info-modal-buttons">
            <button class="info-modal-buttons-primary">
              Assistir agora
            </button>
            <button class="info-modal-buttons-secondary">
              Não, obrigado
            </button>
          </div>
        </div>
      </info-modal>
    `);
  });
});
