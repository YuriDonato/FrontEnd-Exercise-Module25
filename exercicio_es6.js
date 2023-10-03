// Passo 1: Criar um array de objetos, onde cada objeto representa um aluno com nome e nota.
const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 8 },
  { nome: "Ana", nota: 6 },
  { nome: "Carlos", nota: 4 },
];

// Passo 2: Criar uma função que retorna apenas os alunos com nota maior ou igual a 6.
function filtrarAlunosAprovados(listaDeAlunos) {
  // Inicializando um array vazio para armazenar os alunos aprovados.
  const alunosAprovados = [];

  // Iterando os alunos na lista.
  for (let i = 0; i < listaDeAlunos.length; i++) {
    const aluno = listaDeAlunos[i];

    // Verificando a nota
    if (aluno.nota >= 6) {
      // Populando a lista de aprovados
      alunosAprovados.push(aluno);
    }
  }

  return alunosAprovados;
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log("Alunos Aprovados:");
console.log(alunosAprovados);
