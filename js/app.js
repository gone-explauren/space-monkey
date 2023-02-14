'use strict'

// Global variables
let rounds = 0;
let wins = 0;

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
let neutA5 = "Oh, not enough. Thanks for the reminder."

let q11 = "Can you play an instrument?";
let coolA6 = "I'm in a rock band.";
let neutA6 = "I never learned how...";

let q12 = "How many books have you read this year?";
let hapA6 = "I've lost count!";
let madA6 = "I read the inside of my Snapple cap if that counts.";

// TODO: make sure the proper answers are rendered with each question!!
allQuestions.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12);
happyAnswers.push(hapA1, hapA2, hapA3, hapA4, hapA5, hapA6);
madAnswers.push(madA1, madA2, madA3, madA4, madA5, madA6);
neutralAnswers.push(neutA1, neutA2, neutA3, neutA4, neutA5, neutA6);
coolAnswers.push(coolA1, coolA2, coolA3, coolA4, coolA5, coolA6);


// TODO: SpaceMonkey Constructor
function SpaceMonkey(img, orbit, speed) {
	this.imgFile = img;
	this.orbitPath = orbit;
	this.spaceshipSpeed = speed;
};

// TODO: SpaceMonkey Instances
let happyMonkey = new SpaceMonkey(

);

let madMonkey = new SpaceMonkey(

);

let neutralMonkey = new SpaceMonkey(

);

let coolMonkey = new SpaceMonkey(

);

let secretMonkey = new SpaceMonkey(

);

// selectRandomQuestion function
function selectRandomQuestion() {
	return Math.floor(Math.random() * allQuestions.length);
};

