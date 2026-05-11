// src/domi-form.js
export class DomiForm extends HTMLElement {
  static get observedAttributes() {
    return ["action", "method"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: calc(2 * var(--domi-gap));
        }
      </style>

      <form id="domi-native-form" part="base">
        <slot></slot>
      </form>
    `;
    this.nativeForm = this.shadowRoot.querySelector("form");
  }

  connectedCallback() {
    if (this.hasAttribute("action")) {
      this.nativeForm.setAttribute("action", this.getAttribute("action"));
    }

    const method = this.getAttribute("method") || "POST";
    this.nativeForm.setAttribute("method", method);

    this.addEventListener("submit", (e) => {
      const formData = new FormData(this.nativeForm);
      this.dispatchEvent(
        new CustomEvent("domi-submit", {
          detail: formData,
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.nativeForm) {
      this.nativeForm.setAttribute(name, newValue);
    }
  }

  submit() {
    if (!this.nativeForm) return;
    this.nativeForm
      .querySelectorAll(".domi-hidden-input")
      .forEach((el) => el.remove());
    const lightDomControls = this.querySelectorAll("[name]");
    lightDomControls.forEach((control) => {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = control.getAttribute("name");
      hiddenInput.value = control.value; // Pulls from your DomiInput 'get value()'
      hiddenInput.classList.add("domi-hidden-input"); // Tag it so we can clean it up later

      this.nativeForm.appendChild(hiddenInput);
    });
    this.nativeForm.requestSubmit();
  }
}
