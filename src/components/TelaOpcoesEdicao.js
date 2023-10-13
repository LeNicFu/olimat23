import { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../contexts/GlobalContext'
import estilos from '../estilos'
import { apagarNome } from './DadosLista'
import { estilo } from './TelaLista'

export default function OpcoesEdicao({navigation}) {
    const {codigo, nome, id} = useContext(GlobalContext)
    console.log(`Nome: ${nome}\n      Código: ${codigo}\n      Id: ${id}`)

    async function excluirNome() {
        await apagarNome(id)
        return alert('O nome foi excluído da lista')
    }
    
    return<View style={estilos.container}>
        <View style={{alignItems:'center', justifyContent: 'center', height: 65, backgroundColor: '#BCB9BA',
        borderRadius: 8, width: '98%', marginBottom: 30}}>
            <Text style={estilo.textoNome}>
                {nome}
            </Text>
            <Text style={estilo.textoCodigo}>
                {codigo}
            </Text>
        </View>
        <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('Editar nome')}
            >
                <Text style={estilos.textoBotao}>
                Editar o nome
                </Text>
            </TouchableOpacity>
        </View>
        <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botao}
                onPress={() => navigation.navigate('OLIMAT 2023')}
            >
                <Text style={estilos.textoBotao}>
                Início
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 40}}>
        </View>        
        <View style={estilos.containerBotaoExcluir}>
            <TouchableOpacity style={estilos.botao}
                onPress={() => (excluirNome(id) && navigation.navigate('OLIMAT 2023'))}
            >
                <Text style={estilos.textoBotao}>
                Excluir da lista
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}  