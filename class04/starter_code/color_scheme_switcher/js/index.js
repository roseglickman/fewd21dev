$( document ).ready(function() {
	$('#grayButton').click(switchGray)
	$('#whiteButton').click(switchWhite)

	function switchGray(){
		$('body').css("background-color", "gray")
	}
	function switchWhite(){
		$('body').css("background-color", "white")
	}    

	//console.log( "ready!" );
});

// // On click white button set colors white
// document.getElementById('whiteButton').onclick = switchToWhite;
// // On click grey button set colors grey
// document.getElementById('grayButton').onclick = switchToGray;


// // function to make colors white
// function switchToWhite(){
// 		// change background
// 		document.body.style.backgroundColor = "white";
// 		// change text colors
// 		document.body.style.color = "black";

// }

// // function to make colors grey
// function switchToGray(){
// 		// change background
// 		document.body.style.backgroundColor = "gray"
// 		// change text colors
// 		document.body.style.color = "white"
// }