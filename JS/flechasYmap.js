//let resultado = 5+2;
//console.log (resultado);

//FUNCIONES DE FLECHA Y DOLAR $

/**
 * 
 * (data, data2) => //data ya es el json
                {
                    console.log("llamar a mostrarPerro");
                    mostrarPerro(data);
                }

   function sinnombre (data, data2)
   {
       console.log("llamar a mostrarPerro");
       mostrarPerro(data);

   }             
 */
//ES UNA F() ANÓNIMA, QUE NOS VA A DEVOLVER UN SALUDO EN FUNCIÓN DE LA HORA DEL DÍA

//TODO PASAR ESTA FUNCIÓN MODERNA EN SINTAXIS A SINTAXIS CLÁSICA
const fsaludo = hora => {
    let saludo = " ";
    if (hora <= 5) {
        saludo = "NO me jodas!";
    } else if (hora >= 6 && hora <= 11) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora <= 18) {
        saludo = "buenas tardes";
    } else {
        saludo = "buenas noches";
    }
    return `saludo a las ${hora} ${saludo}`;
};

function fsaludoclasica(hora) {
    let saludo = " ";
    if (hora <= 5) {
        saludo = "NO me jodas!";
    } else if (hora >= 6 && hora <= 11) {
        saludo = "Buenos días";
    } else if (hora >= 12 && hora <= 18) {
        saludo = "buenas tardes";
    } else {
        saludo = "buenas noches";
    }
    return "saludo a las " + hora + " " + saludo;
};

let fecha = new Date();//obtento la fecha y hora actual
let h = fecha.getHours();//obtengo la hora actual
let saludo = fsaludo(h);
let saludo2 = fsaludoclasica(h);
console.log(saludo);
console.log(saludo2);


let arraynumeros = [1, 2, 3, 4, 5];
//si necesito procesar todos los elementos map() me ayuda
let arraydoble = arraynumeros.map(numero => numero * 2);
console.log(arraynumeros);
console.log(arraydoble);

let arraydoble2 = arraynumeros.map(function duplica(n) {
    return n * 2;
});

console.log(arraydoble2);

//si la posición tiene un número par, la dejo igual. 
//si no, lo multiplico por dos
let arraydoble3 = arraynumeros.map(function duplica(n, indice, array) {
    let nnuevo = 0;

    if (array[indice] % 2 == 0) {
        nnuevo = n;
    } else {
        nnuevo = n * 2;
    }

    return nnuevo;
});

console.log(arraydoble3);


let arraydobles4 = arraynumeros.map((n, i, array) => array[i] % 2 == 0 ? n : n * 2);
console.log("JC " + arraydobles4);

let arraydobles5 = arraynumeros.map((n, i, array) => 
    {
    if (array[i] % 2 == 0)
        return n 
        else return n * 2;}
);
console.log("vale " + arraydobles5);
//IF TERNARIO