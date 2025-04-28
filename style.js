let box = true;

function changePT() {
  const root = document.documentElement;
  root.style.setProperty('--boxShadow', box ? '10px 1px' : 'none');
  document.getElementById("b1").style.backgroundColor = box ? "blue" : "transparent";
  box = !box;
}

let slow = true;

function changeD() {
  const root = document.documentElement;
  root.style.setProperty('--animationDuration', slow ? '60s' : '20s');
  document.getElementById("b2").style.backgroundColor = slow ? "gold" : "transparent";
  slow = !slow;
}

let wid = true;

function changeW() {
  const root = document.documentElement;
  root.style.setProperty('--width', wid ? 'fill' : "30px");
  document.getElementById("b3").style.backgroundColor = wid ? "purple" : "transparent";
  wid = !wid;
}

let bor = true;

function changeB() {
  const root = document.documentElement;
  root.style.setProperty('--border', bor ? 'solid white' : 'none');
  document.getElementById("b4").style.backgroundColor = bor ? "green" : "transparent";
  bor = !bor;
}

let bac = true;

function changeBC() {
  const root = document.documentElement;
  root.style.setProperty('--background-color', bac ? 'red' : 'white');
  document.getElementById("b5").style.backgroundColor = bac ? "red" : "transparent";
  bac = !bac;
}

