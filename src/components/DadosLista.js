import * as SQLite from 'expo-sqlite'

// O código abaixo cria um banco de dados chamado mydatabase.db.
//Se o banco de dados já existir, ele será aberto. Se ele não existir, ele será criado automaticamente.

export const db = SQLite.openDatabase('mydatabase.db')

export default function Insere(codigo, nome) {
  // O código abaixo cria uma tabela chamada alunos com as colunas id, código e nome.
    db.transaction((tx) => {
        tx.executeSql(
        'CREATE TABLE IF NOT EXISTS alunos (id INTEGER PRIMARY KEY AUTOINCREMENT, codigo TEXT, nome TEXT);'
        );
    });
    // O código abaixo insere um novo usuário na tabela alunos com código e nome que forem informados.
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO alunos (codigo, nome) values (?, ?)',
        [codigo, nome],
        (_, result) => {
          console.log('Código e nome inseridos com sucesso!')
        },
        (_, error) => {
          console.log('Erro ao inserir o código ou nome: ', error)
        }
      );
    });

}

export function Mostra() {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM alunos', [], (tx, result) => {
          const len = result.rows.length;
          for (let i = 0; i < len; i++) {
            const row = result.rows.item(i);
            console.log(`Código: ${row.codigo}, Nome: ${row.nome}`);
          }
        });
      }); 
}

export function getAlunos(callback) {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM alunos;',
      [],
      (_, { rows }) => {
        const alunos = rows._array;
        callback(alunos);
      },
      (_, error) => {
        console.log('Erro ao buscar alunos!', error);
      }
    );
  });
}

export function editarNome(alunoId, novoNome) {
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE alunos SET nome = ? WHERE id = ?;',
      [novoNome, alunoId],
    );
  });
  return console.log(novoNome, alunoId)
}

export function apagarNome(userId) {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM alunos WHERE id = ?;',
      [userId]
    );
  });
}

export function apagarLista() {
  db.transaction((tx) => {
    tx.executeSql(
      'DROP TABLE IF EXISTS alunos;',
      [],
      (_, result) => console.log(result)
    );
  });
}