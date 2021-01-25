export default function initModal() {
  const modalContainer = document.querySelector("[data-modal='container']"),
        abrirEfechar = document.querySelectorAll("[data-modal='abrir'], [data-modal='fechar']");

  if (modalContainer && abrirEfechar.length) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function outsideClick(event) {
      if (event.target == modalContainer) toggleModal(event);
    }

    abrirEfechar.forEach((element) => element.addEventListener("click", toggleModal));
    modalContainer.addEventListener("click", outsideClick);
  }
}