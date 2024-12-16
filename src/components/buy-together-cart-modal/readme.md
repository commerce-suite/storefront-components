# buy-together-cart-modal



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type     | Default     |
| ---------------- | ----------------- | ----------- | -------- | ----------- |
| `buyButtonText`  | `buy-button-text` |             | `string` | `undefined` |
| `containerTitle` | `container-title` |             | `string` | `undefined` |
| `productId`      | `product-id`      |             | `number` | `undefined` |
| `promotionTitle` | `promotion-title` |             | `string` | `undefined` |
| `variationId`    | `variation-id`    |             | `number` | `undefined` |


## Events

| Event                    | Description | Type                |
| ------------------------ | ----------- | ------------------- |
| `componentRendered`      |             | `CustomEvent<void>` |
| `on-continue-buy-button` |             | `CustomEvent<void>` |
| `on-finish-buy-button`   |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [buy-together](../buy-together)

### Graph
```mermaid
graph TD;
  buy-together-cart-modal --> buy-together
  buy-together --> product-card
  buy-together --> variation-selector
  product-card --> front-image
  product-card --> product-card-price
  variation-selector --> front-select
  style buy-together-cart-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
