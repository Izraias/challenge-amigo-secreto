// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    let nombreConMayuscula = nombrePropio(nombre);

//Si el campo esta en blanco, mostrar mensaje de alerta
    if(nombre == ''){
        alert('No has ingresado un nombre');
        return; 
    }

//Si el nombre ya ha sido ingresado, mostrar mensaje de alerta
    else if(listaNombres.includes(nombreConMayuscula)){
        alert('Este nombre ya ha sido ingreado');
        document.getElementById('amigo').focus();
    }

//Si el nombre es aceptado, se agrega a la lista y se imprime en la pantalla
    else{
            listaNombres.push(nombreConMayuscula);
            console.log(listaNombres)
            imprimirListaAmigos();
            document.getElementById('amigo').focus();
    }
    limpiarCaja();

}

function imprimirListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');

//Evita que se duplique el nombre ya ingresado
listaAmigos.innerHTML = '';

//Se recorre el arreglo para imprimir los nombres en pantalla
for(let i=0; i<listaNombres.length; i++){
    listaAmigos.innerHTML += `<li>${listaNombres[i]}<li>`;
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus;
}

function sortearAmigo(){
//Se elije un nombre al azar desde el arreglo
    let amigoSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];

//Mensaje de alerta si hay menos de dos amigos para sortear
if(listaNombres.length <2){
    alert("Debes ingresar al menos dos amigos para elegir el amigo secreto");
    return;
}

document.getElementById('resultado').innerHTML = `Tu amigo sorteado es ${amigoSorteado}`;

//Borra la lista de amigos luego de realizar el sorteo
document.querySelector('ul').innerHTML = '';
document.getElementById('botonSortear').disabled = true;
console.log(amigoSorteado);

}

//Funcion para reiniciar el juego
function reiniciar(){
    listaNombres = [];
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = 'No hay amigos en la lista';
    document.getElementById('botonSortear').disabled = false;
    limpiarCaja();
}

//Permitir que puedan agregar amigos con la tecla 'Enter'
document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        document.getElementById('botonAñadir').click();
    }
});

//Cambiar a mayuscula la primera letra y a minuscula las demas

function nombrePropio(str){
    if(str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}