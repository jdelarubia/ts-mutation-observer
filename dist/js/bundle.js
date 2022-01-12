(function () {
    'use strict';

    /**
     * helpers.ts
     * Misc functions and Event definitions.
     */
    const eventInitParams = {
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
    function isElementVisible(elem) {
        return ["visible", ""].includes(elem.style.visibility);
    } //.

    /**
     * main.ts
     * Main app.
     */
    function initToggleAllBtn(parentDiv) {
        const toggleBtn = (document.querySelector("#toggleAllVisibility"));
        toggleBtn.addEventListener("click", (ev) => {
            const children = parentDiv.children;
            for (let i = 0; i < children.length; i++) {
                children[i].dispatchEvent(ToggleEvent);
            }
        });
    } //.
    function initToggleChildren(parentDiv) {
        const children = parentDiv.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.addEventListener("ToggleVisibility", (ev) => {
                child.style.visibility = isElementVisible(child) ? "hidden" : "visible";
            });
            child.addEventListener("click", (ev) => {
                child.style.visibility = isElementVisible(child) ? "hidden" : "visible";
            });
        }
    } //.
    // **********************************************
    // * MutationObserver Demo
    // **********************************************
    function mutationObserverCallback(record) {
        console.log("attributes:", record);
        console.log("parent:", parentDiv);
    } //.
    const parentDiv = document.querySelector(".parent");
    const observer = new MutationObserver(mutationObserverCallback);
    const observerInit = {
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

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvaGVscGVycy5qcyIsIi4uLy4uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBoZWxwZXJzLnRzXHJcbiAqIE1pc2MgZnVuY3Rpb25zIGFuZCBFdmVudCBkZWZpbml0aW9ucy5cclxuICovXHJcbmNvbnN0IGV2ZW50SW5pdFBhcmFtcyA9IHtcclxuICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgY29tcG9zZWQ6IHRydWUsXHJcbn07XHJcbmNvbnN0IFRvZ2dsZUV2ZW50ID0gbmV3IEV2ZW50KFwiVG9nZ2xlVmlzaWJpbGl0eVwiLCBldmVudEluaXRQYXJhbXMpO1xyXG4vKipcclxuICogUmV0cnVuIHRydWUgaWYgdGhlIHN0eWxlLmRpc3BsYXkgcHJvcGVydHkgaXMgc2V0IHRvIGJsb2NrIG9yIGVtcHR5IChlbGVtZW50IGlzIHZpc2libGUpLFxyXG4gKiBAcGFyYW0gZWxlbSBIVE1MRWxlbWVudFxyXG4gKiBAcmV0dXJucyBib29sZWFuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlKGVsZW0pIHtcclxuICAgIHJldHVybiBbXCJ2aXNpYmxlXCIsIFwiXCJdLmluY2x1ZGVzKGVsZW0uc3R5bGUudmlzaWJpbGl0eSk7XHJcbn0gLy8uXHJcbmV4cG9ydCB7IFRvZ2dsZUV2ZW50LCBpc0VsZW1lbnRWaXNpYmxlIH07XHJcbiIsIi8qKlxyXG4gKiBtYWluLnRzXHJcbiAqIE1haW4gYXBwLlxyXG4gKi9cclxuaW1wb3J0IHsgVG9nZ2xlRXZlbnQsIGlzRWxlbWVudFZpc2libGUgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmZ1bmN0aW9uIGluaXRUb2dnbGVBbGxCdG4ocGFyZW50RGl2KSB7XHJcbiAgICBjb25zdCB0b2dnbGVCdG4gPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVBbGxWaXNpYmlsaXR5XCIpKTtcclxuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnREaXYuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbltpXS5kaXNwYXRjaEV2ZW50KFRvZ2dsZUV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSAvLy5cclxuZnVuY3Rpb24gaW5pdFRvZ2dsZUNoaWxkcmVuKHBhcmVudERpdikge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnREaXYuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiVG9nZ2xlVmlzaWJpbGl0eVwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9IGlzRWxlbWVudFZpc2libGUoY2hpbGQpID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuc3R5bGUudmlzaWJpbGl0eSA9IGlzRWxlbWVudFZpc2libGUoY2hpbGQpID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IC8vLlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogTXV0YXRpb25PYnNlcnZlciBEZW1vXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrKHJlY29yZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhdHRyaWJ1dGVzOlwiLCByZWNvcmQpO1xyXG4gICAgY29uc29sZS5sb2coXCJwYXJlbnQ6XCIsIHBhcmVudERpdik7XHJcbn0gLy8uXHJcbmNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyZW50XCIpO1xyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFjayk7XHJcbmNvbnN0IG9ic2VydmVySW5pdCA9IHtcclxuICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICBjaGlsZExpc3Q6IGZhbHNlLFxyXG4gICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXHJcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiXSxcclxufTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShwYXJlbnREaXYsIG9ic2VydmVySW5pdCk7XHJcbi8vIFNldHVwIG91ciBlbGVtZW50c1xyXG5pbml0VG9nZ2xlQWxsQnRuKHBhcmVudERpdik7XHJcbmluaXRUb2dnbGVDaGlsZHJlbihwYXJlbnREaXYpO1xyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQSxNQUFNLGVBQWUsR0FBRztJQUN4QixJQUFJLE9BQU8sRUFBRSxJQUFJO0lBQ2pCLElBQUksVUFBVSxFQUFFLElBQUk7SUFDcEIsSUFBSSxRQUFRLEVBQUUsSUFBSTtJQUNsQixDQUFDLENBQUM7SUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNuRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7SUFDaEMsSUFB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
