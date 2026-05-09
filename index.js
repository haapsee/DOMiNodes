import { DomiButton } from "./src/components/button/domi-button.js";
import { DomiBox } from "./src/components/box/domi-box.js";
import { DomiMain } from "./src/components/domi-main.js";

window.customElements.define("domi-main", DomiMain);
window.customElements.define("domi-box", DomiBox);
window.customElements.define("domi-button", DomiButton);

export { DomiButton };
