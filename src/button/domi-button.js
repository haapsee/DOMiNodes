export class DomiButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
          button {
            background-color: var(--domi-primary, #007bff);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-family: inherit;
            font-size: 1rem;
            transition: filter 0.2s;
          }

          button:hover {
            filter: brightness(0.9);
          }
        </style>

        <button part="base">
          <slot>Default Button</slot>
        </button>
      `;
  }
}
