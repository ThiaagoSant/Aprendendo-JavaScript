export default function initSmoothScroll(){
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
