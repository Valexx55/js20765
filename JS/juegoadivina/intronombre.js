onload = controlInicio;

function controlInicio() {
    let njugador = localStorage.getItem("nombre_jugador");
    if (njugador != null)//si existe un nombre
    {
        let url = location.href;
        console.log(url);
        if (url.includes("cambiar=true")) {
            console.log("Ya existe un jugador, pero quiere cambiarlo");
        }
        else {
            console.log("Ya existe un jugador, y viene de inicio a página 2");
            location.href = "juego.html";
        }
    } else {
        console.log("Aún no existe jugador, primera vez");
    }
}
function guardarNombre() {
    let nombre_jugador = document.querySelector("#nombre").value;
    localStorage.setItem("nombre_jugador", nombre_jugador);
    location.href = "juego.html";

}