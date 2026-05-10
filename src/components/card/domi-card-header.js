export class DomiCardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      :host {
        display: block;
        padding: var(--domi-padding);
        background-color: inherit;
        color: inherit;
        margin: 0;
        font-family: inherit;
        font-size: 1.25rem;
        font-weight: normal;
        letter-spacing: -0.01em;
      }

      </style>
      <slot></slot>
      `;
  }
}
