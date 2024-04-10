"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var _Conection_full_url;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conection = void 0;
var Utills_1 = require("./Utills");
var ApiError_1 = require("./ApiError");
var axios_1 = require("axios");
var Conection = /** @class */ (function () {
    function Conection(baseCode, targetCode, valueToConvert) {
        _Conection_full_url.set(this, void 0);
        Utills_1.Utills.equals(baseCode, targetCode);
        Utills_1.Utills.validaMoeda(baseCode);
        Utills_1.Utills.validaMoeda(targetCode);
        Utills_1.Utills.validarValor(valueToConvert);
        __classPrivateFieldSet(this, _Conection_full_url, "https://v6.exchangerate-api.com/v6/eba9787862c58900337308c2/pair/".concat(baseCode, "/").concat(targetCode, "/").concat(valueToConvert), "f");
    }
    Object.defineProperty(Conection.prototype, "full_url", {
        get: function () {
            return __classPrivateFieldGet(this, _Conection_full_url, "f");
        },
        enumerable: false,
        configurable: true
    });
    Conection.prototype.buscaDados = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get(__classPrivateFieldGet(this, _Conection_full_url, "f"))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        if (data.result === "success") {
                            return [2 /*return*/, {
                                    base_code: data.base_code,
                                    target_code: data.target_code,
                                    conversion_rate: data.conversion_rate,
                                    conversion_result: data.conversion_result
                                }];
                        }
                        else {
                            throw ApiError_1.ApiError.handleApiError(data["error-type"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Conection.prototype.catch = function (error) {
        if (error instanceof ApiError_1.ApiError) {
            throw error;
        }
        else {
            throw new Error("Erro ao buscar dados da API.");
        }
    };
    return Conection;
}());
exports.Conection = Conection;
_Conection_full_url = new WeakMap();
