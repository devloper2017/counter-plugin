import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
@NgModule({
  imports: [CommonModule, CounterComponent],
  exports: [CounterComponent],
})
export class CounterModule {}
