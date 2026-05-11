import themecss from "@dominodes/style/theme.css?raw";

export class DomiCardFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      ${themecss}

        :host {
          display: block;
          margin-top: auto;
          background-color: inherit;
          color: inherit;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: var(--domi-gap);
          padding: var(--domi-padding);
          border-color: inherit;
          letter-spacing: 0.05em;
        }
      </style>

      <div class="card-footer" part="base">
        <slot></slot>
      </div>
      `;
  }
}
