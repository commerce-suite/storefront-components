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
- [live-video-player](../ui/live-video-player)
- [tab-selector](../ui/tab-selector)
- [live-video-chat](../ui/live-video-chat)
- [highlight-card](../ui/highlight-card)

### Graph
```mermaid
graph TD;
  live-shop --> custom-card
  live-shop --> live-video-player
  live-shop --> tab-selector
  live-shop --> live-video-chat
  live-shop --> highlight-card
  highlight-card --> product-card
  product-card --> front-image
  style live-shop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
