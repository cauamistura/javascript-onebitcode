let cities = null;
let coutn = 0;

let name = prompt("Digite seu nome: ");

let conditional = prompt("você já visitou alguma cidade? (s/n) ");

while (conditional === "s") {
  cities += ", " + prompt("Digite o nome da cidade: ");
  conditional = prompt("você já visitou alguma cidade? (s/n) ");
  count++;
}

alert(`Olá ${name}, você já visitou ${coutn} cidades!`);
alert(`As cidades são: ${cities}`);
