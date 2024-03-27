import { Reader } from "./Reader.js"
import { CompleteMessage } from './CompleteMessage.js';
import { FileGenerator } from './FileGenerator.js';

//1° parte - Receber o caminho pelo terminal, verificar a existência de erros e transformar em instâncias de client
const caminhoArquivo = process.argv[2]; 
const leitor = new Reader(); 
const caminhoArquivoValidado = leitor.verificarCaminhoArquivo(caminhoArquivo); 
leitor.verificarExistenciaArquivo(caminhoArquivoValidado); 
const itens = leitor.lerArquivoJSON(caminhoArquivoValidado);

//2° estrutura o json final com o completeMenssenge
const result = CompleteMessage.gerarRelatorio(itens)

//3° gerar o arquivo
let geracao = new FileGenerator();
geracao.gerarArquivo(result);