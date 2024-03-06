class Turma {
    #listaDeAlunos = [];

    get listaDeAlunos (){
        return this.#listaDeAlunos;
    }

    inserirAluno(...alunos) {
        this.#listaDeAlunos.push(...alunos);
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

    //o usuário define a matricula de quem ele quer mudar a nota, podendo alterar as duas notas ou só uma
    lancarNota(matricula, notaP1, notaP2) {
        const alunoParaAlterar = this.#listaDeAlunos.find(aluno => aluno.matricula === matricula);
        
        if (alunoParaAlterar) {
            alunoParaAlterar.notaP1 = notaP1;
            alunoParaAlterar.notaP2 = notaP2;
        } else {
            console.log(`Aluno com matrícula ${matricula} não encontrado.`);
        }
    }   

    imprimirListaDeAlunos() {
        const listaOrdenada = this.#listaDeAlunos.sort((x, y) => {
            let a = x.nome.toUpperCase(),
                b = y.nome.toUpperCase();
            return a === b ? 0 : a > b ? 1 : -1;
        });
    
        console.log(`
            —---------------------------------------
            Matrícula  Nome         P1     P2     NF
            —---------------------------------------
        `);
    
        for (const aluno of listaOrdenada) {
            console.log(`        ${aluno.matricula}         ${aluno.nome}        ${aluno.P1}      ${aluno.P2}      ${aluno.calcularNotaFinal()}`);
        }
    
        console.log(`
            —---------------------------------------
        `);
    }
    
}

class Aluno {
    static autoincrement = 0;//o primeiro aluno registrado começará com 1
    #matricula; 
    #nome;
    #P1 = 0;
    #P2 = 0;

    constructor(nome) {
        Aluno.autoincrement++;
        this.#matricula = Aluno.autoincrement; 
        this.#nome = nome;
    }

    get matricula (){
        return this.#matricula;
    }

    get nome () {
        return this.#nome;
    }

    get nota() {
        return `As notas foram 1°: ${this.#P1}; 2°: ${this.#P2};`;
    }    

    calcularNotaFinal() {
        let NF = 0;
    
        if (this.#P1 !== undefined && this.#P2 !== undefined) {
            NF = (this.#P1 + this.#P2) / 2;
        } else if (this.#P1 !== undefined) {
            // Se apenas P1 é definido, divide P1 por 2
            NF = this.#P1 / 2;
        } else if (this.#P2 !== undefined) {
            // Se apenas P2 é definido, divide P2 por 2
            NF = this.#P2 / 2;
        } else {
            NF = 0;
        }
    
        return NF.toFixed(1);
    }
    
    

}

/*
let aluno1 = new Aluno("Jose");
let aluno2 = new Aluno("Maria"); 
let aluno3 = new Aluno("Pedro"); 
let aluno4 = new Aluno("Gustavo"); 
let aluno5 = new Aluno("Alvaro");

let turma = new Turma();
turma.inserirAluno(aluno1, aluno2, aluno3, aluno4, aluno5);
*/

//teste para imprimir lista de alunos
//turma.imprimirListaDeAlunos();

//Teste para definir notas
/* turma.inserirAluno(aluno);
turma.lancarNota(1, 10, 10);

console.log(aluno.nota)*/


let aluno1 = new Aluno("Pedro");
let aluno2 = new Aluno("Maria");
let aluno3 = new Aluno("JOSE");

let turma = new Turma();
turma.inserirAluno(aluno1, aluno2, aluno3);

turma.lancarNota(aluno1.matricula, 8, 9);
turma.lancarNota(aluno2.matricula, 7, 8);
turma.lancarNota(aluno3.matricula, 6, 7);

turma.imprimirListaDeAlunos();