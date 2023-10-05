import { Component, Host, Prop, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'countdown-tracker',
  styleUrl: 'countdown-tracker.scss',
  scoped: true,
})
export class CountdownTracker {
  @Prop() targetDate: string;

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
    const target = new Date(this.targetDate);
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
        <div class="countdown-tracker">
          <div class="countdown-tracker__days">
            <p>{this.days}</p>
            <p>dias</p>
          </div>
          <div class="countdown-tracker__hours">
            <p>{this.hours}</p>
            <p>horas</p>
          </div>
          <div class="countdown-tracker__minutes">
            <p>{this.minutes}</p>
            <p>minutos</p>
          </div>
          <div class="countdown-tracker__seconds">
            <p>{this.seconds}</p>
            <p>segundos</p>
          </div>
        </div>
      </Host>
    );
  }
}