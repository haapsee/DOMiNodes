export class DomiMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        main {
          background-color: var(--domi-bg-base);
          padding: var(--domi-padding) calc(2 * var(--domi-padding));
        }
      </style>

      <main part="base">
        <slot></slot>
      </main>
    `;
  }
}
