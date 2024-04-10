export class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }

    static handleApiError(errorType: string): ApiError {
        switch (errorType) {
            case 'unsupported-code':
                return new ApiError("Moeda não suportada. Por favor, insira uma moeda válida.");
            case 'malformed-request':
                return new ApiError("Requisição malformada. Entre em contato com o suporte.");
            case 'invalid-key':
                return new ApiError("Chave de API inválida. Entre em contato com o suporte.");
            case 'inactive-account':
                return new ApiError("Conta inativa. Entre em contato com o suporte.");
            case 'quota-reached':
                return new ApiError("Limite de requisições atingido. Entre em contato com o suporte.");
            default:
                return new ApiError("Erro desconhecido da API.");
        }
    }
}