let box = true;

function changePT(var1) {
  const root = document.documentElement;
  root.style.setProperty('--boxShadow', box ? '10px 1px' : 'none');
  var1.style.backgroundColor = box ? "blue" : "transparent";
  box = !box;
}

let slow = true;

function changeD(var2) {
  const root = document.documentElement;
  root.style.setProperty('--height', slow ? '5px' : '15px');
  var2.style.backgroundColor = slow ? "gold" : "transparent";
  slow = !slow;
}

let wid = true;

function changeW(var3) {
  const root = document.documentElement;
  root.style.setProperty('--width', wid ? 'fill' : "15px");
  var3.style.backgroundColor = wid ? "purple" : "transparent";
  wid = !wid;
}

let bor = true;

function changeB(var4) {
  const root = document.documentElement;
  root.style.setProperty('--border', bor ? 'solid white' : 'none');
  var4.style.backgroundColor = bor ? "green" : "transparent";
  bor = !bor;
}

let bac = true;

function changeBC(var5) {
  const root = document.documentElement;
  root.style.setProperty('--background-color', bac ? 'red' : 'white');
  var5.style.backgroundColor = bac ? "red" : "transparent";
  bac = !bac;
}

