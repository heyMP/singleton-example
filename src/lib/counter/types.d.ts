import { Counter } from './Counter.js';

declare global {
  interface Window {
    counter: Counter;
  }
}

