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

	// TODO: populate the form with the questions and appropriate answers
	if (randQ1 === q1 || randQ2 === q1 || randQ3 === q1 || randQ4 === q1){
		// append Q1, coolA1, neutA1
	}
	else if (randQ1 === q2 || randQ2 === q2 || randQ3 === q2 || randQ4 === q2){
		// append Q2, hapA1, neutA2
	}
	else if (randQ1 === q3 || randQ2 === q3 || randQ3 === q3 || randQ4 === q3){
		// append Q3, coolA2, madA1
	}
	else if (randQ1 === q4 || randQ2 === q4 || randQ3 === q4 || randQ4 === q4){
		// append Q4, hapA2, madA2
	}
	else if (randQ1 === q5 || randQ2 === q5 || randQ3 === q5 || randQ4 === q5){
		// append Q5, coolA3, hapA3
	}
	else if (randQ1 === q6 || randQ2 === q6 || randQ3 === q6 || randQ4 === q6){
		// append Q6, neutA3, madA3
	}
	else if (randQ1 === q7 || randQ2 === q7 || randQ3 === q7 || randQ4 === q7){
		// append Q7, hapA4, coolA4
	}
	else if (randQ1 === q8 || randQ2 === q8 || randQ3 === q8 || randQ4 === q8){
		// append Q8, neutA4, madA4
	}
	else if (randQ1 === q9 || randQ2 === q9 || randQ3 === q9 || randQ4 === q9){
		// append Q9, coolA5, madA5
	}
	else if (randQ1 === q10 || randQ2 === q10 || randQ3 === q10 || randQ4 === q10){
		// append Q10, hapA5, neutA5
	}
	else if (randQ1 === q11 || randQ2 === q11 || randQ3 === q11 || randQ4 === q11){
		// append Q11, coolA6, neutA6
	}
	else if (randQ1 === q12 || randQ2 === q12 || randQ3 === q12 || randQ4 === q12){
		// append Q12, hapA6, madA6
	}
};

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
