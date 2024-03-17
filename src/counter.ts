import { CounterChangeEvent, Counter } from './lib/counter/Counter.ts';

/**
 * Example of a reactive component that listens to changes in the counter
 * singleton and send incrementing events to it.
 */
export function setupCounter(element: HTMLButtonElement) {
  // reference singleton instance
  const counter = Counter.instance;
  // listen for changes to the counter
  counter.addEventListener('change', (event: Event) => {
    if (event instanceof CounterChangeEvent) {
      updateCounter(event.count);
    }
  })
  // helper function to update the button text
  const updateCounter = (count: number) => {
    element.innerHTML = `count is ${count}`
  }
  // initial update
  updateCounter(counter.count ?? 0);
  // increment the counter on click using the singleton instance
  element.addEventListener('click', () => counter.increment());
}
