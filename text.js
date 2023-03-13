let ticBtn = document.querySelector(".tic ");
let parent = document.querySelector(".parent");
let turn = document.querySelector(".turn");
let box = document.querySelectorAll(".box div");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let hlight = document.querySelector(".hlight");
let win = document.querySelector(".win");
let wi = document.querySelector(".win span");
let finish = document.querySelector(".win p");
let replay = document.querySelector(" .replay");
let rand = "";
let winer = "";
let cho = "";
let nu = 0;
replay.addEventListener("click", () => {
  location.reload();
});
ticBtn.addEventListener("click", (e) => {
  if (e.target.dataset.btn) {
    let select = e.target.dataset.btn;
    cho = select;
    turn.classList.add(`${cho}`);
    ticBtn.classList.add("start");
    parent.classList.remove("winer");
    box.forEach((ein) => {
      ein.dataset.btn = select;
    });
  }
});

function clicked(e) {
  nu += 1;

  turn.classList.toggle("o");
  turn.classList.toggle("x");

  box.forEach((ein) => {
    ein.dataset.btn = cho;
    winer = cho;
    ein.style.pointerEvents = "none";
  });
  e.innerHTML = e.dataset.btn;
  let count = setTimeout(() => {
    nu += 1;

    turn.classList.toggle("o");
    turn.classList.toggle("x");
    let ch = "";
    if (turn.classList.contains("o")) {
      ch = "x";
      winer = "x";
    } else {
      ch = "o";
      winer = "o";
    }
    box.forEach((ein) => {
      ein.dataset.btn = ch;
      ein.style.pointerEvents = "auto";
    });
    for (let i = 0; i < box.length; i++) {
      rand = Math.floor(Math.random() * box.length);
      if (box[rand].innerHTML == "") {
        box[rand].innerHTML = box[rand].dataset.btn;
        theTest();
        break;
      }
    }
  }, 2000);

  theTest(count);
}

function theTest(count) {
  if (
    (box[0].innerHTML == box[1].innerHTML &&
      box[0].innerHTML == box[2].innerHTML &&
      box[0].innerHTML != "" &&
      box[1].innerHTML != "" &&
      box[2].innerHTML != "") ||
    (box[0].innerHTML == box[3].innerHTML &&
      box[0].innerHTML == box[6].innerHTML &&
      box[0].innerHTML != "" &&
      box[3].innerHTML != "" &&
      box[6].innerHTML != "") ||
    (box[2].innerHTML == box[5].innerHTML &&
      box[2].innerHTML == box[8].innerHTML &&
      box[2].innerHTML != "" &&
      box[5].innerHTML != "" &&
      box[8].innerHTML != "") ||
    (box[3].innerHTML == box[4].innerHTML &&
      box[3].innerHTML == box[5].innerHTML &&
      box[3].innerHTML != "" &&
      box[4].innerHTML != "" &&
      box[5].innerHTML != "") ||
    (box[6].innerHTML == box[7].innerHTML &&
      box[6].innerHTML == box[8].innerHTML &&
      box[6].innerHTML != "" &&
      box[7].innerHTML != "" &&
      box[8].innerHTML != "") ||
    (box[0].innerHTML == box[4].innerHTML &&
      box[0].innerHTML == box[8].innerHTML &&
      box[0].innerHTML != "" &&
      box[8].innerHTML != "" &&
      box[4].innerHTML != "") ||
    (box[2].innerHTML == box[4].innerHTML &&
      box[2].innerHTML == box[6].innerHTML &&
      box[2].innerHTML != "" &&
      box[4].innerHTML != "" &&
      box[6].innerHTML != "") ||
    (box[1].innerHTML == box[4].innerHTML &&
      box[1].innerHTML == box[7].innerHTML &&
      box[1].innerHTML != "" &&
      box[4].innerHTML != "" &&
      box[7].innerHTML != "")
  ) {
    win.classList.add("winer");
    parent.classList.add("winer");
    wi.innerHTML = winer;
    clearTimeout(count);
  } else if (nu == 9) {
    win.classList.add("winer");
    parent.classList.add("winer");
    finish.innerHTML = "the game is drawing";
    clearTimeout(count);
  }
}
