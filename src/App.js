/*babel src/App.js --out-file=public/scripts/App.js --presets=env,react --watch
change src/App.js
*/

//live-server public

//JSX se parece al html pero no lo es

//Define la variable jsx que es un parrafo, que no se exporta solo

var template = (
				<div> 
					<h1>Esto es codigo JSX y no html, esto va a cambiar en el background</h1> 
					<p>OY</p>
					<input type= "submit" value="Clickname"/>
					<ul>
						<li> Pruebalo ya</li>
						<li> Infinidad de probalilidades</li>
						<li> Otro articulo</li>
					</ul>
				</div>
				);

//String
var activo = "Estudiante activo"

//Js
var state = { 
	username: "Nashe",
	universidad: "ITISTMO",
	genero: "F",
	ciudad: "Ixtepec",
	edad: 22,

}

var Fecha =Date()

 function getUniversity(){
 	//concidional que asigna el que va despues del ?, por lo 
 	//consiguiente si es vacio y sino regresara desconocido
 	return state.universidad != "" ? state.universidad: "Desconocido"
 }


function CityIs(){
	//Inline estilo
	return <h3 style ={{color: "blue"}}>{state.ciudad}</h3>
}

 function getCity(){
 	//operador ternario
 	return state.ciudad != "" ? CityIs() : <h3> "Ciudad Desconocida" </h3>
 }

var template2 = (
				<div>
					<h1>No carga con el template1</h1>
					<h3>Encabezado 3</h3>
					<p>{state.username}</p>
					<p>{getUniversity()}</p>
					<p>{state.genero}</p>
					{getCity()}
					{(state.edad && state.edad >= 18) && <h3>Edad: {state.edad}</h3>}
					<p>Hola! La fecha es: {Fecha}</p>
				</div>
				);

//mandar a buscar el div con el id=app
var appRoot= document.getElementById("app")

//objeto de ReactDOM QUE LLEVA E PARRAFO AL INDEX
ReactDOM.render(template2, appRoot)