let gameArr = [];
let userArr = [];
let color = ['red', 'green', 'orange', 'blue'];
let out = false;

let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let level = 0;
let started = false;
let btns = document.querySelectorAll('.btn');

function randomPick() {
  let pick = Math.floor(Math.random() * 4);
  return color[pick];
}

addEventListener('keypress', function () {
  if (started == false) {
    started = true;
    machineStart();
  }
});

function machineStart() {
  userArr = [];
  level++;
  h2.innerText = `level ${level}`;
  aColor = randomPick();
  gameArr.push(aColor);

  console.log(aColor);
  setTimeout(() => {
    blink(aColor);
  }, 500);
}

for (bt of btns) {
  bt.addEventListener('click', buttonPress);
}

function buttonPress() {
  if (started == true) {
    blink(this.getAttribute('id'));
    userArr.push(this.getAttribute('id'));
    console.log(this.getAttribute('id'));
    console.log(userArr.length);
    console.log(userArr, gameArr);
    check(userArr.length - 1);
  }
}
function check(idx) {
  if (userArr[idx] === gameArr[idx]) {
    if (userArr.length == gameArr.length) {
      highscore(gameArr.length);
      machineStart();
    }
  } else {
    h2.innerText = 'Game Over !!! Press any key to start again!';
    body = document.querySelector('body');
    body.classList.add('out');
    setTimeout(() => {
      body.classList.remove('out');
    }, 800);
    started = false;
    level = 0;
    userArr = [];
    gameArr = [];
  }
}

function blink(input) {
  newBtn = document.querySelector(`#${input}`);
  newBtn.classList.add('blink');
  setTimeout(() => {
    newBtn.classList.remove('blink');
  }, 300);
}

function highscore(here) {
  let span = document.querySelector('span');
  if (span.innerText < here) span.innerText = here;
}
