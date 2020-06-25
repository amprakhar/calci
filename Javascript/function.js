// this function display the input number
function display(val) {
	document.getElementById("output").value+=val;
}

// this function only allow number to pass in input field
function keypress(event)
{
	var keycode = event.keyCode;
	if((keycode>41 && keycode<58) && keycode!=44) {
		return true;
	} else {
		return false;
	}
}

// this function clear the input field
function clearfield(){
	document.getElementById("output").value = "";
}

// this function evaluates and calculates the result and return the value
function calculate(){
	var x = document.getElementById("output").value;
	var y = eval(x);
	document.getElementById("output").value = y;
}