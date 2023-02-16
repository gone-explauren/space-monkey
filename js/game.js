'use strict'

// Global variables
let laps = 0;
let rounds = 0;
let wins = 0;

// push wins into these arrays to save to local storage and render on the leaderbard
let totalWinsArray = [];
let winnersArray = [];

// TODO: create start button event after character is chosen, countdown clock begins
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

	}
};
pageLoad();

// TODO: function to select a computer player (NOT the same character as human player, NOT secretMonkey, selected AFTER start button is pressed, before countdown)
function computerPlayer() {
	if (userCharacter === happyMonkey){
		// randomly select between remaining monkeys
		let madNeutCoolArray = [madMonkey, neutralMonkey, coolMonkey];
		return Math.floor(Math.random() * madNeutCoolArray.length);
	}
	else if (userCharacter === madMonkey){
		let hapNeutCoolArray = [happyMonkey, neutralMonkey, coolMonkey];
		return Math.floor(Math.random() * hapNeutCoolArray.length);
	}
	else if (userCharacter === neutralMonkey){
		let hapMadCoolArray = [happyMonkey, madMonkey, coolMonkey];
		return Math.floor(Math.random() * hapMadCoolArray.length);
	}
	else if (userCharacter === coolMonkey){
		let hapMadNeutArray = [happyMonkey, madMonkey, neutralMonkey];
		return Math.floor(Math.random() * hapMadNeutArray.length);
	}
	// TODO: save selection as a variable
	let computerCharacter = '';
};


// TODO: press spacebar to pause game
// credit: https://gist.github.com/MTDdk/ab068da7021b43de0041d74657884c7a

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


// TODO: create countdown ID in html: <div id="countdown"></div>
// credit: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
let timeleft = 3;
let startTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(startTimer);
    document.getElementById("countdown").innerHTML = "Begin!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
// TODO: how to call this function? at the right time? Right time = when gameStart button is clicked

// TODO: function to track laps (3 laps per round)
function trackLaps() {
	while (laps <= 3) {
		// laps ++ when the characters pass a certain point
	}
};

// TODO: function to track rounds (3 rounds per game)
function trackRounds() {
	while (rounds <= 3) {
		if (laps === 3) {
			rounds ++;
		}
	}
	if (rounds === 4) {
		// if (userCharacter wins?) {
		//	wins ++
		// }
		// else {
			// display "too bad" message
		// }
	}
};

// TODO: push winner username and wins to empty array
function saveWinner() {
	// if (userCharacter wins) {
		// winnersArray.push(username);
		// totalWinsArray.push(wins);
	//	}
};

// saving data to local storage
function saveUserData() {
	// pack it.. 
	let stringify = JSON.stringify(winnersArray, totalWinsArray);

	// label it ('the key') and store it
	localStorage.setItem('userData', stringify);
};
