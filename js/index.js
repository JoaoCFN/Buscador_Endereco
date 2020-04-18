const btn_buscar = document.querySelector(".btn-buscar").addEventListener("click", () => {
    const cep = document.querySelector("input#cep");
    const titulo = document.querySelector(".titulo");
    const rua = document.querySelector(".rua");
    const bairro = document.querySelector(".bairro");
    const cidade = document.querySelector(".cidade_estado");
    const msg_error = document.querySelector("div.msg_cep");
    msg_error.innerHTML = ``;

    if(cep.value.length > 8){
        msg_error.innerHTML = `Digite um CEP de 8 dígitos`;
    }
    else{
        const cep_conv = String(cep.value);
        fetch(`https://viacep.com.br/ws/${cep_conv}/json`)
        .then(response => response.json())
        .then(data => {
            titulo.innerHTML = `<i class="fa fa-street-view pr-2"></i>Endereço`;
            rua.innerHTML = `${data.logradouro}`;
            bairro.innerHTML = `${data.bairro}`;
            cidade.innerHTML = `${data.localidade} - ${data.uf}`;
        })
    }
})



