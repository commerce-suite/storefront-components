import { Component, Host, Prop, h } from '@stencil/core';
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
  @Prop() emptyOption: IFrontSelectOption = { name: 'Nenhum opção selecionada', value: undefined };
  @Prop() selectId: string = '';
  @Prop() selectName: string = '';
  @Prop() label: string;

  render() {
    return (
      <Host>
        {this.label && <front-label label={this.label} elementFor={this.selectId} />}
        <div class="front-select-container">
          <select name={this.selectName} id={this.selectId}>
            <option value={this.emptyOption.value} selected={this.value === this.emptyOption.value}>
              {this.emptyOption.name}
            </option>
            {this.optionsList.map(({ name, value }) => (
              <option value={value} selected={this.value === value}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </Host>
    );
  }
}
