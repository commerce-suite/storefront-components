# live-shop-mobile



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute  | Description | Type                   | Default     |
| -------------- | ---------- | ----------- | ---------------------- | ----------- |
| `items`        | --         |             | `IHighlightCardItem[]` | `undefined` |
| `liveShopData` | --         |             | `ILiveShop`            | `undefined` |
| `videoId`      | `video-id` |             | `string`               | `undefined` |


## Events

| Event          | Description | Type                                                                  |
| -------------- | ----------- | --------------------------------------------------------------------- |
| `on-click-add` |             | `CustomEvent<{ item: IHighlightCardItem; liveShopData: ILiveShop; }>` |


## Dependencies

### Used by

 - [live-shop](..)

### Depends on

- [live-video-player](../../ui/live-video-player)
- [custom-card](../../ui/custom-card)
- [tab-selector](../../ui/tab-selector)
- [highlight-card](../../ui/highlight-card)
- [live-video-chat](../../ui/live-video-chat)

### Graph
```mermaid
graph TD;
  live-shop-mobile --> live-video-player
  live-shop-mobile --> custom-card
  live-shop-mobile --> tab-selector
  live-shop-mobile --> highlight-card
  live-shop-mobile --> live-video-chat
  highlight-card --> product-card
  product-card --> front-image
  live-shop --> live-shop-mobile
  style live-shop-mobile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
