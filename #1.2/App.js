import promptSync from 'prompt-sync';
import { Admin } from "./Admin.js";
import { Paciente } from "./Paciente.js";
import { Agendamento } from "./Agendamento.js";

const prompt = promptSync();
const admin = new Admin;

function exibirMenuPrincipal() {
    console.log("=== Menu Principal ===\n1. Cadastro de Pacientes\n2. Agenda\n3. Fim");
}

function exibirMenuCadastroPacientes() {
    console.log("=== Menu do Cadastro de Pacientes ===\n1. Cadastrar novo paciente\n2. Excluir paciente\n3. Listar pacientes (ordenado por CPF)\n4. Listar pacientes (ordenado por nome)\n5. Voltar para o menu principal");
}

function exibirMenuAgenda() {
    console.log("=== Menu da Agenda ===\n1. Agendar consulta\n2. Cancelar agendamento\n3. Listar agenda\n4. Voltar para o menu principal");
}

function iniciarMenu() {
    let continuar = true;
    while (continuar) {
        exibirMenuPrincipal();
        const opcaoPrincipal = prompt("Escolha uma opção: ");

        switch (opcaoPrincipal) {
            case '1':
                menuCadastroPacientes();
                break;
            case '2':
                menuAgenda();
                break;
            case '3':
                console.log("Encerrando o programa...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                break;
        }
    }
}

function menuCadastroPacientes() {
    let continuar = true;
    while (continuar) {
        exibirMenuCadastroPacientes();
        const opcaoCadastro = prompt("Escolha uma opção: ");

        switch (opcaoCadastro) {
            case '1':
                console.log("Você escolheu Cadastrar novo paciente.");
                try {
                    const cpf = prompt("Digite o CPF do paciente: ");
                    const nome = prompt("Digite o nome do paciente: ");
                    const dataDeNascimento = prompt("Digite a data de nascimento do paciente (DD/MM/AAAA): ");
                    const paciente = new Paciente(cpf, nome, dataDeNascimento);
                    Admin.incluirPaciente(paciente);
                } catch (error) {
                    console.error('Erro ao cadastrar paciente:', error.message);
                }
                break;
            case '2':
                console.log("Você escolheu Excluir paciente.");
                try {
                    const cpf = prompt("Digite o CPF do paciente a ser excluído: ");
                    Admin.excluirPaciente(cpf);
                } catch (error) {
                    console.error('Erro ao excluir paciente:', error.message);
                }
                break;
            case '3':
                console.log("Você escolheu Listar pacientes (ordenado por CPF).");
                try {
                    Admin.listarPacientes();
                } catch (error) {
                    console.error('Erro ao listar pacientes:', error.message);
                }
                break;
            case '4':
                console.log("Você escolheu Listar pacientes (ordenado por nome).");
                try {
                    Admin.listarPacientes();
                } catch (error) {
                    console.error('Erro ao listar pacientes:', error.message);
                }
                break;
            case '5':
                console.log("Voltando para o menu principal...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                break;
        }
    }
}


function menuAgenda() {
    let continuar = true;
    while (continuar) {
        exibirMenuAgenda();
        const opcaoAgenda = prompt("Escolha uma opção: ");

        switch (opcaoAgenda) {
            case '1':
                console.log("Você escolheu Agendar consulta.");
                try {
                    const dataDaConsulta = prompt("Digite a data da consulta (DD/MM/AAAA): ");
                    const horarioInicial = prompt("Digite o horário inicial (HHMM): ");
                    const horarioFinal = prompt("Digite o horário final (HHMM): ");
                    const cpfPaciente = prompt("Digite o CPF do paciente: ");
                    const nomePaciente = prompt("Digite o nome do paciente: ");
                    const dataNascimentoPaciente = prompt("Digite a data de nascimento do paciente (DD/MM/AAAA): ");
                    const paciente = new Paciente(cpfPaciente, nomePaciente, dataNascimentoPaciente);
                    const agendamento = new Agendamento(dataDaConsulta, horarioInicial, horarioFinal, paciente);
                    Admin.realizarAgendamento(agendamento, cpfPaciente);
                } catch (error) {
                    console.error('Erro ao agendar consulta:', error.message);
                }
                break;
            case '2':
                console.log("Você escolheu Cancelar agendamento.");
                try {
                    const cpfPaciente = prompt("Digite o CPF do paciente: ");
                    const dataDaConsulta = prompt("Digite a data da consulta a ser cancelada (DD/MM/AAAA): ");
                    const horarioInicial = prompt("Digite o horário inicial da consulta a ser cancelada (HHMM): ");
                    const agendamento = new Agendamento(dataDaConsulta, horarioInicial, "", null);
                    Admin.cancelarAgendamento(cpfPaciente, agendamento);
                } catch (error) {
                    console.error('Erro ao cancelar agendamento:', error.message);
                }
                break;
            case '3':
                console.log("Você escolheu Listar agenda.");
                try {
                    Admin.listarAgendamentos();
                } catch (error) {
                    console.error('Erro ao listar agenda:', error.message);
                }
                break;
            case '4':
                console.log("Voltando para o menu principal...");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                break;
        }
    }
}


iniciarMenu();