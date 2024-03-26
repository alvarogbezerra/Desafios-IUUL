import fs from 'fs';
import {Cliente} from './cliente.js'
const arquivo = "./formatoTeste.json"

function lerArquivoJSON(arquivo) {
  const arquivoDesserializado = fs.readFileSync(arquivo, 'utf8');    
  const clientes = JSON.parse(arquivoDesserializado).map(item => new Cliente(item));
  return clientes;//formato retornado: [ Pessoa {}, Pessoa {}, Pessoa {}, Pessoa {}, Pessoa {}, Pessoa {} ]
}

function apresentaDadosDoCliente (cliente) {
  return console.log( JSON.stringify(cliente));
}

function apresentaErros (){

}

apresentaDadosDoCliente (lerArquivoJSON(arquivo));
