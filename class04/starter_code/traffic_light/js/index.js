$( document ).ready(function() {
	$("#stopButton").click(illuminateRed)
	$("#slowButton").click(illuminateYellow)
	$("#goButton").click(illuminateGreen)

	function illuminateRed() {
		clearlights();
		$('#stopLight').css("background-color", "red");
	}

	function illuminateYellow() {
		clearlights();
		$('#slowLight').css("background-color", "yellow");
	}

	function illuminateGreen() {
		clearlights();
		$('#goLight').css("background-color", "green");
	}

	function clearlights() {
		$('#slowLight').css("background-color", "black");
  		$('#goLight').css("background-color", "black");
  		$('#stopLight').css("background-color", "black");
	}
});

// // On click stop button set only first circle red
// document.getElementById('stopButton').onclick = illuminateRed;
// // On click stop button set only second circle yellow
// document.getElementById('slowButton').onclick = illuminateYellow;
// // On click stop button set only third circle green
// document.getElementById('goButton').onclick = illuminateGreen;


// // function to make first circle red
// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// // function to make second circle yellow
// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// // function to make third circle green
// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// function clearLights() {
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
//   document.getElementById('stopLight').style.backgroundColor = "black";
// }
