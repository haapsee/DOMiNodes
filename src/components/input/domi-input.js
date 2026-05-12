import themecss from "@dominodes/style/theme.css?raw";

export class DomiInput extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.internals = this.attachInternals();
    this.shadowRoot.innerHTML = `
      <style>
      ${themecss}

      :host {
          display: block;
          width: 100%;
        }

        .input-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--domi-gap);
        }

        label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--domi-text-main);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        input {
          letter-spacing: 0.05em;
          color: var(--domi-text-main);
          background-color: var(--domi-bg-surface);
          border-radius: calc(var(--domi-radius) / 2);
          border: 1px solid var(--domi-text-muted);
          padding: var(--domi-padding);
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;

          outline: none;
          appearance: none;
        }

        input:focus {
          background-color: var(--domi-primary-bg);
          border-color: var(--domi-primary);
          box-shadow: inset 0 2px 4px rgba(44, 44, 44, 0.05);
        }

        .help-text {
          font-size: 0.8rem;
          color: var(--domi-info);
          font-style: italic;
        }
      </style>
      <div class="input-wrapper" part="base">
        <label id="input-label"></label>

        <input
          id="native-input"
          part="input"
          type="text"
        />

        <div class="help-text" id="help-text">
          <slot name="help"></slot>
        </div>
      </div>
      `;
    this.nativeInput = this.shadowRoot.querySelector("#native-input");
    this.labelElement = this.shadowRoot.querySelector("#input-label");
    this.nativeInput.addEventListener("input", (e) => {
      this.value = e.target.value;
    });
    this.addEventListener("click", (e) => {
      if (this.getAttribute("type") === "submit") {
        const form = this.closest("domi-form, form");
        if (!form) return;
        if (form.tagName.toLowerCase() === "domi-form") {
          form.submit();
        } else {
          form.requestSubmit();
        }
      }
    });
  }

  connectedCallback() {
    if (this.hasAttribute("placeholder")) {
      this.nativeInput.placeholder = this.getAttribute("placeholder");
    }
    if (this.hasAttribute("type")) {
      this.nativeInput.type = this.getAttribute("type");
    }
    if (this.hasAttribute("label")) {
      this.labelElement.textContent = this.getAttribute("label");
    } else {
      this.labelElement.style.display = "none";
    }
  }

  get value() {
    return this.nativeInput.value;
  }

  set value(v) {
    this.nativeInput.value = v;
    this.internals.setFormValue(v);
  }
}

if (typeof customElements !== "undefined" && !customElements.get("domi-input")) {
  customElements.define("domi-input", DomiInput);
}
