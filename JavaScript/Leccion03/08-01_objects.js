let Persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function (titulo,tel) {
        return this.nombre + ' ' + this.apellido + ' ' + titulo + ' ' + tel;
    }
}

let Persona2 = {
    nombre: 'carlos',
    apellido: 'Lara',
}

//Uso de call para usar el metodo persona1.nombreCompleto con los datos persona2
console.log(Persona1.nombreCompleto('Director', '+56 912345678'));

let arreglo = ["Profesor:","555555555"]
console.log(Persona1.nombreCompleto.apply(Persona2,arreglo));












/*

///funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email, password) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

Persona.prototype.tel = '44332211';

let padre = new Persona("juan", "perez", "jperez@gmail.com");
padre.tel = '999999999';
console.log(padre.tel);

let madre = new Persona("cesilia", "marc", "marc@gmail.com");
console.log(madre.tel);


 
/*
console.log(persona.nombre);
console.log(persona['nombre']);

/// for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
*/

/*
persona.tel = '999999999';
persona.te1 = '111111111';
console.log(persona);

delete persona.te1;
console.log(persona);




///        Concatenar cada valor de cada propiedad imprimir valores en una pagina web

console.log(persona.nombre + ' ' + persona.apellido)
---
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
---
let personaArray = Object.values(persona);
console.log(personaArray);
---
let personaString = JSON.stringify(persona);
console.log(personaString);
*/

/* Acceder a la infomracion del objeto persona

let persona = {
    nombre: 'Juan',
    apellido: 'Johnson',
    email: 'jjohnson@gmail.com',
    edad: 30,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
    
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

console.log(persona.nombreCompleto());

let persona2 = new  Object();
persona2.nombre = 'carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '123456789';

console.log(persona2.nombre);
console.log(persona2.direccion);
console.log(persona2.telefono);
*/
