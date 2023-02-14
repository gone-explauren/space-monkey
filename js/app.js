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

//make sure the proper answers are rendered with each question
allQuestions.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12);
happyAnswers.push(hapA1, hapA2, hapA3, hapA4, hapA5, hapA6);
madAnswers.push(madA1, madA2, madA3, madA4, madA5, madA6);
neutralAnswers.push(neutA1, neutA2, neutA3, neutA4, neutA5, neutA6);
coolAnswers.push(coolA1, coolA2, coolA3, coolA4, coolA5, coolA6);


// SpaceMonkey Constructor
function SpaceMonkey(img, orbit, speed) {
	this.imgFile = img;
	this.orbitPath = orbit;
	this.spaceshipSpeed = speed;
};

// SpaceMonkey Instances
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

	//populate the form with the questions and appropriate answers
	
};

// selectCharacter function
function selectCharacter() {
	let happyScore = 0;
	let madScore = 0;
	let neutralScore = 0;
	let coolScore = 0;

	for (let i = 0; i < userAnswers.length; i++) {

		for (let j = 0; j < happyAnswers; j++) {
			if (i === j) {
				happyScore++
			};
		};
		for (let j = 0; j < madAnswers; j++) {
			if (i === j) {
				madScore++
			};
		};
		for (let j = 0; j < neutralAnswers; j++) {
			if (i === j) {
				neutralScore++
			};
		};
		for (let j = 0; j < coolAnswers; j++) {
			if (i === j) {
				coolScore++
			};
		};
	}

	if (happyScore > madScore && happyScore > neutralScore && happyScore > coolScore) {
	// create a function for rendering the monkeys
	renderHappyMonkey;
	}
	else if (madScore > happyScore && madScore > neutralScore && madScore > coolScore) {
	renderMadMonkey;
	}
	else if (neutralScore > happyScore && neutralScore > madScore && neutralScore > coolScore) {
	renderNeutralMonkey;
	}
	else if (coolScore > happyScore && coolScore > madScore && coolScore > neutralScore) {
	renderCoolMonkey;
	}
	else {
	renderSecretMonkey;
	}
};
