import {View, TextInput} from 'react-native'

function Inputs(){
  return(
    <View>
      <TextInput
      placeholder="Digite o primeiro nº"/>

      <TextInput
      placeholder="Digite o segundo nº"/>
    </View>
  )
}

export {Inputs}