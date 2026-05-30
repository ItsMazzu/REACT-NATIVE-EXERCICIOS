import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#60a5fa',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 2,
    backgroundColor: '#60a5fa',
    marginVertical: 20,
  },
  resultContainer: {
    backgroundColor: '#60a5fa',
    padding: 20,
    borderRadius: 4,
  },
  resultLabel: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});
