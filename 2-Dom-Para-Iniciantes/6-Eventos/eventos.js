// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const linksInternos = document.querySelectorAll("a");

function addAtivo(event) {
  event.preventDefault();
  linksInternos.forEach(linkInterno => {
    linkInterno.classList.remove("ativo");
  });
  const link = event.currentTarget.classList.add("ativo");
};

linksInternos.forEach(link => link.addEventListener("click", addAtivo));

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function elSelecionado(event) {
  //console.log(this);
};

todosElementos.forEach(elemento => elemento.addEventListener("click", elSelecionado));


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


function removeElemento(event) {
  event.target.remove();
};


todosElementos.forEach(elemento => elemento.addEventListener("click", removeElemento));

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleKeyBoard(event){
  const html = document.querySelector("html");
  if (event.key == "t") html.classList.toggle("aumentaFont");
}

window.addEventListener("keydown", handleKeyBoard);