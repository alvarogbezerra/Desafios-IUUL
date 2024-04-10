import { ParMonetario } from '../model/ParMonetario';
import { Connection } from '../controller/Conection';
import { Utills } from '../controller/Utills';
const promptSync = require('prompt-sync')();

export class View {

    async run(): Promise<void> {
        let continuar = true;
        console.log("Seja bem vindo ao conversor de moedas.");

        while (continuar) {
            const baseCode = promptSync("Digite a moeda de origem (ex: USD), ou pressione Enter para sair:");
            if (baseCode.trim() === '') {
                console.log("Programa finalizado.");
                break;
            }
            const targetCode = promptSync("Digite a moeda de destino (ex: BRL):");
            const valueToConvert = promptSync("Digite o valor a ser convertido:");

            try {
                const conector = new Connection(baseCode, targetCode, valueToConvert);

                const data = await conector.buscaDados();
                const objetoParMonetario = new ParMonetario(data.base_code, data.target_code, data.conversion_rate, data.conversion_result);
                console.log(objetoParMonetario.toString());
            } catch (error: any) {
                console.error(error.message);
            }
        }
    }
}


