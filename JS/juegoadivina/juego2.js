
class Partida {

    constructor (nombre_jugador, num_intentos)
    {
        this.nombre = nombre_jugador;
        this.intentos = num_intentos;
    }

    mostrarPartida ()
    {
        console.log("Nombre jugador = " + this.nombre);
        console.log("Num intentos = " + this.intentos);

    }

    guardarPartida ()
    {
        //SI EXISTE EL ARRAY
            //LO CARGO DE LA MEMORIA
        //SI NO
            //LO CREO
        
        //AÑADO LA NUEVA PARTIDA
        //ARRAY A JSON
        //GUARDO NUEVO ARRAY
        //let json_partida = JSON.stringify(this);
        let array_partidas = null;
        let array_partidas_json = localStorage.getItem("array_partidas");
        if (array_partidas_json!=null) 
        {
            array_partidas = JSON.parse(array_partidas_json);//EXISTE --> LO CARGO
        } else {
            array_partidas = [];////no existe un array --> LO CREO
        }
        array_partidas.push (this);//añado la nueva partida
        let nuevo_array_partidas_json = JSON.stringify(array_partidas);//la paso a JSON
        localStorage.setItem("array_partidas", nuevo_array_partidas_json);//la guardo
            
        //localStorage.setItem("utlima_partida", json_partida);
    }
}

//TODO
//definir una CLASE Partida
//que contenga el NOMBRE del usuario
//y el NÚmero de INTENTOS que ha obtenido al jugar
//Una vez definida la clase, debéis construir
//un objeto de partida y llamar a una función
//mostrarPartida -dentro de la clase- que nos
//imprima la información de la partida
//quién ha jugado y cuántos intentos ha empleado