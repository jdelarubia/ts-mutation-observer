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

export { ToggleEvent };
