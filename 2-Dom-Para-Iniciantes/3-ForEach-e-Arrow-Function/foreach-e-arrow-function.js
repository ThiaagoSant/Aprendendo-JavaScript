// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll("p");

paragrafos.forEach(paragrafo => console.log(/*paragrafo*/));

// Mostre o texto dos parágrafos no console

paragrafos.forEach(paragrafo => console.log(/*paragrafo.innerHTML*/));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

//errado:

//imgs.forEach(item, index => {
//  console.log(item, index);
//});

//let i = 0;
//imgs.forEach( => {
//  console.log(i++);
//});

//corrigido:

imgs.forEach((img, index) => {
  console.log(img, index);
});

let i = 0;
imgs.forEach(img => {
  console.log(i++);
});





