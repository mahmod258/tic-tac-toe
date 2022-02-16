let choices = document.getElementsByClassName("choice");
let newGame = document.getElementById("new-game");
let game = document.getElementById("game");
let mainMenu = document.getElementById("mainMenu");

let playingFleild = document.getElementById("playing-feild");
let places = document.querySelectorAll("#playing-feild div");
let win = document.getElementById("winner");
let nextRound = document.getElementById("next-round");
let quit = document.getElementById("quit");
let XXXX = document.getElementById("XXXX");
let OOOO = document.getElementById("OOOO");
let DDDD = document.getElementById("DDDD");

let arrayColor = [
  document.getElementById("logo1"),
  document.querySelector("#winner h1"),
  document.querySelector("#winner svg"),
];
let ret = document.getElementById("return");

console.log(places);
let Xlogo = `<svg
            class="logo"
            color="#31C3BD"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <path
              d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>`;

let Ologo = `<svg
  class="logo"
  color="#F2B137"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
>
  <path
    d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
    fill="currentColor"
  ></path>
</svg>`;
let XO = true;
let order = XO;
function choice(i) {
  for (let i = 0; i < choices.length; i++) {
    choices[i].classList.remove(`clicked`);
  }
  choices[i].classList.add(`clicked`);
  if (i === 0) {
    XO = true;
  } else if (i === 1) {
    XO = false;
  }
  console.log(XO);
}

newGame.onclick = () => {
  mainMenu.style.display = `none`;
  game.style.display = `flex`;
  if (XO) {
    XXXX.innerHTML = `0`;
    OOOO.innerHTML = `0`;
  } else {
    XXXX.innerHTML = `0>`;
    OOOO.innerHTML = `0`;
  }
};
let advance = [``, ``, ``, ``, ``, ``, ``, ``, ``];
let change = [true, true, true, true, true, true, true, true, true];
for (let i = 0; i < places.length; i++) {
  places[i].onclick = () => {
    console.log(`dddd`);
    if (change[i]) {
      console.log(`cccc`);
      if (order) {
        places[i].innerHTML = Xlogo;
        advance[i] = `X`;
        if (
          advance[0] + advance[1] + advance[2] === `XXX` ||
          advance[3] + advance[4] + advance[5] === `XXX` ||
          advance[6] + advance[7] + advance[8] === `XXX` ||
          advance[0] + advance[3] + advance[6] === `XXX` ||
          advance[1] + advance[4] + advance[7] === `XXX` ||
          advance[2] + advance[5] + advance[8] === `XXX` ||
          advance[0] + advance[4] + advance[8] === `XXX` ||
          advance[2] + advance[4] + advance[6] === `XXX`
        ) {
          console.log(`Xwin`);
          whoWin(`rgb(49, 195, 189)`, Xlogo, `rgb(36, 145, 139)`, true, XXXX);
          advance = [``, ``, ``, ``, ``, ``, ``, ``, ``];
          change = [true, true, true, true, true, true, true, true, true];
          XXXX.innerHTML = 2;
          order = !order;
          change[i] = !change[i];
          XXXX = parseInt(XXXX) + 1;

          for (let i = 0; i < places.length; i++) {
            places[i].innerHTML = ``;
          }
        }
      } else if (order === false) {
        places[i].innerHTML = Ologo;
        advance[i] = `O`;

        if (
          advance[0] + advance[1] + advance[2] === `OOO` ||
          advance[3] + advance[4] + advance[5] === `OOO` ||
          advance[6] + advance[7] + advance[8] === `OOO` ||
          advance[0] + advance[3] + advance[6] === `OOO` ||
          advance[1] + advance[4] + advance[7] === `OOO` ||
          advance[2] + advance[5] + advance[8] === `OOO` ||
          advance[0] + advance[4] + advance[8] === `OOO` ||
          advance[2] + advance[4] + advance[6] === `OOO`
        ) {
          console.log(`Owin`);
          whoWin(`#F2B137`, Ologo, `#a17523`, true, OOOO);
          advance = [``, ``, ``, ``, ``, ``, ``, ``, ``];
          change = [true, true, true, true, true, true, true, true, true];
          OOOO.innerHTML = parseInt(OOOO.innerHTML) + 1;
          order = !order;
          change[i] = !change[i];
          OOOO.innerHTML = parseInt(OOOO) + 1;
        }
      }
      order = !order;
      change[i] = !change[i];
      console.log(change);
      let check = change.some((e) => {
        return e === true;
      });
      if (check === false) {
        whoWin(`#A8BFC9`, null, `#6B8997`, false, DDDD);
      }
    }
  };
}

function whoWin(color, icon, colorShadow, s, score) {
  score.innerHTML = parseInt(score.innerHTML) + 1;

  if (s) {
    win.style.cssText = `display: flex !important`;
    arrayColor[0].innerHTML = icon + "<h1>TAKES THE ROUND<h1>";
    nextRound.style.cssText = `
              box-shadow: 0px 4px 0px 0px ${colorShadow};
              background-color: ${color}
  `;
  } else if (!s) {
    win.style.cssText = `display: flex !important`;
    arrayColor[0].innerHTML = "<h1>NO ONE TOOK THIS ROUND<h1>";
    nextRound.style.cssText = `
              box-shadow: 0px 4px 0px 0px ${colorShadow};
              background-color: ${color}
  `;
  }
  for (let i = 0; i < arrayColor.length; i++) {
    arrayColor[i].style.color = color;
  }
}
quit.onclick = () => {
  mainMenu.style.display = `flex`;
  game.style.display = `none`;
  win.style.display = `none`;
  for (let i = 0; i < places.length; i++) {
    places[i].innerHTML = ``;
  }
  advance = [``, ``, ``, ``, ``, ``, ``, ``, ``];
  change = [true, true, true, true, true, true, true, true, true];
};
nextRound.onclick = () => {
  for (let i = 0; i < places.length; i++) {
    places[i].innerHTML = ``;
  }
  win.style.display = `none`;
  advance = [``, ``, ``, ``, ``, ``, ``, ``, ``];

  change = [true, true, true, true, true, true, true, true, true];
  console.log(`nextRound`);
};
ret.onclick = () => {
  advance = [``, ``, ``, ``, ``, ``, ``, ``, ``];
  change = [true, true, true, true, true, true, true, true, true];
  console.log(`ret`);
  for (let i = 0; i < places.length; i++) {
    places[i].innerHTML = ``;
  }
};
// for (let i = 0; i < places.length; i++) {
//   places[i].innerHTML = ``;
// }
