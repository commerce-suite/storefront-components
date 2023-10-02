import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'front-label',
  styleUrl: 'front-label.scss',
  shadow: false,
  scoped: true,
})
export class FrontLabel {
  @Prop() label: string;
  @Prop() elementFor: string;
  render() {
    return (
      <Host>
        <label htmlFor={this.elementFor}>{this.label}</label>
      </Host>
    );
  }
}
