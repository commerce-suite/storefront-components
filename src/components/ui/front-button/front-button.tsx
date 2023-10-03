import { Component, Host, Prop, h } from '@stencil/core';
import { getClassByProps } from '../../../utils/utils';

@Component({
  tag: 'front-button',
  styleUrl: 'front-button.scss',
  shadow: false,
  scoped: true,
})
export class FrontButton {
  @Prop({ mutable: true }) disabled: boolean;

  private generateClassByProps() {
    const classByProps = {
      '-disabled': this.disabled,
    };
    return getClassByProps(classByProps);
  }

  render() {
    return (
      <Host>
        <button class={`front-button-container ${this.generateClassByProps()}`}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
