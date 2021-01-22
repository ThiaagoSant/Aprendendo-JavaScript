// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu"),
      copy = document.querySelector(".copy"),
      menuClone  = menu.cloneNode(true);

copy.appendChild(menuClone);


// Selecione o primeiro DT da dl de Faq

const faqLista = document.querySelectorAll(".faq-lista *")[0];

// Selecione o DD referente ao primeiro DT

faqLista.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector("#faq"),
      animais = document.querySelector("#animais");

faq.innerHTML = animais.innerHTML;

