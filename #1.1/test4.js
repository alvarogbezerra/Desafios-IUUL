import { Turma, Aluno } from "./questao4.js";

// Criando instâncias da classe Aluno
const aluno1 = new Aluno("João");
const aluno2 = new Aluno("Maria");
const aluno3 = new Aluno("Pedro");

// Criando instância da classe Turma
const turma = new Turma();

// Inserindo alunos na turma
turma.inserirAluno(aluno1, aluno2, aluno3);

// Imprimindo lista de alunos antes de remover algum aluno
turma.imprimirListaDeAlunos();

// Removendo um aluno por matrícula
turma.removerAluno(aluno2.matricula);

// Imprimindo lista de alunos após remoção
turma.imprimirListaDeAlunos();

// Lançando notas para os alunos
turma.lancarNota(aluno1.matricula, 8.5, 9.0);
turma.lancarNota(aluno3.matricula, 7.0, 8.0);

// Imprimindo lista de alunos após lançamento de notas
turma.imprimirListaDeAlunos();
