import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

export default function ProdutoCard({ nome, preco, imagem }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
    </View>
  );
}