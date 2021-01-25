export default function initAnimaScroll() {
  const allSections = document.querySelectorAll("[data-section]"),
        className = "animaScroll";

  if (allSections.length) {
    allSections[0].classList.add(className);

    function animationOnScroll() {
      const scrollTop = window.pageYOffset;

      allSections.forEach(section => {
        (scrollTop > section.offsetTop - 400) ? section.classList.add(className) : section.classList.remove(className);
      });
    };
    window.addEventListener("scroll", animationOnScroll);
  };

};
