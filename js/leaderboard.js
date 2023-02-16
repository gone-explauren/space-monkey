'use strict'

// get data from localStorage
function pageLoad() {

	// use the key you set earlier
	let getUserData = localStorage.getItem('userData');

	// confirm data was returned from localStorage
	if (getUserData) {
		// console.log(getUserData);

		// TODO: unpack the data and change it back to JS from a string
		let parsedData = JSON.parse(getUserData);
		// console.log(parsedData);

		// TODO: separate the parsed data and assign to variables?

	}
};

pageLoad();

// renderLeaderboard function
function renderLeaderboard() {
	let winnerUsernameUL = document.createElement('ul');
	winnerUsernameUL.textContent = "Winner";
	document.getElementById('winnerUsername').appendChild(winnerUsernameUL);

	let winnerTotalWinsUL = document.createElement('ul');
	winnerTotalWinsUL.textContent = "Wins";
	document.getElementById('winnerTotalWins').appendChild(winnerTotalWinsUL);

	let winnerUsernameLI = document.createElement('li');
	// TODO: take the winnersArray out of local storage and make each i into an li
	winnerUsernameUL.appendChild(winnerUsernameLI);

	let winnerTotalWinsLI = document.createElement('li');
	// TODO: take the totalWinsArray out of local storage and meach each i into an li
	winnerTotalWinsUL.appendChild(winnerTotalWinsLI);
};

// TODO: call renderLeaderboard function when Leaderboard page loads