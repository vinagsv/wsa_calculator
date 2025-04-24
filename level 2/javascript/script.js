let screen = document.getElementById("screen");
let btn = document.getElementsByClassName("btn");
let input = document.getElementById("input");

const returnEval = (arg) => {
  return eval(`"use strict"; (${arg})`);
};

for (const item of btn) {
  item.addEventListener("click", function () {
    btnText = item.textContent;

    if (btnText == "AC") {
      screen.value = "";
      btnText = "";
    }

    if (btnText == "+/-") {
      btnText = "";
      screen.value = -returnEval(screen.value);
    }

    if (btnText == "√") {
      btnText = "√";
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

// const convertToString = (input) => {
//   input = input.replace(/\^/g, "**");
// };

const getResult = () => {
  try {
    input.value = screen.value;
    screen.value = returnEval(convertToEvalString(screen.value));
  } catch (error) {
    screen.value = "Error";
  }
};

//sir method didnt work
// function convertToEvalString(input) {
//   input = input.replace(/([%^()\/+*-])/g, " $1 ");
//   console.log(`space:${input}`);
//   input = input.replace(/\^/g, "**");
//   input = input.replace(/√/g, "Math.sqrt($1)");
//   console.log(`parenthesis:${input}`);

//   return input;
// }

//sachin method didnt work
// function convertToEvalString(input) {
//   input = input.replace(/\^/g, "**");
//   input = input.replace(/Math.sqrt\((\d+)\)/g, "Math.sqrt($1)");
//   return input;
// }

//chatgpt
function convertToEvalString(input) {
  input = input.replace(/\^/g, "**");
  input = input.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
  input = input.replace(/√\(([^)]+)\)/g, "Math.sqrt($1)");
  return input;
}

//continue

const calculatePercentage = () => {
  try {
    let result = returnEval(screen.value) / 100;
    input.value = `${screen.value}%`;
    screen.value = result;
  } catch (error) {
    screen.value = "Error";
  }
};

// const inverse = () => {
//   try {
//     const currentValue = returnEval(screen.value);
//     const inverseValue = 1 / currentValue;
//     input.value = `1/${currentValue}`;
//     screen.value = inverseValue;
//   } catch (error) {
//     input.value = "1/0";
//     screen.value = "Error: Division by Zero";
//   }
// };

const inverse = () => {
  try {
    let result = 1 / returnEval(screen.value);
    input.value = `1/${screen.value}`;
    screen.value = result;
  } catch (error) {
    screen.value = "Error";
  }
};

const clearExpression = () => {
  const currentExpression = screen.value;
  let lastExpression = "";

  let regex = /(\b\d+(\.\d+)?|\b\.\d+)\s*$/;
  let match = currentExpression.match(regex);
  if (match) {
    lastExpression = match[0].trim();
  }
  screen.value = currentExpression.replace(lastExpression, "").trim();
};
/*
sweet,sunny,fruits,sleep,curly hairs,morning,short hair */
