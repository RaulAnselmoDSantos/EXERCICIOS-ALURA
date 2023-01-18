//Tamanho dos carros
let tXCarro = 40;
let tYCarro = 30;
//Localização dos carros em X e Y
//Lista Carros
let xCarros = [900, 900, 900, 900, 900, 900];
let yCarros = [40, 100, 150, 320, 259, 210];
let vCarros = [2, 5, 8, 10, 3 , 20]; 
 
//Movimenta Carros em X
function movXcarro (){
  for(let i =0; i< imagemDosCarros.length; i++){
    xCarros[i] -= vCarros[i];  
  }
}
//Faz os carros passarem na tela novamente
function resetCarros(){
  for (let i =0; i< imagemDosCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
                xCarros[i] = 900;
      }
  }                     
}
function passouTodaATela(xCarro){
    return xCarro < - 50;
}
//Mostra os Carros
function mostraCarros(){
  for(let i = 0; i < imagemDosCarros.length; i++){
    image(imagemDosCarros[i], xCarros[i], yCarros[i], tXCarro, tYCarro);
  }
}