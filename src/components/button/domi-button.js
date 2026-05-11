import themecss from "@dominodes/style/theme.css?raw";

export class DomiButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
          ${themecss}

          button {
            letter-spacing: 0.1em;
            background-color: var(--domi-bg-base, #007bff);
            color: var(--domi-text-main, #fff);
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-family: inherit;
            font-size: 1rem;
            text-transform: uppercase;
            transition: filter 0.2s;
            box-shadow: 1px 1px 1px var(--domi-bg-dark-surface);
          }

          button:hover {
            box-shadow: 1px 1px 1px var(--domi-bg-dark);
            filter: brightness(0.8);
          }

          :host([full-width]) {
          width: 100%;
          }

          :host([full-width]) button {
          width: 100%;
          }

          ${this.generateStyleVariants()}
        </style>

        <button part="base">
          <slot>Default Button</slot>
        </button>
      `;
  }

  generateStyleVariants() {
    let variants = [
      "primary",
      "secondary",
      "accent",
      "accent-secondary",
      "success",
      "warning",
      "danger",
      "info",
      "disabled",
    ];
    let str = "";
    for (let i = 0; i < variants.length; i++) {
      let variant = variants[i];
      str += `:host([${variant}]) button { background-color: var(--domi-${variant}-bg); color: var(--domi-${variant}); }`;
      str += `:host([${variant}-inverted]) button { background-color: var(--domi-${variant}); color: var(--domi-${variant}-bg); }`;
    }
    return str;
  }
}
