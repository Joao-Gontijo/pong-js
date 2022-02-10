//pontuação
let meuPonto = 0;
let pontoOponente = 0;

function pontuacao(){
    stroke(255);
    textSize(16);
    fill(color(255, 140, 0));
    rect(139, 10, 40, 20);
    rect(439, 10, 40, 20);
    fill(255);
    text(meuPonto, 150, 26);
    text(pontoOponente, 450, 26)
    
    if(xBolinha <= 10){
      pontoOponente += 1;
      yBolinha = 200;
      xBolinha = 300;
      ponto.play();
    }
    if(xBolinha >= 590){
      meuPonto += 1;
      yBolinha = 200;
      xBolinha = 300;
      ponto.play();
    }
    fimDoJogo();
  }
  
  function fimDoJogo(){
    if(pontoOponente == 12){
      text("GAME OVER", 250, 230);
      text("OPONENTE VENCEU", 220, 245);
      velocidadeXBolinha = 0;
      velocidadeYBolinha = 0;
      comecarDeNovo();
    }
    if(meuPonto == 12){
      text("GAME OVER", 250, 230);
      text("VOCÊ VENCEU", 240, 245);
      velocidadeXBolinha = 0;
      velocidadeYBolinha = 0;
      comecarDeNovo();
    }
   
  }