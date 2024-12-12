//2-Uma fábrica de bolachas produz pacotes com 500 gramas cada e tem disponível um banco de dados
//contendo o peso de todos os pacotes por lote produzido.
//A partir desses dados, a fábrica quer saber qual a variação do maior e do menor pacote
//e quantos pacotes estão acima e quantos pacotes estão abaixo.
//Caso a variação ocorra em mais de 20% do lote, deve mostrar uma mensagem dizendo "lote com alta divergência",
//caso contrário, mostrar mensagem, "lote padrão".
//Gere um array contendo valores aleatórios entre 400 e 600, para poder usá-lo no exercício.


//!Criar uma função para gerar um array de pesos aleatorios

function pesosAleatorios(tamanho: number, min: number, max: number): number[] {
  return Array.from({length: tamanho}, () => Math.random() * (max - min) + min);
}

//!Criar uma função para analisar o lote de pacotes

function analisarLote(pesos: number[]): void {
  const menorPeso = pesos.reduce((min, peso) => Math.min(min, peso), Infinity);
  const maiorPeso = pesos.reduce((max, peso) => Math.max(max, peso), -Infinity);
  const variacao = maiorPeso - menorPeso;

  console.log(`Menor peso: ${menorPeso.toFixed(2)}g`);
  console.log(`Maior peso: ${maiorPeso.toFixed(2)}g`);
  console.log(`Variação: ${variacao.toFixed(2)}g`);
  console.log(`Pacotes acima de 500g: ${pesos.filter(p => p > 500).length}`);
  console.log(`Pacotes abaixo de 500g: ${pesos.filter(p => p < 500).length}`);

  console.log(variacao / 500 > 0.2 ? "Lote com alta divergência." : "Lote padrão.");
};

//!Gerar pesos e analisar 
analisarLote(pesosAleatorios(100, 400, 600));
