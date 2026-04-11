import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    marginTop: 5,
    color: 'green',
  },
});