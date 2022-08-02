const textEl = document.getElementById("text");
const text = "WELCOME !!!";
let txt = 1;
let speed = 150;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, txt);

  txt++;

  if (txt > text.length) {
    txt = 1;
  }

  setTimeout(writeText, speed);
}
