export class ErrorGenerator {

    //Esse método só recebe um objeto e gera o campo e a mensagem
    static encontraErrosDoCliente(cliente) {
        const listaDeErros = [];
    
        listaDeErros.push(cliente.validarNome()); 
        listaDeErros.push(cliente.validarDT_nascimento()); 
        listaDeErros.push(cliente.validarCPF()); 
        listaDeErros.push(cliente.validarIdadeCliente()); 
        listaDeErros.push(cliente.validarRendaMensal()); 
        listaDeErros.push(cliente.validarEstadoCivil());
    
        return listaDeErros.filter(erro => erro !== null)
    }

    //recebe uma lista de erros, como o do método acima
    static apresentaErrosDoClienteEmJson(listaDeErros) {
        const errosFormatados = listaDeErros.map(erro => ({
            "campo": erro.campo,
            "mensagem": erro.mensagem
        }));
        return JSON.stringify(errosFormatados, null, 2);
    }
}

