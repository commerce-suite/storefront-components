import { h } from '@stencil/core';

export const tabs = () => [
  {
    name: 'products',
    label: 'Products',
    content: () => (
      <div>
        <h1>Products</h1>
        <p>Products content</p>
      </div>
    ),
  },
  {
    name: 'chat',
    label: 'Chat',
    content: () => (
      <div>
        <h1>Chat</h1>
        <p>Chat content</p>
      </div>
    ),
  },
];
