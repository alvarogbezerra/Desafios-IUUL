//Pensei em admin como classe, pois posso ter um guichê com vários atendentes
import { Paciente } from "./Paciente.js";
import fs from 'fs';
const caminhoDB_pacientes = "#1.2\database\DB_pacientes.json";
const caminhoDB_agendamentos = "#1.2\database\DB_agendamentos.json";

export class Admin {
    incluirPaciente(paciente) {
        try {
            let dadosExistente = [];
            if (fs.existsSync(caminhoDB_pacientes)) {
                const dados = fs.readFileSync(caminhoDB_pacientes, 'utf8');
                dadosExistente = JSON.parse(dados);
            }
            dadosExistente.push(paciente);
            const dadosSerializados = JSON.stringify(dadosExistente, null, 2);
            fs.writeFileSync(caminhoDB_pacientes, dadosSerializados);
            console.log('Paciente incluído com sucesso!');
        } catch (error) {
            console.error('Erro ao incluir paciente:', error);
        }
    }


    excluirPaciente (cpf){

    }

    agendarConsulta (cpf, dataDaConsulta, horaInicial, horaFinal, Paciente) {

    }
}

// Exemplo de uso
const paciente = new Paciente("01245679910", "aleatorio", "28/02/2000");
const admin = new Admin;

admin.incluirPaciente(paciente);