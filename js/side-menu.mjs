function openMenu() {
  const el = document.getElementById("side-menu-content");
  if (el) {
    el.setAttribute("data-visibile", "true");
  }
}

function closeMenu() {
  const el = document.getElementById("side-menu-content");
  if (el) {
    el.setAttribute("data-visibile", "false");
  }
}

function initializeSideMenu() {
  const btnOpen = document.getElementById("button-menu");
  if (btnOpen) {
    btnOpen.addEventListener("click", openMenu);
  }

  const btnClose = document.getElementById("button-close-menu");
  if (btnClose) {
    btnClose.addEventListener("click", closeMenu);
  }

  const menu = document.getElementById("side-menu-content");
  if (menu) {
    const elements = document.querySelectorAll("a");
    elements.forEach((item) => {
      item.addEventListener("click", closeMenu);
    });
  }
}

export default initializeSideMenu;
