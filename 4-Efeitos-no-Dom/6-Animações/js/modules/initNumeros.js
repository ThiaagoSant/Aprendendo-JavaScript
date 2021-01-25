export default function initNumeros() {
  
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = +numero.innerHTML,
            incremento = Math.round(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 15);

    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("animaScroll")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observeTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, {attributes: true});
}