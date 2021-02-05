const TIGRE = "&#129409;"
const BALON_FUTBOL = "&#9917;"

this.onload = iniciarTablero; //this es window

let div1;
let div2;
let primero=true;
let max_aciertos;
let num_aciertos=0;


function tapar (casilla1, casilla2)
{
    
    casilla1.style.opacity = 0;//hago invisible
    casilla2.style.opacity = 0;//hago invisible

}

function comprobar ()
{
    //this es el elemento que ha recibido el evento
    console.log("ha tocado el div " + this.innerHTML);
    this.style.opacity = 1;//hago visible
    if (primero)//==true
    {
         
        div1 = this;//me lo guardo
        primero = false;
    } else { //segundo caso

        if (div1.innerHTML!=this.innerHTML)
        {
            //son distintos, los tapo
            setTimeout(tapar, 900, this, div1);
        } else {
            //han coincidido!
            num_aciertos = num_aciertos + 1;
            if (num_aciertos==max_aciertos)
            {
                alert("has ganado!!! Enhorabuena maestro");
            }
        }
        primero = true;
    }
}

function iniciarTablero ()
{
    //COGER TODOS LOS DIVS Y HAACERLOS INVISIBLES
    let arrayDivs = document.querySelectorAll("div");

    arrayDivs.forEach(i => i.style.opacity = 0);
    arrayDivs.forEach(i => i.addEventListener("click", comprobar));
    //calculamos el total de aciertos que debe conseguir el usuario
    max_aciertos = arrayDivs.length/2;
    console.log (`El jugador debe conseguir ${max_aciertos} aciertos`);    

}