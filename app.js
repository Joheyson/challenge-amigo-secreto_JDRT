// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nombreInput = document.getElementById('amigo');
let adicionarBtn = document.getElementById('adicionarBtn');
let sortearBtn = document.getElementById('sortearBtn');
let listaAmigosD = document.getElementById('listaAmigos');
let resultadoD = document.getElementById('resultado');

//***Funcion para agregar un amigo a la lista***

function agregarAmigo() {
     let nombre = nombreInput.value.trim();

    //**Validar si el nombre es vacio**
if(nombre === '') {
    alert('Por favor inserte un nombre');
}
    else {
        amigos.push(nombre);
        console.log(amigos);
    }
nombreInput.value = ''; //limpia el campo de entrada    
mostrarLista();
}

//***Funcion para visualizar la lista de amigos***
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido previo

    // **Actualizar la lista de amigos**
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//***Funcion para sortear el Amigo Secreto***
function sortearAmigo() {
     // **Validar que haya amigos en la lista**   
if(amigos.length < 2) {
    alert('Se necesitan minimo 2 amigos en la lista');
}
    // **Generar numero aleatorio**

let numeroAleatorio = Math.floor(Math.random()*amigos.length);
console.log(numeroAleatorio);

   // **Seleccion del Amigo Secreto**
let amigoSecreto = amigos[numeroAleatorio];

  // **Muestro el Amigo Seleccionado**
resultadoD.textContent = amigoSecreto;

}




