import { Utills } from './Utills';
import { ApiError } from './ApiError';
import axios from 'axios';

export class Conection {
    #full_url: string;

    constructor(baseCode: string, targetCode: string, valueToConvert: string) {
        Utills.equals(baseCode, targetCode);
        Utills.validaMoeda(baseCode);
        Utills.validaMoeda(targetCode);
        Utills.validarValor(valueToConvert)

        this.#full_url = `https://v6.exchangerate-api.com/v6/eba9787862c58900337308c2/pair/${baseCode}/${targetCode}/${valueToConvert}`;
    }

    get full_url(): string {
        return this.#full_url;
    }

    async buscaDados(): Promise<{ base_code: string, target_code: string, conversion_rate: number, conversion_result: number }> {
            const response = await axios.get(this.#full_url);
            const data = response.data;

            if (data.result === "success") {
                return {
                    base_code: data.base_code,
                    target_code: data.target_code,
                    conversion_rate: data.conversion_rate,
                    conversion_result: data.conversion_result
                };
            } else {
                throw ApiError.handleApiError(data["error-type"]);
            }
        } catch (error: any) {
            if (error instanceof ApiError) {
                throw error;
            } else {
                throw new Error("Erro ao buscar dados da API.");
            }
        }
    }
