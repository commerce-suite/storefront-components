import { Component, Host, Prop, h, Watch, State, Event, EventEmitter } from '@stencil/core';
import { LaunchCountdownService } from './launch-countdown.service';

@Component({
  tag: 'launch-countdown',
  styleUrl: 'launch-countdown.scss',
  shadow: false,
  scoped: false,
})
export class LaunchCountdown {
  @Prop({ mutable: true }) productId: string;
  @Prop({ mutable: true }) variationId: string;
  @Prop() dataTargetDate: string;
  @Prop() dataInitialDate: string;
  @Prop() dataCountdownTitle = 'Agora falta muito pouco!';
  @Prop() dataDescription = 'O produto que você tanto espera será liberado em breve.';

  @State() dateTime: { startDate: string; endDate: string } = { endDate: null, startDate: null };
  @State() hasDateConfigured = false;

  @Event() countdownLoaded: EventEmitter<{ releaseDateActive: boolean }>;

  private setDateTimeByProps() {
    this.dateTime = {
      startDate: this.dataInitialDate,
      endDate: this.dataTargetDate,
    };
  }

  private async loadCountDown() {
    const productReleaseDate = await LaunchCountdownService.getReleaseDateByProduct(
      this.productId,
      this.variationId,
    );
    if (!productReleaseDate) {
      this.countdownLoaded.emit({ releaseDateActive: false });
      this.setDateTimeByProps();
      return;
    }
    const { now, releaseDate } = productReleaseDate;
    const releaseDateActive = Number(now) < Number(releaseDate);
    this.countdownLoaded.emit({ releaseDateActive });
    this.hasDateConfigured = releaseDateActive;
    this.dateTime = {
      startDate: now,
      endDate: releaseDate,
    };
  }

  componentWillLoad() {
    this.loadCountDown();
  }

  @Watch('variationId')
  watchVariationIdChange() {
    this.loadCountDown();
  }

  @Watch('productId')
  watchProductIdChange() {
    this.loadCountDown();
  }

  render() {
    if (!this.hasDateConfigured) return null;
    return (
      <Host>
        <div class="launch-countdown-container">
          <div class="launch-countdown-container-header">
            <h3 class="launch-countdown-container-title">{this.dataCountdownTitle}</h3>
            <p class="launch-countdown-container-description">{this.dataDescription}</p>
          </div>
          <front-countdown
            start-date={this.dateTime.startDate}
            end-date={this.dateTime.endDate}
          ></front-countdown>
        </div>
      </Host>
    );
  }
}
