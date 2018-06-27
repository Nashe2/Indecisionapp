console.log("App.js esta funcionando")

//JSX se parece al html pero no lo es

//Define la variable jsx que es un parrafo, que no se exporta solo
//Esto es BABEL
var template = React.createElement(
  "p",
  null,
  " Esto es JSX no html,viene de App.js"
);

//mandar a buscar el div con el id=app
var appRoot= document.getElementById("app")

//objeto de ReactDOM QUE LLEVA E PARRAFO AL INDEX
ReactDOM.render(template, appRoot)