const CONSUMO_AUTOMOVEL = 12;

function gastodeCombustivel(tempoGasto, velocidadeMedia){
const distancia = velocidadeMedia * tempoGasto;
const consumoFinal = distancia / CONSUMO_AUTOMOVEL;

return consumoFinal.toFixed(3);
}

console.log(gastodeCombustivel(10, 85));
console.log(gastodeCombustivel(2, 92));
console.log(gastodeCombustivel(22, 67));