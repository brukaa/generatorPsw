"use strict";
const buttonGenerator = document.querySelector(".btn--gen");
const headingPsw = document.getElementById("passwordGen");
const testInput = document.querySelector(".test-input");

const arrayChr = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "$",
  "!",
  ".",
  "#",
  "-",
  "_",
  "%",
  "@",
  "$",
  "!",
  ".",
  "#",
  "-",
  "_",
  "%",
  "@",
];

const arrayTest = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.trunc(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

let arrayTestUpp = [];
for (const i of arrayTest) {
  arrayTestUpp.push(i.toUpperCase());
}

const arrayChrFinal = [...arrayTest, ...arrayTestUpp, ...arrayChr];
///////////////////
//////////

const generatorPassword = function () {
  let numCasual = Math.trunc(Math.random() * (16 - 5 + 1) + 5); // (max - min + 1) + min
  let count = Number(testInput.value) || numCasual;
  if (count < 5) count = numCasual;
  else if (count > 16) count = 16;

  const pswArr = [];
  while (count > 0) {
    pswArr.push(
      arrayChrFinal[Math.trunc(Math.random() * arrayChrFinal.length)]
    );
    count--;
  }

  shuffle(pswArr);
  return pswArr.join("");
};

// senza console.log il rilsutato sarebbe la password stessa tipo 1h13b11bsk
// ma non viene memorizzato da nessuna parte
console.log(generatorPassword());
const passwordHello = generatorPassword(); // memorizziamo il valore in una variabile

buttonGenerator.addEventListener("click", function () {
  headingPsw.innerHTML = generatorPassword();
  headingPsw.classList.add("active");

  const check = Number(testInput.value);
  if (!check || check < 5 || check > 16) {
    testInput.style.background = "red";
  } else testInput.style.background = "blue";

  setTimeout(function () {
    headingPsw.classList.remove("active");
  }, "800");
});
