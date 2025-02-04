# product-card

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute      | Description | Type              | Default     |
| ---------------- | -------------- | ----------- | ----------------- | ----------- |
| `basePrice`      | --             |             | `BasePrice`       | `undefined` |
| `customClass`    | `custom-class` |             | `string`          | `''`        |
| `inline`         | `inline`       |             | `boolean`         | `false`     |
| `paymentOptions` | --             |             | `PaymentOption[]` | `[]`        |
| `product`        | --             |             | `IProductCard`    | `undefined` |


## Dependencies

### Used by

 - [buy-together](../../buy-together)
 - [highlight-card](../highlight-card)
 - [showcase-related](../../showcase)

### Depends on

- [front-image](../front-image)
- [product-price](../product-price)

### Graph
```mermaid
graph TD;
  product-card --> front-image
  product-card --> product-price
  product-price --> product-price-simple
  product-price --> product-price-billet
  product-price --> product-price-credit-card
  product-price --> product-price-pix
  buy-together --> product-card
  highlight-card --> product-card
  showcase-related --> product-card
  style product-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
