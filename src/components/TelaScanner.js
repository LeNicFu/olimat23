import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { GlobalContext } from '../contexts/GlobalContext'

import estilos from '../estilos'

export default function ({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  
  const { codigo, setCodigo } = useContext(GlobalContext)
  console.log(`Código = ${codigo}`)

  const { setNome } = useContext(GlobalContext)
  async function limpaNome() {
    await setNome('')
  }
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setCodigo(data)
    console.log(`codigo = ${codigo}, Scanner`)
    // alert(`Escaneado o código de barras de número ${data}.\n A lista é ${codigoAluno}`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão para acessar a câmera!</Text>;
  }
  if (hasPermission === false) {
    return<Text style={{ color: 'red', fontSize: 25, fontWeight: '400',
    marginTop: 100, padding: 20,
    }}>
      É preciso dar acesso à câmera para poder escanear o código de barras
      </Text>;
  }

  return (
    <View style={estilos.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned &&
      <>
        <View style={estilos.containerConfereNumero}>
          <Text style={estilos.confereNumero}>
            {codigo}
          </Text>
          <Text style={estilos.confereNumero}>
            Se o número estiver correto confirme no botão abaixo para digitar o nome,
            caso contrário, toque no botão para escanear novamente.
          </Text>
        </View>
        <View style={estilos.containerBotao}>
          <TouchableOpacity style={estilos.botao}
            onPress={() =>(limpaNome() && navigation.navigate('Nome do Aluno'))}
          >
            <Text style={estilos.textoBotao}>
              Nome
            </Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.containerBotao}>
          <TouchableOpacity style={estilos.botao} onPress={() => setScanned(false)}>
          <Text style={estilos.textoBotao}>
            Escanear novamente
          </Text>
          </TouchableOpacity>
        </View>
      </>
      }
    </View>
  );
}