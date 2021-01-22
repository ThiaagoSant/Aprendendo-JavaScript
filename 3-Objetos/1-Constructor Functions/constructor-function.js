// Transforme o objeto abaixo em uma Constructor Function
//const pessoa = {
//  nome: 'Nome pessoa',
//  idade: 0,
//  andar() {
//    console.log(this.nome + ' andou');
//  }
//}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(this.nome + ' andou');
  }
}

const thiago = new Pessoa("Thiago", 17);
thiago.andar();

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("João", 20);
joao.andar();

const maria = new Pessoa("Maria", 25);
maria.andar();

const bruno = new Pessoa("Bruno", 15);
bruno.andar();

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elemento){
  this.elements = document.querySelectorAll(elemento);
  
  this.addClass = (classe) => {
    this.elements.forEach(element => {
      element.classList.add(classe);
    });
  };
  
  this.removeClass = (classe) => {
    this.elements.forEach(element => {
      element.classList.remove(classe);
    });
  };
};

const lista = new Dom("li");
lista.addClass("ativo");