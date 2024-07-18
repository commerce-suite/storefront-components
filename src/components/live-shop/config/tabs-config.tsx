import { h } from '@stencil/core';
import { IHighlightCardItem } from '../../../components';

export const tabs = (videoId: string, items: IHighlightCardItem[]) => [
  {
    name: 'products',
    label: (
      <span>
        Produtos {items?.length > 0 ? <span class="product-count">{items?.length}</span> : ''}
      </span>
    ),
    content: () => {
      return items?.length > 0 ? (
        <highlight-card items={items}></highlight-card>
      ) : (
        <custom-card
          customClass="in-live-custom-style-empty"
          cardTitle="produtos a caminho..."
          cardDescription="Em breve, teremos algo especial para você!"
        />
      );
    },
  },
  {
    name: 'chat',
    label: 'Chat',
    content: () => <live-video-chat videoId={videoId} />,
  },
];
