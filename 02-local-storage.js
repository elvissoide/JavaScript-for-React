"use strict";
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
        {
            let usuario = {
                name: json.name,
                username: json.username,
                email: json.email
            }
            guardarLocalStorage(usuario)
        }
    })
const guardarLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
}


"use strict";
const limpiarLocalStorage = () => {
    localStorage.removeItem('user');
    console.log('Elemento eliminado del Local Storage.');
};

limpiarLocalStorage();
