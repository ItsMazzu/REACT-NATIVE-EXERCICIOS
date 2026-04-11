import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/styles';
import { gerarNumero } from '../utils/RandomGen';

export default function RandomNumber() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [resultado, setResultado] = useState(null);

  function handleGerar() {
    const res = gerarNumero(min, max);
    setResultado(res);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Número</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor mínimo"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor máximo"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />

      <Button title="Gerar Número" onPress={handleGerar} />

      {resultado && (
        <View style={styles.card}>
          {resultado.erro ? (
            <Text style={styles.error}>{resultado.erro}</Text>
          ) : (
            <Text style={styles.result}>
              Número sorteado: {resultado.numero}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}