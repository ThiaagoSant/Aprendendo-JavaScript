import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const btnMenu = document.querySelector("[data-menu='button']"),
        listMenu = document.querySelector("[data-menu='list']");
  
  function ativaMenu(event) {
    this.classList.add("active");
    listMenu.classList.add("active");
    
    outsideClick(listMenu,() => {
      btnMenu.classList.remove("active");
      listMenu.classList.remove("active");
    }); 
  }
  btnMenu.addEventListener("click", ativaMenu);
}