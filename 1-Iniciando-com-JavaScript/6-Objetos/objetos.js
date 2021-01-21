// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

  //const pessoa = {
  //  nome: "Thiago",
  //  sobrenome: "Santiago",
  //  idade: 17,
  //  pofissao: "Estagiário",
  //};

// Crie um método no objeto anterior, que mostre o seu nome completo

const pessoa = {
  nome: "Thiago",
  sobrenome: "Santiago",
  idade: 17,
  pofissao: "Estagiário",
  nomeCompleto (nome, sobrenome) {
    return `${this.nome} ${this.sobrenome}`
  },
};


// Modifique o valor da propriedade preco para 3000

const carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cao = {
  raca: "labrador",
  cor: "preta",
  idade: 10,
  latir () {
    const homemAvista = true;
    homemAvista ? console.log("Latir") : console.log("Não latir");
  },
};

