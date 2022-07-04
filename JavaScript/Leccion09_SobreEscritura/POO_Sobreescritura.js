class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Nombre: ${this.nombre}, Sueldo: $${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}

//sobreescritura 
let empleado1 = new Empleado("Juan",1000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente("juanito",1000,"Sistemas");
console.log(gerente1.obtenerDetalles());

//polimorfismo
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}
imprimir(empleado1);
imprimir(gerente1);


//instanceOf
function determinarTipo(tipo){
  
    if(tipo instanceof Gerente){
        console.log("tipo Gerente");
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log("tipo Empleado");
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){
        console.log("tipo Object");
    }
}
determinarTipo(empleado1);
determinarTipo(gerente1);