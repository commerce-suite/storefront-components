import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ProductCard } from '../product-card';
import { IProductCard } from '../product-card.type';
import { product } from '../mocks/product-card.mock';

describe('product-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductCard],
      template: () => <product-card product={product}></product-card>,
    });
    expect(page.root).toEqualHtml(`
    <product-card>
      <div class="product-container">
        <front-image class="image" imagesrc="${product.image.src}" textalt="Imagem do produto"></front-image>
        <div class="info">
          <span class="title">
            Bolsa Essencial
          </span>
          <div class="price">
            <span class="base">
              R$&nbsp;499,99
            </span>
            <span class="current">
              R$&nbsp;389,90
            </span>
          </div>
        </div>
      </div>
     </product-card>
    `);
  });

  it('renders with inline', async () => {
    const page = await newSpecPage({
      components: [ProductCard],
      template: () => <product-card inline product={product}></product-card>,
    });
    expect(page.root).toEqualHtml(`
    <product-card>
      <div class="-inline  product-container">
        <front-image class="-inline image" imagesrc="${product.image.src}" textalt="Imagem do produto"></front-image>
        <div class="info">
          <span class="title">
            Bolsa Essencial
          </span>
          <div class="price">
            <span class="base">
              R$&nbsp;499,99
            </span>
            <span class="current">
              R$&nbsp;389,90
            </span>
          </div>
        </div>
      </div>
     </product-card>
    `);
  });

  it('renders without priceBase', async () => {
    const productWithoutPriceBase: IProductCard = { ...product, priceBase: null };
    const page = await newSpecPage({
      components: [ProductCard],
      template: () => <product-card inline product={productWithoutPriceBase}></product-card>,
    });
    expect(page.root).toEqualHtml(`
    <product-card>
      <div class="-inline  product-container">
        <front-image class="-inline image" imagesrc="${product.image.src}" textalt="Imagem do produto"></front-image>
        <div class="info">
          <span class="title">
            Bolsa Essencial
          </span>
          <div class="price">
            <span class="current">
              R$&nbsp;389,90
            </span>
          </div>
        </div>
      </div>
     </product-card>
    `);
  });
});
