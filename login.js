const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais() {
    const emaiInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;


    if (emaiInformado === email) {
        //alert("E-mail Informado Corretamente!");
        if (senhaInformada === senha) {
            //alert("Senha informada corretamente");
            window.location = "home.html";
        } else
            alert("Senha informada incorretamente");
    } else
        alert("E-mail informado incorretamente!");
};

const dado = [
    {
        "id":,
        "titulo":,
        "descricao":,
        "conteudo":,
        "categoria":,
        "autor":,
        "data":,
        "imagem": "assets/imagem/"
    },
    {
        "id":,
        "titulo":,
        "descricao":,
        "conteudo":,
        "categoria":,
        "autor":,
        "data":,
        "imagem": "assets/imagem/"
    },
    {
        "id":,
        "titulo":,
        "descricao":,
        "conteudo":,
        "categoria":,
        "autor":,
        "data":,
        "imagem": "assets/imagem/"
    }
]