/*babel src/App.js --out-file=public/scripts/App.js --presets=env,react --watch
change src/App.js
*/

//live-server public

//JSX se parece al html pero no lo es

//Define la variable jsx que es un parrafo, que no se exporta solo

const template = (
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

//........................
const multiJson ={
	multiplo: 3,
	multiplicados: [1,2,3,4,5,6,7,8],
	timesFunction(){
		return this.multiplicados.map((number) => <li>{number * this.multiplo}</li>)
	}
}
//........................
const template2 = (
				<div>
					<h1>No carga con el template1</h1>
					<ul>
						<li>Encabezado 3</li>
						<li>{state.username}</li>
						<li>{getUniversity()}</li>
						<li>{state.genero}</li>
						{multiJson.timesFunction()}
						<li>{(state.edad && state.edad >= 18) && <h3>Edad: {state.edad}</h3>}</li>
					</ul>
					{getCity()}
					<p>Hola! La fecha es: {Fecha}</p>
				</div>
				);

//mandar a buscar el div con el id=app
const appRoot= document.getElementById("app")

//objeto de ReactDOM QUE LLEVA E PARRAFO AL INDEX
ReactDOM.render(template2, appRoot)