let mario = document.querySelector('.mario');
let cano = document.querySelector('.cano');
let telaFin = document.querySelector('.fim');
let botaoReiniciar = document.querySelector('.reiniciar');

function pular(){
    mario.classList.add('pular');

    setTimeout(() => {
        mario.classList.remove('pular');
    }, 700);
}

document.addEventListener('keydown', () => {
    pular();
});

let loopDoJogo = setInterval(() => {

    let posicaoCano = cano.offsetLeft;
    let posicaoMario = parseInt(window.getComputedStyle(mario).bottom);

    // COLISÃO AJUSTADA PRO DINO TITÃ
    if (posicaoCano <= 360 && posicaoCano > 0 && posicaoMario < 250){

        cano.style.animation = 'none';
        cano.style.left = posicaoCano + 'px';

        mario.style.animation = 'none';
        mario.style.bottom = posicaoMario + 'px';

        mario.src = './img/game-over.gif';
        mario.style.width = '220px';

        telaFin.style.visibility = 'visible';

        clearInterval(loopDoJogo);
    }

}, 10);

function reiniciarJogo(){

    telaFin.style.visibility = 'hidden';

    cano.style.animation = 'mexerCano 1.8s infinite linear';
    cano.style.left = '';

    mario.src = './img/player.gif';
    mario.style.width = '280px';
    mario.style.bottom = '0px';
    mario.style.animation = '';

    loopDoJogo = setInterval(() => {

        let posicaoCano = cano.offsetLeft;
        let posicaoMario = parseInt(window.getComputedStyle(mario).bottom);

        if (posicaoCano <= 360 && posicaoCano > 0 && posicaoMario < 250){

            cano.style.animation = 'none';
            cano.style.left = posicaoCano + 'px';

            mario.style.animation = 'none';
            mario.style.bottom = posicaoMario + 'px';

            mario.src = './img/game-over.gif';
            mario.style.width = '220px';

            telaFin.style.visibility = 'visible';

            clearInterval(loopDoJogo);
        }

    }, 10);
}

botaoReiniciar.addEventListener('click', reiniciarJogo);