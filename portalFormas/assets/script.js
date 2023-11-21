// Seção Quadrado

document.getElementById("btnCalc").addEventListener("click",
function (event) {

    event.preventDefault();
    var ladoA = document.getElementById("ladoA").value;
    var ladoB = document.getElementById("ladoB").value;
    var area = ladoA*ladoB;

    if (ladoA==ladoB) {
        document.getElementById("resultado").innerHTML =area;
        if (area) {
            alert("Acertou miserávi!! kkk");
        }
    }
    else{
        alert("Valores diferentes!");
        document.getElementById("resultado").innerHTML ="Error!";
    }
});

// Seção Retângulo

document.getElementById("btnCalc").addEventListener("click", function(event) {
    event.preventDefault();
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var A = base*altura;
    
    document.getElementById("resultado").innerHTML = A;
    if (A) {
        alert("Muito bem miserávi!! kkk " + "É " + A)
    }else{
        alert("Preencha os campos!")
    }
});

// Seção Circulo

document.getElementById("btnCalc").addEventListener("click", function(event) {
    event.preventDefault();
    let pi = 3.14159;
    var raio = document.getElementById("raio").value;
    var area = (raio*raio)*pi;

    document.getElementById("resultado").innerHTML = area;
});

// Seção Pirâmide

document.getElementById("btnCalc").addEventListener("click", function calcularAreaTotal() {
    var perimetroBaseMenor = parseFloat(document.getElementById("perimetroBaseMenor").value);
    var perimetroBaseMaior = parseFloat(document.getElementById("perimetroBaseMaior").value);
    var alturaLateral = parseFloat(document.getElementById("alturaLateral").value);
    var areaBaseMenor = parseFloat(document.getElementById("areaBaseMenor").value);
    var areaBaseMaior = parseFloat(document.getElementById("areaBaseMaior").value);
    var areaLateral = 0.5 * (perimetroBaseMenor + perimetroBaseMaior) * alturaLateral;
    var areaTotal = areaLateral + areaBaseMenor + areaBaseMaior;
    
    document.getElementById("resultado").innerHTML = areaTotal.toFixed(2);
});

// Seção Coroa do Circulo

document.getElementById("btnCalc").addEventListener("click", function calcularCoroa() {
    let pi = 3.14159;
    let raioInterno = parseFloat(document.getElementById("raioInterno").value);
    let raioExterno = parseFloat(document.getElementById("raioExterno").value);
    let areaCoroa = pi * (raioInterno ** 2 - raioExterno ** 2);

    document.getElementById("resultado").innerHTML = areaCoroa.toFixed(2);
});

// Seção Hexágono Regular

document.getElementById("btnCalc").addEventListener("click", function(event) {
    event.preventDefault();

    // Obter o comprimento do lado do input como número
    var comprimentoLado = parseFloat(document.getElementById("comprimentoLado").value);

    // Calcular a área do hexágono regular usando a fórmula correta
    var areaHexagono = (3 * Math.sqrt(3) / 2) * Math.pow(comprimentoLado, 2);

    // Exibir o resultado na página
    document.getElementById("resultado").innerHTML = areaHexagono.toFixed(2);
});


// Seção Trapézio

document.getElementById("btnCalc").addEventListener("click", function(event) {
    event.preventDefault();
    var baseMenorA = parseFloat(document.getElementById("trapezioA").value);
    var baseMaiorB = parseFloat(document.getElementById("trapezioB").value);
    var alturaTrapezio = parseFloat(document.getElementById("trapezioAltura").value);
    var areaTrapezio = ((baseMenorA+baseMenorA)/2)*alturaTrapezio;

    document.getElementById("resultado").innerHTML = areaTrapezio;
})

// Seção Polígono Regular

document.getElementById("btnCalc").addEventListener("click", function(event) {
    event.preventDefault();
    const π = 3.14159;
    var ladoPoligono = parseFloat(document.getElementById("ladoPoligono").value);
    var numLadoPoligono = parseFloat(document.getElementById("numLadoPoligono").value);
    var tan = Math.tan(π / numLadoPoligono);
    var areaPoligono = (numLadoPoligono * Math.pow(ladoPoligono, 2)) / (4*tan);

    document.getElementById("resultadoPoligono").innerHTML = areaPoligono;

})

// Seção Setor Circular em um Círculo Aninhado

document.getElementById("btnCalc").addEventListener("click", function(event) {
    
    event.preventDefault();
    const anguloCentral = parseFloat(document.getElementById("anguloCentral").value);
    const raioInterno = parseFloat(document.getElementById("raioInterno").value);
    const raioExterno = parseFloat(document.getElementById("raioExterno").value);
    const pi = Math.PI;
    const theta = anguloCentral * (pi / 180);
    const areaSetor = (theta / 360) * pi * Math.pow(raioInterno, 2);
    const areaCirculo = pi * Math.pow(raioExterno, 2);
    const areaAninhada = areaSetor - areaCirculo;

    document.getElementById("resultado").innerHTML = areaAninhada;
})

