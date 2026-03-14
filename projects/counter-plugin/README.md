# 🚀 Counter Plugin (Angular)

A lightweight **animated counter component for Angular**.

Perfect for **dashboards, statistics cards, analytics panels, and animated UI metrics**.

The plugin supports customizable inputs like **start**, **end**, **step**, **timer**, and also **prefix**, **suffix**, and **once** for flexible UI counters.

---

# ✨ Features

* ⚡ Lightweight and fast
* 🧩 Built for **Angular**
* 🔧 Fully customizable inputs
* 🎯 Smooth animated number counting
* 🔁 Optional repeat animation
* 🧮 Supports prefix and suffix formatting

---

# 📦 Installation

Install the package using **npm**:

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

# Angular Standalone Component

For **Angular 15+ standalone components**, you can import the module directly inside the component.

```ts
import { Component } from '@angular/core';
import { CounterModule } from '@nawazaideveloperr/counter-plugin';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
```

---

# ⚙️ Inputs / Props

| Input  | Type    | Default | Description                                                              |
| ------ | ------- | ------- | ------------------------------------------------------------------------ |
| start  | number  | 0       | Starting number of the counter                                           |
| end    | number  | 1000    | Ending number of the counter                                             |
| timer  | number  | 1000    | Animation duration in milliseconds                                       |
| step   | number  | 5       | Increment step size                                                      |
| prefix | string  | ""      | Text displayed before the number (example: `$`)                          |
| suffix | string  | ""      | Text displayed after the number (example: `+`, `%`)                      |
| once   | boolean | true    | If true, counter runs only once. If false, it can trigger multiple times |

---

# 🎯 Examples

## Basic Counter

```html
<lib-counter
  [start]="0"
  [end]="500"
  [timer]="1500"
  [step]="5">
</lib-counter>
```

---

## Counter with Prefix

```html
<lib-counter
  [start]="0"
  [end]="10000"
  [prefix]="'$'">
</lib-counter>
```

Output:

```
$10000
```

---

## Counter with Suffix

```html
<lib-counter
  [start]="0"
  [end]="100"
  [suffix]="'%'">
</lib-counter>
```

Output:

```
100%
```

---

## Counter with Plus Sign

```html
<lib-counter
  [start]="0"
  [end]="5000"
  [suffix]="'+'">
</lib-counter>
```

Output:

```
5000+
```

---

## Counter with Repeat Animation

```html
<lib-counter
  [start]="0"
  [end]="1000"
  [timer]="2000"
  [once]="false">
</lib-counter>
```

If `once` is **false**, the counter animation can run multiple times when triggered.

---

# 💡 Use Cases

* Dashboard statistics
* Website visitor counters
* Sales analytics
* Marketing metrics
* Portfolio statistics
* Growth indicators

---

# 📄 License

MIT License

GitHub:
https://github.com/devloper2017/counter-plugin

---

# ⭐ Support

If you like this project, please **give it a star ⭐ on GitHub**.

👉 https://github.com/devloper2017/counter-plugin

---

# 🤝 Contributing

Pull requests are welcome.

If you find a bug or want to improve the plugin:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
