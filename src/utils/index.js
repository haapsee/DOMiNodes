export function generateStyleVariants(elementIdentifier) {
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

  let style = "";

  for (let i = 0; i < variants.length; i++) {
    let variant = variants[i];
    style += `
    :host([${variant}]) ${elementIdentifier} {
      background-color: var(--domi-${variant}-bg);
      color: var(--domi-${variant});
      border-color: var(--domi-${variant});
    }

    :host([${variant}-inverted]) ${elementIdentifier} {
      background-color: var(--domi-${variant});
      color: var(--domi-${variant}-bg);
      border-color: var(--domi-${variant}-bg);
    }
    `;
  }

  return style;
}
