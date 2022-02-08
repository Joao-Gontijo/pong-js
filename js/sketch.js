let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;

let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

//pontuação
let meuPonto = 0;
let pontoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);  
  circle(xBolinha,yBolinha,diametroBolinha);
  
  bordas();
}

function bordas(){
  xBolinha += velocidadeXBolinha;
  if(xBolinha >= 600 || xBolinha <= 0){
    velocidadeXBolinha *= -1;
  }
  yBolinha += velocidadeYBolinha;
  if(yBolinha >= 400 || yBolinha <= 0){
    velocidadeYBolinha *= -1;
  }//pontuacao();
}

function pontuacao(){
  if(xBolinha == 0){
    pontoOponente += 1;
  }
  if(xBolinha == 600){
    meuPonto += 1;
  }
}