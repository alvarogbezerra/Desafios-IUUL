//Funcionalidade 3
//Consegui cumprir todos os requisitos, menos a letra "f".

import { Agendamento } from "../Agendamento.js";
import { Admin } from "../Admin.js";

const agendamento = new Agendamento("25/03/2024", "0900", "0930");
const admin = new Admin;

admin.realizarAgendamento(agendamento, "22657797105")