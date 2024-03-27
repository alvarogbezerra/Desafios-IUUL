import fs from 'fs';
import { DateTime } from 'luxon';

export class FileGenerator {

    gerarArquivo(arquivoJSON) {
        const agora = DateTime.now();
        const nomeDoArquivo = `erros-${agora.toFormat('ddMMyyyy-HHmmss')}.json`;

        fs.writeFile(nomeDoArquivo, arquivoJSON, (error) => {
        if (error) {
            console.error('Erro ao escrever no arquivo:', error);
        } else {
            console.log('Novo arquivo criado com sucesso e os dados foram gravados nele.');
        }
        });
    }
}
