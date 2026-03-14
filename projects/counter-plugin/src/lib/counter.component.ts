import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'lib-counter',
  template: `<p>{{ prefix }}{{ current }}{{ suffix }}</p>`,
})
export class CounterComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() start = 0;
  @Input() end = 1000;
  @Input() timer = 1000;
  @Input() step = 5;

  @Input() prefix: string = '';
  @Input() suffix: string = '';

  @Input() once: boolean = true;
  @Input() threshold: number = 0.5;

  current = 0;

  private observer!: IntersectionObserver;
  private hasAnimated = false;
  private timerr: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.current = this.start;
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (this.once && this.hasAnimated) return;

            this.hasAnimated = true;
            this.animateCounter();
          } else {
            if (!this.once) {
              this.resetCounter();
            }
          }
        });
      },
      { threshold: this.threshold },
    );

    this.observer.observe(this.el.nativeElement);
  }

  animateCounter() {
    const range = this.end - this.start;

    const increment = this.start < this.end ? this.step : -this.step;

    const steps = Math.ceil(Math.abs(range) / this.step);

    const stepTime = Math.max(Math.floor(this.timer / steps), 10);

    let value = this.start;

    clearInterval(this.timerr);

    this.timerr = setInterval(() => {
      value += increment;

      if (
        (increment > 0 && value >= this.end) ||
        (increment < 0 && value <= this.end)
      ) {
        value = this.end;
        clearInterval(this.timerr);
      }

      this.current = value;
    }, stepTime);
  }

  resetCounter() {
    clearInterval(this.timerr);
    this.current = this.start;
    this.hasAnimated = false;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    clearInterval(this.timerr);
  }
}

// ------------------------------------------------------------------------------------------------------------

// import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'lib-counter',
//   template: `<p>{{ prefix }}{{ current }}{{ suffix }}</p>`,
// })
// export class CounterComponent implements AfterViewInit {
//   @Input() start = 0;
//   @Input() end = 1000;
//   @Input() timer = 1000;
//   @Input() step = 5;

//   @Input() prefix: string = '';
//   @Input() suffix: string = '';

//   @Input() once: boolean = true;

//   current = 0;

//   private observer!: IntersectionObserver;
//   private hasAnimated = false;

//   constructor(private el: ElementRef) {}

//   ngAfterViewInit() {
//     this.observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (this.once && this.hasAnimated) return;
//             this.hasAnimated = true;
//             this.animateCounter();
//           } else {
//             if (!this.once) {
//               this.resetCounter();
//             }
//           }
//         });
//       },
//       { threshold: 0.5 },
//     );

//     this.observer.observe(this.el.nativeElement);
//   }

//   animateCounter() {
//     const range = this.end - this.start;
//     const steps = Math.ceil(range / this.step);
//     const stepTime = Math.max(Math.floor(this.timer / steps), 10);

//     let value = this.start;

//     const timer = setInterval(() => {
//       value += this.step;

//       if (value >= this.end) {
//         value = this.end;
//         clearInterval(timer);
//       }
//       this.current = value;
//     }, stepTime);
//   }

//   resetCounter() {
//     this.current = this.start;
//     this.hasAnimated = false;
//   }
// }
