function initTabNav() {
  const dataClick = document.querySelectorAll("[data-click]"),
        dataTarget = document.querySelectorAll("[data-target]"),
        className = "ativo";
  if (dataClick.length && dataTarget.length) {
    dataTarget[0].classList.add(className);

    function tabNavegation(event) {
      const click = event.target.dataset.click,
            target = document.querySelector("[data-target='"+ click +"']");

      dataTarget.forEach(target => target.classList.remove(className));
      target.classList.add(className);
    };

    dataClick.forEach(click => click.addEventListener("click", tabNavegation));
  };
};

initTabNav();

function initAccordion() {
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

initAccordion();

function initSmoothScroll(){
  const href = document.querySelectorAll(".menu a[href^='#']");

  function smoothScroll(event) {
    event.preventDefault();
    const link = event.currentTarget.getAttribute("href"),
          sectionTop = document.querySelector(link).offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  href.forEach(link => link.addEventListener("click", smoothScroll));
}

initSmoothScroll();

function initAnimaScroll() {
  const allSections = document.querySelectorAll("[data-section]"),
        className = "animaScroll";

  if (allSections.length) {
    allSections[0].classList.add(className);

    function animationOnScroll() {
      const scrollTop = window.pageYOffset;

      allSections.forEach(section => {
        (scrollTop > section.offsetTop - 400)
          ? section.classList.add(className)
          : section.classList.remove(className)
      });
    };
  };

  window.addEventListener("scroll", animationOnScroll);
};

initAnimaScroll();



