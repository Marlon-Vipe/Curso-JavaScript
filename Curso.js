/*let cadena  = "Marlon Andre Villalona Peña";

//Determina la cantidad de caracteres que tiene la cadena
console.log("Mi cadena tiene: "+cadena.length+" caracteres");

//Convierte a miniscula
console.log("minusculas: "+cadena.toLowerCase());

//Devuelve la primera coincidencia del parametro
console.log(cadena.indexOf("a"))

// Remplaza una por otra (el que quiero reemplazar, el que pondre nuevo)
console.log(cadena.replace("Andre","Juan"));

// Elimina (Parametro de inicio,Parametro fin)
console.log(cadena.substring(1,26));

//Elimina y Admite valores negativos
console.log(cadena.slice(0,-6));

let cadena2 = "       LOCA         ";

// No admite espacio al principio o final
console.log(cadena2.trim())

// Esto dice si empezamos con la letra que le ponemos como parametro (true/false)
console.log(cadena.startsWith("M"));

// Esto dice si terminamos con la letra que le ponemos como parametro (true/false)
console.log(cadena.endsWith("a"));

//Hace lo mismo que indexOf pero nos devuelve en TRUE/FALSE
console.log(cadena.includes("r"));

//Repite x veces el string que tengamos 
console.log(cadena.repeat(3));*/


//--------------------------------------------------------------------------------------------------------------------------------------------

// Euler
console.log(Math.E);
// PI
console.log(Math.PI);


// ----------------------------  METODOS ---------------------------------------------------------------------------------


/*let num = 5.456;

console.log(Math.abs(num));

//Redondea hacia arriba
console.log(Math.ceil(num));

//Redondea hacia abajo
console.log(Math.floor(num));

//Potencia el numero que pongamos ( numero , cantidad de veces )
console.log(Math.pow(4,2));

//Genera numero aleatorio ( * y el numero maximo )
console.log(Math.random()*100);

//Genera un numero aleatorio con Minimo/Maximo (*(MAX-MIN)MIN)
console.log(Math.random()*(100 - 90)+90);

//Devuelve 3 opciones:   -1 / 0  /  +1
console.log(Math.sign(-34));

// Devuelve la raiz cuadradra del numero
console.log(Math.sqrt(81));


//-----------------------------------EJERCICIO #1 (ORDENAR 3 NUMEROS)----------------------------------------------------------------------------


const numbers = document.getElementById("numbers");
const result = document.getElementById("result");


let a = prompt("Introduzca el primer numero: ");
let b = prompt("Introduzca el segundo numero: ");
let c = prompt("Introduzca el tercer numero: ");


numbers.textContent = ("Los numero introducidos son: "+ a +" "+ b + " " + c);

if (a>=b && a>=c) {
    if(b>c){
        result.textContent = ("El orden es: "+ a + " " + b + " " + c);
    }else {
        result.textContent = ("El orden es: "+ a + " " + c + " " + b);
    }
}
else if (b>=a && b>=c) {
    if(a>c){
        result.textContent = ("El orden es: "+ b + " " + a + " " + c);
    }else {
        result.textContent = ("El orden es: "+ b + " " + b + " " + a);
    }
}
else if (c>=a && c>=b) {
    if(a>b){
        result.textContent = ("El orden es: "+ c + " " + a + " " + b);
    }else {
        result.textContent = ("El orden es: "+ c + " " + b + " " + a);
    }
}*/

//--------------------------------------------------4--------CONDICIONAL SWITCH -------------------------------------------------------------------------------------

/*let num = 1;

switch(num){
    case 1: 
        console.log("Esta variable tienen el valor: 1");
    break;

    case 2: 
        console.log("Esta variable tienen el valor: 2");
    break;

    case 3: 
        console.log("Esta variable tienen el valor: 3");
    break;
    
    default: 
        console.log("Numero aleatorio");

}*/

//---------------------------------------------------------- OPERADOR TERNARIO --------------------------


let numero = 13;

// Condicion                  //TRUE                         //FALSE
(numero % 2 == 0) ?  console.log(numero+" es par. ") : console.log(numero+" es impar. ");


