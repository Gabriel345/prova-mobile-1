import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';

const PlaceholderImage = require('../component/image/usuario.png');

const Login = ({ navigation }) => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const onLoginClick = () => {
    signInWithEmailAndPassword(auth, nomeUsuario, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Home');
      })
      .catch((error) => {
        const errocode = error.code;
        switch (errocode) {
          case 'auth/invalid-credential':
            Alert.alert("Erro", "Usuário ou Senha Inválida!");
            break;
          case 'auth/missing-password':
            Alert.alert("Erro", "Usuário ou Senha em Branco!");
            break;
          case 'auth/invalid-email':
            Alert.alert("Erro", "Usuário ou Senha em Branco!");
            break;
          default:
            Alert.alert("Erro", "Ops, desculpa, algo aconteceu. Tente novamente!");
        }
      });
  };

  const onPressRegister = () => {
    navigation.navigate('Registrar');
  };

  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.titulo}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={text => setNomeUsuario(text)}
        value={nomeUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry={true}
      />
      <View style={styles.textContainer}>
        <Text>Não possui conta?
          <Text style={styles.textoCadastro} onPress={onPressRegister}> Faça o cadastro</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={onLoginClick}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    gap: 10,
  },
  image: {
    width: '80%',
    height: 100,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '80%',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#4A90E2',
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#333333',
  },
  botao: {
    backgroundColor: '#4A90E2',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    width: '80%',
    marginVertical: 10,
  },
  textoCadastro: {
    color: '#50E3C2',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;