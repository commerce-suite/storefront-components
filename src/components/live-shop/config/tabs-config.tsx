import { h } from '@stencil/core';
import { IHighlightCardItem } from '../../../components';

export const tabs = (videoId: string, items: IHighlightCardItem[]) => [
  {
    name: 'products',
    label: (
      <span>
        Produtos <span class="product-count">{items.length}</span>
      </span>
    ),
    content: () => <highlight-card items={items}></highlight-card>,
  },
  {
    name: 'chat',
    label: 'Chat',
    content: () => <live-video-chat videoId={videoId} />,
  },
];
