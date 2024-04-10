import { ParMonetario } from '../model/ParMonetario';
import { Conection } from '../controller/Conection';
import { Utills } from '../controller/Utills';
const promptSync = require('prompt-sync')();

export class View {
    
    async run(): Promise<void> {
        let continuar = true;
        console.log("Seja bem vindo ao conversor de moedas.");

        while (continuar) {
            const baseCode = "xxg" //promptSync("Digite a moeda de origem (ex: USD), ou pressione Enter para sair:");
            if (baseCode.trim() === '') {
                console.log("Programa finalizado.");
                break;
            }
            const targetCode = "brl"//promptSync("Digite a moeda de destino (ex: BRL):");
            const valueToConvert = "10"//promptSync("Digite o valor a ser convertido:");

            const conector = new Conection(baseCode, targetCode, valueToConvert);

            try {
                const data = await conector.buscaDados();
                const objetoParMonetario = new ParMonetario(data.base_code, data.target_code, data.conversion_rate, data.conversion_result);
                console.log(objetoParMonetario.toString());
                break //tirar depois
            } catch (error: any) {
                    console.error('(Presenter) Erro durante a execução:', error);
                    break //tirar depois
                }
            }
        }
    }


