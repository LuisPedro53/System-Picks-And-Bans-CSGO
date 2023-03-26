const team1 = "FALLEN";
const team2 = "TRYBE";
let turn = team1;

let mappool = ["Train", "Mirage", "Cache", "Inferno", "Dust2"];


const turnText = document.querySelector("#turnText");

turnText.innerText = `É a vez da equipe ${turn} banir o mapa`;

const maps = document.querySelectorAll(".card");


function choosemap(event) {
  if (turn == team1) {
    turn = team2
  } else {
    turn = team1
  }
  turnText.innerText = `É a vez da equipe ${turn} banir o mapa`;
  event.currentTarget.classList.add("selected");
  event.currentTarget.removeEventListener("click", choosemap);
  event.currentTarget.querySelector(".accept").innerText = "Vetado";
  const clickedmap = event.currentTarget.querySelector(".map-name").innerText;
  mappool = mappool.filter(map => map != clickedmap);
  if (mappool.length == 1) {
    const decidemap = document.querySelector(".card:not(.selected)");
    decidemap.classList.add("picked");
    decidemap.removeEventListener("click", choosemap);
    decidemap.classList.add("disable-hover");
    turnText.innerText = `O mapa da partida será ${mappool[0]}`
  }

}

for (let index = 0; index < maps.length; index++) {
  maps[index].addEventListener("click", choosemap);
}

