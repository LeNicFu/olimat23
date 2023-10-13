import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import estilos from '../estilos'

import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

import olimat from '../../assets/olimat.png'
import { Mostra } from './DadosLista'

Mostra()

export default function Tela1({ navigation }) {
  const { setNome } = useContext(GlobalContext)
  async function limpaNome() {
    await setNome('')
  }

  return (
    <ImageBackground source={olimat} resizeMode='cover' style={estilos.olimat}>
      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao}
        onPress={() => navigation.navigate('Scanner')}
        >
          <Text style={estilos.textoBotao}>
            Ler código
          </Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao}
          onPress={() => navigation.navigate('Lista')}
        >
          <Text style={estilos.textoBotao}>
            Lista
          </Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.containerBotao}>
        <TouchableOpacity style={estilos.botao}
          onPress={() => navigation.navigate('Enviar a lista')}
        >
          <Text style={estilos.textoBotao}>
            Enviar a lista
          </Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.containerBotaoExcluir}>
        <TouchableOpacity style={estilos.botaoExcluir}
          onPress={() => navigation.navigate('Apagar a lista')}
        >
          <Text style={estilos.textoBotao}>
            Apagar a lista
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}