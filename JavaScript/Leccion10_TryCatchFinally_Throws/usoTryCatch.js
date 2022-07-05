// 'use strict'
// try{
//    let x = 10;
//     //miFuncion();
//     throw "mi error";
// }
// catch(error){
// console.log(error);
// }
// finally{
//     console.log("Finalizado");
// }
// console.log("continuamos")

let resultado = -3;
try {
    if (isNaN(resultado)) {
        throw "no es un numero";
    }else if(resultado == ""){
    throw "cadena vacia";
    }else if(resultado < 0){
        throw "no es positivo";
    }
} catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}
finally{
    console.log("done");
}