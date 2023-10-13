import { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import estilos from "../estilos";
import { GlobalContext } from "../contexts/GlobalContext";
import Insere from "./DadosLista";

export default function Tela2({ navigation }) {
  const { codigo, setCodigo, nome, setNome } = useContext(GlobalContext)
    
  console.log(`Nome = ${nome}`)

  async function ColetaDados() {
    await Insere(codigo, nome)
    return(
      setCodigo(''),
      setNome('')
    )
  }

  return (
      <View style={estilos.container}>
        <TextInput
        style={estilos.nome}
        placeholder="Digite o nome do aluno"
        onChangeText={newNome => setNome(newNome)}
        defaultValue={nome}
        />
        <View style={estilos.containerBotao}>
          <TouchableOpacity style={estilos.botao}
            onPress={() => (ColetaDados() && navigation.navigate('OLIMAT 2023'))}
          >
            <Text style={estilos.textoBotao}>
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }