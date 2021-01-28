// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCep = document.querySelector("#cep"),
      btncep = document.querySelector("#btnCep"),
      resultCep = document.querySelector(".resultadoCep");
btncep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(r => r.text())
  .then(body => {
    resultCep.innerText = body;
  })
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btc = document.querySelector(".btc");

function buscaBtc() {
  fetch("https://blockchain.info/ticker")
  .then(r => r.json())
  .then(btcJson => {
    let valorBtc = btcJson.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    btc.innerText = valorBtc;
  })
}

//setInterval(buscaBtc, 1000 * 30);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadaEl = document.querySelector(".piada"),
      piadaBtn = document.querySelector(".proxima");

piadaBtn.addEventListener("click", retornaPiada);

function retornaPiada(event) {
  event.preventDefault();
  fetch("https://api.chucknorris.io/jokes/random")
  .then(r => r.json())
  .then(piada => {
    piadaEl.innerText = piada.value;
  })
}




