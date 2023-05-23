'use strict';
const jugador = {
    nombre: "Elvis",
    apellido: "Guanoluisa",
    edad: 28,
    direccion: {
        ciudad: "Quito",
        telefono: "0988815272",
        direcccion: {
            principal: "Eugenio Espejo",
            secundaria: "Carlos Dousdebes",
        }
    },
    amigos: ['Frank', 'Gaby', 'Karol'],
    estado: true,
    enviarCorreo() {
        return `Enviando correo a ${this.amigos[0]}`
    },
    enviarNotificacion() {
        return `Enviando notifiacion a ${this.amigos[2]}`
    }
};

jugador.semstre = "cuarto"
console.log(jugador);

// Object.freeze(jugador)
// console.log(Object.isFrozen(jugador));
// jugador.image ="t.ly/Rhgs"


// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(jugador)
console.log(Object.isSealed(jugador))
jugador.edad = 35
console.log(jugador);

