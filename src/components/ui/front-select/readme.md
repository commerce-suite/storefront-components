# front-select



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                   | Default                                                  |
| ------------- | ------------- | ----------- | ---------------------- | -------------------------------------------------------- |
| `emptyOption` | --            |             | `IFrontSelectOption`   | `{ name: 'Nenhum opção selecionada', value: undefined }` |
| `label`       | `label`       |             | `string`               | `undefined`                                              |
| `optionsList` | --            |             | `IFrontSelectOption[]` | `undefined`                                              |
| `selectId`    | `select-id`   |             | `string`               | `''`                                                     |
| `selectName`  | `select-name` |             | `string`               | `''`                                                     |
| `value`       | `value`       |             | `any`                  | `undefined`                                              |


## Dependencies

### Used by

 - [product-card](../product-card)

### Depends on

- [front-label](../front-label)

### Graph
```mermaid
graph TD;
  front-select --> front-label
  product-card --> front-select
  style front-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
