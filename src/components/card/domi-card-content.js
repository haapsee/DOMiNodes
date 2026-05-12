import themecss from "@dominodes/style/theme.css?raw";

export class DomiCardContent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      ${themecss}

      :host {
        display: block;
        flex-grow: 1;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .card-content {
        padding: var(--domi-padding);
        color: inherit;
        background-color: inherit;
        line-height: 1.25;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.1em;
      }
      </style>
      <div class="card-content" part="base">
        <slot></slot>
      </div>
      `;
  }
}

if (typeof customElements !== "undefined" && !customElements.get("domi-card-content")) {
  customElements.define("domi-card-content", DomiCardContent);
}
