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
 * counter.count++;
 *
 * OR with async iterator
 *
 * import { Counter } from './lib/counter/Counter.ts';
 * const counter = Counter.instance;
 * for await (const count of counter) {
 *  updateCounter(count);
 * }
 * counter.count++;
 */
export class Counter extends EventTarget {
  static instance: Counter;

  static {
    Counter.instance = new Counter();
  }

  private _count = Number(window.localStorage.getItem('counter')) ?? 0;

  get count() {
    return this._count;
  }

  set count(value: number) {
    let newCount = value > 0 ? value : 0;
    if (newCount !== this.count) {
      this._count = newCount;
      window.localStorage.setItem('counter', this.count.toString());
      this.dispatchEvent(new CounterChangeEvent(this.count));
    }
  }

  async *countStream() {
    while (true) {
      yield this.count;
      await new Promise(resolve => this.addEventListener('change', resolve, { once: true }));
    }
  }

  async *[Symbol.asyncIterator]() {
    yield* this.countStream();
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
