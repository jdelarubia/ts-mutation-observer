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
     * main.ts
     * Main app.
     */
    /**UTIL
     * Return true if all of parent's children are hidden.
     * @param parent HTMLDivElement
     * @returns boolean
     */
    function doesElementContainAnyChildren(parent) {
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            if (!children[i].classList.contains("hidden"))
                return false;
        }
        return true;
    } //.
    /**UTIL
     * Hide parent if all of its children are hidden.
     */
    function checkAndHideParent(parent) {
        if (doesElementContainAnyChildren(parent))
            parent.classList.add("hidden");
        else
            parent.classList.remove("hidden");
    } //.
    // **********************************************
    // * Setup our elements
    // **********************************************
    /**
     * Attach events to our 'toggleAllButton'.
     * @param parent HTMLDivElement
     */
    function setupToggleAllBtn(parent) {
        document
            .querySelector("#toggleAllVisibility")
            .addEventListener("click", (ev) => {
            const children = parent.children;
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
    function setupToggleParent(parent) {
        parent.addEventListener("ToggleVisibility", (ev) => {
            parent.classList.toggle("hidden");
        });
    } //.
    /**
     * Make each parent's child listen to both 'click' and 'ToggleVisibility'.
     * Hide each child and check parent for emptyness.
     * @param parent HTMLDivElement
     */
    function setupToggleChildren(parent) {
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.addEventListener("ToggleVisibility", (ev) => {
                child.classList.toggle("hidden");
                checkAndHideParent(parent);
            });
            child.addEventListener("click", (ev) => {
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
    function mutationObserverCallback(record) {
        console.log("*** MUTATIONOBSERVER ***");
        console.log("attributes:", record);
    } //.
    /**
     * Given a main container element (parent) setup a MutationObserver on its class attribute.
     * @param parentdiv HTMLDivElement
     */
    function setupObserver(parentdiv) {
        const observer = new MutationObserver(mutationObserverCallback);
        const observerInit = {
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
    function runApp(parentDiv) {
        setupToggleParent(parentDiv);
        setupToggleAllBtn(parentDiv);
        setupToggleChildren(parentDiv);
        setupObserver();
    } //.
    const parentDiv = document.querySelector(".parent"); // main container
    runApp(parentDiv);

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvaGVscGVycy5qcyIsIi4uLy4uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBoZWxwZXJzLnRzXHJcbiAqIE1pc2MgZnVuY3Rpb25zIGFuZCBFdmVudCBkZWZpbml0aW9ucy5cclxuICovXHJcbmNvbnN0IGV2ZW50SW5pdFBhcmFtcyA9IHtcclxuICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgY29tcG9zZWQ6IHRydWUsXHJcbn07XHJcbmNvbnN0IFRvZ2dsZUV2ZW50ID0gbmV3IEV2ZW50KFwiVG9nZ2xlVmlzaWJpbGl0eVwiLCBldmVudEluaXRQYXJhbXMpO1xyXG5leHBvcnQgeyBUb2dnbGVFdmVudCB9O1xyXG4iLCIvKipcclxuICogbWFpbi50c1xyXG4gKiBNYWluIGFwcC5cclxuICovXHJcbmltcG9ydCB7IFRvZ2dsZUV2ZW50IH0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG4vKipVVElMXHJcbiAqIFJldHVybiB0cnVlIGlmIGFsbCBvZiBwYXJlbnQncyBjaGlsZHJlbiBhcmUgaGlkZGVuLlxyXG4gKiBAcGFyYW0gcGFyZW50IEhUTUxEaXZFbGVtZW50XHJcbiAqIEByZXR1cm5zIGJvb2xlYW5cclxuICovXHJcbmZ1bmN0aW9uIGRvZXNFbGVtZW50Q29udGFpbkFueUNoaWxkcmVuKHBhcmVudCkge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFjaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59IC8vLlxyXG4vKipVVElMXHJcbiAqIEhpZGUgcGFyZW50IGlmIGFsbCBvZiBpdHMgY2hpbGRyZW4gYXJlIGhpZGRlbi5cclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrQW5kSGlkZVBhcmVudChwYXJlbnQpIHtcclxuICAgIGlmIChkb2VzRWxlbWVudENvbnRhaW5BbnlDaGlsZHJlbihwYXJlbnQpKVxyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG59IC8vLlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogU2V0dXAgb3VyIGVsZW1lbnRzXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLyoqXHJcbiAqIEF0dGFjaCBldmVudHMgdG8gb3VyICd0b2dnbGVBbGxCdXR0b24nLlxyXG4gKiBAcGFyYW0gcGFyZW50IEhUTUxEaXZFbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXR1cFRvZ2dsZUFsbEJ0bihwYXJlbnQpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlQWxsVmlzaWJpbGl0eVwiKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjaGlsZHJlbltpXS5kaXNwYXRjaEV2ZW50KFRvZ2dsZUV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tBbmRIaWRlUGFyZW50KHBhcmVudCk7XHJcbiAgICB9KTtcclxufSAvLy5cclxuLyoqXHJcbiAqIEF0dGFjaCBhICdUb2dnbGVWaXNpYmlsaXR5JyBldmVudCB0byBwYXJlbnQuXHJcbiAqIEBwYXJhbSBwYXJlbnQgSFRNTERpdkVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIHNldHVwVG9nZ2xlUGFyZW50KHBhcmVudCkge1xyXG4gICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJUb2dnbGVWaXNpYmlsaXR5XCIsIChldikgPT4ge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbn0gLy8uXHJcbi8qKlxyXG4gKiBNYWtlIGVhY2ggcGFyZW50J3MgY2hpbGQgbGlzdGVuIHRvIGJvdGggJ2NsaWNrJyBhbmQgJ1RvZ2dsZVZpc2liaWxpdHknLlxyXG4gKiBIaWRlIGVhY2ggY2hpbGQgYW5kIGNoZWNrIHBhcmVudCBmb3IgZW1wdHluZXNzLlxyXG4gKiBAcGFyYW0gcGFyZW50IEhUTUxEaXZFbGVtZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXR1cFRvZ2dsZUNoaWxkcmVuKHBhcmVudCkge1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiVG9nZ2xlVmlzaWJpbGl0eVwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2hlY2tBbmRIaWRlUGFyZW50KHBhcmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjaGVja0FuZEhpZGVQYXJlbnQocGFyZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSAvLy5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyAqIE11dGF0aW9uT2JzZXJ2ZXIgRGVtb1xyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qKlxyXG4gKiBFeHRlcm5hbCBjYWxsYmFjayBmdW5jdGlvbiBmb3Igb3VyIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAqIEBwYXJhbSByZWNvcmQgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2socmVjb3JkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIioqKiBNVVRBVElPTk9CU0VSVkVSICoqKlwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlczpcIiwgcmVjb3JkKTtcclxufSAvLy5cclxuLyoqXHJcbiAqIEdpdmVuIGEgbWFpbiBjb250YWluZXIgZWxlbWVudCAocGFyZW50KSBzZXR1cCBhIE11dGF0aW9uT2JzZXJ2ZXIgb24gaXRzIGNsYXNzIGF0dHJpYnV0ZS5cclxuICogQHBhcmFtIHBhcmVudGRpdiBIVE1MRGl2RWxlbWVudFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBPYnNlcnZlcihwYXJlbnRkaXYpIHtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25PYnNlcnZlckNhbGxiYWNrKTtcclxuICAgIGNvbnN0IG9ic2VydmVySW5pdCA9IHtcclxuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkTGlzdDogZmFsc2UsXHJcbiAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXHJcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCJdLFxyXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50RGl2LCBvYnNlcnZlckluaXQpO1xyXG59IC8vLlxyXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vICogTUFJTiBQUk9DRVNTICpcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vKipcclxuICogU2V0dXAgYW5kIHJ1biBvdXIgYXBwbGljYXRpb24uXHJcbiAqIEBwYXJhbSBwYXJlbnREaXYgSFRNTERpdkVsZW1lbnRcclxuICovXHJcbmZ1bmN0aW9uIHJ1bkFwcChwYXJlbnREaXYpIHtcclxuICAgIHNldHVwVG9nZ2xlUGFyZW50KHBhcmVudERpdik7XHJcbiAgICBzZXR1cFRvZ2dsZUFsbEJ0bihwYXJlbnREaXYpO1xyXG4gICAgc2V0dXBUb2dnbGVDaGlsZHJlbihwYXJlbnREaXYpO1xyXG4gICAgc2V0dXBPYnNlcnZlcihwYXJlbnREaXYpO1xyXG59IC8vLlxyXG5jb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhcmVudFwiKTsgLy8gbWFpbiBjb250YWluZXJcclxucnVuQXBwKHBhcmVudERpdik7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLE1BQU0sZUFBZSxHQUFHO0lBQ3hCLElBQUksT0FBTyxFQUFFLElBQUk7SUFDakIsSUFBSSxVQUFVLEVBQUUsSUFBSTtJQUNwQixJQUFJLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUMsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQzs7SUNUbEU7SUFDQTtJQUNBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFD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
