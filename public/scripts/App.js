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
	ciudad: "Ixtepec",
	edad: 22

};

var Fecha = Date();

function getUniversity() {
	//concidional que asigna el que va despues del ?, por lo 
	//consiguiente si es vacio y sino regresara desconocido
	return state.universidad != "" ? state.universidad : "Desconocido";
}

function CityIs() {
	//Inline estilo
	return React.createElement(
		"h3",
		{ style: { color: "blue" } },
		state.ciudad
	);
}

function getCity() {
	//operador ternario
	return state.ciudad != "" ? CityIs() : React.createElement(
		"h3",
		null,
		" \"Ciudad Desconocida\" "
	);
}

//........................
var multiJson = {
	multiplo: 3,
	multiplicados: [1, 2, 3, 4, 5, 6, 7, 8],
	timesFunction: function timesFunction() {
		var _this = this;

		return this.multiplicados.map(function (number) {
			return React.createElement(
				"li",
				null,
				number * _this.multiplo
			);
		});
	}
};
//........................
var template2 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"No carga con el template1"
	),
	React.createElement(
		"ul",
		null,
		React.createElement(
			"li",
			null,
			"Encabezado 3"
		),
		React.createElement(
			"li",
			null,
			state.username
		),
		React.createElement(
			"li",
			null,
			getUniversity()
		),
		React.createElement(
			"li",
			null,
			state.genero
		),
		multiJson.timesFunction(),
		React.createElement(
			"li",
			null,
			state.edad && state.edad >= 18 && React.createElement(
				"h3",
				null,
				"Edad: ",
				state.edad
			)
		)
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
