"use strict";

const btn = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const equal = document.querySelector(".equal");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const theme1 = document.querySelector(".reds");
const theme2 = document.querySelector(".grays");
const theme3 = document.querySelector(".blues");
let inputArr = [];

// REFACTOR
const clearInput = function () {
  input.value = "";
  inputArr = [];
};

// ARITHMETICS
for (let i = 0; i < btn.length; i++) {
  if (
    btn[i].textContent !== "=" &&
    btn[i].textContent !== "DEL" &&
    btn[i].textContent !== "RESET"
  ) {
    btn[i].addEventListener("click", function () {
      console.log(btn[i].textContent);
      inputArr.push(btn[i].value);
      input.value = inputArr.join("");
      input.classList.remove("hidden");
      output.classList.add("hidden");
    });
  }
}

//==================== ACTION BUTTONS===============
// Deletd
del.addEventListener("click", function () {
  inputArr.pop();
  console.log(inputArr);
  input.value = inputArr.join("");
});

// Equals
equal.addEventListener("click", function () {
  const ans = eval(input.value);
  console.log(ans);
  output.value = ans;
  clearInput();
  output.classList.remove("hidden");
  input.classList.add("hidden");
});

// Reset
reset.addEventListener("click", function () {
  clearInput();
  output.value = "";
});

// ===================THEME 1 BUTTONS================
theme1.addEventListener("click", function () {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";

  document.querySelector(".colors").style.backgroundColor =
    "hsl(223, 31%, 20%)";
  document.querySelector(".reds").style.backgroundColor = "hsl(6, 63%, 50%)";
  document.querySelector(".blues").style.backgroundColor = "hsl(223, 31%, 20%)";
  document.querySelector(".grays").style.backgroundColor = "hsl(223, 31%, 20%)";

  document.querySelector(".header").style.color = "#fff";
  document.querySelector(".input").style.color = "#fff";
  document.querySelector(".output").style.color = "#fff";

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = "hsl(221, 14%, 31%)";
  }
  document.querySelector(".del").style.color = "#fff";
  document.querySelector(".equal").style.color = "#fff";
  document.querySelector(".reset").style.color = "#fff";

  document.querySelector(".screen").style.backgroundColor =
    "hsl(224, 36%, 15%)";
  document.querySelector(".input").style.backgroundColor = "hsl(224, 36%, 15%)";
  document.querySelector(".output").style.backgroundColor =
    "hsl(224, 36%, 15%)";

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = "hsl(30, 25%, 89%)";
    btn[i].style.borderBottom = "2px solid hsl(28, 16%, 65%)";
  }
  document.querySelector(".del").style.backgroundColor = "hsl(225, 21%, 49%)";
  document.querySelector(".del").style.borderBottom =
    "2px solid hsl(224, 28%, 35%)";

  document.querySelector(".equal").style.backgroundColor = "hsl(6, 63%, 50%)";
  document.querySelector(".equal").style.borderBottom =
    "2px solid hsl(6, 70%, 34%)";

  document.querySelector(".reset").style.backgroundColor = "hsl(225, 21%, 49%)";
  document.querySelector(".reset").style.borderBottom =
    "2px solid hsl(224, 28%, 35%)";

  document.querySelector(".btns").style.backgroundColor = "hsl(223, 31%, 20%)";
});

// ===================THEME 2 BUTTONS================
theme2.addEventListener("click", function () {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";

  document.querySelector(".colors").style.backgroundColor = "hsl(0, 5%, 81%)";
  document.querySelector(".reds").style.backgroundColor = "hsl(0, 5%, 81%)";
  document.querySelector(".blues").style.backgroundColor = "hsl(0, 5%, 81%)";
  document.querySelector(".grays").style.backgroundColor = "hsl(25, 98%, 40%)";

  document.querySelector(".header").style.color = "hsl(60, 10%, 19%)";
  document.querySelector(".input").style.color = "hsl(60, 10%, 19%)";
  document.querySelector(".output").style.color = "hsl(60, 10%, 19%)";

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = "hsl(60, 10%, 19%)";
  }
  document.querySelector(".del").style.color = "#fff";
  document.querySelector(".equal").style.color = "#fff";
  document.querySelector(".reset").style.color = "#fff";

  document.querySelector(".screen").style.backgroundColor = "hsl(0, 0%, 93%)";
  document.querySelector(".input").style.backgroundColor = "hsl(0, 0%, 93%)";
  document.querySelector(".output").style.backgroundColor = "hsl(0, 0%, 93%)";

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = "hsl(45, 7%, 89%)";
    btn[i].style.borderBottom = "2px solid hsl(35, 11%, 61%)";
  }
  document.querySelector(".del").style.backgroundColor = "hsl(185, 42%, 37%)";
  document.querySelector(".del").style.borderBottom =
    "2px solid hsl(185, 58%, 25%)";

  document.querySelector(".equal").style.backgroundColor = "hsl(25, 98%, 40%)";
  document.querySelector(".equal").style.borderBottom =
    "2px solid hsl(25, 99%, 27%)";

  document.querySelector(".reset").style.backgroundColor = "hsl(185, 42%, 37%)";
  document.querySelector(".reset").style.borderBottom =
    "2px solid hsl(185, 58%, 25%)";

  document.querySelector(".btns").style.backgroundColor = "hsl(0, 5%, 81%)";
});

// THEME 3 BUTTONS
theme3.addEventListener("click", function () {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";

  document.querySelector(".colors").style.backgroundColor =
    "hsl(268, 71%, 12%)";
  document.querySelector(".reds").style.backgroundColor = "hsl(268, 71%, 12%)";
  document.querySelector(".blues").style.backgroundColor =
    "hsl(176, 100%, 44%)";
  document.querySelector(".grays").style.backgroundColor = "hsl(268, 71%, 12%)";

  document.querySelector(".header").style.color = "hsl(52, 100%, 62%)";
  document.querySelector(".input").style.color = "hsl(52, 100%, 62%)";
  document.querySelector(".output").style.color = "hsl(52, 100%, 62%)";

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = "hsl(52, 100%, 62%)";
  }
  document.querySelector(".del").style.color = "#fff";
  document.querySelector(".equal").style.color = "hsl(198, 20%, 13%)";
  document.querySelector(".reset").style.color = "#fff";

  document.querySelector(".screen").style.backgroundColor =
    "hsl(268, 71%, 12%)";
  document.querySelector(".input").style.backgroundColor = "hsl(268, 71%, 12%)";
  document.querySelector(".output").style.backgroundColor =
    "hsl(268, 71%, 12%)";

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = "hsl(268, 47%, 21%)";
    btn[i].style.borderBottom = "2px solid hsl(290, 70%, 36%)";
  }
  document.querySelector(".del").style.backgroundColor = "hsl(281, 89%, 26%)";
  document.querySelector(".del").style.borderBottom =
    "2px solid hsl(285, 91%, 52%)";

  document.querySelector(".equal").style.backgroundColor =
    "hsl(176, 100%, 44%)";
  document.querySelector(".equal").style.borderBottom =
    "2px solid hsl(177, 92%, 70%)";

  document.querySelector(".reset").style.backgroundColor = "hsl(281, 89%, 26%)";
  document.querySelector(".reset").style.borderBottom =
    "2px solid hsl(285, 91%, 52%)";

  document.querySelector(".btns").style.backgroundColor = "hsl(268, 71%, 12%)";
});
