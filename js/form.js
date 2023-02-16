'use strict'

let allQuestions = [];

let happyAnswers = [];
let madAnswers = [];
let neutralAnswers = [];
let coolAnswers = [];
let userAnswers = [];

// Question variables
let q1 = "Do you like to party?";
let coolA1 = "I am the party!";
let neutA1 = "Not really..";

let q2 = "How's the weather today?";
let hapA1 = "It's a beautiful day!";
let neutA2 = "Could be better.";

let q3 = "Pineapple on pizza. Thoughts?";
let coolA2 = "Delish.";
let madA1 = "Disgusting!";

let q4 = "Did you eat breakfast today?";
let hapA2 = "Yup!";
let madA2 = "Nope!";

let q5 = "Can you ride a bike?";
let coolA3 = "Like a pro!";
let hapA3 = "With the training wheels on...";

let q6 = "How did you sleep last night?";
let neutA3 = "Like a baby.";
let madA3 = "What's sleep?";

let q7 = "Truth or dare?";
let hapA4 = "Truth!";
let coolA4 = "Dare!";

let q8 = "Did you remember to make your bed this morning?";
let neutA4 = "I think so...";
let madA4 = "That's none of your business.";

let q9 = "Would you ever go skydiving?";
let coolA5 = "I go like, every weekend!";
let madA5 = "You couldn't pay me enough.";

let q10 = "How much water have you drank today?";
let hapA5 = "8 glasses and counting!";
let neutA5 = "Oh, not enough. Thanks for the reminder.";

let q11 = "Can you play an instrument?";
let coolA6 = "I'm in a rock band.";
let neutA6 = "I never learned how...";

let q12 = "How many books have you read this year?";
let hapA6 = "I've lost count!";
let madA6 = "I read the inside of my Snapple cap if that counts.";

allQuestions.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12);
happyAnswers.push(hapA1, hapA2, hapA3, hapA4, hapA5, hapA6);
madAnswers.push(madA1, madA2, madA3, madA4, madA5, madA6);
neutralAnswers.push(neutA1, neutA2, neutA3, neutA4, neutA5, neutA6);
coolAnswers.push(coolA1, coolA2, coolA3, coolA4, coolA5, coolA6);


// window to the DOM
const characterSelectForm = document.querySelector("startForm");


// selectRandomQuestion function
function selectRandomQuestion() {
	return Math.floor(Math.random() * allQuestions.length);
};

