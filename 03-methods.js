'use strict';

// const datosUsuario = ["Elvis","Guanoluisa",23,true,{parroquia:"nayon"}]
// const habilidades = ["Full-Stack","Data Analyst"]
// const sobrenombre ="elvissoide"

// // Agrega al final del arreglo
// datosUsuario.push(habilidades)
// // Agregar al inicio del arreglo
// datosUsuario.unshift(sobrenombre)
// console.log(datosUsuario);



// const datosUsuario= ["Elvis","Guanoluisa",23,true,{parroquia:"nayon"}]

// // Elimina el elemento del final del arreglo
// datosUsuario.pop(datosUsuario)
// // Elimina el elemento del inicio del arreglo
// datosUsuario.shift(datosUsuario)
// console.log(datosUsuario);



// const amigos = ["Esteban","Darwin","Renato","Sahian","Michelle"]

// // método find
// const friendTwo = amigos.find((e)=>e==="Luisa123")
// console.log(friendTwo);
// const friendOne = amigos.find((e)=>e==="Renato")
// console.log(friendOne);


// const amigos = ["Esteban","Darwin","Renato","Sahian","Michelle"]

// // método findIndex
// const encontrar2 = amigos.findIndex((f)=>f==="Toshi")
// console.log(encontrar2)
// const encontrar1 = amigos.findIndex((f)=>f==="Sahian")
// console.log(encontrar1)



// const amigos = ["Esteban","Darwin","Renato","Sahian","Michelle",'Pablo']

// // método filter
// const busqueda2 = amigos.filter((e)=>e!='Pablo')
// const busqueda1 = amigos.filter((e)=>e.startsWith('P'))
// console.log(busqueda2);
// console.log(busqueda1);



// const nombres2 = ["Elvis","Juan","Alexis","Anthony","Cristina",'Diana']
// const nombres1 = ["Esteban","Darwin","Renato","Sahian","Michelle",'Pablo']

// // método concat
// const nombresConcatenados1 = nombres1.concat(nombres2)
// console.log(nombresConcatenados1);
// const nombresConcatenados2 = nombres2.concat(nombres1)
// console.log(nombresConcatenados2);




// // Funciona para arreglos de un solo valor y arreglo de objetos
// const amigos = ["Esteban","Darwin","Renato","Sahian","Michelle",'Pablo']
// const users =[
//     {
//         name:"Elvis",
//         lastName:"Guanoluisa",
//         age:14
//     },
//     {
//         name:"Alexander",
//         lastName:"Peralta",
//         age:16
//     },
//     {
//         name:"Monster",
//         lastName:"University",
//         age:15
//     }
// ]
// const busqueda1 = amigos.some(f=>f==="Elvis")
// console.log(busqueda1)
// const busqueda2 = users.some(u=>u.name==="Elvis")
// console.log(busqueda2)



// const datosUsuario= ["Elvis","Guanoluisa",23,true,{parroquia:"nayon"}]
// console.log(datosUsuario.reverse())
// console.log(datosUsuario.sort())