import { ParMonetario } from '../model/ParMonetario';
import { Conection } from '../controller/Conection';
import { Utills } from '../controller/Utills';
import promptSync from 'prompt-sync';
const prompt = promptSync();


export class Presenter {

    async run() {
        let continuar = true;
        console.log("Seja bem vindo ao conversor de moedas.");

        while (continuar) {
            const baseCode = prompt("Digite a moeda de origem (ex: USD), ou pressione Enter para sair:");
            const targetCode = prompt("Digite a moeda de destino (ex: BRL):");
            const valueToConvert = prompt("Digite o valor a ser convertido:");

            Utills.equals(baseCode, targetCode)
            Utills.validaMoeda(baseCode)
            Utills.validaMoeda(targetCode)

            const conector = new Conection(baseCode, targetCode, Utills.validarValor(valueToConvert));


            try {
                const data = await conector.buscaDados();
                const objetoParMonetario = new ParMonetario(data.base_code, data.target_code, data.conversion_rate, data.conversion_result);
                console.log(objetoParMonetario.toString());
            } catch (error) {
                console.error('Erro durante a execução:', error);
            }
        }
    }

}

