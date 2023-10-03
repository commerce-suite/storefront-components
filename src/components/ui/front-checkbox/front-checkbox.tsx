import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'front-checkbox',
  styleUrl: 'front-checkbox.scss',
  shadow: false,
  scoped: true,
})
export class FrontCheckbox {
  @Prop() inputId: string;
  @Prop() inputName: string;
  @Prop() checked: boolean;
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <label class="front-checkbox-container" htmlFor={this.inputId}>
          <input
            disabled={this.disabled}
            type="checkbox"
            id={this.inputId}
            name={this.inputName}
            checked={this.checked}
          />
          <span>
            <slot></slot>
          </span>
        </label>
      </Host>
    );
  }
}
