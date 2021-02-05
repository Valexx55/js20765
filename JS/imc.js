
/**
 * Función que muestra el valor nominal
 * y la imagen correspondiente al imc recibido
 * 
 * @param {*} imc el valor real de índice de masa corporal
 * @returns 
 */
function mostrarResultado(imc) {
    let el_figcaption = document.querySelector("figcaption");
    let el_img = document.querySelector("img");

    var nominal;

    switch (true) {
        case (imc < 16):
            nominal= "Desnutrido";
            el_img.setAttribute("src", "./assets/pipino.jpg");
          //  break;
        case (imc >= 16 && imc < 18):
            nominal= "Delgado";
            el_img.setAttribute("src", "./assets/cletus.jpg");
            break;
        case (imc >= 18 && imc < 25):
            nominal= "Ideal";
            el_img.setAttribute("src", "./assets/ideal.png");
            break;
        case (imc >= 25 && imc < 31):
            nominal= "Sobrepeso";
            el_img.setAttribute("src", "./assets/homer.jpg");
            break;
        case (imc >= 31):
            nominal= "Obeso";
            el_img.setAttribute("src", "./assets/obelix.gif");
          // el_img.src = "./assets/obelix.gif"; //equivalente
             break;
    }

    el_figcaption.innerHTML = "Su IMC es de: " + imc + " está en el rango de <b>" + nominal + "</b>";

    
}

function calcularImc() {
    let peso = parseInt(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);

    if (!peso && !estatura) {
        window.alert("rellene los datos");

    } else {
        var imc = (peso / (estatura ** 2));
       // imc = Math.round(imc);
        imc = parseFloat(imc).toFixed(2);
        mostrarResultado(imc);
    }

}
