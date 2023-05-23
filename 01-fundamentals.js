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

console.log(jugador.estado);
console.log(jugador.amigos);
console.log(jugador.enviarCorreo());
console.log(jugador.enviarNotificacion);

// Agregar un par de clave y valor al objeto
jugador.semstre = "cuarto"
console.log(jugador);

// Eliminar un par de clave y valor del objeto
delete jugador.state

console.log(jugador);