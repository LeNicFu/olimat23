import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Tela1 from './src/components/Tela1'
import Tela2 from './src/components/Tela2'
import TelaScanner from './src/components/TelaScanner'
import { InfoProvider } from './src/contexts/GlobalContext'
import TelaLista from './src/components/TelaLista'
import TelaEditaNome from './src/components/TelaEditaNome'
import TelaOpcoesEdicao from './src/components/TelaOpcoesEdicao'
import TelaApagaLista from './src/components/TelaApagaLista'
import TelaEnviar from './src/components/TelaEnviar'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OLIMAT 2024" component={Tela1} />
      <Stack.Screen name="Nome do Aluno" component={Tela2} />
      <Stack.Screen name="Scanner" component={TelaScanner} />
      <Stack.Screen name="Lista" component={TelaLista} />
      <Stack.Screen name="Editar nome" component={TelaEditaNome} />
      <Stack.Screen name="Opções de edição" component={TelaOpcoesEdicao} />
      <Stack.Screen name="Apagar a lista" component={TelaApagaLista} />
      <Stack.Screen name="Enviar a lista" component={TelaEnviar} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <InfoProvider>
        <MyStack />
      </InfoProvider>
    </NavigationContainer>
  );
}