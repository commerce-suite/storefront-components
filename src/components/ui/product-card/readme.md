# product-card



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type               | Default     |
| ---------------- | --------- | ----------- | ------------------ | ----------- |
| `inline`         | `inline`  |             | `boolean`          | `false`     |
| `paymentOptions` | --        |             | `IPaymentOption[]` | `[]`        |
| `product`        | --        |             | `IProductCard`     | `undefined` |


## Dependencies

### Used by

 - [buy-together](../../buy-together)
 - [showcase-related](../../showcase)

### Depends on

- [front-image](../front-image)
- [product-price](../product-price)

### Graph
```mermaid
graph TD;
  product-card --> front-image
  product-card --> product-price
  buy-together --> product-card
  showcase-related --> product-card
  style product-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
