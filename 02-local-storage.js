"use strict";

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
        {
            let usuario = {
                name: json.results[0].name.first + ' ' + json.results[0].name.last,
                username: json.results[0].login.username,
                email: json.results[0].email
            }
            guardarLocalStorage(usuario);
        }
    });

const guardarLocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
};

const limpiarLocalStorage = () => {
    localStorage.removeItem('user');
    console.log('Elemento eliminado del Local Storage.');
};

limpiarLocalStorage();
