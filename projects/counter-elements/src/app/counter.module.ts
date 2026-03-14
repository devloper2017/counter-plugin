import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, CounterComponent], // standalone component imported
})
export class CounterModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CounterComponent, {
      injector: this.injector,
    });

    if (!customElements.get('lib-counter')) {
      customElements.define('lib-counter', el);
    }
  }
}
