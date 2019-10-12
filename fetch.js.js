'use strict'
var usuarios = [];

var div_usuarios = document.querySelector("#usuarios");

fetch('https://reqres.in/api/users')
  .then(data => data.json())
  .then(users => {
      usuarios = users.data;
      console.log(users);

      usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
      });
  });
  