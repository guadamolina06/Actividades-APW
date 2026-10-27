/*let arreglo = []

for (let i = 0; i < 5 ; i++){
   if(i % 2 != 0){
    let valor = prompt("ingrese un numero" + (i+1) + ":");
    arreglo.push(Number(valor))
   }
   else{
    console.log("Se necesita un numero impar")
   }
}
console.log(arreglo)*/

const frutas = ['manzana', 'banana', 'sandia', 'tomate']



const FM = frutas.map ((fruta)=>
 fruta.toUpperCase()
)
console.log(FM)


const FruF = frutas.filter(fruta => fruta.includes ("na"))
console.log(FruF)


const indu = [
    {
     nombre:"Pantalon",
     precio:362,
     stock:6,
     talles: ["s","m","l"]
    },
    {
     nombre:"bufanda",
     precio:32,
     stock:7,
     talles: ["s","m","l"]
    },
    {
     nombre:"Abrigo",
     precio:3621,
     stock:4,
     talles: ["s","m","l"]
    },
    {
     nombre:"Remera",
     precio:36,
     stock:16,
     talles: ["s","m","l"]
    }
]
/// el for each no me tiene que devolver un array nuevo por eso no se declara una constante
indu.forEach((producto)=>{
  if(producto.stock<5){
    console.log(producto)
  }
})


/*const desc = indu.map(prod =>{
  return `El producto ${prod.nombre} tiene un 10% de descuento quedaria en ${prod.precio-(0.10)}`
})
console.log(desc)*/


const desc = indu.map(producto =>{
    producto.precio= producto.precio-(0.10)
    return producto
})
console.log(desc)

const Mayor10 = indu.filter(producto =>{
    if(producto.stock>10){
        console.log(producto)
    }
    else{
        console.log("No hay")
    }
})
console.log(Mayor10)