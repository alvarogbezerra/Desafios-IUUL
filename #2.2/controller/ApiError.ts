export class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }

    static handleApiError(errorType: string): ApiError {
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
    }
}