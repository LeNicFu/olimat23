import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import estilos from '../estilos'
import { apagarLista } from './DadosLista'


export default function ApagaLista({navigation}) {
    const [numero, setNumero] = useState(undefined)

    console.log(numero)

    async function Apaga(){
        await apagarLista()
        return alert('Toda a lista foi apagada!')
    }

    return <View style={estilos.container}>
        <View style={estilos.containerBotao}>
            <TouchableOpacity style={estilos.botao}
            onPress={() => navigation.navigate('OLIMAT 2024')}
            >
            <Text style={estilos.textoBotao}>
                Cancelar
            </Text>
            </TouchableOpacity>
        </View>
        <View style={estilos.containerConfereNumero}>
            <Text style={estilos.confereNumero}>
                Após a confirmação, toda a lista será apagada definitivamente!{'\n'}
                É preciso digitar o número 2024 e depois confirmar.
            </Text>
        </View>
        <View style={{height: 20}}/>
        <TextInput
            style={estilos.nome}
            placeholder="Digite 2024"
            onChangeText={newNumero => setNumero(newNumero)}
            defaultValue={numero}
        />
        <View style={estilos.containerBotaoExcluir}>
            <TouchableOpacity style={estilos.botaoExcluir}
            onPress={() =>( numero == 2024 ? (Apaga() && navigation.navigate('OLIMAT 2024')) : undefined)}
            >
            <Text style={estilos.textoBotao}>
                Confirmar
            </Text>
            </TouchableOpacity>
        </View>
    </View>
}