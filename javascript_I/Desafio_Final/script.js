class person{
    constructor(jobId, name){
        this.jobId = jobId;
        this.name = name;
    }
}

const jobs = [['Balconista', []],
              ['Vendedor', []],
              ['Gerente', []],
              ['Diretor', []],];
let action = 0;

function listJobs(){
    const job = jobs.map((job, index) => {return `${index+1} - ${job[0]} - ${job[1].length} candidato(s)`});
    console.log(job);
}

function createJob(){
    let nameJob = prompt("Digite o nome da vaga");
    jobs.push([nameJob, []]);
    alert("Vaga criada com sucesso");
}

function listJob(){
    listJobs();
    let jobId = Number(prompt("Digite o id da vaga"));
    console.log(jobs[jobId-1]);
}

function insertCandidate(){
    listJobs();
    let jobId = Number(prompt("Digite o id da vaga"));
    let name = prompt("Digite o nome do candidato");
    jobs[jobId-1][1].push(new person(jobId, name));
    alert("Candidato inserido com sucesso");
}

function deleteJob(){
    listJobs();
    let jobId = Number(prompt("Digite o id da vaga"));
    jobs.splice(jobId-1, 1);
    alert("Vaga excluida com sucesso");
}

do{
    action = Number(prompt("1- Listar vagas disponiveis\n" +
                    "2- Criar nova vagas\n" +
                    "3- Vizualizar uma vaga\n" +
                    "4- Inscrever candidato em uma vaga\n" +
                    "5- Excluir uma vaga'\n" +
                    "6- Sair do sistema"));

    switch(action){
        case 1:
            listJobs();
            break;
        case 2:
            createJob();
            break;
        case 3:
            listJob();
            break;
        case 4:
            insertCandidate();
            break;
        case 5:
            deleteJob();
            break;
        case 6:
            alert("Saindo...");
            break;
        default:
            console.log("Opção invalida");
            break;
    }
} while(action !== 6)