const axios = require("axios");
async function start_server(){
    const captura_dados = await axios({
        url: "https://viacep.com.br/ws/44032586/json",
        method: "get"

        
    })
    // console.log(captura_dados.data); 
    return captura_dados.data
}

const r = start_server();
console.log(r);

