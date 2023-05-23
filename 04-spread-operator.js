'use strict';

const jugador = {
    nombre: "Elvis",
    apellido: "Guanoluisa",
    edad: 28,
}

const informacionExtra = {
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
}

const todaInformacion = {...jugador,...informacionExtra}
console.log(todaInformacion)