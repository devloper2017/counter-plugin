# 🚀 Counter Plugin (Angular + React + Vanilla JS)

A lightweight **animated counter component** for **Angular**, **React**, and **Vanilla JavaScript**.

Perfect for **dashboards, statistics, analytics, and engaging UI counters**.

Easily add step-based counting with customizable inputs: `start`, `end`, `step`, and `timer`.

---

# ✨ Features

- ⚡ Lightweight and fast
- 🧩 Works with **Angular**
- ⚛️ Works with **React**
- 🌐 Works with **Vanilla JavaScript**
- 🔧 Fully customizable
- 🎯 Easy to integrate

---

# 📦 Installation

Install the package using **npm**.

```bash
npm install @nawazaideveloperr/counter-plugin
```

---

# 🚀 Usage

---

# Angular

## Step 1: Import Module

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from '@nawazaideveloperr/counter-plugin';

@NgModule({
  imports: [
    BrowserModule,
    CounterModule
  ]
})
export class AppModule {}
```

---

## Step 2: Use Component

```html
<lib-counter
  [start]="0"
  [end]="1000"
  [timer]="2000"
  [step]="2">
</lib-counter>
```

---

## Angular Standalone Component

For latest Angular versions you can import the module directly inside the component.

```ts
import { CounterModule } from '@nawazaideveloperr/counter-plugin';
```

---

# React

## Example

```jsx
import React from "react";
import { Counter } from "@nawazaideveloperr/counter-plugin";

function App() {
  return (
    <div>
      <h1>Visitors</h1>
      <Counter
        start={0}
        end={500}
        timer={1500}
        step={5}
      />
    </div>
  );
}

export default App;
```

---

# Vanilla JavaScript

## Example

```html
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
  element: document.getElementById("counter"),
  start: 0,
  end: 300,
  timer: 2000,
  step: 10
});

counter.start();
</script>
</body>
</html>
```

---

# ⚙️ Props

| Prop | Type | Default | Description |
|-----|-----|-----|-----|
| start | number | 0 | Starting number of the counter |
| end | number | 1000 | Ending number of the counter |
| timer | number | 1000 | Animation duration in milliseconds |
| step | number | 5 | Increment step size |

---

# 🎯 Example

```html
<lib-counter
  [start]="100"
  [end]="2000"
  [timer]="3000"
  [step]="10">
</lib-counter>
```

---

# 💡 Use Cases

- Dashboard statistics
- Visitor counters
- Sales analytics
- Animated UI metrics
- Growth numbers

---

# 📄 License
 
MIT License @[https://github.com/devloper2017/](https://github.com/devloper2017/)

---

## ⭐ Support

If you like this project, please **star the repository** on GitHub.

[Click here to ⭐ star the repository](https://github.com/devloper2017/counter-plugin)

---

# 🤝 Contributing

Pull requests are welcome.  
If you find a bug or want to improve the plugin, feel free to open an issue.
