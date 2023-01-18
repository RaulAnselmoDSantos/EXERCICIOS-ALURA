//variaveis do ator
let pontosAtor = 0; 
let yAtor = 365;
let xAtor = 40;
//Mostra ator, posiciona e da tamanho
function mostraAtor (){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
} 
//Movimento Ator nas 4 direções
function movimentoDoAtor(x){
 if (keyIsDown(LEFT_ARROW)) {
    xAtor -= x;
   if (xAtor < -10){
    xAtor = 810; 
  }
  }  
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += x;
    if (xAtor > 810){
    xAtor = -10; 
  }
  }
 if (keyIsDown(UP_ARROW)) {
    yAtor -= x;
    if (yAtor < 0){
    yAtor = 365; 
  }
  }  
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += x;
    
  if (yAtor > 365){
    yAtor = 365; 
  }
  }
}
//Colisão Ator com os carros
let colisao = false; 
function vColisionAtor(){
  for (let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], tXCarro, tYCarro, xAtor, yAtor, 15)
    if(colisao){
      colidiu(); 
    }
  }
}
//verifica a colisão, tira ponto e toca som
function colidiu(){
  somDaColisao.play(); 
  yAtor = 365; 
  set(pontosAtor--); 
  if (pontosAtor < 0){
    set(pontosAtor = 0);
  }
  
}
//adiciona ponto, placar e som. 
function incluiPontos(){
  textAlign(CENTER);
  textSize(30);
  fill(color(255,240,60));
  text("Pontos: ", 60, 30);
  text(pontosAtor, 135, 30);

  if (yAtor == 10){
    pontosAtor++;
    somDoPonto.play(); 
  }
}