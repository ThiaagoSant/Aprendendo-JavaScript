// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

const minhaIdade = 17,
      idadeParente = 58;

if (minhaIdade > idadeParente) {
  console.log("É maior");
}else if (minhaIdade === idadeParente) {
  console.log("É igual");
}else {
  console.log("É menor");
};

// Qual valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

//console.log(expressao) = 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var meuNome = 'Thiago';
var idade = 17;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;


console.log(
  !!meuNome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);


// Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O brasil tem maior população");
} else {
  console.log("A china tem maior população");
}

// O que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}//falso

// O que irá aparecer no console?

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}//Cão