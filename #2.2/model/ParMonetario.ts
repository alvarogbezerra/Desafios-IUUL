
export class ParMonetario {
    #base_code: string;
    #target_code: string;
    #conversion_rate: number;
    #conversion_result: number;

    constructor(base_code: string, target_code: string, conversion_rate: number, conversion_result: number) {
        this.#base_code = base_code;
        this.#target_code = target_code;
        this.#conversion_rate = conversion_rate;
        this.#conversion_result = conversion_result;
    }

    get base_code(): string {
        return this.#base_code;
    }

    get target_code(): string {
        return this.#target_code;
    }

    get conversion_rate(): number {
        return this.#conversion_rate;
    }

    get conversion_result(): number {
        return this.#conversion_result;
    }

    //vou remover esse tipo to string e ajustar no presenter 
    toString() {
        return `${this.base_code}, Target: ${this.target_code}, Rate: ${this.conversion_rate}, Result: ${this.conversion_result}`;
    }
}