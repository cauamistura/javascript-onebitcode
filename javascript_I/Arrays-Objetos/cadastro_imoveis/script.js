class Property {
    constructor(name, bedrooms, bathrooms, garage) {
        this._name = name;
        this._bedrooms = bedrooms;
        this._bathrooms = bathrooms;
        this._garage = garage;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get bedrooms() {
        return this._bedrooms;
    }

    set bedrooms(value) {
        this._bedrooms = value;
    }

    get bathrooms() {
        return this._bathrooms;
    }

    set bathrooms(value) {
        this._bathrooms = value;
    }

    get garage() {
        return this._garage;
    }

    set garage(value) {
        this._garage = value;
    }
}

const listProperties = [];

do {
    action = Number(prompt(
        "Imóveis cadastrados: " + listProperties.length + "\n" +
        "1 - Cadastrar imóvel\n" +
        "2 - Listar imóveis\n" +
        "3 - Sair\n"));

    switch (action) {
        case 1:
            const property = new Property();

            property.name = prompt("Digite o nome do imóvel: ");
            property.bedrooms = Number(prompt("Digite o número de quartos: "));
            property.bathrooms = Number(prompt("Digite o número de banheiros: "));
            property.garage = prompt("Possui garagem? (S/N)").toUpperCase() === 'S' ? true : false;

            listProperties.push(property);

            break;

        case 2:
            for (let property of listProperties) {
                console.log(property);
            }
            break;

        case 3:
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida!");
            break;
    }
} while (action !== 3);



