//Funcionalidade 2
//Consegui verificar no cadastro, mas não encadeei a lógica para verificar consultas passadas.

import { Paciente } from "../Paciente.js";
import { Admin } from "../Admin.js";

const admin = new Admin;

admin.excluirPaciente("23557797105"); //colocar um cpf que tenha no DB_pacientes.json