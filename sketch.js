//Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;

//Velocidade da bolinha
let xVelBolinha = 4;
let yVelBolinha = 4;

//efeito da borda
let raio = diametro / 2;

//Raquete
let xRaquete = 2;
let yRaquete = 150;
let compRac = 10;
let alturaRaquete = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  aBolinha();
  aVeldaBolinha();
  colisaoBolinha();
  aRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
  }
function aBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function aVeldaBolinha() {
  xBolinha += xVelBolinha;
  yBolinha += yVelBolinha;
}

function colisaoBolinha() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    xVelBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    yVelBolinha *= -1;
  }
}
function aRaquete() {
  rect(xRaquete, yRaquete, compRac, alturaRaquete);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }

}
  function verificaColisaoRaquete(){
  if(xBolinha- raio< xRaquete + compRac && yBolinha - raio< yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    xVelBolinha *= -1;
  }
}
