import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
import { setupCounter as asyncSetupCounter } from './counterAsyncIterator.ts';
import { Counter } from './lib/counter/Counter.ts';
import './my-counter.ts';
// register the global singleton side-effect
// so that other clients can access it without
// needing to import it directly.
import "./lib/counter/counter-singleton.ts";

const counter = Counter.instance;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <div>
        <label>Standard Counter:</label>
        <button id="counter" type="button"></button>
      </div>
      <div>
        <label>Async Counter:</label>
        <button id="async-counter" type="button"></button>
      </div>
      <div>
        <label>Lit Counter:</label>
        <my-counter></my-counter>
      </div>
      <div>
        <label>Reset Counter:</label>
        <button id="reset" type="button">Reset</button>
      </div>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
asyncSetupCounter(document.querySelector<HTMLButtonElement>('#async-counter')!)
document.querySelector('#reset')!.addEventListener('click', () => counter.count = 0)
