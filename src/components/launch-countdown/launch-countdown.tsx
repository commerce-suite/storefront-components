import { Component, Host, Prop, h, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'launch-countdown',
  styleUrl: 'launch-countdown.scss',
  shadow: false,
  scoped: false,
})
export class LaunchCountdown {
  @Prop({ mutable: true }) dataTargetDate: string;
  @Prop({ mutable: true }) dataInitialDate: string;
  @Prop({ mutable: true }) productId: string;
  @Prop({ mutable: true }) variationId: number;
  @Prop() dataCountdownTitle = 'Agora falta muito pouco!';
  @Prop() dataDescription = 'O produto que você tanto espera será liberado em breve.';

  @Event() countdownFinished: EventEmitter;

  componentWillLoad() {}

  @Watch('variationId')
  watchVariationIdChange() {}

  @Watch('productId')
  watchProductIdChange() {}

  render() {
    return (
      <Host>
        <div class="launch-countdown-container">
          <div class="launch-countdown-container-header">
            <h3 class="launch-countdown-container-title">{this.dataCountdownTitle}</h3>
            <p class="launch-countdown-container-description">{this.dataDescription}</p>
          </div>
          <front-countdown
            start-date={this.dataInitialDate}
            end-date={this.dataTargetDate}
          ></front-countdown>
        </div>
      </Host>
    );
  }
}
