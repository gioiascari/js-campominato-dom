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

//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà
//Creo un array vuoto

function startGame(totalCells, level) {
  cells.classList.add(level);
  let posizioneBomba = generatoreBomba(totalCells);

  for (let i = 1; i < level; i++) {
    const cell = document.getElementById("cell- " + i);
    console.log(level);
    const isBomb = posizioneBomba.includes(i);
    if (isBomb) {
      cell.classList.add("bg-red");
    } else "bg-blue";
  }
}
function generatoreBomba(max) {
  const posizione = [];
  console.log(posizione);
  while (posizione.length < 16) {
    const numero = generatoreNumeriRandom(1, max);
    if (!posizione.includes(numero)) {
      posizione.push(numero);

      console.log(posizione);
    }
  }
  return posizione;
}

function startGame(totalCells, level) {
  //Creo una griglia di gioco quadrata
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < totalCells; i++) {
    //creo elemento
    const cells = document.createElement("div");
    //aggiungo classe per dargli uno stile
    cells.className = "cell";
    cells.classList.add(level);
    //Associo il numero da 1-100
    cells.innerText = i + 1;
    //Aggiungo l'elemento alla cella
    grid.appendChild(cells);
  }
  console.log(totalCells);
}
