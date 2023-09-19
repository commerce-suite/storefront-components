import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { ProductService } from '@uxshop/storefront-core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  @Prop() product: any;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private async getProduct() {
    this.product = await ProductService.getById('2915659');
  }

  componentWillLoad() {
    this.getProduct();
  }

  render() {
    if (this.product)
      return (
        <div>
          <div>Hello, World! I'm {this.getText()}</div>
          <h2>
            {this.product.name} - R${this.product.price}
          </h2>
          {this.product.description}
        </div>
      );
  }
}
