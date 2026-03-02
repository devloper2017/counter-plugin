# Counter Plugin (Angular + React + Vanilla JS)

A lightweight, animated counter plugin built with TypeScript.  
Supports Angular, React, and plain JavaScript websites.  
Easily add step-based counting with customizable inputs: `start`, `end`, `step`, and `timer`.

---

## 🚀 Installation

```bash
npm install counter-plugin

# Counter Plugin (Angular + React + Vanilla JS)

![npm version](https://img.shields.io/npm/v/counter-plugin)
![npm downloads](https://img.shields.io/npm/dt/counter-plugin)
![GitHub stars](https://img.shields.io/github/stars/devloper2017/counter-plugin)
![GitHub issues](https://img.shields.io/github/issues/devloper2017/counter-plugin)
![GitHub license](https://img.shields.io/github/license/devloper2017/counter-plugin)


for Angular

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


for React

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


for Vanilla JS

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
      step:10
    });
    counter.start();
  </script>
</body>
</html>


## ⚙️ Options

| Prop       | Type    | Default | Description                          |
|------------|---------|---------|--------------------------------------|
| `start`    | number  | 0       | Starting number of the counter       |
| `end`      | number  | 100     | Ending number of the counter         |
| `timer` | number  | 2000    | Animation duration in milliseconds   |
| `step`     | number  | auto    | Increment step size (calculated auto)|
