function miFuncion1(){
    console.log("funcion1");
}
function miFuncion2(){
    console.log("funcion2");
}
miFuncion1();
miFuncion2();

//Funciones de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(n1,n2,funcionCallback){
    let res = n1+n2;
    funcionCallback("Resultado: " + res);
}

sumar(5,3,imprimir);

//llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log("saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallback,3000);

setTimeout(function(){
    console.log("saludo asincrono despues de 2 segundos");
},4000);


setTimeout(() => console.log("saludo asincrono 3"),2000);


// setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,1000);