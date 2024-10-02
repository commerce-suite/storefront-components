# live-video-player

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute   | Description | Type      | Default     |
| ---------- | ----------- | ----------- | --------- | ----------- |
| `autoPlay` | `auto-play` |             | `boolean` | `false`     |
| `videoId`  | `video-id`  |             | `string`  | `undefined` |

## Events

| Event               | Description | Type                |
| ------------------- | ----------- | ------------------- |
| `componentRendered` |             | `CustomEvent<void>` |

## Dependencies

### Used by

- [live-shop-desktop](../../live-shop/snippets)
- [live-shop-mobile](../../live-shop/snippets)
- [mini-player](../mini-player)

### Graph

```mermaid
graph TD;
  live-shop-desktop --> live-video-player
  live-shop-mobile --> live-video-player
  mini-player --> live-video-player
  style live-video-player fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
