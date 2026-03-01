import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-counter',
  template: `<p>{{ current }}</p>`
})
export class CounterComponent implements OnInit, OnDestroy {
  @Input() start = 0;   // starting value
  @Input() end = 100;   // ending value
  @Input() step = 1;    // increment step
  @Input() timer = 1000; // interval in ms

  current!: number;
  private intervalId: any;

  ngOnInit() {
    this.current = this.start;
    this.intervalId = setInterval(() => {
      if (this.current + this.step <= this.end) {
        this.current += this.step;
      } else {
        clearInterval(this.intervalId);
      }
    }, this.timer);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
