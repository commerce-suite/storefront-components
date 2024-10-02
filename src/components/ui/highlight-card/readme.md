# highlight-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                   | Default |
| -------- | --------- | ----------- | ---------------------- | ------- |
| `items`  | --        |             | `IHighlightCardItem[]` | `[]`    |


## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `componentRendered` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [live-shop-desktop](../../live-shop/snippets)
 - [live-shop-mobile](../../live-shop/snippets)

### Depends on

- [product-card](../product-card)

### Graph
```mermaid
graph TD;
  highlight-card --> product-card
  product-card --> front-image
  live-shop-desktop --> highlight-card
  live-shop-mobile --> highlight-card
  style highlight-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
