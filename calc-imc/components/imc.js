import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/styles';
import { calcularIMC } from '../utils/Calculadora';
import { formatarNumero } from '../utils/formatador'

export default function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  function handleCalcular() {
    const res = calcularIMC(peso, altura);
    setResultado(res);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

  <TextInput
  style={styles.input}
  placeholder="Peso (kg)"
  keyboardType="numeric"
  value={peso}
  onChangeText={(text) => setPeso(formatarNumero(text))}
  />

  <TextInput
  style={styles.input}
  placeholder="Altura (m)"
  keyboardType="numeric"
  value={altura}
  onChangeText={(text) => setAltura(formatarNumero(text))}
  />

      <Button title="Calcular" onPress={handleCalcular} />

      {resultado && (
        <View style={styles.card}>
          {resultado.erro ? (
            <Text style={[styles.result, { color: 'black' }]}>
              {resultado.erro}
            </Text>
          ) : (
            <Text style={[styles.result, { color: resultado.cor }]}>
              IMC: {resultado.valor}{'\n'}
              {resultado.classificacao}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}