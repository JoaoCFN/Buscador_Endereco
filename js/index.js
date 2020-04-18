const btn_buscar = document.querySelector(".btn-buscar").addEventListener("click", () => {
    const cep = document.querySelector("input#cep");
    const titulo = document.querySelector(".titulo");
    const logradouro = document.querySelector(".logradouro");
    const bairro = document.querySelector(".bairro");
    const cidade = document.querySelector(".cidade_estado");
    const msg_error = document.querySelector("div.msg_cep");
    // limpar campos
    msg_error.innerHTML = ``;
    titulo.innerHTML = ``;
    logradouro.innerHTML = ``;
    bairro.innerHTML = ``;
    cidade.innerHTML = ``;

    if(cep.value.length == 8){
        const cep_conv = String(cep.value);
        fetch(`https://viacep.com.br/ws/${cep_conv}/json`)
        .then(response => response.json())
        .then(data => {
            /* Se rua for undefined, todos os outros serão também. 
               logo o CEP é inválido ou não consta na base de dados do via CEP
            */
            if (data.logradouro == undefined){
                msg_error.innerHTML = `O CEP não existe`;
            }
            else{
                titulo.innerHTML = `<i class="fa fa-street-view pr-2"></i>Endereço`;
                logradouro.innerHTML = `${data.logradouro}`;
                bairro.innerHTML = `${data.bairro}`;
                cidade.innerHTML = `${data.localidade} - ${data.uf}`;
            }
            
        })     
    }  
    else{
        msg_error.innerHTML = `Digite um CEP de 8 dígitos`;
    }
})



