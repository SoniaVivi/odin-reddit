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
      const style = document.querySelector(".page-specific");
      if (style && window.location.href.match(/f\/(.*)\//) === null) {
        style.setAttribute("disabled", "true"); //Allows styles to "reload" when
      } else if (
        //going index -> post -> index
        style.hasAttribute("disabled") && //using the history back/forward
        window.location.href.match(/f\/(.*)\//) //buttons
      ) {
        style.removeAttribute("disabled");
      }

      start();
    }, 10);
  };
  return { start };
})();
window.onload = () => {
  reload.start();
};
