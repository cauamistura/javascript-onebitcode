let names = ['Cauã', 'Ana', 'Flavia', 'Mistura'];
let action = 0;

do {
    let msg = "";

    for (let i = 0; i < names.length; i++) {
        msg += names[i] + "\n";
    }

    action = parseInt(prompt(
        msg +
        "\nDigite a ação que deseja realizar: \n\n" +
        " 1 - Adicionar Paciente \n" +
        " 2 - Consultar Paciente \n" +
        " 3 - Sair"
    ));
    
    if (action === 1) {

        let name = prompt("Digite o nome do paciente: ");
        names.push(name);

    } else if (action === 2) {

        let name_remove = names.shift();

        if (name_remov){
            alert("O paciente " + name_remove + " foi atendido!");
        } else {
            alert("Não há pacientes na fila de espera!");
        }

    } 

} while (action !== 3);
