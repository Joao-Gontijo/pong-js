//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 0;
let raio = diametroBolinha / 2;
//pontuação
let meuPonto = 0;
let pontoOponente = 0;

//raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150;
let minhaRaqueteComprimento = 10;
let minhaRaqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);  
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete();
  movimentaMinhaRaquete();
  verficacaoColisaoRaquete();
}


function mostraRaquete(){
    rect(xMinhaRaquete, yMinhaRaquete, minhaRaqueteComprimento, minhaRaqueteAltura);
}

function movimentaMinhaRaquete(){
    if(keyIsDown(UP_ARROW)){
        yMinhaRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yMinhaRaquete += 10;
    }
}

function verficacaoColisaoRaquete(){
    if((xBolinha - raio) < (xMinhaRaquete + minhaRaqueteComprimento) 
    && (yBolinha - raio) < (yMinhaRaquete + minhaRaqueteAltura)
    && (yBolinha + raio) > (yMinhaRaquete)){
        velocidadeXBolinha *= -1;
    }
}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametroBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  verificaColisaoBorda();
}

function verificaColisaoBorda(){
    //colisão borda da bolinha
    if(xBolinha >= 590 || xBolinha <= 10){
        velocidadeXBolinha *= -1;
    }
    yBolinha += velocidadeYBolinha;
    if(yBolinha >= 390 || yBolinha <= 10){
        velocidadeYBolinha *= -1;
    }

    //colisão borda da raquete
    if(yMinhaRaquete <= 2){
        yMinhaRaquete = 2;
    }
    if(yMinhaRaquete >= 308){
        yMinhaRaquete = 308;
    }
}

function pontuacao(){
  if(xBolinha == 0){
    pontoOponente += 1;
  }
  if(xBolinha == 600){
    meuPonto += 1;
  }
}