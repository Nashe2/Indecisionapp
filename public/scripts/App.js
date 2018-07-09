"use strict";

/*babel src/App.js --out-file=public/scripts/App.js --presets=env,react --watch
change src/App.js
*/

//live-server public

//JSX se parece al html pero no lo es

//Define la variable jsx que es un parrafo, que no se exporta solo

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Esto es codigo JSX y no html, esto va a cambiar en el background"
	),
	React.createElement(
		"p",
		null,
		"OY"
	),
	React.createElement("input", { type: "submit", value: "Clickname" }),
	React.createElement(
		"ul",
		null,
		React.createElement(
			"li",
			null,
			" Pruebalo ya"
		),
		React.createElement(
			"li",
			null,
			" Infinidad de probalilidades"
		),
		React.createElement(
			"li",
			null,
			" Otro articulo"
		)
	)
);

//String
var activo = "Estudiante activo";

//Js
var state = {
	username: "Nashe",
	universidad: "ITISTMO",
	genero: "F",
	ciudad: "Ixtepec"

};

var Fecha = Date();

function getUniversity() {
	//concidional que asigna el que va despues del ?, por lo 
	//consiguiente si es vacio y sino regresara desconocido
	return state.universidad != "" ? state.universidad : "Desconocido";
}

function CityIs() {
	return React.createElement(
		"h3",
		{ style: { color: "blue" } },
		state.ciudad
	);
}

function getCity() {
	return state.ciudad != "" ? CityIs() : "Ciudad Desconocida";
}

var template2 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"No carga con el template1"
	),
	React.createElement(
		"h3",
		null,
		"Encabezado 3"
	),
	React.createElement(
		"p",
		null,
		state.username
	),
	React.createElement(
		"p",
		null,
		getUniversity()
	),
	React.createElement(
		"p",
		null,
		state.genero
	),
	getCity(),
	React.createElement(
		"p",
		null,
		"Hola! La fecha es: ",
		Fecha
	)
);

//mandar a buscar el div con el id=app
var appRoot = document.getElementById("app");

//objeto de ReactDOM QUE LLEVA E PARRAFO AL INDEX
ReactDOM.render(template2, appRoot);
