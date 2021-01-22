// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector("img").offsetTop;

// Retorne a soma da largura de todas as imagens

const todasImgs = document.querySelectorAll("img");

let somaImgs = 0;
todasImgs.forEach(img => {
  img.getBoundingClientRect();
  somaImgs = somaImgs + img.width;
});

//console.log(somaImgs);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksSite = document.querySelectorAll("a");

linksSite.forEach(link => {
  link.getBoundingClientRect();
  (link.clientWidth >= 48 && link.clientHeight >= 48) ? console.log(link, "Possui o mínimo recomendado") : console.log(link, "Não possui o mínimo recomendado");
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const nav = document.querySelector("nav");
const menuMobile = window.matchMedia("(max-width: 720px)");

(menuMobile.matches) ? nav.classList.add("menu-mobile") : nav.classList.remove("menu-mobile");