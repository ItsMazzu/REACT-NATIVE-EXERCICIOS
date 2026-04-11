import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import React, {useState} from 'react'


function Contador(){
  const [cont, setCont] = useState(0);

  function somarSubtrair(acao){
    if (acao == '+'){
      setCont(cont + 1);
    }else if(cont > 0){
      setCont(cont -1)
    }
  }

  return(
    <View style={styles.area}>
      <Text style={styles.titulo}>Contador de pessoas</Text>

      <Text style={styles.numeroPessoas}>{cont}</Text>

      <Button title='Adicionar' color='green' onPress={() => somarSubtrair('+')} />
      
      <Button title= 'Retirar'  color='red' onPress={() => somarSubtrair('-')} />
    </View>
  )
}

export default Contador;