# live-shop



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type     | Default    |
| ---------- | ----------- | ----------- | -------- | ---------- |
| `hashRoom` | `hash-room` |             | `string` | `'abc123'` |


## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `componentRendered` |             | `CustomEvent<void>` |
| `on-return-to-home` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [custom-card](../ui/custom-card)
- [live-shop-mobile](snippets)
- [live-shop-desktop](snippets)

### Graph
```mermaid
graph TD;
  live-shop --> custom-card
  live-shop --> live-shop-mobile
  live-shop --> live-shop-desktop
  live-shop-mobile --> live-video-player
  live-shop-mobile --> custom-card
  live-shop-mobile --> tab-selector
  live-shop-mobile --> highlight-card
  live-shop-mobile --> live-video-chat
  highlight-card --> product-card
  product-card --> front-image
  live-shop-desktop --> live-video-player
  live-shop-desktop --> live-video-chat
  live-shop-desktop --> highlight-card
  live-shop-desktop --> custom-card
  style live-shop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
