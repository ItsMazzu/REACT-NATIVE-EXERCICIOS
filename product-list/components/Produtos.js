import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/styles';
import ProdutoCard from '../components/ProdutoCard';
import { produtos } from '../utils/produtosData';

export default function Produtos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {produtos.map((item) => (
          <ProdutoCard
            key={item.id}
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </ScrollView>
    </View>
  );
}