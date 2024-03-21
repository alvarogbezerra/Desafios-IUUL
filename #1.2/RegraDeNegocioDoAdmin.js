import fs from 'fs';
const caminhoDB_pacientes = "./DB_pacientes.json";

export class RegraDeNegocioDoAdmin {
    static verificaSeCPFFoiCadastrado(cpf) {
        const dados = fs.readFileSync(caminhoDB_pacientes, 'utf8');
        const pacientes = JSON.parse(dados);

        if (pacientes.some(paciente => paciente.cpf === cpf)) {
            throw new Error("Esse CPF já foi cadastrado.");
        }
    }

    static verificaSeCPFnaoFoiCadastrado(cpf) {
        const dados = fs.readFileSync(caminhoDB_pacientes, 'utf8');
        const pacientes = JSON.parse(dados);

        if (!pacientes.some(paciente => paciente.cpf === cpf)) {
            throw new Error("Esse CPF não consta no cadastro.");
        }
    }
}