// renderQuestions function
function renderQuestions() {
	let randomQuestions = [];

	while (randomQuestions.length < 8) {
		let randomQuestion = selectRandomQuestion();

		if (!randomQuestions.includes(randomQuestion)) {
			randomQuestion.push(randomQuestion);
		}
	}
	let randQ1 = randomQuestions.shift();
	let randQ2 = randomQuestions.shift();
	let randQ3 = randomQuestions.shift();
	let randQ4 = randomQuestions.shift();

	// add to the form
	let username = document.createElement('input');
	username.textContent('What is your name?');
	document.getElementById.startForm.appendChild.username;

	let q1h1 = document.createElement('h1');
	q1h1.textContent(randQ1);
	document.getElementById.startForm.appendChild(q1h1);

	let answersDiv1 = document.createElement('div');
	q1h1.appendChild(answersDiv1);

	let q2h2 = document.createElement('h2');
	q2h2.textContent(randQ2);
	document.getElementById.startForm.appendChild.q2h2;

	let answersDiv2 = document.createElement('div');
	q2h2.appendChild(answersDiv2);

	let q3h3 = document.createElement('h3');
	q3h3.textContent(randQ3);
	document.getElementById.startForm.appendChild(q3h3);

	let answersDiv3 = document.createElement('div');
	q3h3.appendChild(answersDiv3);

	let q4h4 = document.createElement('h4');
	q4h4.textContent(randQ4);
	document.getElementById.startForm.appendChild.q4h4;

	let answersDiv4 = document.createElement('div');
	q4h4.appendChild(answersDiv4);

	// populate the form with the questions and appropriate answers
	if (randQ1 === q1) {
		// q1, append coolA1, neutA1
		let q1a1 = document.createElement('li');
		q1a1.textContent(coolA1);
		answersDiv1.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent(neutA1);
		answersDiv1.appendChild(q1a2);
	}
	else if (randQ2 === q1) {
		let q1a1 = document.createElement('li');
		q1a1.textContent(coolA1);
		answersDiv2.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent(neutA1);
		answersDiv2.appendChild(q1a2);
	}
	else if (randQ3 === q1) {
		let q1a1 = document.createElement('li');
		q1a1.textContent(coolA1);
		answersDiv3.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent(neutA1);
		answersDiv3.appendChild(q1a2);
	}
	else if (randQ4 === q1) {
		let q1a1 = document.createElement('li');
		q1a1.textContent(coolA1);
		answersDiv4.appendChild(q1a1);
		let q1a2 = document.createElement('li');
		q1a2.textContent(neutA1);
		answersDiv4.appendChild(q1a2);
	}
	else if (randQ1 === q2) {
		// q2, append hapA1, neutA2
		let q2a1 = document.createElement('li');
		q2a1.textContent(hapA1);
		answersDiv1.appendChild(q2a1);
		let q2a2 = document.createElement('li');
		q2a2.textContent(neutA2);
		answersDiv1.appendChild(q2a2);
	}
	else if (randQ2 === q2) {
		let q2a1 = document.createElement('li');
		q2a1.textContent(hapA1);
		answersDiv2.appendChild(q2a1);
		let q2a2 = document.createElement('li');
		q2a2.textContent(neutA2);
		answersDiv2.appendChild(q2a2);
	}
	else if (randQ3 === q2) {
		let q2a1 = document.createElement('li');
		q2a1.textContent(hapA1);
		answersDiv3.appendChild(q2a1);
		let q2a2 = document.createElement('li');
		q2a2.textContent(neutA2);
		answersDiv3.appendChild(q2a2);
	}
	else if (randQ4 === q2) {
		let q2a1 = document.createElement('li');
		q2a1.textContent(hapA1);
		answersDiv4.appendChild(q1a1);
		let q2a2 = document.createElement('li');
		qa2.textContent(neutA2);
		answersDiv4.appendChild(q2a2);
	}
	else if (randQ1 === q3) {
		// q3, append coolA2, madA1
		let q3a1 = document.createElement('li');
		q3a1.textContent(coolA2);
		answersDiv1.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent(madA1);
		answersDiv1.appendChild(q3a2);
	}
	else if (randQ2 === q3) {
		let q3a1 = document.createElement('li');
		q3a1.textContent(coolA2);
		answersDiv2.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent(madA1);
		answersDiv2.appendChild(q3a2);
	}
	else if (randQ3 === q3) {
		let q3a1 = document.createElement('li');
		q3a1.textContent(coolA2);
		answersDiv3.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent(madA1);
		answersDiv3.appendChild(q3a2);
	}
	else if (randQ4 === q3) {
		let q3a1 = document.createElement('li');
		q3a1.textContent(coolA2);
		answersDiv4.appendChild(q3a1);
		let q3a2 = document.createElement('li');
		q3a2.textContent(madA1);
		answersDiv4.appendChild(q3a2);
	}
	else if (randQ1 === q4) {
		// q4, append hapA2, madA2
		let q4a1 = document.createElement('li');
		q4a1.textContent(hapA2);
		answersDiv1.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent(madA2);
		answersDiv1.appendChild(q4a2);
	}
	else if (randQ2 === q4) {
		let q4a1 = document.createElement('li');
		q4a1.textContent(hapA2);
		answersDiv2.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent(madA2);
		answersDiv2.appendChild(q4a2);
	}
	else if (randQ3 === q4) {
		let q4a1 = document.createElement('li');
		q4a1.textContent(hapA2);
		answersDiv3.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent(madA2);
		answersDiv3.appendChild(q4a2);
	}
	else if (randQ4 === q4) {
		let q4a1 = document.createElement('li');
		q4a1.textContent(hapA2);
		answersDiv4.appendChild(q4a1);
		let q4a2 = document.createElement('li');
		q4a2.textContent(madA2);
		answersDiv4.appendChild(q4a2);
	}
	else if (randQ1 === q5) {
		// q5, append coolA3, hapA3
		let q5a1 = document.createElement('li');
		q5a1.textContent(coolA3);
		answersDiv1.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent(hapA3);
		answersDiv1.appendChild(q5a2);
	}
	else if (randQ2 === q5) {
		let q5a1 = document.createElement('li');
		q5a1.textContent(coolA3);
		answersDiv2.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent(hapA3);
		answersDiv2.appendChild(q5a2);
	}
	else if (randQ3 === q5) {
		let q5a1 = document.createElement('li');
		q5a1.textContent(coolA3);
		answersDiv3.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent(hapA3);
		answersDiv3.appendChild(q5a2);
	}
	else if (randQ4 === q5) {
		let q5a1 = document.createElement('li');
		q5a1.textContent(coolA3);
		answersDiv4.appendChild(q5a1);
		let q5a2 = document.createElement('li');
		q5a2.textContent(hapA3);
		answersDiv4.appendChild(q5a2);
	}
	else if (randQ1 === q6) {
		// q6, append neutA3, madA3
		let q6a1 = document.createElement('li');
		q6a1.textContent(neutA3);
		answersDiv1.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent(madA3);
		answersDiv1.appendChild(q6a2);
	}
	else if (randQ2 === q6) {
		let q6a1 = document.createElement('li');
		q6a1.textContent(neutA3);
		answersDiv2.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent(madA3);
		answersDiv2.appendChild(q6a2);
	}
	else if (randQ3 === q6) {
		let q6a1 = document.createElement('li');
		q6a1.textContent(neutA3);
		answersDiv3.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent(madA3);
		answersDiv3.appendChild(q6a2);
	}
	else if (randQ4 === q6) {
		let q6a1 = document.createElement('li');
		q6a1.textContent(neutA3);
		answersDiv4.appendChild(q6a1);
		let q6a2 = document.createElement('li');
		q6a2.textContent(madA3);
		answersDiv4.appendChild(q6a2);
	}
	else if (randQ1 === q7) {
		// q7, append hapA4, coolA4
		let q7a1 = document.createElement('li');
		q7a1.textContent(hapA4);
		answersDiv1.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent(coolA4);
		answersDiv1.appendChild(q7a2);
	}
	else if (randQ2 === q7) {
		let q7a1 = document.createElement('li');
		q7a1.textContent(hapA4);
		answersDiv2.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent(coolA4);
		answersDiv2.appendChild(q7a2);
	}
	else if (randQ3 === q7) {
		let q7a1 = document.createElement('li');
		q7a1.textContent(hapA4);
		answersDiv3.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent(coolA4);
		answersDiv3.appendChild(q7a2);
	}
	else if (randQ4 === q7) {
		let q7a1 = document.createElement('li');
		q7a1.textContent(hapA4);
		answersDiv4.appendChild(q7a1);
		let q7a2 = document.createElement('li');
		q7a2.textContent(coolA4);
		answersDiv4.appendChild(q7a2);
	}
	else if (randQ1 === q8) {
		// q8, append neutA4, madA4
		let q8a1 = document.createElement('li');
		q8a1.textContent(neutA4);
		answersDiv1.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent(madA4);
		answersDiv1.appendChild(q8a2);
	}
	else if (randQ2 === q8) {
		let q8a1 = document.createElement('li');
		q8a1.textContent(neutA4);
		answersDiv2.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent(madA4);
		answersDiv2.appendChild(q8a2);
	}
	else if (randQ3 === q8) {
		let q8a1 = document.createElement('li');
		q8a1.textContent(neutA4);
		answersDiv3.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent(madA4);
		answersDiv3.appendChild(q8a2);
	}
	else if (randQ4 === q8) {
		let q8a1 = document.createElement('li');
		q8a1.textContent(neutA4);
		answersDiv4.appendChild(q8a1);
		let q8a2 = document.createElement('li');
		q8a2.textContent(madA4);
		answersDiv4.appendChild(q8a2);
	}
	else if (randQ1 === q9) {
		// q9, append coolA5, madA5
		let q9a1 = document.createElement('li');
		q9a1.textContent(coolA5);
		answersDiv1.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent(madA5);
		answersDiv1.appendChild(q9a2);
	}
	else if (randQ2 === q9) {
		let q9a1 = document.createElement('li');
		q9a1.textContent(coolA5);
		answersDiv2.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent(madA5);
		answersDiv2.appendChild(q9a2);
	}
	else if (randQ3 === q9) {
		let q9a1 = document.createElement('li');
		q9a1.textContent(coolA5);
		answersDiv3.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent(madA5);
		answersDiv3.appendChild(q9a2);
	}
	else if (randQ4 === q9) {
		let q9a1 = document.createElement('li');
		q9a1.textContent(coolA5);
		answersDiv4.appendChild(q9a1);
		let q9a2 = document.createElement('li');
		q9a2.textContent(madA5);
		answersDiv4.appendChild(q9a2);
	}
	else if (randQ1 === q10) {
		// q10, append hapA5, neutA5
		let q10a1 = document.createElement('li');
		q10a1.textContent(hapA5);
		answersDiv1.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent(neutA5);
		answersDiv1.appendChild(q10a2);
	}
	else if (randQ2 === q10) {
		let q10a1 = document.createElement('li');
		q10a1.textContent(hapA5);
		answersDiv2.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent(neutA5);
		answersDiv2.appendChild(q10a2);
	}
	else if (randQ3 === q10) {
		let q10a1 = document.createElement('li');
		q10a1.textContent(hapA5);
		answersDiv3.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent(neutA5);
		answersDiv3.appendChild(q10a2);
	}
	else if (randQ4 === q10) {
		let q10a1 = document.createElement('li');
		q10a1.textContent(hapA5);
		answersDiv4.appendChild(q10a1);
		let q10a2 = document.createElement('li');
		q10a2.textContent(neutA5);
		answersDiv4.appendChild(q10a2);
	}
	else if (randQ1 === q11) {
		// q11, append coolA6, neutA6
		let q11a1 = document.createElement('li');
		q11a1.textContent(coolA6);
		answersDiv1.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent(neutA6);
		answersDiv1.appendChild(q11a2);
	}
	else if (randQ2 === q11) {
		let q11a1 = document.createElement('li');
		q11a1.textContent(coolA6);
		answersDiv2.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent(neutA6);
		answersDiv2.appendChild(q11a2);
	}
	else if (randQ3 === q11) {
		let q11a1 = document.createElement('li');
		q11a1.textContent(coolA6);
		answersDiv3.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent(neutA6);
		answersDiv3.appendChild(q11a2);
	}
	else if (randQ4 === q11) {
		let q11a1 = document.createElement('li');
		q11a1.textContent(coolA6);
		answersDiv4.appendChild(q11a1);
		let q11a2 = document.createElement('li');
		q11a2.textContent(neutA6);
		answersDiv4.appendChild(q11a2);
	}
	else if (randQ1 === q12) {
		// q12, append hapA6, madA6
		let q12a1 = document.createElement('li');
		q12a1.textContent(hapA6);
		answersDiv1.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent(madA6);
		answersDiv1.appendChild(q12a2);
	}
	else if (randQ2 === q12) {
		let q12a1 = document.createElement('li');
		q12a1.textContent(hapA6);
		answersDiv2.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent(madA6);
		answersDiv2.appendChild(q12a2);
	}
	else if (randQ3 === q12) {
		let q12a1 = document.createElement('li');
		q12a1.textContent(hapA6);
		answersDiv3.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent(madA6);
		answersDiv3.appendChild(q12a2);
	}
	else if (randQ4 === q12) {
		let q12a1 = document.createElement('li');
		q12a1.textContent(hapA6);
		answersDiv4.appendChild(q12a1);
		let q12a2 = document.createElement('li');
		q12a2.textContent(madA6);
		answersDiv4.appendChild(q12a2);
	}
};

