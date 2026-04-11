import {View, Text} from 'react-native'

import {CalculateButton} from './src/components/CalculateButton/index'
import {Inputs} from './src/components/Inputs/index'

function App(){
  return(
    <View>
      <Text>Multiplicador de números</Text>
      
      <Inputs/>

      <CalculateButton/>
      <Text>Resultado: </Text>

    </View>
  )
}

export default App()