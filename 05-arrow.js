// function login(user, password) {
//     console.log("Inicio de sesión exitoso");
// }

// function validarMail(user, email) {
//     console.log("El correo electrónico ha sido validado");
// }

// function registrarAvatar(photo) {
//     console.log("El avatar ha sido registrado correctamente");
// }

// const usuario = "JohnDoe";
// const contraseña = "123456";
// const correoElectronico = "johndoe@example.com";
// const fotoAvatar = "avatar.jpg";

// login(usuario, contraseña);
// validarMail(usuario, correoElectronico);
// registrarAvatar(fotoAvatar);


const buscador = document.querySelector('#search-123');
const button = document.createElement('button');
button.innerText = "Verificar";
let productos = [];

button.addEventListener('click', () => {
    if (productos.length === 0) {
        alert("El carrito se encuentra sin productos");
    } else if (productos.length >= 5) {
        alert("El carrito está lleno");
    } else {
        alert(`El carrito tiene ${productos.length} producto(s)`);
    }
});

buscador.appendChild(button);

// Funcionalidad adicional: Agregar productos al carrito
const agregarProducto = (producto) => {
    productos.push(producto);
    console.log(`Se ha agregado el producto "${producto}" al carrito.`);
};

// Ejemplo de uso: Agregar productos al carrito
agregarProducto("Camisa");
agregarProducto("Pantalón");
agregarProducto("Zapatos");
