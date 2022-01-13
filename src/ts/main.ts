/**
 * main.ts
 * Main app.
 */

import { ToggleEvent } from "./helpers";

/**UTIL
 * Return true if all of parent's children are hidden.
 * @param parent HTMLDivElement
 * @returns boolean
 */
function doesElementContainAnyChildren(parent: HTMLDivElement): boolean {
  const children = <HTMLCollection>parent.children;
  for (let i = 0; i < children.length; i++) {
    if (!children[i].classList.contains("hidden")) return false;
  }
  return true;
} //.

/**UTIL
 * Hide parent if all of its children are hidden.
 */
function checkAndHideParent(parent: HTMLDivElement) {
  if (doesElementContainAnyChildren(parent)) parent.classList.add("hidden");
  else parent.classList.remove("hidden");
} //.

// **********************************************
// * Setup our elements
// **********************************************

/**
 * Attach events to our 'toggleAllButton'.
 * @param parent HTMLDivElement
 */
function setupToggleAllBtn(parent: HTMLDivElement) {
  document
    .querySelector("#toggleAllVisibility")!
    .addEventListener("click", (ev: Event) => {
      const children = <HTMLCollection>parent.children;
      for (let i = 0; i < children.length; i++) {
        children[i].dispatchEvent(ToggleEvent);
      }
      checkAndHideParent(parent);
    });
} //.

/**
 * Attach a 'ToggleVisibility' event to parent.
 * @param parent HTMLDivElement
 */
function setupToggleParent(parent: HTMLDivElement) {
  parent.addEventListener("ToggleVisibility", (ev: Event) => {
    parent.classList.toggle("hidden");
  });
} //.

/**
 * Make each parent's child listen to both 'click' and 'ToggleVisibility'.
 * Hide each child and check parent for emptyness.
 * @param parent HTMLDivElement
 */
function setupToggleChildren(parent: HTMLDivElement) {
  const children = <HTMLCollection>parent.children;
  for (let i = 0; i < children.length; i++) {
    const child = <HTMLDivElement>children[i];
    child.addEventListener("ToggleVisibility", (ev: Event) => {
      child.classList.toggle("hidden");
      checkAndHideParent(parent);
    });
    child.addEventListener("click", (ev: Event) => {
      child.classList.toggle("hidden");
      checkAndHideParent(parent);
    });
  }
} //.

// **********************************************
// * MutationObserver Demo
// **********************************************

/**
 * External callback function for our MutationObserver.
 * @param record object
 */
function mutationObserverCallback(record: object) {
  console.log("*** MUTATIONOBSERVER ***");
  console.log("attributes:", record);
} //.

/**
 * Given a main container element (parent) setup a MutationObserver on its class attribute.
 * @param parentdiv HTMLDivElement
 */
function setupObserver(parentdiv: HTMLDivElement) {
  const observer = new MutationObserver(mutationObserverCallback);
  const observerInit = <MutationObserverInit>{
    subtree: true,
    childList: false,
    attributeOldValue: true,
    attributes: true,
    attributeFilter: ["class"],
    characterData: true,
    characterDataOldValue: true,
  };
  observer.observe(parentDiv, observerInit);
} //.

// **********************************************
// * MAIN PROCESS *
// **********************************************

/**
 * Setup and run our application.
 * @param parentDiv HTMLDivElement
 */
function runApp(parentDiv: HTMLDivElement) {
  setupToggleParent(parentDiv);
  setupToggleAllBtn(parentDiv);
  setupToggleChildren(parentDiv);
  setupObserver(parentDiv);
} //.

const parentDiv = <HTMLDivElement>document.querySelector(".parent"); // main container
runApp(parentDiv);
