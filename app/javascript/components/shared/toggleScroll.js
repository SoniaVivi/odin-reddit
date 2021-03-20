const toggleScroll = () => {
  const bodyElem = document.querySelector("body");
  if (bodyElem.classList.contains("disable-scroll")) {
    bodyElem.classList.remove("disable-scroll");
  } else {
    bodyElem.classList.add("disable-scroll");
  }
};

export default toggleScroll;
