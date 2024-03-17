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
 * counter.count;++;
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
    let newCount = value > 0 ? value : 0;
    if (newCount !== this.count) {
      this._count = newCount;
      this.dispatchEvent(new CounterChangeEvent(this.count));
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
