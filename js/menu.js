"use strict";

const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");
const navigationLinks = document.querySelectorAll(".site-navigation__link");

if (menuToggle && navigation) {
  const openMenu = () => {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Menu sluiten");
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menu openen");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    const menuIsOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  menuToggle.addEventListener("click", toggleMenu);

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}