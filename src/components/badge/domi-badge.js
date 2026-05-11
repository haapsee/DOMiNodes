import themecss from "@dominodes/style/theme.css?raw";
import { generateStyleVariants } from "../../utils/index.js";

export class DomiBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
        ${themecss}

        .badge {
          color: var(--domi-text);
          background-color: var(--domi-bg);
          padding: calc(var(--domi-padding) / 2) var(--domi-padding);
          border-radius: calc(var(--domi-radius) / 2);
          font-size: 0.7rem;
          font-weight: 600;
          font-family: inherit;
          letter-spacing: 0.07rem;
          text-transform: uppercase;
          line-height: 1;
          user-select: none;
          justify-content: center;
          align-items: center;
        }

        ${generateStyleVariants(".badge")}

        :host([pill]) .badge {
          border-radius: 999px;
        }
        </style>

        <span part="base" class="badge">
          <slot></slot>
        </span>
      `;
  }
}
