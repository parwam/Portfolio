function initializeNavbarMenu() {
  const btn = document.getElementById("topbar-menu-btn");
  const list = document.querySelector(".topbar-menu");
  const nav = document.querySelector(".topbar-nav");

  if (!btn || !list) {
    return;
  }

  const closeBtnIcon = btn.querySelector("svg[data-state='close']");
  const openBtnIcon = btn.querySelector("svg[data-state='open']");
  const body = document.body;

  if (!closeBtnIcon || !openBtnIcon) {
    return;
  }

  function toggleMenu() {
    const isOpen = btn.getAttribute("data-topbarmenu-state") === "open";

    if (!isOpen) {
      // Open the menu
      btn.setAttribute("data-topbarmenu-state", "open");
      if (closeBtnIcon) closeBtnIcon.style.display = "block";
      if (openBtnIcon) openBtnIcon.style.display = "none";
      list.classList.add("translate-x-[640px]", "opacity-100");
      // document.documentElement.style.overflow = "hidden";
      body.style.overflow = "hidden";
      // list.style.overflowY = "auto";
      nav.style.overflowY = "auto";
    } else {
      // Close the menu
      btn.setAttribute("data-topbarmenu-state", "close");
      if (closeBtnIcon) closeBtnIcon.style.display = "none";
      if (openBtnIcon) openBtnIcon.style.display = "block";
      list.classList.remove("translate-x-[640px]", "opacity-100");
      // document.documentElement.style.overflow = "";
      body.style.overflow = "";
      // list.style.overflowY = "";
      nav.style.overflowY = "";
    }
  }

  // --- Event Handling ---
  const clickHandler = e => {
    e.preventDefault();
    toggleMenu();
  };

  // Clean up previous listener if any
  if (btn._navClickHandler) {
    btn.removeEventListener("click", btn._navClickHandler);
  }

  // Add the new listener and store its reference
  btn.addEventListener("click", clickHandler);
  btn._navClickHandler = clickHandler;

  // Initialize button state attribute if not present (e.g., on first load)
  if (!btn.hasAttribute("data-topbarmenu-state")) {
    // Assuming menu starts closed
    btn.setAttribute("data-topbarmenu-state", "close");
    if (closeBtnIcon) closeBtnIcon.style.display = "none";
    if (openBtnIcon) openBtnIcon.style.display = "block";
    list.classList.remove("opacity-100"); // Ensure opacity is initially off if closed
    list.classList.add("translate-x-[640px]"); // Ensure it's translated off-screen
  }
}

// Run on initial page load
initializeNavbarMenu();

// Run on subsequent page loads (client-side navigation)
// document.addEventListener("astro:page-load", initializeNavbarMenu);
document.addEventListener("astro:after-swap", initializeNavbarMenu);
