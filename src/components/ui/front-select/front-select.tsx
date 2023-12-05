import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';
import { IFrontSelectOption } from './front-select.type';

@Component({
  tag: 'front-select',
  styleUrl: 'front-select.scss',
  scoped: true,
  shadow: false,
})
export class FrontSelect {
  @Prop() optionsList: IFrontSelectOption[];
  @Prop() value: any;
  @Prop() placeholder: IFrontSelectOption = { name: 'Selecione', value: undefined };
  @Prop() selectId: string = '';
  @Prop() selectName: string = '';
  @Prop() label: string;

  componentWillLoad() {
    document.documentElement.style.setProperty(
      '--arrow-up-image-src',
      `url(${getAssetPath('./assets/images/arrow-up.png')})`,
    );
  }

  render() {
    return (
      <Host>
        {this.label && (
          <label class="select-label" htmlFor={this.selectId}>
            {this.label}
          </label>
        )}
        <div class="front-select-container">
          <select name={this.selectName} id={this.selectId}>
            <option
              disabled={this.placeholder.disabled}
              value={this.placeholder.value}
              selected={this.value === this.placeholder.value}
            >
              {this.placeholder.name}
            </option>
            {this.optionsList?.map(({ name, value, disabled }) => (
              <option value={value} selected={this.value === value} disabled={disabled}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </Host>
    );
  }
}
