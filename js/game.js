'use strict'

// Global variables
let laps = 0;
let rounds = 0;
let wins = 0;

// push wins into these arrays to save to local storage and render on the leaderbard
let totalWinsArray = [];
let winnersArray = [];

// TODO: this needs to be parsed from local storage to be used on this page
let userCharacter = null;

// create start button event after character is chosen, countdown clock begins
document.getElementById('gameStart').addEventListener('click', startTimer);

// get data from localStorage
function pageLoad() {

	// use the key you set earlier
	let getUserCharacter = localStorage.getItem('userCharacter');

	// confirm data was returned from localStorage
	if (getUserCharacter) {
		// console.log(getUserCharacter);

		// TODO: unpack the data and change it back to JS from a string
		let parsedData = JSON.parse(getUserCharacter);
		// console.log(parsedData);

		// TODO: separate the parsed data and assign to variables?
		// what does parsedData console.log as? an array? object?
		// we need to return the saved userCharacter and playerUsername

	}
};
pageLoad();

// function to select a computer player (NOT the same character as human player, NOT secretMonkey, selected AFTER start button is pressed, before countdown)
function computerPlayer() {
	if (userCharacter === happyMonkey) {
		// randomly select between remaining monkeys
		let madNeutCoolArray = [madMonkey, neutralMonkey, coolMonkey];
		return Math.floor(Math.random() * madNeutCoolArray.length);
	}
	else if (userCharacter === madMonkey) {
		let hapNeutCoolArray = [happyMonkey, neutralMonkey, coolMonkey];
		return Math.floor(Math.random() * hapNeutCoolArray.length);
	}
	else if (userCharacter === neutralMonkey) {
		let hapMadCoolArray = [happyMonkey, madMonkey, coolMonkey];
		return Math.floor(Math.random() * hapMadCoolArray.length);
	}
	else if (userCharacter === coolMonkey) {
		let hapMadNeutArray = [happyMonkey, madMonkey, neutralMonkey];
		return Math.floor(Math.random() * hapMadNeutArray.length);
	}
	// TODO: save selection as a variable
	let computerCharacter = '';
};


// TODO: press spacebar to pause game
// not functioning
// reference/credit: https://gist.github.com/MTDdk/ab068da7021b43de0041d74657884c7a
var gamePlay = document.getElementById('player');

if (gamePlay) {
	window.addEventListener('keydown', function (event) {
		var key = event.which || event.keyCode
		if (key === 32) { // spacebar
			event.preventDefault();
			player.paused ? player.play() : player.pause()
		}
	});
};


// create countdown ID in html:
// credit: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
let timeleft = 3;
let startTimer = setInterval(function () {
	if (timeleft <= 0) {
		clearInterval(startTimer);
		document.getElementById("countdown").innerHTML = "Begin!";
	} else {
		document.getElementById("countdown").innerHTML = timeleft;
	}
	timeleft -= 1;
}, 1000);
// TODO: how to call this function? at the right time? Right time = when gameStart button is clicked / at page load for this page

// TODO: function to track laps (3 laps per round)
function trackLaps() {
	while (laps <= 3) {
		// TODO: google set timeout 
		// userCharacter.duration is one lap, laps ++;
	}
};

// function to track rounds (3 rounds per game)
function trackRounds() {
	while (rounds <= 3) {
		if (laps === 3) {
			rounds++;
		}
	}
	// this is currently set so the user wins every time. Change this with new updates to functionality :)
	if (rounds === 4) {
		if (userCharacter.duration < computerOrbit.duration) {
			wins++


			// TODO: test this popup to see if it works because I have no idea lol
			// note the changes to game.html and the changes to game.css. Style customization has NOT been added
			// reference/credit: https://stackoverflow.com/questions/40927216/how-to-create-custom-popup-without-any-click-event; 
			// https://www.w3schools.com/code/tryit.asp?filename=FACIUK0W64HW;
			var modal = document.getElementById("winPopup");
			var span = document.getElementsByClassName("closeWin")[0];
			document.addEventListener("DOMContentLoaded", function (event) {
				modal.style.display = "block";
			});
			// When the user clicks on <span> (x), close the modal
			span.onclick = function () {
				modal.style.display = "none";
			};
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};
		}
		else {
			// TODO: test this
			var modal = document.getElementById("losePopup"); 
			var span = document.getElementsByClassName("closeLose")[0];
			("DOMContentLoaded", function (event) {
				modal.style.display = "block";
			});
			span.onclick = function () {
				modal.style.display = "none";
			};
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};
		}
	}
};

// push winner username and wins to empty array
// the user wins every time, the username is automatically pushed to the array.
function saveWinner() {
	if (rounds === 4) {
		winnersArray.push(username);
		totalWinsArray.push(wins);
	}
};

// saving data to local storage
function saveUserData() {
	// pack it.. 
	let stringify = JSON.stringify(winnersArray, totalWinsArray);

	// label it ('the key') and store it
	localStorage.setItem('userData', stringify);
};
