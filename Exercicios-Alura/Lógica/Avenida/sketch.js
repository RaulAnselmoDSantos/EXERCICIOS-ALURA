//trilha e renge de tela
function setup() {
  createCanvas(800, 400);
  somDaTrilha.loop(); 
}
//funções principais
function draw() {
  background(imagenDaEstrada);
  mostraAtor();
  mostraCarros(); 
  movimentoDoAtor(5);
  movXcarro();
  resetCarros();
  vColisionAtor();
  incluiPontos();
}