// renderQuestions function
function renderQuestions() {
	let randomQuestionsArray = [];

	while (randomQuestionsArray.length < 8) {
		let randomQuestion = selectRandomQuestion();

		if (!randomQuestionsArray.includes(randomQuestion)) {
			randomQuestionsArray.push(randomQuestion);
		}
	}
	let randQ1 = randomQuestionsArray.shift();
	let randQ2 = randomQuestionsArray.shift();
	let randQ3 = randomQuestionsArray.shift();
	let randQ4 = randomQuestionsArray.shift();
	// TODO: how do I turn this into the question and not just a number?
	let randQ1Var = allQuestions[randQ1];
	let randQ2Var = allQuestions[randQ2];
	let randQ3Var = allQuestions[randQ3];
	let randQ4Var = allQuestions[randQ4];
	console.log(randQ1Var, randQ2Var, randQ3Var, randQ4Var);


	// add to the form
	let username = document.createElement('input');
	username.id = 'usernameSubmit';
	username.textContent = 'What is your name?';
	document.getElementById('getusername').appendChild(username);
	// how do I get this username from the answer?
	let playerUsername = '';

	let q1h1 = document.createElement('h1');
	q1h1.textContent = randQ1Var;
	document.getElementById('questionone').appendChild(q1h1);

	let answersDiv1 = document.createElement('ul');
	document.getElementById('questionOne').appendChild(answersDiv1);

	let q2h2 = document.createElement('h2');
	q2h2.textContent = randQ2Var;
	document.getElementById('questiontwo').appendChild(q2h2);

	let answersDiv2 = document.createElement('ul');
	document.getElementById('questionTwo').appendChild(answersDiv2);

	let q3h3 = document.createElement('h3');
	q3h3.textContent = randQ3Var;
	document.getElementById('questionthree').appendChild(q3h3);

	let answersDiv3 = document.createElement('ul');
	document.getElementById('questionThree').appendChild(answersDiv3);

	let q4h4 = document.createElement('h4');
	q4h4.textContent = randQ4Var;
	document.getElementById('questionfour').appendChild(q4h4);

	let answersDiv4 = document.createElement('ul');
	document.getElementById('questionFour').appendChild(answersDiv4);

	// populate the form with the questions and appropriate answers
	if (randQ1Var === q1) {
		// q1, append coolA1, neutA1
		let q1a1 = document.createElement('li');
		q1a1.textContent=coolA1;
		answersDiv1.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent=neutA1;
		answersDiv1.appendChild(q1a2);
	}
	else if (randQ2Var === q1) {
		let q1a1 = document.createElement('li');
		q1a1.textContent=coolA1;
		answersDiv2.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent=neutA1;
		answersDiv2.appendChild(q1a2);
	}
	else if (randQ3Var === q1) {
		let q1a1 = document.createElement('li');
		q1a1.textContent=coolA1;
		answersDiv3.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent=neutA1;
		answersDiv3.appendChild(q1a2);
	}
	else if (randQ4Var === q1) {
		let q1a1 = document.createElement('li');
		q1a1.textContent=coolA1;
		answersDiv4.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent=neutA1;
		answersDiv4.appendChild(q1a2);
	}
	else if (randQ1Var === q2) {
		// q2, append hapA1, neutA2
		let q2a1 = document.createElement('li');
		q2a1.textContent=hapA1;
		answersDiv1.appendChild(q2a1);
		let q2a2 = document.createElement('li');
		q2a2.textContent=neutA2;
		answersDiv1.appendChild(q2a2);
	}
	else if (randQ2Var === q2) {
		let q2a1 = document.createElement('li');
		q2a1.textContent=hapA1;
		answersDiv2.appendChild(q2a1);
		let q2a2 = document.createElement('li');
		q2a2.textContent=neutA2;
		answersDiv2.appendChild(q2a2);
	}
	else if (randQ3Var === q2) {
		let q2a1 = document.createElement('li');
		q2a1.textContent=hapA1;
		answersDiv3.appendChild(q2a1);
		let q2a2 = document.createElement('li');
		q2a2.textContent=neutA2;
		answersDiv3.appendChild(q2a2);
	}
	else if (randQ4Var === q2) {
		let q2a1 = document.createElement('li');
		q2a1.textContent=hapA1;
		answersDiv4.appendChild(q1a1);
		let q2a2 = document.createElement('li');
		qa2.textContent=neutA2;
		answersDiv4.appendChild(q2a2);
	}
	else if (randQ1Var === q3) {
		// q3, append coolA2, madA1
		let q3a1 = document.createElement('li');
		q3a1.textContent=coolA2;
		answersDiv1.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent=madA1;
		answersDiv1.appendChild(q3a2);
	}
	else if (randQ2Var === q3) {
		let q3a1 = document.createElement('li');
		q3a1.textContent=coolA2;
		answersDiv2.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent=madA1;
		answersDiv2.appendChild(q3a2);
	}
	else if (randQ3Var === q3) {
		let q3a1 = document.createElement('li');
		q3a1.textContent=coolA2;
		answersDiv3.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent=madA1;
		answersDiv3.appendChild(q3a2);
	}
	else if (randQ4Var === q3) {
		let q3a1 = document.createElement('li');
		q3a1.textContent=coolA2;
		answersDiv4.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent=madA1;
		answersDiv4.appendChild(q3a2);
	}
	else if (randQ1Var === q4) {
		// q4, append hapA2, madA2
		let q4a1 = document.createElement('li');
		q4a1.textContent=hapA2;
		answersDiv1.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent=madA2;
		answersDiv1.appendChild(q4a2);
	}
	else if (randQ2Var === q4) {
		let q4a1 = document.createElement('li');
		q4a1.textContent=hapA2;
		answersDiv2.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent=madA2;
		answersDiv2.appendChild(q4a2);
	}
	else if (randQ3Var === q4) {
		let q4a1 = document.createElement('li');
		q4a1.textContent=hapA2;
		answersDiv3.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent=madA2;
		answersDiv3.appendChild(q4a2);
	}
	else if (randQ4Var === q4) {
		let q4a1 = document.createElement('li');
		q4a1.textContent=hapA2;
		answersDiv4.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent=madA2;
		answersDiv4.appendChild(q4a2);
	}
	else if (randQ1Var === q5) {
		// q5, append coolA3, hapA3
		let q5a1 = document.createElement('li');
		q5a1.textContent=coolA3;
		answersDiv1.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent=hapA3;
		answersDiv1.appendChild(q5a2);
	}
	else if (randQ2Var === q5) {
		let q5a1 = document.createElement('li');
		q5a1.textContent=coolA3;
		answersDiv2.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent=hapA3;
		answersDiv2.appendChild(q5a2);
	}
	else if (randQ3Var === q5) {
		let q5a1 = document.createElement('li');
		q5a1.textContent=coolA3;
		answersDiv3.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent=hapA3;
		answersDiv3.appendChild(q5a2);
	}
	else if (randQ4Var === q5) {
		let q5a1 = document.createElement('li');
		q5a1.textContent=coolA3;
		answersDiv4.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent=hapA3;
		answersDiv4.appendChild(q5a2);
	}
	else if (randQ1Var === q6) {
		// q6, append neutA3, madA3
		let q6a1 = document.createElement('li');
		q6a1.textContent=neutA3;
		answersDiv1.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent=madA3;
		answersDiv1.appendChild(q6a2);
	}
	else if (randQ2Var === q6) {
		let q6a1 = document.createElement('li');
		q6a1.textContent=neutA3;
		answersDiv2.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent=madA3;
		answersDiv2.appendChild(q6a2);
	}
	else if (randQ3Var === q6) {
		let q6a1 = document.createElement('li');
		q6a1.textContent=neutA3;
		answersDiv3.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent=madA3;
		answersDiv3.appendChild(q6a2);
	}
	else if (randQ4Var === q6) {
		let q6a1 = document.createElement('li');
		q6a1.textContent=neutA3;
		answersDiv4.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent=madA3;
		answersDiv4.appendChild(q6a2);
	}
	else if (randQ1Var === q7) {
		// q7, append hapA4, coolA4
		let q7a1 = document.createElement('li');
		q7a1.textContent=hapA4;
		answersDiv1.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent=coolA4;
		answersDiv1.appendChild(q7a2);
	}
	else if (randQ2Var === q7) {
		let q7a1 = document.createElement('li');
		q7a1.textContent=hapA4;
		answersDiv2.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent=coolA4;
		answersDiv2.appendChild(q7a2);
	}
	else if (randQ3Var === q7) {
		let q7a1 = document.createElement('li');
		q7a1.textContent=hapA4;
		answersDiv3.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent=coolA4;
		answersDiv3.appendChild(q7a2);
	}
	else if (randQ4Var === q7) {
		let q7a1 = document.createElement('li');
		q7a1.textContent=hapA4;
		answersDiv4.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent=coolA4;
		answersDiv4.appendChild(q7a2);
	}
	else if (randQ1Var === q8) {
		// q8, append neutA4, madA4
		let q8a1 = document.createElement('li');
		q8a1.textContent=neutA4;
		answersDiv1.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent=madA4;
		answersDiv1.appendChild(q8a2);
	}
	else if (randQ2Var === q8) {
		let q8a1 = document.createElement('li');
		q8a1.textContent=neutA4;
		answersDiv2.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent=madA4;
		answersDiv2.appendChild(q8a2);
	}
	else if (randQ3Var === q8) {
		let q8a1 = document.createElement('li');
		q8a1.textContent=neutA4;
		answersDiv3.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent=madA4;
		answersDiv3.appendChild(q8a2);
	}
	else if (randQ4Var === q8) {
		let q8a1 = document.createElement('li');
		q8a1.textContent=neutA4;
		answersDiv4.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent=madA4;
		answersDiv4.appendChild(q8a2);
	}
	else if (randQ1Var === q9) {
		// q9, append coolA5, madA5
		let q9a1 = document.createElement('li');
		q9a1.textContent=coolA5;
		answersDiv1.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent=madA5;
		answersDiv1.appendChild(q9a2);
	}
	else if (randQ2Var === q9) {
		let q9a1 = document.createElement('li');
		q9a1.textContent=coolA5;
		answersDiv2.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent=madA5;
		answersDiv2.appendChild(q9a2);
	}
	else if (randQ3Var === q9) {
		let q9a1 = document.createElement('li');
		q9a1.textContent=coolA5;
		answersDiv3.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent=madA5;
		answersDiv3.appendChild(q9a2);
	}
	else if (randQ4Var === q9) {
		let q9a1 = document.createElement('li');
		q9a1.textContent=coolA5;
		answersDiv4.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent=madA5;
		answersDiv4.appendChild(q9a2);
	}
	else if (randQ1Var === q10) {
		// q10, append hapA5, neutA5
		let q10a1 = document.createElement('li');
		q10a1.textContent=hapA5;
		answersDiv1.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent=neutA5;
		answersDiv1.appendChild(q10a2);
	}
	else if (randQ2Var === q10) {
		let q10a1 = document.createElement('li');
		q10a1.textContent=hapA5;
		answersDiv2.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent=neutA5;
		answersDiv2.appendChild(q10a2);
	}
	else if (randQ3Var === q10) {
		let q10a1 = document.createElement('li');
		q10a1.textContent=hapA5;
		answersDiv3.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent=neutA5;
		answersDiv3.appendChild(q10a2);
	}
	else if (randQ4Var === q10) {
		let q10a1 = document.createElement('li');
		q10a1.textContent=hapA5;
		answersDiv4.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent=neutA5;
		answersDiv4.appendChild(q10a2);
	}
	else if (randQ1Var === q11) {
		// q11, append coolA6, neutA6
		let q11a1 = document.createElement('li');
		q11a1.textContent=coolA6;
		answersDiv1.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent=neutA6;
		answersDiv1.appendChild(q11a2);
	}
	else if (randQ2Var === q11) {
		let q11a1 = document.createElement('li');
		q11a1.textContent=coolA6;
		answersDiv2.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent=neutA6;
		answersDiv2.appendChild(q11a2);
	}
	else if (randQ3Var === q11) {
		let q11a1 = document.createElement('li');
		q11a1.textContent=coolA6;
		answersDiv3.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent=neutA6;
		answersDiv3.appendChild(q11a2);
	}
	else if (randQ4Var === q11) {
		let q11a1 = document.createElement('li');
		q11a1.textContent=coolA6;
		answersDiv4.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent=neutA6;
		answersDiv4.appendChild(q11a2);
	}
	else if (randQ1Var === q12) {
		// q12, append hapA6, madA6
		let q12a1 = document.createElement('li');
		q12a1.textContent=hapA6;
		answersDiv1.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent=madA6;
		answersDiv1.appendChild(q12a2);
	}
	else if (randQ2Var === q12) {
		let q12a1 = document.createElement('li');
		q12a1.textContent=hapA6;
		answersDiv2.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent=madA6;
		answersDiv2.appendChild(q12a2);
	}
	else if (randQ3Var === q12) {
		let q12a1 = document.createElement('li');
		q12a1.textContent=hapA6;
		answersDiv3.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent=madA6;
		answersDiv3.appendChild(q12a2);
	}
	else if (randQ4Var === q12) {
		let q12a1 = document.createElement('li');
		q12a1.textContent=hapA6;
		answersDiv4.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent=madA6;
		answersDiv4.appendChild(q12a2);
	}
  return playerUsername;
};

