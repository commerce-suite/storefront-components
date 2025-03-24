import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'front-icon',
  styleUrl: 'front-icon.css',
  shadow: false,
})
export class FrontIcon {
  @Prop() name: string = 'home';
  @Prop() size?: string = '24px';
  @Prop() color: string = '#000';

  render() {
    return (
      <span class="material-icons" style={{ color: this.color, fontSize: this.size }}>
        {this.name}
      </span>
    );
  }
}
