const formulario = window.document.getElementById("formulario");
var linhas = {};

formulario.addEventListener("submit", function (e) {
e.preventDefault();

    const nomeAgenda = document.getElementById("nomeAgenda");
    const telefoneAgenda = document.getElementById("telefoneAgenda");

    if (linhas[nomeAgenda.value]) {
        alert("Contato já existe na Agenda. Escolha outro Contato.");
        return;
    } 

    var linha = `<tr>`;
    linha += `<td>${nomeAgenda.value}</td>`;
    linha += `<td>${telefoneAgenda.value}</td>`;
    linha += `</tr>`;

    linhas[nomeAgenda.value] = linha;
    document.getElementById("tbody").innerHTML = Object.values(linhas).join("");

    nomeAgenda.value = "";
    telefoneAgenda.value = "";

})