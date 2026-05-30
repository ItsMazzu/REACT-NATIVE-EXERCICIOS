import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../styles/global-styles';
import CustomInput from '../components/custom-inputs';
import { buscarCep } from '../services/api';
export default function Cep() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  
  async function handleBuscarCep() {

    if (cep.length !== 8) {
      alert('Erro: Digite um CEP válido');
      return;
    }

    const resultado = await buscarCep(cep);

    if (resultado.erro) {
      alert('Erro: CEP não encontrado');
      return;
    }

    setDados(resultado);
  }

  return (

    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png'
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Consulta CEP
      </Text>

      <CustomInput
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        maxLength={8}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleBuscarCep}
      >

        <Text style={styles.buttonText}>
          Buscar
        </Text>

      </TouchableOpacity>

      {dados && (

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Resultado
          </Text>

          <Text style={styles.resultText}>
            CEP: {dados.cep}
          </Text>

          <Text style={styles.resultText}>
            Logradouro: {dados.logradouro}
          </Text>

          <Text style={styles.resultText}>
            Bairro: {dados.bairro}
          </Text>

          <Text style={styles.resultText}>
            Cidade: {dados.localidade}
          </Text>

          <Text style={styles.resultText}>
            Estado: {dados.uf}
          </Text>
        </View>
      )}
    </View>
  );
}