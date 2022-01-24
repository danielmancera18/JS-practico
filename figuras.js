//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
};
function areaCuadrado(lado){
    return lado * lado;
};

//Código del triangulo
function perimetroTriangulo(lado1,lado2,base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base)
};
function areaTriangulo(base,altura){
    return (base * altura) / 2;
};

//Código del Círculo
function diametroCirculo(radio){
    return radio * 2;
};
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
};

//aquí interactuamos con el html

// cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    alert(perimetroCuadrado(input.value));
};
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    alert(areaCuadrado(input.value));
};
// triángulo
function calcularPerimetroTriangulo(){
    const inputA = document.getElementById("InputTrianguloA");
    const inputB = document.getElementById("InputTrianguloB");
    const inputC = document.getElementById("InputTrianguloC");
    alert(perimetroTriangulo(inputA.value,inputB.value,inputC.value));
}
function calcularAreaTriangulo(){
    const inputC = document.getElementById("InputTrianguloC");
    const inputD = document.getElementById("InputTrianguloD");
    alert(areaTriangulo(inputC.value,inputD.value));
}
// circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    alert(diametroCirculo(input.value));
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    alert(perimetroCirculo(input.value));
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    alert(areaCirculo(input.value));
}