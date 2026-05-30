import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const produtosData = [
  {
    id: '1',
    titulo: 'Smartphone Samsung',
    preco: 'R$ 1.200,00',
    imagem: 'https://via.placeholder.com/200?text=Smartphone',
    descricao: 'Smartphone Samsung Galaxy A12 com câmera de 48MP, bateria 5000mAh e tela 6.5 polegadas',
    contato: '(11) 98765-4321',
  },
  {
    id: '2',
    titulo: 'Notebook Dell',
    preco: 'R$ 2.500,00',
    imagem: 'https://via.placeholder.com/200?text=Notebook',
    descricao: 'Notebook Dell Inspiron 15 com processador Intel i7, 8GB RAM e SSD 256GB',
    contato: '(11) 98765-4322',
  },
  {
    id: '3',
    titulo: 'Fone Bluetooth',
    preco: 'R$ 150,00',
    imagem: 'https://via.placeholder.com/200?text=Fone',
    descricao: 'Fone de ouvido Bluetooth sem fio com cancelamento de ruído ativo',
    contato: '(11) 98765-4323',
  },
  {
    id: '4',
    titulo: 'Câmera Digital',
    preco: 'R$ 800,00',
    imagem: 'https://via.placeholder.com/200?text=Camera',
    descricao: 'Câmera digital Sony com lente zoom óptico 10x e vídeo 4K',
    contato: '(11) 98765-4324',
  },
  {
    id: '5',
    titulo: 'Tablet Apple',
    preco: 'R$ 1.800,00',
    imagem: 'https://via.placeholder.com/200?text=Tablet',
    descricao: 'iPad Air com tela Retina 10.9 polegadas e processador A14 Bionic',
    contato: '(11) 98765-4325',
  },
];

function TelaAnuncios({ navigation }) {
  const renderProduto = ({ item }) => (
    <View style={styles.cardProduto}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <Text style={styles.tituloProduto}>{item.titulo}</Text>
      <TouchableOpacity
        style={styles.botaoDetalhes}
        onPress={() => navigation.navigate('Detalhes', { produto: item })}
      >
        <Text style={styles.textoDetalhes}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <FlatList
        data={produtosData}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.listaProdutos}
      />
      <Text style={styles.scrollIndicator}>← Scroll →</Text>
    </View>
  );
}

function TelaDetalhes({ route }) {
  const { produto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.imagemGrande} />
      
      <View style={styles.detalhesContainer}>
        <Text style={styles.tituloProdutoGrande}>{produto.titulo}</Text>
        <Text style={styles.precoProduto}>{produto.preco}</Text>
        
        <Text style={styles.labelDetalhes}>Descrição:</Text>
        <Text style={styles.textoDetalhes}>{produto.descricao}</Text>
        
        <Text style={styles.labelDetalhes}>Contato:</Text>
        <Text style={styles.textoDetalhes}>{produto.contato}</Text>
        
        <TouchableOpacity style={styles.botaoComprar}>
          <Text style={styles.textoComprar}>Entrar em contato</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function ProductAnnouncementsApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Anuncios"
          component={TelaAnuncios}
          options={{ title: 'App 13 - Anúncios de Produtos' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{ title: 'Detalhes do Produto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 15,
    textAlign: 'center',
  },
  listaProdutos: {
    paddingRight: 10,
  },
  cardProduto: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imagemProduto: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
  tituloProduto: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  botaoDetalhes: {
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoDetalhes: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  scrollIndicator: {
    textAlign: 'center',
    color: '#27ae60',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detalhesContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 15,
  },
  imagemGrande: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#e8e8e8',
  },
  tituloProdutoGrande: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  precoProduto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 15,
  },
  labelDetalhes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34495e',
    marginTop: 10,
    marginBottom: 5,
  },
  botaoComprar: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textoComprar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
