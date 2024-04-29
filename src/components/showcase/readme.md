# showcase-teste



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type             | Default     |
| ----------------- | ------------------- | ----------- | ---------------- | ----------- |
| `products`        | --                  |             | `IProductCard[]` | `undefined` |
| `productsPerPage` | `products-per-page` |             | `number`         | `3`         |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `clickBuyButton` |             | `CustomEvent<any>` |


## Methods

### `onClickBuyButtonEmit(event: any, product: IProductCard) => Promise<void>`



#### Parameters

| Name      | Type           | Description |
| --------- | -------------- | ----------- |
| `event`   | `any`          |             |
| `product` | `IProductCard` |             |

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [buy-together](../buy-together)

### Depends on

- [product-card](../ui/product-card)

### Graph
```mermaid
graph TD;
  showcase-related --> product-card
  product-card --> front-image
  buy-together --> showcase-related
  style showcase-related fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
