const cep = document.querySelector("input#cep");
const btn_buscar = document.querySelector(".btn-buscar");
const endereco = document.querySelector(".endereco");
btn_buscar.addEventListener("click", () => {
    endereco.innerHTML = `${cep.value}`;   
})