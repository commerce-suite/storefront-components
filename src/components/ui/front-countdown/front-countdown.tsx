import { Component, Host, Prop, State, h, Event, EventEmitter } from '@stencil/core';
import { CountdownService } from './countdown.service';

@Component({
  tag: 'front-countdown',
  styleUrl: 'front-countdown.scss',
  scoped: true,
})
export class FrontCountdown {
  @Prop() dataTargetDate: string;
  @Prop() dataInitialDate: string;
  @Prop() dataCountdownTitle = 'Agora falta muito pouco!';
  @Prop() dataDescription = 'O produto que você tanto espera será liberado em breve.';
  @Prop() backgroundColor?: string;
  @Prop() textColor?: string;

  @State() days: string = '00';
  @State() hours: string = '00';
  @State() minutes: string = '00';
  @State() seconds: string = '00';

  @Event() countdownFinished: EventEmitter;

  private service: CountdownService;

  componentWillLoad() {
    try {
      this.service = new CountdownService(
        new Date(this.dataInitialDate),
        new Date(this.dataTargetDate),
      );
      this.updateCountdown();
    } catch {
      this.resetCountdown();
    }
  }

  disconnectedCallback() {
    this.service.stopCountdown();
  }

  updateCountdown() {
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

  resetCountdown() {
    this.days = '00';
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
  }

  render() {
    const backgroundColor = this.backgroundColor ? { backgroundColor: this.backgroundColor } : {};
    const textCounterColor = this.backgroundColor ? { color: this.backgroundColor } : {};
    const textColor = this.textColor ? { color: this.textColor } : {};

    return (
      <Host style={backgroundColor}>
        <div class="front-countdown-header" style={textColor}>
          <h3 class="front-countdown-title">{this.dataCountdownTitle}</h3>
          <p class="front-countdown-description">{this.dataDescription}</p>
        </div>
        <div class="front-countdown">
          <div class="front-countdown-cell" style={textCounterColor}>
            <p class="front-countdown-time">{this.days}</p>
            <p class="front-countdown-date">dias</p>
          </div>
          <div class="front-countdown-cell" style={textCounterColor}>
            <p class="front-countdown-time">{this.hours}</p>
            <p class="front-countdown-date">horas</p>
          </div>
          <div class="front-countdown-cell" style={textCounterColor}>
            <p class="front-countdown-time"> {this.minutes}</p>
            <p class="front-countdown-date">minutos</p>
          </div>
          <div class="front-countdown-cell" style={textCounterColor}>
            <p class="front-countdown-time">{this.seconds}</p>
            <p class="front-countdown-date">segundos</p>
          </div>
        </div>
      </Host>
    );
  }
}
