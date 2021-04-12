/*
   Styles that are overridden by page-specific stylesheets do not properly
   unload when going to another page that does not require them
   (i.e. /f/test-origin -> /)
   Due to issues using various event listeners to watch when the page changes
   the reload module is on a timer
*/

const reload = (() => {
  const start = () => {
    window.setTimeout(() => {
      const styleElems = document.querySelectorAll(".page-specific");
      const [currentController, currentAction] = _getPresentLocation();

      for (const style of styleElems) {
        const controller = style.getAttribute("controller");
        const action = style.getAttribute("action");

        if (
          controller == currentController &&
          action == currentAction &&
          style.hasAttribute("disabled")
        ) {
          style.removeAttribute("disabled");
        } else if (
          (controller != currentController || action != currentAction) &&
          !style.hasAttribute("disabled")
        ) {
          style.setAttribute("disabled", "true");
        }
      }

      start();
    }, 10);
  };

  const _getPresentLocation = () => {
    const locationElem = document.querySelector(".location");
    return [
      locationElem.getAttribute("controller"),
      locationElem.getAttribute("action"),
    ];
  };

  return { start };
})();
window.onload = () => {
  reload.start();
};
