import {
  Component,
  ComponentWillLoad,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { FrontCountdownService } from './front-countdown.service';

@Component({
  tag: 'front-countdown',
  styleUrl: 'front-countdown.scss',
  shadow: false,
  scoped: true,
})
export class FrontCountdown implements ComponentWillLoad {
  @Prop({ mutable: true }) startDate: string;
  @Prop({ mutable: true }) endDate: string;

  @State() days: string = '00';
  @State() hours: string = '00';
  @State() minutes: string = '00';
  @State() seconds: string = '00';

  @Event({ bubbles: true }) countdownFinished: EventEmitter;

  private service: FrontCountdownService;

  private resetCountdown() {
    this.days = '00';
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
  }

  private updateCountdown() {
    if (this.service.isCountdownFinished()) {
      this.resetCountdown();
      this.countdownFinished.emit('finished');
      return;
    }

    const { daysDiff, hoursDiff, minutesDiff, secondsDiff } = this.service.getTimeDifference();
    this.days = String(daysDiff).padStart(2, '0');
    this.hours = String(hoursDiff).padStart(2, '0');
    this.minutes = String(minutesDiff).padStart(2, '0');
    this.seconds = String(secondsDiff).padStart(2, '0');

    requestAnimationFrame(this.updateCountdown.bind(this));
  }

  disconnectedCallback() {
    if (!this.service) return;
    this.service.stopCountdown();
  }

  private loadCountdown() {
    if (!this.startDate || !this.endDate) return;
    try {
      this.service = new FrontCountdownService(
        new Date(Number(this.startDate) || this.startDate),
        new Date(Number(this.endDate) || this.endDate),
      );
      this.updateCountdown();
    } catch {
      this.resetCountdown();
    }
  }

  @Watch('startDate')
  watchStartDateChange() {
    this.loadCountdown();
  }

  @Watch('endDate')
  watchEndDateChange() {
    this.loadCountdown();
  }

  componentWillLoad() {
    this.loadCountdown();
  }

  render() {
    return (
      <Host class="timer">
        <div class="cell">
          <p class="time">{this.days}</p>
          <p class="unit">dias</p>
        </div>
        <div class="cell">
          <p class="time">{this.hours}</p>
          <p class="unit">horas</p>
        </div>
        <div class="cell">
          <p class="time"> {this.minutes}</p>
          <p class="unit">minutos</p>
        </div>
        <div class="cell">
          <p class="time">{this.seconds}</p>
          <p class="unit">segundos</p>
        </div>
      </Host>
    );
  }
}
