function displayResult() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let training = document.getElementById("training").value;
    let date = document.getElementById("date").value;
    let yearsOld = (new Date().getFullYear()) - (new Date(date).getFullYear());

    let result = document.getElementById("result");

    result.innerHTML = "Nome: " + firstName + " " + lastName + "<br>" +
                       "Idade: " + yearsOld + "<br>" +
                       "Treinamento: " + training;
}