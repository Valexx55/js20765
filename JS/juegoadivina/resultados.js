
onload = mostrarTablaResultados;

let tabla;
let array_partidas = null;

function mostrarTablaResultados ()
{
    console.log("mostrando resultados");
    let array_partidas_json = localStorage.getItem("array_partidas");
        if (array_partidas_json!=null) 
        {
            console.log("Hay partidas que mostrar");
            console.log("Partidas = " + array_partidas_json);
            array_partidas = JSON.parse(array_partidas_json);//EXISTE --> LO CARGO
            tabla = document.getElementById("tabla");
            mostrarTabla(array_partidas);
        } else {
            console.log("NO Hay partidas que mostrar");
        }
}

function mostrarTabla(array_partidas) 
{
    for (partida of array_partidas) {
        console.log (partida.nombre);
        console.log (partida.intentos);
        mostrarPartida (partida);
    }
}

function mostrarPartida (partida)
{
    //TODO CREAR 2 TDS --createElement
    let tdnombre = document.createElement("td");
    let tdintentos = document.createElement("td");
    //METERLE EN LOS INNERHTML EL NOMBRE E INTENTOS
    tdnombre.innerHTML = partida.nombre;
    tdintentos.innerHTML = partida.intentos;
    //CREAR UN TR
    let nuevafila = document.createElement("tr");
    //AÑADIR LOS TDS AL TR --appendChild
    nuevafila.appendChild(tdnombre);
    nuevafila.appendChild(tdintentos);
    //AÑADIR EL TR A LA TABLA
    tabla.appendChild(nuevafila);
}

function borrarTabla()
{
    let filas = tabla.childNodes;
    for (var i = filas.length-1; i > 1; i-- ) {
        filas[i].remove();
      }
}

function repintarArray()
{
    borrarTabla();
    mostrarTabla(array_partidas);
}

function sortPorNombre ()
{
    array_partidas.sort (ordenarPorNombre);
    repintarArray();
}

function sortPorIntentos ()
{
    array_partidas.sort (ordenarPorIntentos);
    repintarArray();
}

function ordenarPorNombre (partida1, partida2)
{
    let resultado = 0;

       resultado = partida1.nombre.localeCompare(partida2.nombre);

    return resultado;
}

function ordenarPorIntentos (partida1, partida2)
{

    let resultado = 0;

        resultado = partida1.intentos-partida2.intentos;

    return resultado;

}