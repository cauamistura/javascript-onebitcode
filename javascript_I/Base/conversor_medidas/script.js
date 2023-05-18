function convert_mili(metros){
    return metros * 1000;
}
function convert_cent(metros){
    return metros * 100;
}
function convert_dec(metros){
    return metros * 10;
}
function convert_deca(metros){
    return metros / 10;
}
function convert_hect(metros){
    return metros / 100;
}
function convert_kilo(metros){
    return metros / 1000;
}

const metros = prompt("Digite o valor em metros: ");
const target = prompt("Digite a unidade de medida para conversão: \n1 - Milímetros\n2 - Centímetros\n3 - Decímetros\n4 - Decâmetros\n5 - Hectômetros\n6 - Kilômetros");

let result = 0;

  switch (target) {
    case "1":
        result = convert_mili(metros);
        break;
    case "2":
        result = convert_cent(metros);
        break;
    case "3":
        result = convert_dec(metros);
        break;
    case "4":
        result = convert_deca(metros);
        break;
    case "5":
        result = convert_hect(metros);
        break;
    case "6":
        result = convert_kilo(metros);
        break;
    default: result = "Opção inválida";
  }

alert(`O valor convertido é: ${result}`);