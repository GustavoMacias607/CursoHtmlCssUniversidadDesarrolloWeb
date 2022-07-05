function miFuncion(){
    console.log("saludos desde mi funcion");
}
// const miFuncionFlecha = () =>{
//     console.log("saludos desde mi funcion flecha");
// }

// const miFuncionFlecha = () => console.log("saludos desde mi funcion flecha");


// miFuncionFlecha();
// miFuncion();

// const saludar = () => {
//     return "saludos desde mi función flecha";
// }

const saludar = () => "saludos desde mi función flecha";
console.log(saludar());

const regresaObjeto = () => ({nombre: "juan", apellido: "Perez"});
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}
funcionConParametrosClasico("que tal"); 

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("saludos"); 

// const funcionConVariosParametros = (n1,n2) => n1+n2;
const funcionConVariosParametros = (n1,n2) => {
    let resultado = n1+n2;
    return resultado;
};
console.log(funcionConVariosParametros(2,3));