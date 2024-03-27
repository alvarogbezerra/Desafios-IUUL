import { ErrorGenerator } from './ErrorGenerator.js';

export class CompleteMessage {

    static gerarRelatorio(arrayDeClientes) {
        return JSON.stringify(arrayDeClientes.reduce((relatorio, cliente) => {
            const erros = ErrorGenerator.encontraErrosDoCliente(cliente);
            if (erros.length > 0) { 
                relatorio.push({
                    dados: cliente,
                    erros: erros
                });
            }
            return relatorio;
        }, []), null, 2);
    }

}

