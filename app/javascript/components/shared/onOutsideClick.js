const onOutsideClick = (event, menuFunction) => {
  menuFunction();
  const container = event.target;

  const closeMenu = (mouseUpEvent) => {
    let clickedElement = mouseUpEvent.target;

    if (!container.contains(clickedElement) || clickedElement == container) {
      menuFunction();
      document.removeEventListener("mouseup", closeMenu);
    }
  };
  document.addEventListener("mouseup", closeMenu);
};

export default onOutsideClick;
