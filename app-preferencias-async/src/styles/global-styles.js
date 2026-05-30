import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f1f5f9',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#334155',
  },

  deleteButton: {
    backgroundColor: '#dc2626',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#64748b',
  },

});