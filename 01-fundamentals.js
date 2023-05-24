'use strict';
const puntajeEquipos = [30,26,24,22]
const productos = ["Arroz","Cebada","Tomate","Paiteña","Culantro","Cerveza"]
const personas = ["Elvis","Robert","Camila","Daniel","Mateus","Esteban","Darwin"]
const datosPersona = ["Elvis","Guanoluisa",23,false,{parroquia:"Nayon"},["Full-Stack","Data Analyst"]]

// // spread operator
const newNames = [...productos,...personas]
console.log(newNames);

console.log("Número de elementos:", personas.length);
console.log("Número de elementos:", productos.length);
console.log("Número de elementos:", puntajeEquipos.length);