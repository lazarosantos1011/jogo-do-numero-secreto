listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female', {rate: 1.2}); // Portuguese Brazilian Female não funcionou
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 20');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =  `Você acertou o número secreto com ${numeroTentativas} ${palavraTentativa}.`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior que isso');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor que isso');
        }
        numeroTentativas++;
        limparCampo();
        }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/* Desafio aula 2 - Funções:

function olaMundo()
{
    console.log("Olá mundo!");
}

olaMundo();

function cumprimento(nome)
{
    console.log(`Olá, ${nome}!`);
}

cumprimento('Lázaro");

function dobrarNumero(numero) {
    return numero * 2;
}

console.log(dobrarNumero(2));

function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3
}

console.log(media(6, 7, 6));

function max(numero1, numero2) {
    return Math.max(numero1, numero2);
}

console.log(max(42, -132312));

function multiplicaPeloProprio(numero) {
    return numero * numero;
}

console.log(multiplicaPeloProprio(20));
*/