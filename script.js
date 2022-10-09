
let x = "";
let str = "";
let numb = "";
function insert(num) {
  document.querySelector(".textview").value = "";

  if ("*/-+%".includes(num) && numb == "") {
    document.querySelector(".textview").value = str + numb;
    return;
  } else if ("*/-+%".includes(num) && numb != "") {
    x = num;
    str = str + numb + x;
    numb = "";
  }
  if (!"*/-+%".includes(num)) {
    if (num == "." && numb.includes(".")) {
      document.querySelector(".textview").value = str + numb;
      return;
    }
    if (num == "." && !numb.includes(".") && numb == "") {
      numb = 0;
    }
    numb = numb + num;
  }
  document.querySelector(".textview").value = str + numb;
}

function equals() {
  const inputValue = document.querySelector(".textview").value;

  if ("*/-+%".includes(inputValue[inputValue.length - 1])) return;

  const ans = eval(inputValue);
  document.querySelector(".textview").value = ans.toFixed(3);
  x = "";
  str = "";
  numb = "";
}

function clean() {
  document.querySelector(".textview").value = 0;
  str = "";
  numb = "";
  x = "";
}

function back() {
  let [...input] = document.querySelector(".textview").value;
  input.pop();
  const clear = input.join("");
  document.querySelector(".textview").value = clear;
}