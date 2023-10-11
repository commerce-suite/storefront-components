# product-card



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type           | Default     |
| --------- | --------- | ----------- | -------------- | ----------- |
| `inline`  | `inline`  |             | `boolean`      | `false`     |
| `product` | --        |             | `IProductCard` | `undefined` |


## Events

| Event         | Description | Type                                 |
| ------------- | ----------- | ------------------------------------ |
| `inputSelect` |             | `CustomEvent<IInputSelectDataEvent>` |


## Dependencies

### Used by

 - [buy-together](../../buy-together)

### Depends on

- [front-image](../front-image)
- [front-select](../front-select)

### Graph
```mermaid
graph TD;
  product-card --> front-image
  product-card --> front-select
  buy-together --> product-card
  style product-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
