function mostrar(){
    let nombre = document.getElementById("nombre").value;
    console.log(nombre);
    let edad = document.getElementById("edad").value;
    let most = document.getElementById("most");
    most.innerHTML = `Hola ${nombre} tienes ${edad} años, el año que viene tendras ${parseInt(edad)+1} años`;
} 