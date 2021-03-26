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
      for (const style of styleElems) {
        if (style && window.location.href.match(/f\/(.*)\//) === null) {
          style.setAttribute("disabled", "true");
        } else if (
          style.hasAttribute("disabled") &&
          window.location.href.match(/f\/(.*)\//)
        ) {
          style.removeAttribute("disabled");
        }
      }

      start();
    }, 10);
  };
  return { start };
})();
window.onload = () => {
  reload.start();
};
