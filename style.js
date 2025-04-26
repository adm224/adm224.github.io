
let slow = true;

function changeD() {
  const root = document.documentElement;
  root.style.setProperty('--animationDuration', slow ? '40s' : '20s');
  slow = !slow;
}

let wid = true;

function changeW() {
  const root = document.documentElement;
  root.style.setProperty('--width', wid ? 'fill' : '15px');
  wid = !wid;
}

let hie = true;

let bor = true;

function changeB() {
  const root = document.documentElement;
  root.style.setProperty('--border', bor ? 'solid white' : 'none');
  bor = !bor;
}

let pos = true;

function changePT() {
  const root = document.documentElement;
  root.style.setProperty('--position', pos ? 'absolute' : 'relative');
  root.style.setProperty('--top', pos ? '50%' : '3%');
  pos = !pos;
}

let bac = true;

function changeBC() {
  const root = document.documentElement;
  root.style.setProperty('--background-color', bac ? 'red' : 'white');
  bac = !bac;
}

let nam = true;
