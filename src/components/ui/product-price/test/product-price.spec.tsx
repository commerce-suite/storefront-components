import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ProductPrice } from '../product-price';

describe('product-card', () => {
  it('should render without payment options', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => (
        <product-price basePrice={{ price: 999.99, priceCompare: 1299.99 }}></product-price>
      ),
    });
    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container">
          <product-price-simple price="999.99" pricecompare="1299.99"></product-price-simple>
        </div>
      </product-price>
    `);
  });

  it('should render with options', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => (
        <product-price
          paymentOptions={[
            {
              type: 'creditCard',
              price: 999.99,
              priceCompare: 1199.99,
              parcels: 10,
              parcelPrice: 99.99,
              hasInterest: false,
            },
            { type: 'billet', price: 999.99 },
            { type: 'pix', price: 999.99 },
          ]}
        />
      ),
    });

    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container">
          <product-price-credit-card parcelprice="99.99" parcels="10" price="999.99" pricecompare="1199.99"></product-price-credit-card>
          <product-price-billet price="999.99"></product-price-billet>
          <product-price-pix price="999.99"></product-price-pix>
        </div>
      </product-price>
      `);
  });

  it('should render with only pix', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => (
        <product-price paymentOptions={[{ type: 'pix', price: 999.99, priceCompare: 1199.99 }]} />
      ),
    });

    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container">
          <product-price-pix price="999.99" pricecompare="1199.99"></product-price-pix>
        </div>
      </product-price>
    `);
  });

  it('should render with only billet', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => (
        <product-price
          paymentOptions={[{ type: 'billet', price: 999.99, priceCompare: 1199.99 }]}
        />
      ),
    });

    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container">
          <product-price-billet price="999.99" pricecompare="1199.99"></product-price-billet>
        </div>
      </product-price>
    `);
  });

  it('should render with only simple', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => (
        <product-price
          paymentOptions={[{ type: 'simple', price: 999.99, priceCompare: 1199.99 }]}
        />
      ),
    });

    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container">
          <product-price-simple price="999.99" pricecompare="1199.99"></product-price-simple>
        </div>
      </product-price>
    `);
  });

  it('should render with only creditCard', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => (
        <product-price
          paymentOptions={[
            {
              type: 'creditCard',
              price: 999.99,
              priceCompare: 1199.99,
              parcels: 10,
              parcelPrice: 99.99,
              hasInterest: false,
            },
          ]}
        />
      ),
    });

    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container">
          <product-price-credit-card parcelprice="99.99" parcels="10" price="999.99" pricecompare="1199.99"></product-price-credit-card>
        </div>
      </product-price>
    `);
  });
});
