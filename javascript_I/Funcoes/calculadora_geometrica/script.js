function areaTriangulo(base, altura) {
    return base * altura / 2;
}
function areaRetangulo(base, altura) {
    return base * altura;
}
function areaQuadrado(lado) {
    return lado * lado;
}
function areaQuadrado(lado) {
    return lado * lado;
}
function areaTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2;
}
function areaCirculo(raio) {
    return Math.PI * raio * raio;
}

let action = 0;

do{
    action = prompt("Calculadora Geométrica\n\n" +
                    "1 - Triângulo\n" +
                    "2 - Retângulo\n" +
                    "3 - Quadrado\n" +
                    "4 - Trapézio\n" +
                    "5 - Círculo\n" +
                    "6 - Sair\n\n" );
                
    switch(action){
        case "1":
            let baseQ = parseFloat(prompt("Digite a base do triângulo: "));
            let alturaQ = parseFloat(prompt("Digite a altura do triângulo: "));
            alert("A área do triângulo é: " + areaTriangulo(baseQ, alturaQ));
            break;
        case "2":
            let base = parseFloat(prompt("Digite a base do retângulo: "));
            let altura = parseFloat(prompt("Digite a altura do retângulo: "));
            alert("A área do retângulo é: " + areaRetangulo(base, altura));
            break;
        case "3":
            let lado = parseFloat(prompt("Digite o lado do quadrado: "));
            alert("A área do quadrado é: " + areaQuadrado(lado));
            break;
        case "4":
            let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
            let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
            let alturat = parseFloat(prompt("Digite a altura do trapézio: "));
            alert("A área do trapézio é: " + areaTrapezio(baseMaior, baseMenor, alturat));
            break;
        case "5":
            let raio = parseFloat(prompt("Digite o raio do círculo: "));
            alert("A área do círculo é: " + areaCirculo(raio));
            break;
        case "6":
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida!");
            break;
    }

} while(action != 6);