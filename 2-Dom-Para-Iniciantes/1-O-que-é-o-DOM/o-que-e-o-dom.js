// Retorne o url da página atual utilizando o objeto window

const href = window.location.href;

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector(".ativo");

// Retorne a linguagem do navegador

const linguagemNavegador = document.querySelector("html").getAttribute("lang");

// Retorne a largura da janela 

const larguraJanela = window.innerWidth;