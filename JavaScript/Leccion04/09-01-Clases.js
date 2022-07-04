//No es posible crear objetos antes de declarar la clase
// No se aplilca el concepto de hoisting
//let persona2 = new Persona("Karla" , "Juarez");

class Persona {
  static contadorPersonas = 0; //atributo de nuestra clase

  static get MAX_OBJ(){
    return 5;
  }


  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if(Persona.contadorPersonas < Persona.MAX_OBJ){
        this._idPersona = ++Persona.contadorPersonas;
    }else{
        console.log("Se han superado el maximo de objetos permitidos")
    }
   
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this._idPersona + " " + this._nombre + " " + this._apellido;
  }
  ///sobrescribiendo el metodo de la clase Padre (Object)
  toString() {
    ///se aplica polimorfismo (multiples formas en tiempo de ejecucion)
    ///el metodo que se ejecuta depende si es una referencia de tipo padreo de tipo hijo
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludos desde el metodo static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  ///sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
let persona3 = new Persona("Karla", "Juarez");
let persona4 = new Persona("Karla", "Juarez");
let persona5 = new Persona("Karla", "Juarez");
let persona6 = new Persona("Karla", "Juarez");
let persona7 = new Persona("Karla", "Juarez");
console.log(persona7);




let empleado1 = new Empleado("Maria", "Gomez", "Ventas");
console.log(empleado1.toString());


console.log(Persona.contadorPersonas);
console.log(Persona)

let persona2 = new Persona("Karla", "Juarez");
console.log(persona2.toString());





/*
  let persona1 = new Persona("Juan", "Perez");
  console.log(persona1.toString()); // get nombre
  
  let empleado1 = new Empleado("Maria", "Gomez", "Ventas");
  console.log(empleado1);
  console.log(empleado1.nombre);
  console.log(empleado1.nombreCompleto());
  
  console.log(empleado1);
  
  console.log(empleado1.toString());
  
  ///persona1.saludar(); no es posible llamar un metodo static desde un objeto
  Persona.saludar();
  Persona.saludar2(persona1);
  
  Empleado.saludar();
  Empleado.saludar2(empleado1);
  
  console.log(Persona.contadorObjetosPersona);
  console.log(Empleado.contadorObjetosPersona);
  
  console.log(persona1.email);
  console.log(empleado1.email);
let empleado1 = new Empleado("Maria", "Gomez", "Ventas");






/*
    ---EXPLICACION DE HERENCIA, SOBREESCRITURA, Y MANDAR A LLAMAR METODOS Y ATRIBUTOS


  static contadorObjetosPersona = 0; //atributo de nuestra clase
  email = "Valor default email";//atributo de nuestros objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  ///sobrescribiendo el metodo de la clase Padre (Object)
  toString() {
    ///se aplica polimorfismo (multiples formas en tiempo de ejecucion)
    ///el metodo que se ejecuta depende si es una referencia de tipo padreo de tipo hijo
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludos desde el metodo static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  ///sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
 
}
 */
/*
let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString()); // get nombre

let empleado1 = new Empleado("Maria", "Gomez", "Ventas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

console.log(empleado1);

console.log(empleado1.toString());

///persona1.saludar(); no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
*/
