# highlight-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                   | Default |
| -------- | --------- | ----------- | ---------------------- | ------- |
| `items`  | --        |             | `IHighlightCardItem[]` | `[]`    |


## Events

| Event               | Description | Type                                        |
| ------------------- | ----------- | ------------------------------------------- |
| `addItem`           |             | `CustomEvent<IMessageItem \| IProductItem>` |
| `componentRendered` |             | `CustomEvent<void>`                         |


## Dependencies

### Used by

 - [live-shop-desktop](../../live-shop/snippets)
 - [live-shop-mobile](../../live-shop/snippets)

### Depends on

- [product-card](../product-card)
- [color-selector](../color-selector)

### Graph
```mermaid
graph TD;
  highlight-card --> product-card
  highlight-card --> color-selector
  product-card --> front-image
  product-card --> product-price
  product-price --> product-price-simple
  product-price --> product-price-billet
  product-price --> product-price-credit-card
  product-price --> product-price-pix
  live-shop-desktop --> highlight-card
  live-shop-mobile --> highlight-card
  style highlight-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
