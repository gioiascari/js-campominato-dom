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
}

/*
function item(cell, easy) {
  const posizioneBombe = generateBomb("easy");
  cell.classList.add("cell", "easy");
  for (let i = 1; i <= 100; i++) {
    const cell = document.getElementById("cell-" + i);

    cell.classList.toggle("bg-blue");
    console.log(cell);
  }
}

function generateBomb(max) {
  let posizione = [];
  while (posizione.length < 16) {
    let posizione = generateRandomNNumber(1, max);
    if (!posizione.includes(num)) {
      posizione.push(number);
    }
  }
  console.log(posizione);
  return posizione;
}

function generateRandomNNumber(min, max) {
  const range = max - min + 1;
  return Math.floor(Math.random() * range) + min;
}
*/

//L'utente indica un livello di difficoltà

//Con If divido le probabilità di gioco
//Difficoltà easy
/*
if (userDifficult === "easy") {
  for (let i = 1; i <= 100; i++) {
    let message = i;
    //creo elemento
    const cell = document.createElement("div");
    //aggiungo classe per dargli uno stile
    cell.className = "cell";
    cell.classList.add("cell", "easy");
    //Associo il numero da 1-100
    cell.innerText = message;
    //Aggiungo l'elemento alla cella
    grid.appendChild(cell);
    //Aggiungo un listener al click della cella
    cell.addEventListener("click", () => cell.classList.toggle("bg-blue"));

    console.log(message);
  }
}

//Difficoltà media
else if (userDifficult === "medium") {
  for (let i = 1; i <= 81; i++) {
    let message = i;
    //creo elemento
    const cell = document.createElement("div");
    //aggiungo classe per dargli uno stile
    cell.className = "cell";
    cell.classList.add("cell", "medium");
    //Associo il numero da 1-100
    cell.innerText = message;
    //Aggiungo l'elemento alla cella
    grid.appendChild(cell);
    //Aggiungo un listener al click della cella
    cell.addEventListener("click", () => cell.classList.toggle("bg-blue"));

    console.log(message);
  }
} //Difficoltà Difficile
else if (userDifficult === "hard") {
  for (let i = 1; i <= 49; i++) {
    let message = i;
    //creo elemento
    const cell = document.createElement("div");
    //aggiungo classe per dargli uno stile
    cell.className = "cell";
    cell.classList.add("cell", "hard");
    //Associo il numero da 1-100
    cell.innerText = message;
    //Aggiungo l'elemento alla cella
    grid.appendChild(cell);
    //Aggiungo un listener al click della cella
    cell.addEventListener("click", () => cell.classList.toggle("bg-blue"));

    console.log(message);
  }
}
*/
