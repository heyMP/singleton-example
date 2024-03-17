/**
 * Counter Singleton
 * @example
 * import { Counter } from './lib/counter/Counter.ts';
 * const counter = Counter.instance;
 * counter.addEventListener('change', (event: Event) => {
 *   if (event instanceof CounterChangeEvent) {
 *     updateCounter(event.count);
 *   }
 * })
 */
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
 * Counter Change Event
 * @example
 * counter.addEventListener('change', (event: Event) => {
 *  if (event instanceof CounterChangeEvent) {
 *    updateCounter(event.count);
 *  }
 * })
 */
export class CounterChangeEvent extends Event {
  constructor(public count: number) {
    super('change');
  }
}
