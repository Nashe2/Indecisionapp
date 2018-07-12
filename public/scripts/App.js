"use strict";

document.write("hello");

document.write("<p></p>");

var nameVar = "Paola";
nameVar = "Osorio";
document.write(nameVar);

document.write("<p></p>");

//no se puede repetir la constante pero si renombrarla
var nameLet = "Nashely";
nameLet = "Mari";
document.write(nameLet);

document.write("<p></p>");

//no se puede repetir la constante ni renombrarla
var nameConst = "Coo";
document.write(nameConst);

document.write("<p></p>");

//Desde una funcion Variable........................................
function getPetName() {
	var petName = "Pelusa";
	return petName;
}

//Desde una funcion
var petName = getPetName();
document.write(petName);

document.write("<p></p>");

//Desde una funcion Constante....................................
function getPetName() {
	var petName = "Baby";
	return petName;
}

//Desde una funcion
var petName2 = getPetName();
document.write(petName2);

var FullName = "Paola Nashely Osorio Guzman";

if (FullName) {
	var firstName = FullName.split(' ');
	for (var i = 0; i < firstName.length; i++) {
		document.write("<p>------</p>");
		document.write(firstName[i]);
	}
}

//..............................................................
document.write("<p></p>");

var email = "gilskis.zuzu@come.com";

function emailVerification(email) {
	var emailArroba = email.split("@");

	try {
		var emailPunto = emailArroba[1].split(".");
	} catch (Exeption) {
		return false;
	}
	console.log(emailPunto);
	var existeDomino = false;
	var existeExtencion = false;

	if (emailPunto[0] == "gmail" || emailPunto[0] == "hotmail" || emailPunto[0] == "outlook" || emailPunto[0] == "yahoo") {
		return false;
	}

	var extension = emailPunto.pop();
	if (extension == "com" || extension == "edu" || extension == "mx" || extension == "es") {
		existeExtencion = true;
	}
	return existeDomino && existeExtencion && true;
}

var emailVerdadero = emailVerification(email);

if (emailVerdadero == true) {
	document.write("Si es un correo valido");
} else {
	document.write("No es un correo Valido");
}
