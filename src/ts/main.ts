/**
 * main.ts
 * Main app.
 */

import { ToggleEvent, isElementVisible } from "./helpers";

function initToggleAllBtn(parentDiv: HTMLDivElement) {
  const toggleBtn = <HTMLButtonElement>(
    document.querySelector("#toggleAllVisibility")
  );
  toggleBtn.addEventListener("click", (ev: Event) => {
    const children = <HTMLCollection>parentDiv.children;
    for (let i = 0; i < children.length; i++) {
      children[i].dispatchEvent(ToggleEvent);
    }
  });
} //.

function initToggleChildren(parentDiv: HTMLDivElement) {
  const children = <HTMLCollection>parentDiv.children;
  for (let i = 0; i < children.length; i++) {
    const child = <HTMLDivElement>children[i];
    child.addEventListener("ToggleVisibility", (ev: Event) => {
      child.style.visibility = isElementVisible(child) ? "hidden" : "visible";
    });
    child.addEventListener("click", (ev: Event) => {
      child.style.visibility = isElementVisible(child) ? "hidden" : "visible";
    });
  }
} //.

// **********************************************
// * MutationObserver Demo
// **********************************************
function mutationObserverCallback(record: any) {
  console.log("attributes:", record);
  console.log("parent:", parentDiv);
} //.

const parentDiv = <HTMLDivElement>document.querySelector(".parent");
const observer = new MutationObserver(mutationObserverCallback);
const observerInit = <MutationObserverInit>{
  subtree: true,
  childList: false,
  attributeOldValue: true,
  attributes: true,
  attributeFilter: ["style"],
};
observer.observe(parentDiv, observerInit);

// Setup our elements
initToggleAllBtn(parentDiv);
initToggleChildren(parentDiv);
