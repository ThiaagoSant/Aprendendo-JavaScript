// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTotalTaxa = 0,
    valorTotalRecebimento = 0;

transacoes.forEach(transacao => {
  (transacao.descricao.startsWith("Taxa")) ? valorTotalTaxa += +transacao.valor.replace("R$", "").trim() : valorTotalRecebimento += +transacao.valor.replace("R$", "").trim();
});

//console.log(`Valor total das Taxas: ${valorTotalTaxa}
//Valor total dos Recebimentos: ${valorTotalRecebimento}
//Valor total de taxas e recebimentos: ${valorTotalTaxa + valorTotalRecebimento}
//`);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(";");

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo = html.split("span").join("a");


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
frase.slice(-1);
frase[frase.length - 1];
frase.charAt(frase.length -1)

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totaltaxas = 0;

transacoes2.forEach(item => {
  if (item.toLowerCase().trim().startsWith("taxa")) totaltaxas++;
});

console.log(`Total de taxas: ${totaltaxas}`);