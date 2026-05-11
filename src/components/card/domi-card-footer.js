export class DomiCardFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
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
        }
      </style>

      <div class="card-footer" part="base">
        <slot></slot>
      </div>
      `;
  }
}
