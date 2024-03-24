import { html, LitElement } from 'lit';
import { Counter } from './lib/counter/Counter.ts';
import { asyncReplace } from 'lit/directives/async-replace.js';

export class MyCounter extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <button @click=${() => Counter.instance.count++}>count is
        ${asyncReplace(Counter.instance[Symbol.asyncIterator]())}
      </button>
    `;
  }
}

customElements.define('my-counter', MyCounter);
