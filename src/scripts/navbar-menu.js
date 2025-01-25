let btn = document.getElementById("navbar-menu-btn");
btn.addEventListener("click", Menu);

function Menu() {
  let list = document.querySelector(".topbar-menu");

  if (btn.name === "menu") {
    btn.name = "close";

    list.classList.add("top-[45px]");
    list.classList.add("opacity-100");
  } else {
    btn.name = "menu";

    list.classList.remove("top-[45px]");
    list.classList.remove("opacity-100");
  }
}
