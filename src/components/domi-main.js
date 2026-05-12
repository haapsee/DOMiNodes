import themecss from "@dominodes/style/theme.css?raw";

export class DomiMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      ${themecss}
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

if (typeof customElements !== "undefined" && !customElements.get("domi-main")) {
  customElements.define("domi-main", DomiMain);
}
