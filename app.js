// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Arreglo de amigos
let amigos = [];

//Evento para agregar un amigo al arreglo con la tecla Enter
function enter(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
}

//Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

//Función para limpiar el contenido de un input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Función para agregar un amigo al arreglo
function agregarAmigo() {
    let elementoArray = document.getElementById('amigo').value.trim();
    if (!elementoArray) {
        alert('Por favor, inserte un nombre.');
        return;
    } else {
        amigos.push(elementoArray);
        actualizarListaAmigos();
        console.log(elementoArray); //Para verificar el nombre del amigo
        console.log(amigos); //Para verificar el arreglo de amigos
        limpiarCaja();
    }
}

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    asignarTextoElemento('listaAmigos', ""); //Limpia la lista para que no se dupliquen los amigos

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        document.getElementById('listaAmigos').appendChild(item);
    }
    return;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No hay amigos para sortear, ingrese al menos uno');
        return;
    } else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        asignarTextoElemento('resultado', `El amigo secreto es: ${amigos[amigoSorteado]}`);
        console.log(amigoSorteado); //Para verificar el número del amigo sorteado

    }

}

