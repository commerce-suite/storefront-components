import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ProductCard } from '../product-card';
import { IProductCard } from '../product-card.type';

describe('product-card', () => {
  const product: IProductCard = {
    image: {
      src: 'https://blog.myahaas.com.br/wp-content/uploads/2021/08/bolsas-que-combinam-com-tudo-como-comprar-900x900.jpg',
    },
    name: 'Bolsa Essencial',
    price: 389.9,
    priceBase: 499.99,
  };

  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductCard],
      template: () => <product-card product={product}></product-card>,
    });
    expect(page.root).toEqualHtml(`
    <product-card>
      <div class="product-container">
        <figure class="image">
          <img alt="Imagem do produto" src="${product.image.src}">
        </figure>
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
        <figure class="-inline image">
          <img alt="Imagem do produto" src="${product.image.src}">
        </figure>
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
        <figure class="-inline image">
          <img alt="Imagem do produto" src="${product.image.src}">
        </figure>
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

  it('renders with variations', async () => {
    const variations = [
      {
        label: 'Cor',
        options: [
          { name: 'branco', value: '12321' },
          { name: 'azul', value: '12321' },
        ],
        currentValue: '12321',
        modelKey: 'color_id',
      },
      {
        label: 'Tamanho',
        options: [
          { name: 'M', value: '789' },
          { name: 'P', value: '456' },
          { name: 'G', value: '123' },
        ],
        currentValue: '456',
        modelKey: 'lenght_id',
      },
    ];
    const productWithVariations: IProductCard = {
      ...product,
      selectVariations: variations,
    };
    const page = await newSpecPage({
      components: [ProductCard],
      template: () => <product-card product={productWithVariations}></product-card>,
    });
    expect(page.root).toEqualHtml(`
    <product-card>
      <div class="product-container">
        <figure class="image">
          <img alt="Imagem do produto" src="${product.image.src}">
        </figure>
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
        <div class="variations">
          <div class="item">
            <front-select label="Cor" value="12321"></front-select>
          </div>
          <div class="item">
            <front-select label="Tamanho" value="456"></front-select>
          </div>
        </div>
      </div>
     </product-card>
    `);
  });
});
