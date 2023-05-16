const car1 = prompt("Digite o nome do carro 1: ");
const speed1 = prompt("Digite a velocidade do "+ car1 +": ");

const car2 = prompt("Digite o nome do carro 2: ");
const speed2 = prompt("Digite a velocidade do "+ car2 +": ");

if (speed1 > speed2) {
    alert(car1 + " é mais rápido que " + car2);
} else if (speed2 > speed1) {
    alert(car2 + " é mais rápido que " + car1);
}
else {
    alert("Os dois carros tem a mesma velocidade");
}

