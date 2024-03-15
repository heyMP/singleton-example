import { CounterChangeEvent } from './lib/counter/Counter.ts';

export function setupCounter(element: HTMLButtonElement) {
  window.counter.addEventListener('change', (event: Event) => {
    if (event instanceof CounterChangeEvent) {
      updateCounter(event.count);
    }
  });

  const updateCounter = (count: number) => {
    element.innerHTML = `count is ${count}`
  }

  updateCounter(window.counter.count ?? 0);

  element.addEventListener('click', () => window.counter.increment());
}
