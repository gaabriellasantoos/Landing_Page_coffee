// bloco de verificação de preenchimento de campos 

function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById ('liginSenha').value;

    if (luser || !senha){
        alert("campos de preenchimento obrigatório. favor preencher! ");
    } else {
        alert("campos preenchidos com suesso!");
    }
}