"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ParMonetario_base_code, _ParMonetario_target_code, _ParMonetario_conversion_rate, _ParMonetario_conversion_result;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParMonetario = void 0;
var ParMonetario = /** @class */ (function () {
    function ParMonetario(base_code, target_code, conversion_rate, conversion_result) {
        _ParMonetario_base_code.set(this, void 0);
        _ParMonetario_target_code.set(this, void 0);
        _ParMonetario_conversion_rate.set(this, void 0);
        _ParMonetario_conversion_result.set(this, void 0);
        __classPrivateFieldSet(this, _ParMonetario_base_code, base_code, "f");
        __classPrivateFieldSet(this, _ParMonetario_target_code, target_code, "f");
        __classPrivateFieldSet(this, _ParMonetario_conversion_rate, conversion_rate, "f");
        __classPrivateFieldSet(this, _ParMonetario_conversion_result, conversion_result, "f");
    }
    Object.defineProperty(ParMonetario.prototype, "base_code", {
        get: function () {
            return __classPrivateFieldGet(this, _ParMonetario_base_code, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParMonetario.prototype, "target_code", {
        get: function () {
            return __classPrivateFieldGet(this, _ParMonetario_target_code, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParMonetario.prototype, "conversion_rate", {
        get: function () {
            return __classPrivateFieldGet(this, _ParMonetario_conversion_rate, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParMonetario.prototype, "conversion_result", {
        get: function () {
            return __classPrivateFieldGet(this, _ParMonetario_conversion_result, "f");
        },
        enumerable: false,
        configurable: true
    });
    //vou remover esse tipo to string e ajustar no presenter 
    ParMonetario.prototype.toString = function () {
        return "\n_____________________________\n".concat(this.base_code, " => ").concat(this.target_code, " \nTaxa de convers\u00E3o: ").concat(this.conversion_rate.toFixed(6), " \nResultado: $ ").concat(this.conversion_result.toFixed(2), "\n_____________________________\n");
    };
    return ParMonetario;
}());
exports.ParMonetario = ParMonetario;
_ParMonetario_base_code = new WeakMap(), _ParMonetario_target_code = new WeakMap(), _ParMonetario_conversion_rate = new WeakMap(), _ParMonetario_conversion_result = new WeakMap();
