//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 0;
let raio = diametroBolinha / 2;
//pontuação
let meuPonto = 0;
let pontoOponente = 0;


//raquetes
let raqueteComprimento = 10;
let raqueteAltura = 90;
//minha raquete
let xMinhaRaquete = 5;
let yMinhaRaquete = 150;
//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);  
  bolinha();
  minhaRaquete();
  raqueteOponente();
  pontuacao();
}

function bolinha(){
  mostraBolinha();
  movimentaBolinha();
}

function minhaRaquete(){
  mostraRaquetes(xMinhaRaquete, yMinhaRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquetesLib(xMinhaRaquete, yMinhaRaquete);
}

function raqueteOponente(){
  mostraRaquetes(xRaqueteOponente, yRaqueteOponente);
  //movimentaRaqueteOponente();
  verificaColisaoRaquetesLib(xRaqueteOponente, yRaqueteOponente);
}

function mostraRaquetes(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function movimentaMinhaRaquete(){
    if(keyIsDown(UP_ARROW)){
        yMinhaRaquete -= 7;
    }
    if(keyIsDown(DOWN_ARROW)){
        yMinhaRaquete += 7;
    }
}

function verificaColisaoRaquetesLib(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
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

    //colisão borda raquete oponente
    if(yRaqueteOponente <= 2){
      yRaqueteOponente = 2;
    }
    if(yRaqueteOponente >= 308){
      yRaqueteOponente = 308;
    }
}

function pontuacao(){
  fill(255);
  text(meuPonto, 278, 26);
  text(pontoOponente, 312, 26)
  
  if(xBolinha <= 10){
    pontoOponente += 1;
    yBolinha = 200;
    xBolinha = 300;
  }
  if(xBolinha >= 590){
    meuPonto += 1;
    yBolinha = 200;
    xBolinha = 300;
  }
  fimDoJogo();
}

function fimDoJogo(){
  if(pontoOponente == 12){
    fill(255);
    text("GAME OVER", 260, 230);
    text("OPONENTE VENCEU", 240, 245);
    velocidadeXBolinha = 0;
    velocidadeYBolinha = 0;
    comecarDeNovo();
  }
  if(meuPonto == 12){
    fill(255);
    text("GAME OVER", 260, 230);
    text("VOCÊ VENCEU", 255, 245);
    velocidadeXBolinha = 0;
    velocidadeYBolinha = 0;
    comecarDeNovo();
  }
 
}


function comecarDeNovo(){
  fill(255);
  text("COMEÇAR DE NOVO?", 235, 300);
  if(keyIsDown(ENTER)){
    meuPonto = 0;
    pontoOponente = 0;
    velocidadeXBolinha = 6;
    velocidadeYBolinha = 6;
    yMinhaRaquete = 150;
    yRaqueteOponente = 150;
  }
}