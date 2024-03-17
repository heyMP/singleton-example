import { Counter } from './Counter.ts';

/**
 * Define Custom Element
 * @example
 * await customElements.whenDefined('counter-singleton');
 * const counter = (new (customElements.get('counter-singleton'))).counter;
 */
export class CounterSingleton extends HTMLElement {
  constructor() {
    super();
  }

  get counter() {
    return Counter.instance;
  }

  get count() {
    return Counter.instance.count;
  }
}

if (!customElements.get('counter-singleton')) {
  customElements.define('counter-singleton', CounterSingleton);
}
