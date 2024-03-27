import fs from 'fs';
import { Client } from './Client.js'; // Importe a classe Client

export class Reader {
  verificarCaminhoArquivo(caminhoArquivo) {
    if (!caminhoArquivo) {
        console.error('Por favor, forneça o caminho do arquivo JSON de entrada como argumento.');
        process.exit(1);
    }
    return caminhoArquivo;
  }

  verificarExistenciaArquivo(caminhoArquivo) {
    if (!fs.existsSync(caminhoArquivo)) {
      console.error('O arquivo de entrada não existe.');
      process.exit(1);
    }
  }

  verificarArray(arquivoDesserializado) {
    if (!Array.isArray(arquivoDesserializado)) {
      console.error('O arquivo de entrada não contém um array.');
      process.exit(1);
    }
  }

  lerArquivoJSON(caminhoArquivo) {
    caminhoArquivo = this.verificarCaminhoArquivo(caminhoArquivo);
    this.verificarExistenciaArquivo(caminhoArquivo);
    
    try {
      const arquivoDesserializado = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf8'));
      this.verificarArray(arquivoDesserializado); // Verifica se o arquivo contém um array
      
      const itensTransformadosEmObjeto = arquivoDesserializado.map(item => new Client(item.nome, item.cpf, item.dt_nascimento, item.renda_mensal, item.estado_civil));
      return itensTransformadosEmObjeto;
    } catch (error) {
      console.error('Ocorreu um erro ao ler o arquivo:', error.message);
      process.exit(1);
    }
  }
}