// render the form and all questions when Start button is clicked
// document.getElementById('pressStart').addEventListener('click', renderQuestions);
function pageLoad() {
	renderQuestions();
};
pageLoad();




// selectCharacter function
function selectCharacter() {
	let happyScore = 0;
	let madScore = 0;
	let neutralScore = 0;
	let coolScore = 0;

	for (let i = 0; i < userAnswers.length; i++) {

		for (let j = 0; j < happyAnswers.length; j++) {
			if (userAnswers[i] === happyAnswers[j]) {
				happyScore++
			};
		};
		for (let j = 0; j < madAnswers.length; j++) {
			if (userAnswers[i] === madAnswers[j]) {
				madScore++
			};
		};
		for (let j = 0; j < neutralAnswers.length; j++) {
			if (userAnswers[i] === neutralAnswers[j]) {
				neutralScore++
			};
		};
		for (let j = 0; j < coolAnswers.length; j++) {
			if (userAnswers[i] === coolAnswers[j]) {
				coolScore++
			};
		};
	}
	// Create object literal of character scores...
	return {
		coolScore: coolScore,
		neutralScore: neutralScore,
		madScore: madScore,
		happyScore: happyScore
	}
};


function renderMonkey() {
	// function SpaceMonkey(name, img, duration, width, height)
	let name, img, duration, width, height;
	if (happyScore > madScore && happyScore > neutralScore && happyScore > coolScore) {
		// let happyMonkey = new SpaceMonkey('pass in values');
		name = 'happyMonkey';
		img = 'img/Happy.png';
		duration = '10s';
		width = 'width';
		height = 'height';
	}
	else if (madScore > happyScore && madScore > neutralScore && madScore > coolScore) {
		name = 'madMonkey';
		img = 'img/Mad.png';
		duration = '15s';
		width = 'width';
		height = 'height';
	}
	else if (neutralScore > happyScore && neutralScore > madScore && neutralScore > coolScore) {
		name = 'neutralMonkey';
		img = 'img/Neutral.png';
		duration = '17s';
		width = 'width';
		height = 'height';
	}
	else if (coolScore > happyScore && coolScore > madScore && coolScore > neutralScore) {
		name = 'coolMonkey';
		img = 'img/Cool.png';
		duration = '12s';
		width = 'width';
		height = 'height';
	}
	else {
		// happyMonkey placeholder
		name = 'happyMonkey';
		img = 'img/Happy.png';
		duration = '10s';
		width = 'width';
		height = 'height';
		// secretMonkey stretch goal
		// name = 'secretMonkey';
		// img = 'img/Secret.png';
		// duration = '8s';
		// width = 'width';
		// height = 'height';
	}
	// save selection as a variable
	let userCharacter = SpaceMonkey(name, img, duration, width, height);
	// invoke the methods on userCharacter
	// userCharacter.setOribit();
	return userCharacter;
};

function handleSubmit(event) {
	event.preventDefault();
	console.log('handleSubmit is firing');

	let userCharacter = renderMonkey();

	let playerUsername = document.getElementById('usernameSubmit').value.toLowerCase();
	// console.log(playerUsername)

	saveUserData(playerUsername, userCharacter);

	// TODO: change to game page, load next page
};

document.getElementById('startGame').addEventListener('submit', handleSubmit);

// saving data to local storage
function saveUserData(userCharacter, playerUsername) {
	// pack it.. 
	let stringifyCharacter = JSON.stringify(userCharacter); 
	let stringifyUsername = JSON.stringify(playerUsername);
	
	// label it ('the key') and store it
	localStorage.setItem('userCharacter', stringifyCharacter);
	localStorage.setItem('playerUsername', stringifyUsername);
};

document.getElementById('formListener').addEventListener('submit', handleSubmit);

// call set orbit on game page,