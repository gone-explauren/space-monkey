'use strict'

// SpaceMonkey Constructor
function SpaceMonkey(name, img, duration, width, height) {
	this.name = name
	this.img = img;
	this.orbitDuration = duration;
	this.orbitWidth = width;
	this.orbitHeight = height;
};

// use DOM manipulation to attch a monkey to an orbit using a prototype method
SpaceMonkey.prototype.setOribit = function() {
	document.getElementById('userImage').style.backgroundImage = `url${this.img}`;
	document.getElementById('userOrbit').style.animationDuration = this.duration;
	document.getElementById('userOrbit').style.width = this.width;
	document.getElementById('userOrbit').style.height = this.height;
}