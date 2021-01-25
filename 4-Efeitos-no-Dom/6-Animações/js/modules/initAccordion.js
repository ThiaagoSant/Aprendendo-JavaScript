export default function initAccordion() {
  const dtLista = document.querySelectorAll("[data-accordion='lista'] dt"),
        className = "ativo";

  if (dtLista.length) {
    dtLista[0].nextElementSibling.classList.add(className);

    function ativaAccordion() {
      this.classList.toggle(className);
      this.nextElementSibling.classList.toggle(className);
    };

    dtLista.forEach(dt => dt.addEventListener("click", ativaAccordion));
  };
};