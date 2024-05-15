import { Component, Host, Prop, State, Watch, getAssetPath, h } from '@stencil/core';
import { getClassByProps } from '../../../utils/utils';

@Component({
  tag: 'front-image',
  styleUrl: 'front-image.scss',
  scoped: false,
  shadow: false,
})
export class FrontImage {
  @Prop({ mutable: true }) imageSrc: string;
  @Prop({ mutable: true }) textAlt: string;
  @Prop({ mutable: true }) figCaption: string;

  @State() isSrcLoading = true;

  private getImageClassByProps() {
    const classProps = {
      '-is-loading': this.isSrcLoading,
    };
    return `image-container ${getClassByProps(classProps)}`;
  }

  private onSrcLoadError() {
    this.imageSrc = getAssetPath('./assets/images/image-fallback.png');
    setTimeout(() => {
      this.isSrcLoading = false;
    }, 500);
  }

  private onSrcLoadFinish() {
    setTimeout(() => {
      this.isSrcLoading = false;
    }, 500);
  }

  @Watch('imageSrc')
  changeImageSrc() {
    this.isSrcLoading = true;
  }

  render() {
    return (
      <Host>
        <figure class={this.getImageClassByProps()}>
          <img
            src={this.imageSrc}
            alt={this.textAlt || 'Imagem'}
            onLoad={() => this.onSrcLoadFinish()}
          />
          {!!this.figCaption && <figcaption>{this.figCaption}</figcaption>}
        </figure>
      </Host>
    );
  }
}
