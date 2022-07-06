function calcularAreaTriangulo() {
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  let area = (base * altura) / 2;
  document.getElementById(
    "resuTriangulo"
  ).innerHTML = `El area del triangulo es: ${area}`;
}
function calcularAreaRectanculo(){
    let lado1 = document.getElementById("lado1").value;
    let lado2 = document.getElementById("lado2").value;
    let area = lado1 * lado2;
    document.getElementById("resuRectangulo").innerHTML = `El area del rectangulo es: ${area}`;
}
function calcularAreaCirculo(){
    let radio = document.getElementById("radio").value;
    let area = Math.PI * Math.pow(radio,2);
    document.getElementById("resuCirculo").innerHTML = `El area del circulo es: ${area}`;
}
let banTri;
let banRec;
let banCir;

function btnTriangulo() {
  if (banTri) {
    document.getElementById("formularioTriangulo").innerHTML = "";
    banTri = false;
  } else {
    document.getElementById("formularioTriangulo").innerHTML = `
        <div class="areaCalcular">
        <p class="titu">Area Triangulo</p>
    
        <div class=areaDatos>
            <label for="base">Ingresa la Base:</label>
            <input type="number" id="base" placeholder="Ingresa la base">
        </div>
    
        <div class="areaDatos">
            <label for="altura">Ingresa la Altura:</label>
            <input type="number" id="altura" placeholder="Ingresa la altura">
        </div>
    
        <button class="botonCalcular" button onclick="calcularAreaTriangulo()">Calcular</button>
    
        <div class="resultado" id="resuTriangulo">El Resultado es:</div>
    </div>
        `;
        document.getElementById("formularioRectangulo").innerHTML = "";
        document.getElementById("formularioCirculo").innerHTML = "";
    banTri = true;
    banCir = false;
    
      banRec = false;
  }
}
  
function btnRectangulo() {
    if (banRec) {
      document.getElementById("formularioRectangulo").innerHTML = "";
      banRec = false;
    } else {
      document.getElementById("formularioRectangulo").innerHTML = `
      <div class="areaCalcular">
      <p class="titu">Area Rectangulo</p>
  
      <div class=areaDatos>
          <label for="lado1">Ingresa el Lado 1:</label>
          <input type="number" id="lado1" placeholder="Ingresa el Lado 1:">
      </div>
  
      <div class="areaDatos">
          <label for="lado2">Ingresa el lado 2:</label>
          <input type="number" id="lado2" placeholder="Ingresa el lado 2:">
      </div>
  
      <button class="botonCalcular" button onclick="calcularAreaRectanculo()">Calcular</button>
  
      <div class="resultado" id="resuRectangulo">El Resultado es:</div>
  </div>
          `;
          document.getElementById("formularioTriangulo").innerHTML = "";
        document.getElementById("formularioCirculo").innerHTML = "";
        banCir = false;
        banTri = false;
      banRec = true;
    }
  }
  
function btnCirculo() {
    if (banCir) {
      document.getElementById("formularioCirculo").innerHTML = "";
      banCir = false;
    } else {
      document.getElementById("formularioCirculo").innerHTML = `
      <div class="areaCalcular">
      <p class="titu">Area Circulo</p>
  
      <div class=areaDatos>
          <label for="base">Ingresa el radio del circulo:</label>
          <input type="number" id="radio" placeholder="Ingresa el radio:">
      </div>
  
      <button class="botonCalcular" button onclick="calcularAreaCirculo()">Calcular</button>
  
      <div class="resultado" id="resuCirculo">El Resultado es:</div>
  </div>
  
          `;
          document.getElementById("formularioRectangulo").innerHTML = "";
        document.getElementById("formularioTriangulo").innerHTML = "";
      banCir = true;
      
        banTri = false;
      banRec = false;
      
    }
  }
