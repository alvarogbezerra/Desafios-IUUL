export class Consulta {
    static autoincrement = 0;
    #id; //autoincrementavel
    #dataDaConsulta
    #horarioInicial 
    #horarioFinal
    #role //valido ou inválido (marcado e desmarcado0) //mudar o role caso a data já tenha passado

    constructor (dataDaConsulta, horaInicial, horaFinal, role){
        Consulta.autoincrement++;
        this.#id = Consulta.autoincrement;
        this.#dataDaConsulta;
        this.#horarioInicial;
        this.#horarioFinal;
        this.#role;
    }

    get id() {
        return this.#id;
    }

    get dataDaConsulta() {
        return this.#dataDaConsulta;
    }

    get horaInicial() {
        return this.#horarioInicial;
    }

    get horaFinal() {
        return this.#horarioFinal;
    }

    get role() {
        return this.#role;
    }

    toJson() {
        return {
            id: this.#id,
            dataDaConsulta: this.#dataDaConsulta,
            horaInicial: this.#horarioInicial,
            horaFinal: this.#horarioFinal,
            role: this.#role
        };
    }
}