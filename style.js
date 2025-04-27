
 
let slow = true;

function changeD() {
  const root = document.documentElement;
  root.style.setProperty('--animationDuration', slow ? '60s' : '20s');
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

let box = true;

function changePT() {
  const root = document.documentElement;
  root.style.setProperty('--boxShadow', box ? '10px 1px' : 'none');
  box = !box;
}

let bac = true;

function changeBC() {
  const root = document.documentElement;
  root.style.setProperty('--background-color', bac ? 'red' : 'white');
  bac = !bac;
}

let nam = true;

/* function changeN() {
  const root = document.documentElement;
  root.style.setProperty('--animationName', nam ? 'none' : 'circleRibbon');
  nam = !nam;
} */
