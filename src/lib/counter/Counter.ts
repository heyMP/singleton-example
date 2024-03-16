export class Counter extends EventTarget {
  static instance: Counter;

  static {
    Counter.instance = new Counter();
  }

  private _count = 0;

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    this.dispatchEvent(new CounterChangeEvent(this.count));
  }

  increment(amount = 1) {
    this.count += amount;
  }

  decrement(amount = 1) {
    let newCount = this.count - amount;
    newCount = newCount < 0 ? 0 : newCount;
    if (newCount !== this.count) {
      this.count = newCount;
    }
  }
}

/**
 * Events
 */
export class CounterChangeEvent extends Event {
  constructor(public count: number) {
    super('change');
  }
}

/**
 * Define Custom Element
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

customElements.define('counter-singleton', CounterSingleton);
