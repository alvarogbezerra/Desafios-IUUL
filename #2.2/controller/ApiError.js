"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        return _this;
    }
    ApiError.handleApiError = function (errorType) {
        switch (errorType) {
            case 'unsupported-code':
                return new ApiError("Moeda não suportada.");
            case 'malformed-request':
                return new ApiError("Requisição malformada.");
            case 'invalid-key':
                return new ApiError("Chave de API inválida.");
            case 'inactive-account':
                return new ApiError("Conta inativa.");
            case 'quota-reached':
                return new ApiError("Limite de requisições atingido.");
            default:
                return new ApiError("Erro desconhecido da API.");
        }
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;
