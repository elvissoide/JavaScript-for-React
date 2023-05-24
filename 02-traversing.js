const personas = ["Elvis","Robert","Camila","Daniel","Mateus","Esteban","Darwin"]

// primera forma de iterar sobre los elementos de un arreglo 
for (let i=0 ; i<personas.length ; i++){
    console.log(personas[i]);
}

// segunda forma de iterar sobre los elementos de un arreglo 
personas.forEach((e,i)=>console.log(`${i} - ${e}`))


// tercera forma de iterar sobre los elementos de un arreglo 
const nuevaLista = personas.map((e)=> `Hola ${e}`)
console.log(personas);
console.log(nuevaLista);

const datosPersonas =[
    {
        nombres:"Juan Alberto",
        apellido:"Chochos",
        edad:13
    },
    {
        nombres:"Diana Lorena",
        apellido:"Salazar",
        edad:15
    },
    {
        nombres:"Mabelin Karol",
        apellido:"Estric",
        edad:22
    }
]

datosPersonas.forEach(u=>console.log(`${u.nombres} - ${u.edad}`))