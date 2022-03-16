console.log("Ok Js :)");
/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
 */

//Intestazione
const buttonEasy = document.getElementById("easy");

const buttonMedium = document.getElementById("medium");

const buttonHard = document.getElementById("hard");

buttonEasy.addEventListener("click", () => startGame(100, "easy"));

buttonMedium.addEventListener("click", () => startGame(81, "medium"));

buttonHard.addEventListener("click", () => startGame(49, "hard"));

const numeroBombe = 16;

function startGame(totalCells, level) {
  //Creo una griglia di gioco quadrata
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 1; i <= totalCells; i++) {
    //creo elemento
    const cell = document.createElement("div");
    //aggiungo classe per dargli uno stile
    cell.className = "cell";
    cell.classList.add(level);
    //Associo il numero da 1-100
    cell.innerText = i;
    //Aggiungo l'elemento alla cella
    grid.appendChild(cell);
    //Aggiungo un listener al click della cella
    cell.addEventListener("click", () => cell.classList.toggle("bg-blue"));
  }
}
/*
//Creo le bombe in un array
function generatoreBomba(max) {
  const listaBombe = [];
  while (listaBombe.length < 16) {
    let numero = random(1, max);
    if (!listaBombe.includes(numero)) {
      listaBombe.push(numer);
      console.log(listaBombe);
    }
  }
}
//Generatore numeri casuali
function random(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}*/
/*GRIGLIA AGGIUSTATA E RIORDINATA-----------------------------------
function startGame(totalCells, level) {
  //Creo una griglia di gioco quadrata
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i <= totalCells; i++) {
    //creo elemento
    const cell = document.createElement("div");
    //aggiungo classe per dargli uno stile
    cell.className = "cell";
    cell.classList.add(level);
    //Associo il numero da 1-100
    cell.innerText = i + 1;
    //Aggiungo l'elemento alla cella
    grid.appendChild(cell);
    //Aggiungo un listener al click della cella
    cell.addEventListener("click", () => cell.classList.toggle("bg-blue"));
  }
}*/
