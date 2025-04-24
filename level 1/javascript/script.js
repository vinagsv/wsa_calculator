let screen = document.getElementById("screen");
let btn = document.getElementsByClassName("btn");
let input = document.getElementById("input");

// console.log(btn);

for (const item of btn) {
  item.addEventListener("click", function () {
    btnText = item.textContent;

    if (btnText == "AC") {
      screen.value = "";
      btnText = "";
    }
    if (btnText == "÷") {
      btnText = "/";
    }
    if (btnText == "×") {
      btnText = "*";
    }
    screen.value += btnText;
  });
}

const returnEval = (arg) => {
  return eval(`"use strict"; (${arg})`);
};

const getResult = () => {
  input.value = screen.value;
  screen.value = returnEval(screen.value);
};

// let equal = document.getElementById("eval");
// equal.addEventListener("click", () => {
//   getResult();
// }); //correct

// let equal = document.getElementById("eval");
// equal.addEventListener("click", getResult()); //error as getResult is called immediately

// let equal = document.getElementById("eval");
// equal.addEventListener("click", getResult); //works with no (), correct

const backspc = () => {
  screen.value = screen.value.substring(0, screen.value.lengh - 1);
};
