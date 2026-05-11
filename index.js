import { DomiButton } from "./src/components/button/domi-button.js";
import { DomiBox } from "./src/components/box/domi-box.js";
import { DomiMain } from "./src/components/domi-main.js";
import { DomiBadge } from "./src/components/badge/domi-badge.js";
import { DomiCard } from "./src/components/card/domi-card.js";
import { DomiCardHeader } from "./src/components/card/domi-card-header.js";
import { DomiCardContent } from "./src/components/card/domi-card-content.js";
import { DomiCardFooter } from "./src/components/card/domi-card-footer.js";
import { DomiInput } from "./src/components/input/domi-input.js";
import { DomiForm } from "./src/components/input/domi-form.js";

window.customElements.define("domi-form", DomiForm);
window.customElements.define("domi-input", DomiInput);
window.customElements.define("domi-card-header", DomiCardHeader);
window.customElements.define("domi-card-content", DomiCardContent);
window.customElements.define("domi-card-footer", DomiCardFooter);
window.customElements.define("domi-card", DomiCard);
window.customElements.define("domi-badge", DomiBadge);
window.customElements.define("domi-main", DomiMain);
window.customElements.define("domi-box", DomiBox);
window.customElements.define("domi-button", DomiButton);

export { DomiButton };
