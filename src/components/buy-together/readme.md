# buy-together



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `buyButtonText`  | `buy-button-text` |             | `string`  | `undefined` |
| `productId`      | `product-id`      |             | `number`  | `undefined` |
| `promotionTitle` | `promotion-title` |             | `string`  | `undefined` |
| `showcaseMode`   | `showcase-mode`   |             | `boolean` | `undefined` |
| `variationId`    | `variation-id`    |             | `number`  | `undefined` |


## Events

| Event                      | Description | Type                                                                                     |
| -------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| `loadBuyTogehter`          |             | `CustomEvent<{ status: EnumBuyTogetherOnLoadStatus; data: IBuyTogetherComponentData; }>` |
| `on-buy-together-add-cart` |             | `CustomEvent<{ showcaseMode: boolean; productsAdded: IProductCard[]; }>`                 |


## Methods

### `getBuyTogetherData() => Promise<IBuyTogetherComponentData>`



#### Returns

Type: `Promise<IBuyTogetherComponentData>`




## Dependencies

### Used by

 - [buy-together-cart-modal](../buy-together-cart-modal)

### Depends on

- [product-card](../ui/product-card)
- [variation-selector](../ui/variation-selector)

### Graph
```mermaid
graph TD;
  buy-together --> product-card
  buy-together --> variation-selector
  product-card --> front-image
  product-card --> product-price
  variation-selector --> front-select
  buy-together-cart-modal --> buy-together
  style buy-together fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
