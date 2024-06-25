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
  let numerCasual = Math.trunc(Math.random() * (16 - 7 + 1) + 7); // (max - min + 1) + min
  let count = Number(testInput.value) || numerCasual;
  if (!count) return;
  if (count < 7 || count > 16) return;
  //
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

buttonGenerator.addEventListener("click", function () {
  headingPsw.innerHTML = generatorPassword();
  headingPsw.classList.add("active");
  setTimeout(function () {
    headingPsw.classList.remove("active");
  }, "800");
});
