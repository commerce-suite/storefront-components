# buy-together



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type      | Default     |
| -------------- | --------------- | ----------- | --------- | ----------- |
| `productId`    | `product-id`    |             | `number`  | `undefined` |
| `showcaseMode` | `showcase-mode` |             | `boolean` | `undefined` |
| `variationId`  | `variation-id`  |             | `number`  | `undefined` |


## Events

| Event                      | Description | Type                                                                                     |
| -------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `loadBuyTogehter`          |             | `CustomEvent<{ status: EnumBuyTogetherOnLoadStatus; data: IBuyTogetherComponentData; }>` |
| `on-buy-together-add-cart` |             | `CustomEvent<IProductCard[]>`                                                            |


## Methods

### `getBuyTogetherData() => Promise<IBuyTogetherComponentData>`



#### Returns

Type: `Promise<IBuyTogetherComponentData>`




## Dependencies

### Depends on

- [product-card](../ui/product-card)

### Graph
```mermaid
graph TD;
  buy-together --> product-card
  product-card --> front-image
  product-card --> front-select
  style buy-together fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
