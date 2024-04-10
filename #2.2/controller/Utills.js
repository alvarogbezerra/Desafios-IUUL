"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utills = void 0;
var Utills = /** @class */ (function () {
    function Utills() {
    }
    Utills.equals = function (moeda1, moeda2) {
        if (moeda1 == moeda2) {
            throw new Error("As moedas não podem ser iguais.");
        }
    };
    Utills.validaMoeda = function (moeda) {
        if (moeda.length != 3) {
            throw new Error("A moeda deve ter exatamente 3 caracteres.");
        }
    };
    Utills.validarValor = function (valor) {
        var novoValor = parseFloat(valor);
        if (novoValor <= 0) {
            throw new Error("O valor deve ser maior que zero.");
        }
        if (isNaN(novoValor)) {
            throw new Error("Por favor, digite um valor numérico válido.");
        }
        return novoValor;
    };
    return Utills;
}());
exports.Utills = Utills;
