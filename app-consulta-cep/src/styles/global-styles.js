import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#f1f5f9',
  },

  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0f172a',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  card: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  resultText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#334155',
  },

});