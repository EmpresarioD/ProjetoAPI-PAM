var ID
var email
var nome
var senha

armazenamento = localStorage

function cadastrar() {
    ID = document.getElementById('idLogin').value
    email = document.getElementById('email').value
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value

    alert(ID, nome)

    localStorage.setItem(ID, email, nome, senha)
}

function pesquisar() {
    ID = document.getElementById('pesquisarID').value
    var valorPesquisado

    valorPesquisado = localStorage.getItem(ID)

    document.getElementById('visor').innerHTML = valorPesquisado
}