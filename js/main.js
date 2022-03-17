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

//Genero i 16 numeri casuali
function numeriBombe(max) {
  const posizionamenti = [];
  while (posizionamenti.length < numeroBombe) {
    const numeri = generatoreNumeriRandom(1, max);
    if (!posizionamenti.includes(numeri)) {
      posizionamenti.push(numeri);
    }
  }
  return posizionamenti;
}

function startGame(totalCells, levelClass) {
  //Genero la griglia
  startGrid(totalCells, levelClass);
  //Genero posizionamento bombe
  const posizioneBombe = numeriBombe(totalCells);

  console.log(posizioneBombe);
  //Creo un ciclo per generare la posizione della bomba
  for (let i = 0; i < totalCells.length; i++) {
    const cell = totalCells[i];

    //Creo il posizionamento del colore della bomba
    cell.addEventListener("click", function () {
      const isBomb = posizioneBombe.includes(i);
      console.log(isBomb);

      if (isBomb) {
        cell.classList.add("bg-red");
      } else {
        cell.classList.add("bg-blue");
      }
    });
  }
}

function startGrid(totalCells, levelClass) {
  // Recupero la griglia con l'id
  const grid = document.getElementById("grid");
  // resetto il contenuto della griglia
  grid.innerHTML = "";

  // 2. creo totalCells div all'interno della griglia
  for (let i = 1; i <= totalCells; i++) {
    //Creo l'elemento
    const cell = document.createElement("div");
    //Aggiungo classi per dargli uno stile

    cell.className = "cell";
    cell.classList.add(levelClass);
    //Associo il numero da 1 a 100 al testo contenuto nella cella
    cell.innerText = i;
    grid.appendChild(cell);

    cell.addEventListener("click", () => cell.classList.toggle("bg-blue"));
  }
}

//FUNZIONI UTILI
function generatoreNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
