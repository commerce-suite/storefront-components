# showcase-teste



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                  | Description | Type     | Default     |
| ----------------------- | -------------------------- | ----------- | -------- | ----------- |
| `buyTogetherProductIds` | `buy-together-product-ids` |             | `string` | `undefined` |
| `productsPerPage`       | `products-per-page`        |             | `number` | `3`         |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `clickBuyButton` |             | `CustomEvent<any>` |


## Methods

### `load() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [product-card](../ui/product-card)

### Graph
```mermaid
graph TD;
  showcase-related --> product-card
  product-card --> front-image
  style showcase-related fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
