"use strict";

//arrow function con dos entradas
var add = function add(a, b) {
	return a + b;
};

document.write(add(4, 8));

document.write("<p></p>");
//...............................................
var addArrow = function addArrow(a, b) {
	return a + b;
};

document.write(add(4, 9));

document.write("<p></p>");
//..............................................

var user = {
	name: 'Nashe',
	cities: ['Chihuitan', 'Chicago', ' New york'],
	printPlacesLived: function printPlacesLived() {
		//var that = this
		this.cities.forEach(function (city) {
			document.write("<p></p>");
			document.write(this.name + 'ha estado en' + city);
		}.bind(this));
	},
	happy: true
};

user.printPlacesLived();
//.................................................
document.write("<p>-----------------------</p>");
var user2 = {
	name: 'Nashe',
	cities: ['Chihuitan', 'Chicago', ' New york'],
	printPlacesLived2: function printPlacesLived2() {
		var _this = this;

		//var that = this
		this.cities.forEach(function (city) {
			document.write("<p></p>");
			document.write(_this.name + 'ha estado en' + city);
		});
	},

	happy: true
};

user2.printPlacesLived2();

//.................................................
document.write("<p>-----------------------</p>");
var user3 = {
	name: 'Nashe',
	cities: ['Chihuitan', 'Chicago', ' New york'],
	printPlacesLived3: function printPlacesLived3() {
		var cityMessages = this.cities.map(function (city) {
			return city;
		});
		return cityMessages;
	},

	happy: true
};

document.write(user3.printPlacesLived3());
