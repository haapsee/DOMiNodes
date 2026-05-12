import themecss from "../../style/theme.css?raw";

export class DomiCardHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      ${themecss}

      :host {
        display: block;
        padding: var(--domi-padding);
        background-color: inherit;
        color: inherit;
        margin: 0;
        font-family: inherit;
        font-size: 1.25rem;
        font-weight: normal;
        letter-spacing: 0.05em;
      }

      </style>
      <slot></slot>
      `;
  }
}

if (typeof customElements !== "undefined" && !customElements.get("domi-card-header")) {
  customElements.define("domi-card-header", DomiCardHeader);
}
