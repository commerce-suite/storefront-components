# product-price



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type              | Default     |
| ---------------- | --------- | ----------- | ----------------- | ----------- |
| `basePrice`      | --        |             | `BasePrice`       | `undefined` |
| `paymentOptions` | --        |             | `PaymentOption[]` | `undefined` |


## Dependencies

### Used by

 - [product-card](../product-card)

### Depends on

- [product-price-simple](./snippets/simple)
- [product-price-billet](./snippets/billet)
- [product-price-credit-card](./snippets/credit-card)
- [product-price-pix](./snippets/pix)

### Graph
```mermaid
graph TD;
  product-price --> product-price-simple
  product-price --> product-price-billet
  product-price --> product-price-credit-card
  product-price --> product-price-pix
  product-card --> product-price
  style product-price fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
