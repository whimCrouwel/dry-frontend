# @vim-crouwel/dry-frontend

A lightweight utility library for frontend development that provides reusable components, effects, functions, and utilities to help you build interactive web applications more efficiently.

## Installation

```bash
# Using npm
npm install @vim-crouwel/dry-frontend

# Using yarn
yarn add @vim-crouwel/dry-frontend
```

## Usage

### Components

#### Hamburger Menu

Create a hamburger menu button that replaces an existing placeholder element:

```typescript
import { Components } from '@vim-crouwel/dry-frontend';

// Add a placeholder in your HTML
// <div data-component="hamburger"></div>

// Create the hamburger menu and handle clicks
Components.makeHamburger((button) => {
  // Your click handler code here
  console.log('Hamburger clicked!');
  // Toggle menu visibility, etc.
});
```

#### Splash Screen

Create and animate a splash screen:

```typescript
import { Components } from '@vim-crouwel/dry-frontend';

// Add a placeholder in your HTML
// <div data-component="splash-screen">Loading...</div>

// Initialize the splash screen with animation
Components.initSplashScreen(
  'fade', // Animation type: 'fade', 'shrink', 'left', or 'up'
  '#ffffff', // Background color
  500 // Animation duration in ms
);
```

### Effects

#### Box Revealer

Create animated box reveal effects for images:

```typescript
import { Effects } from '@vim-crouwel/dry-frontend';

// Add elements in your HTML
// <div class="dry-revealer box" data-img-src="path/to/image.jpg" data-mask-color="#fff"></div>

// Initialize the box revealer
Effects.createBoxRevealer('left'); // or 'right'
```

#### Text Animations

Reveal characters with animation:

```typescript
import { Effects } from '@vim-crouwel/dry-frontend';

// Wrap each character in a span and animate
Effects.revealChars(targetElement, (startAnimation) => {
  startAnimation();
}, 50, 500);
```

Create a horizontal text sliding effect:

```typescript
import { Effects } from '@vim-crouwel/dry-frontend';

// Add elements in your HTML
// <div data-effect="horizontalTextSlide" data-direction="left" data-font-size="4rem" data-duration="10000">
//   <div>Your text here</div>
// </div>

// Initialize the horizontal text slide
Effects.initHorizontalTextSlide();
```

#### Other Effects

The library also includes other effects like parallax scrolling and bob effects. Check the source code for more details on these effects.

### Functions

#### Scroll Utilities

Control scrolling behavior:

```typescript
import { toggleScrollLock, onScrollTriggerOnce, scrollToTarget } from '@vim-crouwel/dry-frontend';

// Lock/unlock scrolling
toggleScrollLock();

// Trigger a function once when an element comes into view
const element = document.querySelector('.my-element');
onScrollTriggerOnce(element, 100, () => {
  console.log('Element is now visible!');
  // Run your animation or other code
});

// Smooth scroll to an element
const target = document.querySelector('.scroll-target');
scrollToTarget(target);
```

### Utilities

#### HTML Element Creation

Create HTML elements with various options:

```typescript
import { createElm } from '@vim-crouwel/dry-frontend';

const div = createElm('div', {
  className: 'box',
  textContent: 'Hello!',
  attributes: { id: 'myDiv', 'data-custom': 'value' },
  styles: { backgroundColor: 'yellow', padding: '10px' },
  children: [
    createElm('span', { textContent: 'Child element' })
  ]
});

document.body.appendChild(div);
```

## Dependencies

- [animejs](https://animejs.com/) - JavaScript animation library

## License

ISC License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
