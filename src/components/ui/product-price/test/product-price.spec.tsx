import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ProductPrice } from '../product-price';

describe('product-card', () => {
  it('should render without options', async () => {
    const page = await newSpecPage({
      components: [ProductPrice],
      template: () => <product-price></product-price>,
    });
    expect(page.root).toEqualHtml(`
      <product-price>
        <div class="product-price-container"></div>
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
          <div class="payment-option payment-option-creditCard">
            <span class="price-compare">
              R$&nbsp;1.199,99
            </span>
            <span class="price-current">
              R$&nbsp;999,99
              <span class="credit-info">
                em até
                <span class="highlight">
                  10x
                </span>
                de
                <span class="highlight">
                  R$&nbsp;99,99
                </span>
                sem juros
              </span>
            </span>
          </div>
          <div class="payment-option payment-option-billet">
            <span class="price-current">
              <span class="highlight">
                R$&nbsp;999,99
              </span>
              no boleto
            </span>
          </div>
          <div class="payment-option payment-option-pix">
            <span class="price-current">
              <span class="highlight">
                R$&nbsp;999,99
              </span>
              no pix
            </span>
          </div>
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
          <div class="payment-option payment-option-pix">
            <span class="price-compare">
              R$&nbsp;1.199,99
            </span>
            <span class="price-current">
              <span class="highlight">
                R$&nbsp;999,99
              </span>
              no pix
            </span>
          </div>
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
          <div class="payment-option payment-option-billet">
            <span class="price-compare">
              R$&nbsp;1.199,99
            </span>
            <span class="price-current">
              <span class="highlight">
                R$&nbsp;999,99
              </span>
              no boleto
            </span>
          </div>
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
          <div class="payment-option payment-option-simple">
            <span class="price-compare">
              R$&nbsp;1.199,99
            </span>
            <span class="price-current">
              <span class="highlight">
                R$&nbsp;999,99
              </span>
            </span>
          </div>
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
          <div class="payment-option payment-option-creditCard">
            <span class="price-compare">
              R$&nbsp;1.199,99
            </span>
            <span class="price-current">
              R$&nbsp;999,99
              <span class="credit-info">
                em até
                <span class="highlight">
                  10x
                </span>
                de
                <span class="highlight">
                  R$&nbsp;99,99
                </span>
                sem juros
              </span>
            </span>
          </div>
        </div>
      </product-price>
    `);
  });
});
