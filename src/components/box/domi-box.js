import themecss from "@dominodes/style/theme.css?raw";

export class DomiBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      ${themecss}

        .box {
          background-color: var(--domi-bg-base);
          color: var(--domi-text-main);
          border: none;
          padding: var(--domi-padding) calc(2 * var(--domi-padding));
          font-family: inherit;
          font-size: 1rem;
        }

        :host([flex-row]) .box {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: var(--domi-flex-gap);
        }

        :host([flex-column]) .box {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: var(--domi-flex-gap);
        }

        :host([space-evenly]) .box {
          justify-content: space-evenly;
        }
      </style>

      <div part="base" class="box">
        <slot></slot>
      </div>
    `;
  }
}
