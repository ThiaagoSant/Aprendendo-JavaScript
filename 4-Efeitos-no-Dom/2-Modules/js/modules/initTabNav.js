export default function initTabNav() {
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
