const readline = require('readline');
const { identificarBandeira } = require('./bandeiras/index');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Iniciando aplicação...'); // Adicione esta linha

rl.question('Digite o número do cartão de crédito: ', (numeroCartao) => {
    const bandeira = identificarBandeira(numeroCartao);
    console.log(`A bandeira do cartão é: ${bandeira}`);
    rl.close();
});