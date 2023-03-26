const team1 = "FALLEN";
const team2 = "TRYBE";
let turn = team1;

let mappool = ["Train", "Mirage", "Cache", "Inferno", "Dust2", "Nuke"];


const turnText = document.querySelector("#turnText");

turnText.innerText = `É a vez da equipe ${turn} banir o mapa`;

const maps = document.querySelectorAll(".card");


function choosemap(event) {
  console.log(event.currentTarget);
  if (turn == team1) {
    turn = team2
  } else {
    turn = team1
  }
  turnText.innerText = `É a vez da equipe ${turn} banir o mapa`;
  event.currentTarget.classList.add("selected");
  event.currentTarget.removeEventListener("click", choosemap);
  event.currentTarget.querySelector(".accept").innerText = "Vetado";


}

for (let index = 0; index < maps.length; index++) {
  maps[index].addEventListener("click", choosemap);
}
