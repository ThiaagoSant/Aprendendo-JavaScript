// Remova o erro
//priceNumber('R$ 99,99');
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');



// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function somar(a,b) {
  const nome = "Thiago";
  return a + b;
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(() => {
  console.log("ativou");
})

