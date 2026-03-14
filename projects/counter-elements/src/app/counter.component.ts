import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  standalone: true,
  template: `<p>{{ current }}</p>`,
})
export class CounterComponent implements AfterViewInit {
  private _start = 0;
  private _end = 1000;
  private _timer = 1000;
  private _step = 5;

  @Input()
  set start(val: any) {
    this._start = Number(val) || 0;
  }
  get start() {
    return this._start;
  }

  @Input()
  set end(val: any) {
    this._end = Number(val) || 0;
  }
  get end() {
    return this._end;
  }

  @Input()
  set timer(val: any) {
    this._timer = Number(val) || 1000;
  }
  get timer() {
    return this._timer;
  }

  @Input()
  set step(val: any) {
    this._step = Number(val) || 1;
  }
  get step() {
    return this._step;
  }

  current = 0;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter();
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    this.observer.observe(this.el.nativeElement);
  }

  animateCounter() {
    const range = this.end - this.start;
    const steps = Math.ceil(range / this.step);
    const stepTime = Math.max(Math.floor(this.timer / steps), 10);

    let value = this.start;

    const interval = setInterval(() => {
      value += this.step;

      if (value >= this.end) {
        value = this.end;
        clearInterval(interval);
      }

      this.current = value;
    }, stepTime);
  }
}
