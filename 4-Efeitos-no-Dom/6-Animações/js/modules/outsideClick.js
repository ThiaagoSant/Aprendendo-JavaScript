export default function outsideClick(element, callback) {
  const html = document.documentElement,
        outside = "data-outside";
  if (!element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener("click", handleOutsideClick));
    element.removeAttribute(outside);
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }
}