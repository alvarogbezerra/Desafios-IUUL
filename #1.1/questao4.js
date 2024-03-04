/*crie uma classe Turma que possui uma lista de Alunos. Cada aluno tem matrícula e nome (obrigatórios) e duas notas (P1 e P2) que inicialmente estão sem valor. Durante o semestre os alunos devem realizar essas provas, mas podem faltar a uma delas ou às duas. 

Crie métodos para:
● Inserir um aluno na turma. Não podem ser inseridos dois alunos com a mesma matrícula.
● Remover um aluno da turma a partir da sua matrícula.
● Lançar a nota (seja ela P1 ou P2) de um aluno.

● Imprimir os alunos da turma em ordem alfabética de acordo com o layout a seguir. A nota final é calculada como: (a) NF = (P1 + P2) / 2, para quem compareceu às duas provas; (b) NF = P1 
/ 2 ou NF = P2 / 2, para quem faltou a uma das provas, e; (c) NF = 0, para quem faltou às duas provas. Use uma casa decimal para as notas. —---------------------------------------
Matricula Nome P1 P2 NF
—---------------------------------------
 12345 Ana de Almeida 8.0 9.5 8.8
 23456 Bruno Carvalho 7.0 - 3.5
 34567 Fernanda Abreu - 8.5 4.3
 45678 Joao Santos - - 0.0
—--------------------------------------- Em seguida, leia dados dos alunos e suas notas e imprima a lista de alunos.
*/

class Turma {
    #listaDeAlunos = [];

    get listaDeAlunos (){
        return this.#listaDeAlunos;
    }

    inserirAluno(aluno) {
        this.#listaDeAlunos.push(aluno);
    }

    removerAluno(matricula) {
        const alunoParaRemover = this.#listaDeAlunos.findIndex(objeto => objeto.matricula === matricula);

        if (alunoParaRemover !== -1) {
            const alunoRemovido = this.#listaDeAlunos[alunoParaRemover];
            console.log(`O aluno ${alunoRemovido.nome} foi removido com sucesso.`);
            this.#listaDeAlunos.splice(alunoParaRemover, 1);
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }

    //o usuário define quem ele quiser chamar, podendo alterar os dois ou só um
    lancarNota(matricula, novaNotaP1, novaNotaP2) {
        const alunoParaAlterar = this.#listaDeAlunos.find(objeto => objeto.matricula === matricula);
    
        if (alunoParaAlterar) {
            alunoParaAlterar.notaP1 = novaNotaP1;
            alunoParaAlterar.notaP2 = novaNotaP2;
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }
}

class Aluno {
    static autoincrement = 0;//o primeiro aluno registrado começará com 1
    #matricula; 
    #nome;
    #P1;
    #P2;

    constructor(nome) {
        Aluno.autoincrement++;
        this.#matricula = Aluno.autoincrement; 
        this.#nome = nome;
        this.#P1 = 0;
        this.#P2 = 0;
    }

    get matricula (){
        return this.#matricula;
    }

    get nome () {
        return this.#nome;
    }
}
/*

let aluno = new Aluno("Alvaro"); 
let turma = new Turma(aluno);

turma.inserirAluno(aluno);
turma.removerAluno(1);

*/
