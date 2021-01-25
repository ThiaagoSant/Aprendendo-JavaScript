export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.cssText = `top: ${event.pageY + 20}px; left: ${event.pageX + 20}px;`;
    }
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"),
          text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  tooltips.forEach((tooltip) => tooltip.addEventListener("mouseover", onMouseOver))
}