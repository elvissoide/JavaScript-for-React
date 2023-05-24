const persona = {
    nombre: "Elvis Guanoluisa",
    edad: 23,
    saludar: function () {
        setTimeout(() => {
            console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        }, 2000);
    },
    cumplirAnios: function () {
        this.edad++;
        console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años.`);
    },
};

persona.saludar();

setTimeout(() => {
    persona.cumplirAnios();
}, 3000);