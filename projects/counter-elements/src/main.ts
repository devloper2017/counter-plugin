import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CounterModule } from './app/counter.module';

platformBrowserDynamic()
  .bootstrapModule(CounterModule)
  .catch((err) => console.error(err));
