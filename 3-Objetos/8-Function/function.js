// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = Array.from(document.querySelectorAll("p"));

const totalCaracteres = paragrafos.reduce((acc, paragrafo) => {
  const totalCaracterParagrafo = paragrafo.innerText.length;
  return acc + totalCaracterParagrafo;
}, 0);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const section =  document.querySelector("section"),
        tagElement = document.createElement(tag),
        addClass = tagElement.classList.add(classe),
        conteudoElement = tagElement.innerHTML = conteudo;
  return body.appendChild(tagElement);
};

//novoElemento("div", "box", "minha box");

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const tituloH1 = novoElemento.bind(null, "h1", "titulo");
//tituloH1("ola, mundo");
