export class Counter extends EventTarget {
  static instance: Counter;

  static {
    Counter.instance = new Counter();
    window.counter ??= Counter.instance;
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
    this.dispatchEvent(new CounterIncrementEvent(this.count));
  }

  decrement(amount = 1) {
    this.count -= amount;
    this.dispatchEvent(new CounterDecrementEvent(this.count));
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

export class CounterIncrementEvent extends Event {
  constructor(public amount: number) {
    super('increment');
  }
}

export class CounterDecrementEvent extends Event {
  constructor(public amount: number) {
    super('decrement');
  }
}

/**
 * Define Custom Element
 */
export class CounterSingleton extends HTMLElement {
  constructor() {
    super();
  }

  get count() {
    return window.counter.count;
  }
}

customElements.define('counter-singleton', CounterSingleton);
