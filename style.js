/* function showIt(var1){
  //hide the one div that is shown by hiding all
document.getElementById('divvy1').style.display = 'none';
document.getElementById('divvy2').style.display = 'none';
document.getElementById('divvy3').style.display = 'none';
document.getElementById('divvy4').style.display = 'none';
document.getElementById('divvy5').style.display = 'none';
  //show the one div that you sent to this function
document.getElementById(var1).style.display = 'block';

} */

/* function changeIt(var1){
document.getElementByClassName('divvy1').class = '15px';
document.getElementById('divvy2').style.width = '15px';
document.getElementById('divvy3').style.width = '15px';
document.getElementById('divvy4').style.width = '15px';
document.getElementById('divvy5').style.width = '15px';
document.getElementById(var1).style.width = '100px';

}
 */
/* document.querySelector('.circleBeta').style.width = '30px';

function toggle() {
thing=getElementByID('divvy1');
if (thing.className === "thisClass thatClass thirdClass") {
thing.className === "thisClassTwo thatClass thirdClass"
}
else 
{
thing.className === "thisClass thatClass thirdClass"
}
 */


/* var var1 = document.querySelector(':root');
function change() {
  var1.style.setProperty('--animation1', 'animation2'); */

/* THIS WASN'T WORKING, SO I DID A NEW THINK */
/* let start = true;

function changeIt() {   
  const root = document.documentElement;

  if(start) {
    root.style.setProperty('--animation1', 'circleRibbon 2s linear infinite');
    start = false;  
  } else {
    root.style.setProperty('--animation1', 'circleRibbon 20s linear infinite');
    initialTheme = true;
  }
}
 */
 
let slow = true;

function changeD() {
  const root = document.documentElement;
  root.style.setProperty('--animationDuration', slow ? '2s' : '20s');
  slow = !slow;
}

let wid = true;

function changeW() {
  const root = document.documentElement;
  root.style.setProperty('--width', wid ? '1' : '15px');
  wid = !wid;
}

let hie = true;

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

/* function changeN() {
  const root = document.documentElement;
  root.style.setProperty('--animationName', nam ? 'none' : 'circleRibbon');
  nam = !nam;
} */
