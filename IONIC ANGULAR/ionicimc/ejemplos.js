let saluda = hr => {
    let saludo = '';
    if (hr <= 5) {
        saludo = 'No me jodas!!!';
    } else if (hr >= 6 && hr <= 11) {
        saludo = 'Buenos días!!!';
    } else if (hr >= 12 && hr <= 18) {
        saludo = 'Buenas tardes!!!';
    } else {
        saludo = 'Buenas noches!!!';
    }
    return `saludo a las ${hr} ${saludo}`;
};


let fecha = new Date();
hora = fecha.getHours();
console.log(saluda(hora));


let arraynumeros = [1, 2, 3, 4, 5];
let doubleNumbers = arraynumeros.map(number => number * 2);
let doblesNumeros = arraynumeros.map(function duplica(n) {
    return n * 2;
});
let doblesNumerosMapCompleto = arraynumeros.map(function duplica(n, i, a) {
    //si la posición tiene un número par la dejo igual si no la multiplico por dos
    let nret = 0;
    if (a[i]%2==0){
        nret = n;
    } else {
        nret = n * 2;
    }
    return nret;
});
console.log (`original ${arraynumeros}`);
console.log(`dobleNumbers ${doubleNumbers}`);
console.log(`doblesNumeros ${doblesNumeros}`);
console.log(`doblesNumerosMapCompleto ${doblesNumerosMapCompleto}` );
