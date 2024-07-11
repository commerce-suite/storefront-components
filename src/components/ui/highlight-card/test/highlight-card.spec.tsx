import { getAssetPath, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { HighlightCard } from '../highlight-card';
import { IHighlightCardItem } from '../highlight-card.type';

describe('highlight-card', () => {
  it('should render highlight-card without any props', async () => {
    const page = await newSpecPage({
      components: [HighlightCard],
      html: `<highlight-card></highlight-card>`,
    });

    expect(page.root).toEqualHtml(`
      <highlight-card>
        <div class="highlight-card"></div>
      </highlight-card>
    `);
  });

  it('should render highlight-card with items', async () => {
    const items: IHighlightCardItem[] = [
      {
        type: 'message',
        title: 'Que bom ver vocês por aqui!',
        content:
          'Estamos animados para compartilhar as melhores ofertas, produtos exclusivos e momentos especiais com vocês. Fiquem ligados e aproveitem ao máximo!',
        highlight: true,
      },
      {
        type: 'product',
        id: 9480063,
        price: 799.0,
        priceBase: 1290,
        image: {
          src: 'https://optimizer.dchomolog.dooca.store/103779/products/013886p1a4.jpeg?v=1695153157',
          alt: null,
        },
        name: 'Tênis Nike Air Force',
        specialPrice: 395.505,
        highlight: true,
      },
      {
        type: 'message',
        title: 'Que bom ver vocês por aqui!',
        content:
          'Estamos animados para compartilhar as melhores ofertas, produtos exclusivos e momentos especiais com vocês. Fiquem ligados e aproveitem ao máximo!',
        highlight: false,
      },
    ];

    const page = await newSpecPage({
      components: [HighlightCard],
      template: () => <highlight-card items={items}></highlight-card>,
    });

    expect(page.root).toEqualHtml(`
      <highlight-card>
        <div class="highlight-card">
          <div class="highlight-card-container">
            <div class="highlight-card-header">
              <span class="highlight-card-header-title">Destaque</span>
            </div>
            <div>
              <div class="highlight-card-item highlight-card-item-highlighted">
                <div class="highlight-card-message">
                  <h4 class="highlight-card-message-title">Que bom ver vocês por aqui!</h4>
                  <p class="highlight-card-message-content">Estamos animados para compartilhar as melhores ofertas, produtos exclusivos e momentos especiais com vocês. Fiquem ligados e aproveitem ao máximo!</p>
                </div>
              </div>
              <div class="highlight-card-separator"></div>
            </div>
            <div>
              <div class="highlight-card-item highlight-card-item-highlighted">
                <div class="highlight-card-product">
                  <product-card class="highlight-custom-style" inline=""></product-card>
                  <div class="highlight-card-product-cart-icon">
                    <img src=${getAssetPath(
                      './assets/icons/add-to-cart.svg',
                    )} alt="add_to_cart_icon">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="highlight-card-item">
            <div class="highlight-card-message">
              <h4 class="highlight-card-message-title">
                Que bom ver vocês por aqui!
              </h4>
              <p class="highlight-card-message-content">
                Estamos animados para compartilhar as melhores ofertas, produtos exclusivos e momentos especiais com vocês. Fiquem ligados e aproveitem ao máximo!
              </p>
            </div>
          </div>
        </div>
      </highlight-card>
    `);
  });
});
