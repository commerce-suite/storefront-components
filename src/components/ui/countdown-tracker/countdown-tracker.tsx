import { Component, Host, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'countdown-tracker',
  styleUrl: 'countdown-tracker.scss',
  scoped: true,
})
export class CountdownTracker {
  @Prop() dataTargetDate: string;
  @Prop() trackerTitle = 'Agora falta muito pouco!';
  @Prop() description = 'O produto que você tanto espera será liberado em breve.';

  @State() days: string | number = '00';
  @State() hours: string = '00';
  @State() minutes: string = '00';
  @State() seconds: string = '00';

  @Event() countdownFinished: EventEmitter;

  private intervalId: number;

  componentWillLoad() {
    this.calculateTimeDifference();
  }

  disconnectedCallback() {
    clearInterval(this.intervalId);
  }

  calculateTimeDifference() {
    const target = new Date(this.dataTargetDate);
    const start = new Date();

    const diff = target.getTime() - start.getTime();

    if (diff <= 0) {
      cancelAnimationFrame(this.intervalId);
      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';
      this.countdownFinished.emit('finished');
      return;
    }

    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsDiff = Math.floor((diff % (1000 * 60)) / 1000);

    this.days = String(daysDiff).padStart(2, '0');
    this.hours = String(hoursDiff).padStart(2, '0');
    this.minutes = String(minutesDiff).padStart(2, '0');
    this.seconds = String(secondsDiff).padStart(2, '0');
    this.intervalId = requestAnimationFrame(this.calculateTimeDifference.bind(this));
  }

  render() {
    return (
      <Host>
        <div class="countdown-tracker-header">
          <h3 class="countdown-tracker-title">{this.trackerTitle}</h3>
          <p class="countdown-tracker-description">{this.description}</p>
        </div>
        <div class="countdown-tracker">
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">{this.days}</p>
            <p class="countdown-tracker-date">dias</p>
          </div>
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">{this.hours}</p>
            <p class="countdown-tracker-date">horas</p>
          </div>
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time"> {this.minutes}</p>
            <p class="countdown-tracker-date">minutos</p>
          </div>
          <div class="countdown-tracker-cell">
            <p class="countdown-tracker-time">{this.seconds}</p>
            <p class="countdown-tracker-date">segundos</p>
          </div>
        </div>
      </Host>
    );
  }
}
