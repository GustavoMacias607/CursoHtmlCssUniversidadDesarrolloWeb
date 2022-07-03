//Declaracion de la funcion
function miFuncion(a,b) {
    console.log(arguments.length);
    return a+b;
}

let resultado = miFuncion(5,6);
console.log(resultado);

//Declaracion Funcion de tipo Exprecion
let sumar = function(a,b) {return a+b};
resultado = sumar(2,6);
console.log(resultado);

//Funciones Flecha
const sumarFuncionTipoFlecha = (a,b) => a+b;
console.log(sumarFuncionTipoFlecha(4,7));

let resul = sumarTodo(4,5,7,6,3,8,4,2,5,7,8,)
console.log(resul);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}







(function(a,b) {
    console.log("Ejecutando la funcion " + (a+b));
})(3,4);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

// Paso por valor Funciones javascript
let numero = 10;

function cambiarValor(n){
    n = 20;
}
cambiarValor(numero);
console.log(numero);

// Paso por referencia Funciones javascript
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Pedro";
    p1.apellido = "Lara";
}

cambiarValorObjeto(persona);
console.log(persona);