// TODO: add form
const characterSelectForm = document.querySelector("startForm");


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
			if ([i] === [j]) {
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
	if (happyScore > madScore && happyScore > neutralScore && happyScore > coolScore) {
		// TODO: happyMonkey	
	}
	else if (madScore > happyScore && madScore > neutralScore && madScore > coolScore) {
		// TODO: madMonkey;
	}
	else if (neutralScore > happyScore && neutralScore > madScore && neutralScore > coolScore) {
		// TODO: neutralMonkey;
	}
	else if (coolScore > happyScore && coolScore > madScore && coolScore > neutralScore) {
		// TODO: coolMonkey;
	}
	else {
		// TODO: secretMonkey;
	}
};


// saving data to local storage
function saveUserData() {
	// pack it.. 
	let stringify = JSON.stringify(username, wins);

	// label it ('the key') and store it
	localStorage.setItem('userData', stringify);
}

// get data from localStorage
function pageLoad() {

	// use the key you set earlier
	let getUserData = localStorage.getItem('userData');

	// confirm data was returned from localStorage
	if (getUserData) {
		// console.log(getUserData);

		//unpack the data and change it back to JS from a string
		let parsedData = JSON.parse(getUserData);
		// console.log(parsedData);

		// separate the parsed data and assign to variables?
	}
}
pageLoad();