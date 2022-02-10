
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);  
  bolinha();
  minhaRaquete();
  raqueteOponente();
  pontuacao();
}


function comecarDeNovo(){
  textSize(10);
  text("PRESSIONE ENTER PARA COMEÇAR DE NOVO", 190, 300);
  if(keyIsDown(ENTER)){
    meuPonto = 0;
    pontoOponente = 0;
    velocidadeXBolinha = 6;
    velocidadeYBolinha = 6;
    yMinhaRaquete = 150;
    yRaqueteOponente = 150;
  }
}