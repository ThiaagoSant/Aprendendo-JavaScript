// Retorne no console todas as imagens do site

const todasImgs = document.querySelectorAll("img");

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgAnimais = document.querySelectorAll("img[src^='img/imagem']");

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll("a[href^='#']");

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");

// Selecione o último p do site

const todosP = document.querySelectorAll("p");
const ultimoP = document.querySelectorAll("p").item(todosP.length-1);