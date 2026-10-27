//1
// function saludar(){
//   // return "Hola" 
//}
//const Saludo = saludar()
//console.log(saludar())

const { useCallback } = require("react")

/*
2
const nombre = "Martin"

function saludoNombre(nombre){
    return `Hola ${nombre} bienvanido`
}

console.log(saludoNombre(nombre))*/

//edad = 25
//function esMayor(edad){
//if(edad>=18){
  //  return "Es mayor"
//}
//else{
  //  return "Es menor"
//}
//}  
//onsole.log (esMayor(edad))

//function verdadero(edad){
 //   return true <18

//}
//console.log(verdadero())

   // const verificarEdad = (edad)=>{
    //if (edad>18){
   //     return "Es mayor "
    //}
    //else {
     //   return "Es menor"
    //}
    //}
    //console.log(verificarEdad(16))

//const dosPArametros = (a , b)=>{
  //  if (a>b){
    //    return `${a} es mayor a ${b}`
    //}
    //else if (a==b){
      //  return `${a} es igual a ${b}` 
    //}
    //else{
     //   return `${a} es mas chico que ${b}`
    //}

//}    
//console.log(dosPArametros(5,10))

/*
const suma = (num1,num2)=>{
  let resultado=  num1+num2
  console.log(`La suma es ${resultado}`) 
}
const resta= (a,b)=>{
  let resultado = a-b
  console.log(`La resta es ${resultado}`)
}

const operacion = (n1,n2,Callback)=>{
  Callback(n1,n2)
}

operacion(5,8,suma)
operacion(5,8, resta)
*/
const suma = (num1,num2)=>{
  
  if(typeof num1 === 'string'  || typeof num2=== 'string'){
    console.log("No se puede debe ingresar numero")
  }
  else{
    let resultado = num1+num2
    console.log(`La suma es ${resultado}`) 
  }
  
  
}
const resta= (a,b)=>{
  
 if(typeof a === 'string' || typeof b === 'string'){
    console.log("No se puede debe ingresar numero")
  }
  else{
   let resultado = a-b 
  console.log(`La resta es ${resultado}`)
  }
  
}

const operacion = (n1,n2,Callback)=>{
  Callback(n1,n2)
}

operacion(5,"l",suma)
operacion(5,"l", resta)