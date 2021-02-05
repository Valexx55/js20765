const URI_PERRO_ALEATORIO = "https://dog.ceo/api/breeds/image/random";

function obtenerPerro() {
    console.log("Has pedido un perro");

    let valor = obtenerSeleccion(); ///Obtenemos el numero seleccionado
    // console.log(valor);

    // LO hacemos mediante Fetch. Es como una promesa.
    fetch(URI_PERRO_ALEATORIO + "/" + valor) //Aqui hacemos la peticion del numero de perros seleccionado
        .then(response => response.json()) //Cuando este lista, hacer esto.... RESPONSE es el cuerpo de la respuesta
        .then(data => {
            mostrarPerro(data.message);
        });

}

// Funcion para mostrar un perro
function mostrarPerro(jsonPerro) {
    console.log(jsonPerro);

    let myslide = document.getElementById("imagenslides");

    let i = 0;
    let slidePerro = "";

    for (l = 0; i < jsonPerro.length; i++) {
        slidePerro = document.createElement("ion-slide")

        img = document.createElement("img");

        img.src = jsonPerro[i];

        slidePerro.appendChild(img)

        myslide.appendChild(slidePerro);
    }


    myslide.options = {
        initialSlide: 1,
        speed: 400
    }



}



function obtenerSeleccion() {
    let seleccion = document.getElementById("seleccion");
    // console.log(seleccion.value);
    return seleccion.value;


}

