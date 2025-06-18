import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/avião.img.png')} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.logo}>Explorar Tour</Text>
        <Text style={styles.subtitle}>Agência de turismo</Text>
      </View>

      <Text style={styles.title}>Acesse sua conta</Text>

      <TextInput placeholder="E-mail" placeholderTextColor="#000" style={styles.input} />
      <TextInput placeholder="Senha" placeholderTextColor="#000" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Esqueceu a senha?</Text>

      <TouchableOpacity>
        <Text style={styles.register}>Não possui cadastro?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2edff', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
    top: -120,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    top: -155,
  },
  subtitle: {
     fontSize: 16,
    color: '#ffff',
    marginBottom: 30,
    top: -155
  },
  title: {
       fontSize: 30,
    marginBottom: 20,
    color: '#000',
    top: -120,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2f4f60',
    padding: 16,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
    top: 60,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgot: {
    color: '#6c63ff',
    fontSize: 14,
    marginBottom: 4,
    top: 55,
  },
  register: {
    color: '#6c63ff',
    fontWeight: 'bold',
    fontSize: 15,
    top: 50,
  },
});
