import themecss from "@dominodes/style/theme.css?raw";
import { generateStyleVariants } from "../../utils/index.js";

export class DomiCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        ${themecss}

        :host {
          display: block;
          width: 100%;
          background-color: var(--domi-bg);
          color: var(--domi-text);
          min-height: var(--domi-card-min-height);
          max-width: var(--domi-card-max-width);
          min-width: var(--domi-card-min-width);
          border-radius: var(--domi-radius);
        }

        .card {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: var(--domi-padding);
        }

        :host([outlined]) {
          border: 1px solid var(--domi-text);
        }

        :host([shadowed]) {
          box-shadow: 1px 1px 3px var(--domi-text);
        }

        ${generateStyleVariants("")}

      </style>

      <div class="card" part="base">
        <slot></slot>
      </div>
      `;
  }
}

if (typeof customElements !== "undefined" && !customElements.get("domi-card")) {
  customElements.define("domi-card", DomiCard);
}
