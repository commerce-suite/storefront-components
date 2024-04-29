# buy-together



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description | Type      | Default     |
| -------------------- | ---------------------- | ----------- | --------- | ----------- |
| `productId`          | `product-id`           |             | `number`  | `undefined` |
| `showcaseMode`       | `showcase-mode`        |             | `boolean` | `undefined` |
| `simpleShowcaseMode` | `simple-showcase-mode` |             | `boolean` | `undefined` |
| `variationId`        | `variation-id`         |             | `number`  | `undefined` |


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
- [variation-selector](../ui/variation-selector)
- [showcase-related](../showcase)

### Graph
```mermaid
graph TD;
  buy-together --> product-card
  buy-together --> variation-selector
  buy-together --> showcase-related
  product-card --> front-image
  variation-selector --> front-select
  showcase-related --> product-card
  style buy-together fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
