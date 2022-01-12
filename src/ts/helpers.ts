/**
 * helpers.ts
 * Misc functions and Event definitions.
 */

const eventInitParams: EventInit = {
  bubbles: true,
  cancelable: true,
  composed: true,
};
const ToggleEvent = new Event("ToggleVisibility", eventInitParams);

/**
 * Retrun true if the style.display property is set to block or empty (element is visible),
 * @param elem HTMLElement
 * @returns boolean
 */
function isElementVisible(elem: HTMLElement): boolean {
  return ["visible", ""].includes(elem.style.visibility);
} //.

export { ToggleEvent, isElementVisible };
