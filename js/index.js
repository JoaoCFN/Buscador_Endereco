const cep = document.querySelector("input#cep");
const btn_buscar = document.querySelector(".btn-buscar");

btn_buscar.addEventListener("click", () => {
    const cep_conv = "44032582";//String(cep.value);
    const titulo = document.querySelector(".titulo");
    const rua = document.querySelector(".rua");
    const bairro = document.querySelector(".bairro");
    const cidade = document.querySelector(".cidade_estado");
    const estado = document.querySelector(".estado");

    fetch(`https://viacep.com.br/ws/${cep_conv}/json`)
    .then(response => response.json())
    .then(data => {
        titulo.innerHTML = `Endereço`;
        rua.innerHTML = `${data.logradouro}`;
        bairro.innerHTML = `${data.bairro}`;
        cidade.innerHTML = `${data.localidade} - ${data.uf}`;
    })
})



