# product-card



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type           | Default     |
| --------- | --------- | ----------- | -------------- | ----------- |
| `inline`  | `inline`  |             | `boolean`      | `false`     |
| `product` | --        |             | `IProductCard` | `undefined` |


## Dependencies

### Used by

 - [buy-together](../../buy-together)
 - [highlight-card](../highlight-card)
 - [showcase-related](../../showcase)

### Depends on

- [front-image](../front-image)

### Graph
```mermaid
graph TD;
  product-card --> front-image
  buy-together --> product-card
  highlight-card --> product-card
  showcase-related --> product-card
  style product-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
