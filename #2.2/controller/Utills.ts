export class Utills {
    
    static equals(moeda1: string, moeda2: string){
        if (moeda1 == moeda2){
            throw new Error("As moedas não podem ser iguais.")
        } 
    }
    
    static validaMoeda(moeda: string){
        if (moeda.length != 3) {
            throw new Error("A moeda deve ter exatamente 3 caracteres.")
        }
    }

    static validarValor(valor: string){
        let novoValor = parseFloat(valor)
        if (novoValor <= 0){
            throw new Error("O valor deve ser maior que zero.")
        } if (isNaN(novoValor)){
            throw new Error("Por favor, digite um valor numérico válido.")
        }
        return novoValor;
    }


}