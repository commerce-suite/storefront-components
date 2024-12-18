# showcase-teste



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                  | Description | Type      | Default     |
| ----------------------- | -------------------------- | ----------- | --------- | ----------- |
| `buttonLabel`           | `button-label`             |             | `string`  | `undefined` |
| `buyTogetherProductIds` | `buy-together-product-ids` |             | `string`  | `undefined` |
| `productsPerPage`       | `products-per-page`        |             | `number`  | `undefined` |
| `showArrows`            | `show-arrows`              |             | `boolean` | `true`      |
| `showcaseTitle`         | `showcase-title`           |             | `string`  | `undefined` |


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
  product-card --> product-price
  product-price --> product-price-simple
  product-price --> product-price-billet
  product-price --> product-price-credit-card
  product-price --> product-price-pix
  style showcase-related fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
