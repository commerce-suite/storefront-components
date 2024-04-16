import { Component, Event, Prop, h, EventEmitter } from '@stencil/core';
import {
  IInputSelectDataEvent,
  ISelectVariation,
  SelectAttributesType,
} from '../product-card/product-card.type';

@Component({
  tag: 'variation-selector',
  styleUrl: 'variation-selector.scss',
  shadow: false,
  scoped: true,
})
export class VariationSelector {
  @Prop() variations: ISelectVariation[];
  @Prop() productId: number;
  @Prop() showcaseMode: boolean;
  @Event() inputSelect: EventEmitter<IInputSelectDataEvent>;

  private onInputSelect(data: any, eventSelectType: SelectAttributesType) {
    this.inputSelect.emit({
      eventSelectType,
      value: data.target.value,
      productId: this.productId,
    });
  }

  render() {
    return (
      <div class={`variations ${this.showcaseMode ? '-showcase' : ''}`}>
        {this.variations.map(
          ({ label, currentValue, options, selectId, placeholder, selectType }) => (
            <div class="item">
              <front-select
                placeholder={placeholder}
                selectId={selectId}
                optionsList={options}
                label={label}
                value={currentValue}
                onInput={data => this.onInputSelect(data, selectType)}
              ></front-select>
            </div>
          ),
        )}
      </div>
    );
  }
}
