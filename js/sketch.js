//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;

let velocidadeXBolinha = 0.5;
let velocidadeYBolinha = 0.5;

//pontuação
let meuPonto = 0;
let pontoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);  
  mostraBolinha();
  movimentaBolinha();
  rect();
}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametroBolinha);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  verificaColisaoBorda();
}

function verificaColisaoBorda(){
    if(xBolinha >= 590 || xBolinha <= 10){
        velocidadeXBolinha *= -1;
      }
      yBolinha += velocidadeYBolinha;
      if(yBolinha >= 390 || yBolinha <= 10){
        velocidadeYBolinha *= -1;
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