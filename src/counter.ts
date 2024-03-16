import { CounterChangeEvent, Counter } from './lib/counter/Counter.ts';

/**
 * Example of a reactive component that listens to changes in the counter
 * singleton and send incrementing events to it.
 */
export function setupCounter(element: HTMLButtonElement) {
  const counter = Counter.instance;
  counter.addEventListener('change', (event: Event) => {
    if (event instanceof CounterChangeEvent) {
      updateCounter(event.count);
    }
  })
  const updateCounter = (count: number) => {
    element.innerHTML = `count is ${count}`
  }
  updateCounter(counter.count ?? 0);
  element.addEventListener('click', () => counter.increment());
}


