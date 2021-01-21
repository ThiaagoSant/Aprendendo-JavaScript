// Crie uma função para verificar se um valor é Truthy

const isTrue = (valor) => {
  return !!valor;
};

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

const calculaPerimetro = (lado) => {
  return lado * 4;
};

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

const nomeCompleto = (nome, sobrenome) => {
  const nomeInteiro = `${nome} ${sobrenome}`;
  return nomeInteiro;
};

// Crie uma função que verifica se um número é par

const parimpar = (num) => {
  const resultado = (num % 2 == 0) ? console.log("É par") : console.log("É impar");
  return resultado;
};

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const typeOf = (argumento) => {
  const tipoArgumento = typeof(argumento);
  return tipoArgumento;
};


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

window.addEventListener("scroll", function() {
  console.log("Thiago Santiago");
});

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  //var totalPaises = 193; //erro
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

