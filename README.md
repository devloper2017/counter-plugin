# Counter Plugin (Angular + React + Vanilla JS)

A lightweight, customizable animated counter component for **Angular**, **React**, and **Vanilla JS**.  
Perfect for dashboards, stats, and engaging UI elements.

Easily add step-based counting with customizable inputs: `start`, `end`, `step`, and `timer`.

---

## 📦 Installation

```bash
npm install @nawazaideveloperr/counter-plugin

🔖 Badges
https://img.shields.io/npm/v/@nawazaideveloperr/counter-plugin
https://img.shields.io/npm/dt/@nawazaideveloperr/counter-plugin
https://img.shields.io/github/stars/devloper2017/counter-plugin
https://img.shields.io/github/issues/devloper2017/counter-plugin
https://img.shields.io/github/license/devloper2017/counter-plugin

🚀 Usage

Angular
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from '@nawazaideveloperr/counter-plugin';

@NgModule({
  imports: [BrowserModule, CounterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

<lib-counter [start]="0" [end]="1000" [timer]="2000" [step]="2"></lib-counter>

In Angular Leatest Version Directly Import In Componant With Standalone


React
import React from 'react';
import { Counter } from '@nawazaideveloperr/counter-plugin';

function App() {
  return (
    <div>
      <h1>Visitors</h1>
      <Counter start={0} end={500} timer={1500} step={5} />
    </div>
  );
}

export default App;


Vanilla JS
<!DOCTYPE html>
<html>
<head>
  <title>Counter Demo</title>
  <script src="node_modules/@nawazaideveloperr/counter-plugin/dist/counter-plugin.umd.js"></script>
</head>
<body>
  <h1 id="counter"></h1>

  <script>
    const counter = new Counter({
      element: document.getElementById('counter'),
      start: 0,
      end: 300,
      timer: 2000,
      step: 10
    });
    counter.start();
  </script>
</body>
</html>

 
# **Prop - start**
Type - number
Default - 0
Description - Starting number of the counter

# **Prop - end**
Type - number
Default - 1000
Description - Ending number of the counter

# **Prop - timer**
Type - number
Default - 1000
Description - Animation duration in milliseconds

# **Prop - step**
Type - number
Default - 5
Description - Increment step size (auto‑calculated)

