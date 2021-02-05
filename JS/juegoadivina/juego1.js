this.onload = inicio;//SIN PARÉNTESIS programa el listener vs CON paréntesis llama en este momento
const NUM_INTENTOS_MAX = 5;
const RUTA_FOTO_PIERDE = "https://media.tenor.com/images/9ff77762b2ae15c8f78fb711982fbf73/tenor.gif";
const RUTA_FOTO_GANA = "https://i.pinimg.com/originals/0e/68/6f/0e686faa391f1f47ab74fd21a3124103.gif";
let naleatorio;//ámbito global : accesible desde todas las funciones
let num_intentos;//declaro
let elemento_imagen_res;
let numeros_jugados= null;//array de numeros jugados

function ocultarEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    for (enlace of enlaces) {
        enlace.style.visibility = "hidden";
    }

}

function mostrarNombreJugador() {
    let mostrado = false;
    let nombre = localStorage.getItem("nombre_jugador");

    if (nombre) {
        document.getElementById("nombre_jugador").innerHTML = "Bienvenido, " + nombre;
        mostrado = true;
    }
    return mostrado;
}

function mostrarEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    enlaces[0].style.visibility = "visible"
    enlaces[1].style.visibility = "visible"
    enlaces[2].style.visibility = "visible"
    /*for (enlace of enlaces)//recorrer : ir de princiio a fin de una estruc
    {
        enlace.style.visibility = "visible";
    }*/

}
function inicio() {
    let mostrado = mostrarNombreJugador();
    if (mostrado) {
        console.log("hay un nombre, puede jugar");
        naleatorio = Math.floor(Math.random() * 100) + 1;
        console.log("Num secreto " + naleatorio);
        num_intentos = 0;
        document.getElementById("vidas").innerHTML = NUM_INTENTOS_MAX;
        elemento_imagen_res = document.querySelector("img");
        ocultarEnlaces();
        numeros_jugados = [];//inicializo init
    } else {
        console.log("NO EXISTE nombre. No se puede jugar. A la página uno");
        document.getElementById("divjuego").style.visibility = "hidden";
        document.getElementById("mensaje_nombre_obligatorio").style.visibility = "visible";
    }
}
function actualizarYMostrarArray(numero_jugado) {
    numeros_jugados.push(numero_jugado);//actualizo el array//ordenar
    numeros_jugados.sort();
    document.getElementById("numeros_jugados").innerHTML = numeros_jugados;
}

function informarExito() {
    console.log("ACIERTO!");
    document.getElementById("info").innerHTML = "HAS ACERTADO";
    elemento_imagen_res.setAttribute("src", RUTA_FOTO_GANA);
    mostrarEnlaces();
}

function informarMenor() {
    console.log("el buscado es menor");
    document.getElementById("info").innerHTML = "el buscado es menor";

}
function informarMayor() {
    console.log("el buscado es mayor");
    document.getElementById("info").innerHTML = "el buscado es mayor";
}

function informarFinDerrota() {
    console.log("SE ACABÓ");
    document.getElementById("info").innerHTML = "Perdiste. Buscábamos el " + naleatorio;
    elemento_imagen_res.setAttribute("src", RUTA_FOTO_PIERDE);
    mostrarEnlaces();
}


function actualizarIntentos() {
    num_intentos++;//actualizo intentos
    document.getElementById("vidas").innerHTML = NUM_INTENTOS_MAX - num_intentos;
}

//llamamos a este método cuando acabe la partida
function informarPartida ()
{
    //creo el objeto Partida
    let nombre_jugador = localStorage.getItem("nombre_jugador");

    let partida = new Partida(nombre_jugador, num_intentos);
    //imprimo la info de la partida
    partida.mostrarPartida();
    partida.guardarPartida();
}


function comprobarIntento() {

    //1 obtener el número intro por el usuario
    let nuser = document.getElementById("num_usuario").value;
    console.log("numero usr = " + nuser);
    actualizarYMostrarArray(nuser);

    if (nuser == naleatorio) //ha acertado
    {
        informarExito();
        informarPartida();
    }
    else {
        console.log("Ha fallado");
        actualizarIntentos();
        if (nuser > naleatorio) //si MENOR
        {
            informarMenor();
        }
        else //si MENOR
        {
            informarMayor();
        }

        if (num_intentos == NUM_INTENTOS_MAX) {
            informarFinDerrota();
            informarPartida();
        }
    }
}

function cambiarNombre() {
    location.href = "intronombre.html?cambiar=true";
}

function reiniciar() {
    console.log("toco reiniciar");
    //location.href = "juego.html";
    location.reload();
}
