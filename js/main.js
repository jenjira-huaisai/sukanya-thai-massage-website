/* =========================================================
   Sukanya Oosterse Massage Techniek
   Main JavaScript
========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation();
  updateCopyrightYear();
});

/* =========================================================
   Navigation
========================================================= */

function initializeNavigation() {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".site-navigation");

  if (!menuButton || !navigation) {
    return;
  }

  const navigationLinks = navigation.querySelectorAll(
    ".site-navigation__link"
  );

  function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Menu sluiten");

    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Menu openen");

    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    const menuIsOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuButton.addEventListener("click", toggleMenu);

  navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      closeMenu();
    }
  });
}

/* =========================================================
   Copyright year
========================================================= */

function updateCopyrightYear() {
  const currentYearElement =
    document.querySelector("#current-year");

  if (!currentYearElement) {
    return;
  }

  currentYearElement.textContent =
    new Date().getFullYear().toString();
}