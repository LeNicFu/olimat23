import { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../contexts/GlobalContext';
import { getAlunos } from './DadosLista'


export default function AlunosLista({ navigation }) {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAlunos(setAlunos);
  }, []);
  
  function ListaOrdemAlfabetica() {
    alunos.sort(function (a,b) {
      if (a.nome > b.nome) {
        return 1
      }
      if (a.nome < b.nome) {
        return -1
      }
      if (a.nome = b.nome) {
        return 0
      }
    })
  }
  
  ListaOrdemAlfabetica()

  const { setCodigo, setNome, setId } = useContext(GlobalContext)
  async function editar(c, n, i) {
    await (setCodigo(c), setNome(n), setId(i))
  }

  function EstiloLista(codigo, nome, id) {
    return<TouchableOpacity style={estilo.container}
    onPress={() =>( editar(codigo, nome, id) && navigation.navigate('Opções de edição'))}
    >
        <Text style={estilo.textoNome}>
            {nome}
        </Text>
        <Text style={estilo.textoCodigo}>
            {codigo}
        </Text>
    </TouchableOpacity> 
  }

  return (
    <FlatList
      style={{backgroundColor: '#00AEE7'}}
      data={alunos}
      keyExtractor={(aluno) => aluno.id.toString()}
      renderItem={({ item }) => EstiloLista(item.codigo, item.nome, item.id)}
      ListHeaderComponent={() => {
        return <View style={{alignItems: 'center', paddingVertical: 10}}>
                <Text style={estilo.textoNome}>
                  {`Total de alunos registrados:   ${alunos.length}`}
                </Text>
          </View>
    }}
    />
  );
}

export const estilo = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        height: 65,
        backgroundColor: '#BCB9BA',
        marginHorizontal: 4,
        marginVertical: 2,
        borderRadius: 8
    },
    textoNome: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '500'
    },
    textoCodigo: {
        fontSize: 17,
        lineHeight: 23,
        fontWeight: '500'
    }
})