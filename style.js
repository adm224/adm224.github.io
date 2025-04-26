let slow = true;

function changeD() {
  const root = document.documentElement;
  root.style.setProperty('--animationDuration', slow ? '2s' : '20s');
  slow = !slow;
}

let wid = true;

function changeW() {
  const root = document.documentElement;
  root.style.setProperty('--width', wid ? '1px' : '15px');
  wid = !wid;
}

let hie = true;

function changeH() {
  const root = document.documentElement;
  root.style.setProperty('--height', hie ? '1px' : '15px');
  hie = !hie;
}

let bor = true;

function changeB() {
  const root = document.documentElement;
  root.style.setProperty('--border', bor ? 'solid black' : 'none');
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
  root.style.setProperty('--background-color', bac ? 'red' : 'black');
  bac = !bac;
}

let nam = true;

function changeN() {
  const root = document.documentElement;
  root.style.setProperty('--animationName', nam ? 'none' : 'circleRibbon');
  nam = !nam;
}
