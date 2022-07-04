class DispositivosEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
}

class Raton extends DispositivosEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    toString() {
        return `idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

let raton1 = new Raton("usb", "Logitech");
console.log(raton1.toString());
let raton2 = new Raton("Cable", "Mousing");
console.log(raton2.toString());

class Teclado extends DispositivosEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    toString() {
        return `idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

let teclado1 = new Teclado("USB", "Tecladito2.0");
let teclado2 = new Teclado("Antena", "magunus");
console.log(teclado1.toString());
console.log(teclado2.toString());

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    get tamaño() {
        return this._tamaño;
    }
    toString() {
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`;
    }
}

let monitor1 = new Monitor("Samsung", "15 pulgadas");
let monitor2 = new Monitor("LG", "17 pulgadas");
console.log(monitor1.toString());
console.log(monitor2.toString());

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString(){
        return `idComputadora: ${this._idComputadora}, nombre: ${this._nombre},\n monitor: ${this._monitor},\n teclado: ${this._teclado},\n raton: ${this._raton}`;
    
    }
}


class Orden{
    static ContadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.ContadorOrdenes;
        this._computadoras = [];

    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){ 
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
                let cadena = "";
                for(let computadora of this._computadoras){
                 cadena += `\n${computadora}`;
                }
                return `Orden: ${this._idOrden}, Computadoras: \n${cadena}`;
            }
}
let computadora1 = new Computadora("HP",monitor1,teclado1,raton1); 
console.log(computadora1.toString());
let computadora2 = new Computadora("Lenovo",monitor2,teclado2,raton2);
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
console.log(orden1.mostrarOrden());

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
console.log(orden2.mostrarOrden());


