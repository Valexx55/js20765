let divout = null;
let mapa = null;


const LATITUD_MADRID = 40.4167;
const LONGITUD_MADRID = -3.70325;

let mapa_dibujado = false;

function dibujarUbicacion(latitud, longitud) {
    if (mapa_dibujado) {
        //dibujar en el mapa de google un marcador
        let pos_actual = { lat: latitud, lng: longitud };

        let marcador = new google.maps.Marker(
            {
                position: pos_actual,
                title: "Estás aquí"
            }
        );

        marcador.setMap(mapa);
        //cuando toque el marker, quiero
        //que el mapa se centre ahí

        //funciones de flecha
        marcador.addListener("click", () => {
            mapa.setZoom (15);
            mapa.setCenter(marcador.getPosition());
        });

    } else {
        //boton deshabiltado y habilitado al recibir el mapa
        alert ("Mapa no disponible");
    }

}

function initMap() {
    mapa = new google.maps.Map(
        document.getElementById("map"),
        {
            center: { lat: LATITUD_MADRID, lng: LONGITUD_MADRID },
            zoom: 10
        }
    );
    mapa_dibujado = true;
}

function encuentrame() {
    divout = document.getElementById("out");
    if (!navigator.geolocation) {
        console.log("Estoy en un navegador antiguo");
        console.log("que no tiene API GEOLOCATION!");
        fallo();
    }
    else {
        console.log("Estoy en un navegador moderno");
        console.log("Sí tiene API GEOLOCATION!");
        console.log("preguntamos...");
        navigator.geolocation.getCurrentPosition(exito, fallo);
        divout.innerHTML = "Buscando ...";
    }
}
function exito(posicion) {
    let latitud = posicion.coords.latitude;
    let longitud = posicion.coords.longitude;
    divout.innerHTML = "Latitud = " + latitud + "Longitud = " + longitud;
    dibujarUbicacion(latitud, longitud);
}
function fallo() {
    console.log("No esta disponible la ubicación");
    divout.innerHTML = "No esta disponible la ubicación";
}