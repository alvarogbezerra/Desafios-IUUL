import axios from 'axios';

export class Conection {
    #full_url: string;

    constructor(base_code: string, target_code: string, value_to_convert: number) {
        this.#full_url = `https://v6.exchangerate-api.com/v6/eba9787862c58900337308c2/pair/${base_code}/${target_code}/${value_to_convert}`;
    }

    // Função para fazer a requisição e manipular a resposta JSON
    async buscaDados(): Promise<{ base_code: string, target_code: string, conversion_rate: number, conversion_result: number }> {
        try {
            const response = await axios.get(this.#full_url);
            const data = response.data;

            if (data && data.result) {
                return {
                    base_code: data.base_code,
                    target_code: data.target_code,
                    conversion_rate: data.conversion_rate,
                    conversion_result: data.conversion_result
                };
            } else {
                throw new Error('Resposta da API não contém campo "result"');
            }
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            throw error;
        }
    }
}
