import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import { IColor } from '../product-card/product-card.type';

@Component({
  tag: 'color-selector',
  styleUrl: 'color-selector.scss',
  shadow: false,
})
export class ColorSelector {
  @Prop() colors: IColor[] = [];
  @Prop() selectedId?: number;

  @Event() colorSelected: EventEmitter<IColor>;

  private onSelectColor(color: IColor) {
    this.colorSelected.emit(color);
  }

  private getColorStyle(color: IColor) {
    return color.image
      ? {
          backgroundImage: `url(${color.image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {
          backgroundColor: color.hexadecimal,
        };
  }

  render() {
    return (
      <Host>
        <div class="color-selector">
          {this.colors.map(color => (
            <button
              key={color.id}
              class={{
                'color-option': true,
                'active': this.selectedId === color.id,
              }}
              onClick={() => this.onSelectColor(color)}
              aria-label={color.name}
              title={color.name}
            >
              <span class="color-dot" style={this.getColorStyle(color)}></span>
            </button>
          ))}
        </div>
      </Host>
    );
  }
}
