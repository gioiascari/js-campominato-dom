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
//Creo una griglia di gioco quadrata
const grid = document.getElementById("grid");

//L'utente indica un livello di difficoltà
let userDifficult = prompt("Scegli difficoltà tra easy, medium oppure hard");
while (
  userDifficult !== "medium" &&
  userDifficult !== "hard" &&
  userDifficult !== "easy"
) {
  userDifficult = prompt(
    "Errore, scegli difficoltà tra easy, medium oppure hard"
  );
}
//Con If divido le probabilità di gioco
//Difficoltà easy

if (userDifficult === "easy") {
  for (let i = 1; i <= 100; i++) {
    //Creo la cella
    const cell = createCell();

    // aggiungo la cella nella griglia
    grid.appendChild(cell);
    function createCell() {
      const item = document.createElement("div");
      item.classList.add("cell", "easy");
      return item;
    }

    //Aggiungo il colore alla cella quando viene cliccata
    cell.addEventListener("click", function (event) {
      cell.classList.toggle("bg-blue");
    });

    //Distribuzione celle da 1 a 100
    let message = i;
    cell.innerText = message;
    console.log(message);
  }
}
//Difficoltà media
else if (userDifficult === "medium") {
  for (let i = 1; i <= 81; i++) {
    //Creo la cella
    const cell = createCell();

    // aggiungo la cella nella griglia
    grid.appendChild(cell);
    function createCell() {
      const item = document.createElement("div");
      item.classList.add("cell", "medium");
      return item;
    }

    //Aggiungo il colore alla cella quando viene cliccata
    cell.addEventListener("click", function (event) {
      cell.classList.toggle("bg-blue");
    });

    //Distribuzione celle da 1 a 100
    let message = i;
    cell.innerText = message;
    console.log(message);
  }
}
//Difficoltà Difficile
else if (userDifficult === "hard") {
  for (let i = 1; i <= 49; i++) {
    //Creo la cella
    const cell = createCell();

    // aggiungo la cella nella griglia
    grid.appendChild(cell);
    function createCell() {
      const item = document.createElement("div");
      item.classList.add("cell", "hard");
      return item;
    }

    //Aggiungo il colore alla cella quando viene cliccata
    cell.addEventListener("click", function (event) {
      cell.classList.toggle("bg-blue");
    });

    //Distribuzione celle da 1 a 100
    let message = i;
    cell.innerText = message;
    console.log(message);
  }
}
