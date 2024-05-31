import { useContext } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../contexts/GlobalContext'
import estilos from '../estilos'
import { editarNome } from './DadosLista'


export default function TelaEditaNome({ navigation }) {
  const {codigo, setCodigo, nome, setNome, id, setId} = useContext(GlobalContext)
  console.log(`O nome é ${nome}, o código é ${codigo} e o id é ${id}`)

  async function confirma() {
    await editarNome(id, nome)
    return alert(`O nome foi atualizado para\n${nome}`)
  }

  return(
      <View style={estilos.container}>
          <View style={estiloEditaNome.container}>
            <Text style={estiloEditaNome.texto}> Editar o nome </Text>
            <Text style={estiloEditaNome.textoNomeCodigo}> {nome} </Text>
            <Text style={estiloEditaNome.texto}> associado ao código </Text>
            <Text style={estiloEditaNome.textoNomeCodigo}> {codigo} </Text>
          </View>
          <TextInput
          style={estiloEditaNome.nome}
          onChangeText={newNome => setNome(newNome)}
          defaultValue={nome}
          />
          <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botao}
              onPress={() => (confirma() && navigation.navigate('OLIMAT 2024'))}
            >
              <Text style={estilos.textoBotao}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
}

export const estiloEditaNome = StyleSheet.create({
    container: {
      alignItems:'center',
      justifyContent: 'center',
      height: 180,
      width: '90%',
      backgroundColor: '#BCB9BA',
      borderRadius: 8
    },
    texto: {
      fontSize: 20,
      lineHeight: 24,
      fontWeight: '500'
    },
    textoNomeCodigo: {
      fontSize: 25,
      textAlign: 'center',
      color: 'blue',
    },
    nome: {
      height: 50,
      width: '98%',
      fontSize: 25,
      marginVertical: 30,
      borderWidth: 1,
      borderRadius: 8,
      textAlign: 'center'
    }
})

