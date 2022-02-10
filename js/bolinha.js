//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 18;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametroBolinha / 2;

function bolinha() {
    mostraBolinha();
    movimentaBolinha();
}


function mostraBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    verificaColisaoBorda();
}

function verificaColisaoBorda() {
    //colisão borda da bolinha
    if (xBolinha >= 590 || xBolinha <= 10) {
        velocidadeXBolinha *= -1;
    }
    yBolinha += velocidadeYBolinha;
    if (yBolinha >= 390 || yBolinha <= 10) {
        velocidadeYBolinha *= -1;
    }

    //colisão borda da raquete
    if (yMinhaRaquete <= 2) {
        yMinhaRaquete = 2;
    }
    if (yMinhaRaquete >= 308) {
        yMinhaRaquete = 308;
    }

    //colisão borda raquete oponente
    if (yRaqueteOponente <= 2) {
        yRaqueteOponente = 2;
    }
    if (yRaqueteOponente >= 308) {
        yRaqueteOponente = 308;
    }
}