//Primera funcion
let amigos = [];

//Segunda funcion
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Limpiar el campo
    amigos.push(nombre);
    input.value = ""; 
    actualizarLista();
}

//Tercera funcion
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    //Limpiar la lista antes de actualizar
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Cuarta funcion
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue al menos un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; //Limpiar resultados 

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);

    //Reinicio de la lista de amigos
    amigos = [];
    actualizarLista();
}
