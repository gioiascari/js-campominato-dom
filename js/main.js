console.log("Ok Js :)");
//BONUS:
//L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49

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
