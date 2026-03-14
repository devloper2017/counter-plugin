import * as i0 from '@angular/core';
import { Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

class CounterComponent {
    el;
    start = 0;
    end = 1000;
    timer = 1000; // total timer in ms
    step = 5; // kitna jump kare (default 5)
    current = 0;
    observer;
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateCounter();
                    this.observer.disconnect(); // run only once
                }
            });
        }, { threshold: 0.5 });
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.19", ngImport: i0, type: CounterComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.19", type: CounterComponent, isStandalone: true, selector: "lib-counter", inputs: { start: "start", end: "end", timer: "timer", step: "step" }, ngImport: i0, template: `<p>{{ current }}</p>`, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.19", ngImport: i0, type: CounterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-counter',
                    template: `<p>{{ current }}</p>`,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { start: [{
                type: Input
            }], end: [{
                type: Input
            }], timer: [{
                type: Input
            }], step: [{
                type: Input
            }] } });

class CounterModule {
    injector;
    constructor(injector) {
        this.injector = injector;
        // Register <counter-element> as a Web Component
        const el = createCustomElement(CounterComponent, { injector });
        customElements.define('lib-counter', el);
    }
    // Required when using Angular Elements
    ngDoBootstrap() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.19", ngImport: i0, type: CounterModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.19", ngImport: i0, type: CounterModule, imports: [CommonModule, CounterComponent], exports: [CounterComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.19", ngImport: i0, type: CounterModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.19", ngImport: i0, type: CounterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CounterComponent],
                    exports: [CounterComponent],
                }]
        }], ctorParameters: () => [{ type: i0.Injector }] });

/*
 * Public API Surface of counter-plugin
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CounterComponent, CounterModule };
//# sourceMappingURL=nawazaideveloperr-counter-plugin.mjs.map
