const square =function (x){
	return x * x
}

var squareNumber = square(2)
document.write(squareNumber)

// ...................................ES6

document.write("<p></p>")
const squareArrow =(x) =>{
	return x * x
}
 
 document.write(squareArrow(2))
//........................................
 document.write("<p></p>")

//si la funcion solo regresa un valor, se puede hacer en una sola línea
 const getFirstName = (fullName) => fullName.split("")[0]
  document.write(getFirstName("Paola Nashely Osorio Guzman"))

  //......................................

  