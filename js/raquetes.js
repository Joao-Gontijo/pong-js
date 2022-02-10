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

let chanceDeErrar = 0;

function minhaRaquete(){
    mostraRaquetes(xMinhaRaquete, yMinhaRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquetesLib(xMinhaRaquete, yMinhaRaquete);
  }
  
  function raqueteOponente(){
    mostraRaquetes(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquetesLib(xRaqueteOponente, yRaqueteOponente);
  }
  
  function mostraRaquetes(x, y){
    rect(x, y, raqueteComprimento, raqueteAltura);
  }
  
  //vs cpu
  function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
    calculaChanceDeErrar();
  }
  
  //vs player
  // function movimentaRaqueteOponente(){
  //   if(keyIsDown(UP_ARROW)){
  //       yRaqueteOponente -= 7;
  //   }
  //   if(keyIsDown(DOWN_ARROW)){
  //       yRaqueteOponente += 7;
  //   }
  // }

  function movimentaMinhaRaquete(){
    if(keyIsDown(87)){
        yMinhaRaquete -= 7;
    }
    if(keyIsDown(83)){
        yMinhaRaquete += 7;
    }
}

function verificaColisaoRaquetesLib(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function calculaChanceDeErrar(){
  if(pontoOponente >= meuPonto){
    chanceDeErrar += 1;
    if(chanceDeErrar >= 39){
      chanceDeErrar = 40;
    }
  } else {
      chanceDeErrar -= 1;
      if(chanceDeErrar <= 35){
        chanceDeErrar = 35;
      }
  }
}