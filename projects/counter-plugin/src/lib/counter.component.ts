import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  template: `<p>{{ current }}</p>`,
})
export class CounterComponent implements AfterViewInit {
  // @Input() start = 0;   // starting value
  // @Input() end = 100;   // ending value
  // @Input() step = 1;    // increment step
  // @Input() timer = 1000; // interval in ms

  // current!: number;
  // private intervalId: any;

  // ngOnInit() {
  //   this.current = this.start;
  //   this.intervalId = setInterval(() => {
  //     if (this.current + this.step <= this.end) {
  //       this.current += this.step;
  //     } else {
  //       clearInterval(this.intervalId);
  //     }
  //   }, this.timer);
  // }

  // ngOnDestroy() {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  @Input() start = 0;
  @Input() end = 1000;
  @Input() timer = 1000; // total timer in ms
  @Input() step = 5; // kitna jump kare (default 5)

  current = 0;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCounter();
            this.observer.disconnect(); // run only once
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
    const timer = setInterval(() => {
      value += this.step;
      if (value >= this.end) {
        value = this.end;
        clearInterval(timer);
      }
      this.current = value;
    }, stepTime);
  }
}
