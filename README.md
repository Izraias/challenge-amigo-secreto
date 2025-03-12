PROYECTO CHALLENGE AMIGO SECRETO

Creacion de app.js
- Se crea un array listaNombre
- Se crea función agregarAmigo
    + Se crean condicionales:
        - En caso este en blanco
        - En caso ya se haya escrito el nombre
        - En caso sea aceptado el nombre.
- Se crea funcion para imprimir los nombres en la pantalla.
- Se crea funcion para limpiar caja.
- Se crea funcion para sortear amigos:
    + Condicional en caso sea menos de dos nombres.
    + Borra lista de amigos luego de realizar el sorteo.
    + deshabilia el boton sortear.
- Se crea funcion reiniciar para vover a iniciar.
- Se permite agregar amigos con la tecla enter utilizando 
    document.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        document.getElementById('botonAñadir').click();
    }
});

- Se cambia la mayuscula de la primera letra:
    function nombrePropio(str){
    if(str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}



En index.html:
- Se agrego los id="botonSortear"
- Se agrega boton reiniciar linea 35,36,37


En style.css
- Se agrega lineas de boton reiniciar
