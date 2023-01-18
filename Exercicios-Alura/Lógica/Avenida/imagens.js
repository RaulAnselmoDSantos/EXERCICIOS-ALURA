//Imagens e sons
let imagenDaEstrada; 
let imagemDoAtor; 
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
//sons 
let somColidiu
let somPontos
let somTrilha
//Pre Load
function preload(){
  imagenDaEstrada = loadImage("Imagens/estrada.png"); 
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro1 = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png" );
  imagemDosCarros = [imagemDoCarro1,imagemDoCarro2, imagemDoCarro3,   imagemDoCarro1,imagemDoCarro2, imagemDoCarro3];  
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaTrilha = loadSound("sons/trilha.mp3");
}