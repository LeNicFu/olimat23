import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import estilos from '../estilos'
import { getAlunos } from './DadosLista'
import * as MailComposer from 'expo-mail-composer'

export default function () {
  const [alunos, setAlunos] = useState([])
  const [escola, setEscola] = useState('')
  const [senhaEnviar, setSenhaEnviar] = useState('')
  
  console.log(escola)

  useEffect(() => {
    getAlunos(setAlunos)
    alert('Por favor, digite o nome da escola e a senha antes de enviar. Ao clicar no botão "Enviar a lista" a janela do seu e-mail será aberta com a mensagem pronta para ser enviada. Então basta clicar no item de enviar.')
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
  
  const enviarEmail = async () => {
    const lista = JSON.stringify(alunos)
    
    const email = {
      recipients: ['olimat@uesc.br', 'rrsilva@uesc.br'],
      subject: `${escola} (${alunos.length} alunos na lista)`,
      body: `${lista}`,
    };
    
    await MailComposer.composeAsync(email);
  };

  function Enviar() {
    if (escola.length > 0 && senhaEnviar == '24olimat24') {
      enviarEmail()
    } else {
      alert('A senha está incorreta ou o campo para o nome da escola está em branco')
    }
  }

  return<View style={estilos.container}>
    <TextInput
        style={estilos.nome}
        placeholder="Escola"
        onChangeText={newNome => setEscola(newNome)}
        defaultValue={escola}
        />
    <TextInput
        style={estilos.nome}
        placeholder="Senha"
        onChangeText={newNome => setSenhaEnviar(newNome)}
        defaultValue={senhaEnviar}
        />
    <View style={estilos.containerBotao}>
      <TouchableOpacity style={estilos.botao}
        onPress={Enviar}
      >
        <Text style={estilos.textoBotao}>
          Enviar a lista
        </Text>
      </TouchableOpacity>
    </View>
  </View>
}