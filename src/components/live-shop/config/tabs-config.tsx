import { h } from '@stencil/core';
import { IHighlightCardItem } from '../../../components';

export const tabs = (
  videoId: string,
  items: IHighlightCardItem[],
  handleAddItem: (event: CustomEvent<IHighlightCardItem>) => void,
) => [
  {
    name: 'products',
    label: (
      <span>
        Produtos
        {items?.filter(item => item.type === 'product').length > 0 ? (
          <span class="product-count">{items?.filter(item => item.type === 'product').length}</span>
        ) : (
          ''
        )}
      </span>
    ),
    content: () => {
      return items?.length > 0 ? (
        <highlight-card items={items} onAddItem={handleAddItem}></highlight-card>
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
