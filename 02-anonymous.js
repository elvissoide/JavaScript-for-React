'use strict';

const boton = document.createElement('boton')

boton.innerText="Registrar"

boton.addEventListener('click',function(){
    alert("Registro exitoso")
})

document.body.append(boton)