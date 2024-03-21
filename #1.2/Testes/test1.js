//Funcionalidade 1
//Não consegui cuprir apenas o requisito "a", já as demais letras foram atendidas.

import { Paciente } from "../Paciente.js";
import { Admin } from "../Admin.js";

const paciente = new Paciente("23557797105", "aleatorio", "28/02/2009");
const admin = new Admin;

admin.incluirPaciente(paciente);