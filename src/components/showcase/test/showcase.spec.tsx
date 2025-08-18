import { newSpecPage } from '@stencil/core/testing';
import { Showcase } from '../showcase';
import { products } from '../mocks/productsMock';

jest.mock('../../buy-together/services/front-buy-together.service', () => ({
  FrontBuyTogetherService: jest.fn().mockImplementation(() => ({
    getOnlyPivotProducts: jest.fn().mockResolvedValue(products),
  })),
}));

jest.mock('@splidejs/splide', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    mount: jest.fn(),
  })),
}));

describe('showcase-related', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render showcase without any props', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related></showcase-related>`,
    });

    expect(page.root).toEqualHtml(`
      <showcase-related></showcase-related>
    `);
  });

  it('should render loading state initially', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = true;
    await page.waitForChanges();

    expect(page.root.querySelector('.loading-container')).toBeTruthy();
    expect(page.root.querySelector('.spinner')).toBeTruthy();
  });

  it('should render showcase with products after loading', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    expect(page.root.querySelector('.showcase-related-products')).toBeTruthy();
    expect(page.root.querySelector('.showcase-related-products-title')).toBeTruthy();
    expect(page.root.querySelector('.splide-container')).toBeTruthy();
  });

  it('should render custom showcase title', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related showcase-title="Produtos Relacionados" buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    const title = page.root.querySelector('.showcase-related-products-title');
    expect(title.textContent).toBe('Produtos Relacionados');
  });

  it('should render default showcase title when not provided', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    const title = page.root.querySelector('.showcase-related-products-title');
    expect(title.textContent).toBe('Recomendados para você');
  });

  it('should render custom button label', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related button-label="Adicionar ao Carrinho" buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    const button = page.root.querySelector('.buy-button');
    expect(button.textContent).toBe('Adicionar ao Carrinho');
  });

  it('should render default button label when not provided', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    const button = page.root.querySelector('.buy-button');
    expect(button.textContent).toBe('Comprar');
  });

  it('should parse product ids from buyTogetherProductIds prop', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.parseProductIds();
    expect(page.rootInstance.productIds).toEqual([1, 2, 3]);
  });

  it('should emit clickBuyButton event when buy button is clicked', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    const clickBuyButtonSpy = jest.fn();
    page.root.addEventListener('clickBuyButton', clickBuyButtonSpy);

    const submitEvent = new Event('submit');

    page.rootInstance.onClickBuyButtonEmit(submitEvent, products[0]);

    expect(clickBuyButtonSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: products[0],
      }),
    );
  });

  it('should not render products when there are no products', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = [];
    await page.waitForChanges();

    expect(page.root.querySelector('.showcase-related-products')).toBeFalsy();
  });

  it('should handle show arrows prop', async () => {
    const page = await newSpecPage({
      components: [Showcase],
      html: `<showcase-related show-arrows="false" buy-together-product-ids="[1,2,3]"></showcase-related>`,
    });

    page.rootInstance.loading = false;
    page.rootInstance.products = products;
    await page.waitForChanges();

    const splideElement = page.root.querySelector('#splide') as HTMLElement;
    expect(splideElement.style.padding).toBe('30px 0');
  });
});
