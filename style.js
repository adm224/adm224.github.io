function showIt(var1){
	//hide the one div that is shown by hiding all
document.getElementById('divvy1').style.display = 'none';
document.getElementById('divvy2').style.display = 'none';
document.getElementById('divvy3').style.display = 'none';
document.getElementById('divvy4').style.display = 'none';
document.getElementById('divvy5').style.display = 'none';
	//show the one div that you sent to this function
document.getElementById(var1).style.display = 'block';

}
