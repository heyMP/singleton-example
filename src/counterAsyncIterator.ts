import { Counter } from './lib/counter/Counter.ts';

/**
 * Example of a reactive component that listens to changes in the counter
 * singleton and send incrementing events to it.
 */
export async function setupCounter(element: HTMLButtonElement) {
  // increment the counter on click using the singleton instance
  // note: this must be before our async iterator loop
  element.addEventListener('click', () => Counter.instance.count++);
  // listen for changes to the counter and rerender count
  for await (const count of Counter.instance) {
    element.innerHTML = `count is ${count}`
  }
}
