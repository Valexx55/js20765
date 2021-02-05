/*var edad = 0;

edad = window.prompt("Dime tu edad: ");

if (edad < 18) {
    window.alert("Eres menor de edad");
}else{
    window.alert("Eres mayor de edad");
}*/

const MAYORIA_DE_EDAD = 18;

function informarMayoriaEdad ()
{
    console.log ("ha tocao el botón");
    //recoger el valor de la caja de texto su edad
    var caja_edad = document.getElementById("edad");//let obtengo la caja
    console.log("El id de la caja es " +caja_edad.id);//concatenar
    console.log("El VALOR de la caja es " +caja_edad.value);//muestro el valor
    var edad = caja_edad.value;//obtengo el valor
    // validar si es un número o no
    //si es un texto
        //informar error entrada
    //si no, es un número
        //comparar límite de mayoria
    let elemento_div = document.getElementById("solucion");
    if (edad >= MAYORIA_DE_EDAD)
    { 
        console.log("Es mayor de edad");
        elemento_div.innerHTML="Es mayor de edad";
    } else {
        console.log("Es menor de edad");
        elemento_div.innerHTML="Es menor de edad";
    }
        //si mayor de límite
            //informar mayor
        //si no informar menor
}