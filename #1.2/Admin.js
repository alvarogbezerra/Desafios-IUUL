//Pensei em admin como classe, pois posso ter um guichê com vários atendentes
import fs from 'fs';
import { RegraDeNegocioDoAgendamento } from "./RegraDeNegocioDoAgendamento.js";

const caminhoDB_pacientes = "./DB_pacientes.json";
const caminhoDB_agendamentos = "./DB_agendamentos.json";


export class Admin {

    incluirPaciente(paciente) {
        try {
            const dadosPacientes = Admin.lerDadosJSON(caminhoDB_pacientes);
            dadosPacientes.push(paciente);
            Admin.atualizarDadosJSON(caminhoDB_pacientes, dadosPacientes);
            console.log('Paciente incluído com sucesso!');
        } catch (error) {
            console.error('Erro ao incluir paciente:', error);
        }
    }

    excluirPaciente(cpf) {
        try {
            let dadosPacientes = Admin.lerDadosJSON(caminhoDB_pacientes);

            const pacienteIndex = dadosPacientes.findIndex(paciente => paciente.cpf === cpf);
            if (pacienteIndex === -1) {
                throw new Error("Paciente com o CPF especificado não encontrado.");
            }

            const paciente = dadosPacientes[pacienteIndex];

            const consultasFuturas = paciente.agendamentos?.some(agendamento => new Date(agendamento.dataDaConsulta) > new Date());

            if (consultasFuturas) {
                throw new Error("Um paciente com uma consulta agendada futura não pode ser excluído.");
            }

            dadosPacientes.splice(pacienteIndex, 1);

            const dadosSerializados = JSON.stringify(dadosPacientes, null, 2);
            Admin.atualizarDadosJSON(caminhoDB_pacientes, dadosSerializados);

            console.log('Paciente excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir paciente:', error);
        }
    }

    //há uma série de verificações que ficaram faltando
    realizarAgendamento(agendamento, cpf) {
        try {
            if (RegraDeNegocioDoAgendamento.verificarSobreposicaoDeAgendamentos(agendamento.dataDaConsulta, agendamento.horarioInicial, agendamento.horarioFinal)) {
                throw new Error('Erro: Sobreposição de agendamentos detectada.');
            }

            const pacientes = Admin.lerDadosJSON(caminhoDB_pacientes);
            const pacienteEncontrado = pacientes.find(paciente => paciente.cpf === cpf);

            if (!pacienteEncontrado) {
                throw new Error("Paciente com o CPF especificado não encontrado.");
            }

            if (!pacienteEncontrado.agendamentos) {
                pacienteEncontrado.agendamentos = [];
            }

            const agendamentoFuturoExistente = pacienteEncontrado.agendamentos.some(agendamentoExistente => new Date(agendamentoExistente.dataDaConsulta) > new Date());

            if (agendamentoFuturoExistente) {
                throw new Error("O paciente já possui um agendamento futuro pendente.");
            }

            pacienteEncontrado.agendamentos.push(agendamento.toJson());

            // Adicionar os dados do agendamento ao arquivo caminhoDB_agendamentos
            const agendamentos = Admin.lerDadosJSON(caminhoDB_agendamentos);
            agendamentos.push(agendamento.toJson());
            Admin.atualizarDadosJSON(caminhoDB_agendamentos, agendamentos);
            Admin.atualizarDadosJSON(caminhoDB_pacientes, pacientes);

            console.log('Agendamento realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao realizar agendamento:', error);
        }
    }

    //não consegui associar o paciente a consulta
    cancelarAgendamento(cpf, agendamento) {
        try {

            RegraDeNegocioDoAgendamento.validarDataDaConsulta(agendamento.dataDaConsulta)
        } catch (error) {
            console.error('Erro ao incluir paciente:', error);
        }
    }

    listarPacientes() {
        try {
            const caminhoDB_pacientes = "./DB_pacientes.json";
            const dadosPacientes = JSON.parse(fs.readFileSync(caminhoDB_pacientes, 'utf8'));

            console.log("------------------------------------------------------------");
            console.log("CPF Nome Dt.Nasc. Idade");
            console.log("------------------------------------------------------------");

            dadosPacientes.forEach(paciente => {
                const [dia, mes, ano] = paciente.dataDeNascimento.split('/');
                const dataNascimento = `${dia}/${mes}/${ano}`;

                const hoje = new Date();
                const nascimento = new Date(ano, mes - 1, dia);
                const diff = Math.abs(hoje - nascimento);
                const idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

                console.log(`${paciente.cpf} ${paciente.nome.padEnd(40)} ${dataNascimento} ${idade}`);

                if (paciente.agendamentos && paciente.agendamentos.length > 0) {
                    paciente.agendamentos.forEach(agendamento => {
                        const [diaConsulta, mesConsulta, anoConsulta] = agendamento.dataDaConsulta.split('/');
                        const dataConsulta = `${diaConsulta}/${mesConsulta}/${anoConsulta}`;
                        console.log(` Agendado para: ${dataConsulta}`);
                        console.log(` ${agendamento.horaInicial} às ${agendamento.horaFinal}`);
                    });
                }
            });

            console.log("------------------------------------------------------------");
        } catch (error) {
            console.error("Erro ao listar dados dos pacientes:", error);
        }
    }

    listarAgendamentos() {
        try {
            const caminhoDB_agendamentos = "./DB_agendamentos.json";
            const agendamentos = JSON.parse(fs.readFileSync(caminhoDB_agendamentos, 'utf8'));

            console.log("-------------------------------------------------------------");
            console.log(" Data   H.Ini  H.Fim  Tempo  Nome                Dt.Nasc.");
            console.log("-------------------------------------------------------------");

            agendamentos.forEach(agendamento => {
                const dataConsulta = agendamento.dataDaConsulta;
                const horaInicial = agendamento.horaInicial;
                const horaFinal = agendamento.horaFinal;
                const horaInicialFormatada = `${horaInicial.slice(0, 2)}:${horaInicial.slice(2)}`;
                const horaFinalFormatada = `${horaFinal.slice(0, 2)}:${horaFinal.slice(2)}`;
                const tempoConsulta = calcularTempoConsulta(horaInicial, horaFinal);
                console.log(`${dataConsulta} ${horaInicialFormatada} ${horaFinalFormatada} ${tempoConsulta.padEnd(6)} ${"Nome do paciente".padEnd(20)} 99/99/9999`);
            });

            console.log("-------------------------------------------------------------");
        } catch (error) {
            console.error("Erro ao listar os agendamentos:", error);
        }
    }

    //Criei essas duas últimas função para realizar a função de DAO
    static lerDadosJSON(caminhoArquivo) {
        let dados = [];
        if (fs.existsSync(caminhoArquivo)) {
            const dadosString = fs.readFileSync(caminhoArquivo, 'utf8');
            dados = JSON.parse(dadosString);
        }
        return dados;
    }

    static atualizarDadosJSON(caminhoArquivo, dados) {
        const dadosSerializados = JSON.stringify(dados, null, 2);
        fs.writeFileSync(caminhoArquivo, dadosSerializados);
    }

    static escreverDadosJSON(caminhoArquivo, dados) {
        const dadosSerializados = JSON.stringify(dados, null, 2);
        fs.writeFileSync(caminhoArquivo, dadosSerializados);
    }

}