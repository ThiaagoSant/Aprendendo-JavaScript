// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const mudarCor = setInterval(() => {
  document.body.classList.toggle("ativo");
}, 2000);


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector(".iniciar"),
      pausar = document.querySelector(".pausar"),
      tempo = document.querySelector(".tempo");

let contador = 1,
    tempoAtual;


function iniciaCronometro() {
  tempoAtual = setInterval(() => {
    tempo.innerText = contador++;
  }, 1000)
  iniciar.setAttribute("disabled", "");
}

function pausaCronometro() {
  clearInterval(tempoAtual);
  iniciar.removeAttribute("disabled", "");
}

function resetCronometro() {
  tempo.innerText = `${contador = 0}`;
}

iniciar.addEventListener("click", iniciaCronometro);
pausar.addEventListener("click", pausaCronometro)
pausar.addEventListener("dblclick", resetCronometro);