# mini-player



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default               |
| ------------ | ------------- | ----------- | --------- | --------------------- |
| `autoPlay`   | `auto-play`   |             | `boolean` | `false`               |
| `buttonText` | `button-text` |             | `string`  | `'Return'`            |
| `mainTitle`  | `main-title`  |             | `string`  | `'Mini Player Title'` |
| `videoId`    | `video-id`    |             | `string`  | `undefined`           |


## Events

| Event                        | Description | Type                |
| ---------------------------- | ----------- | ------------------- |
| `componentRendered`          |             | `CustomEvent<void>` |
| `on-click-miniplayer-button` |             | `CustomEvent<void>` |


## Dependencies

### Depends on

- [front-icon](../front-icon)
- [live-video-player](../live-video-player)

### Graph
```mermaid
graph TD;
  mini-player --> front-icon
  mini-player --> live-video-player
  style mini-player fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
