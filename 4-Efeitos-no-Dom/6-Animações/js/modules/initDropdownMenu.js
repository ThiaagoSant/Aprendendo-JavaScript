import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, () => this.classList.remove("active"));
  }

  dropdownMenus.forEach((menu) => menu.addEventListener("click", handleClick));
}