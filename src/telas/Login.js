import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";


const PlaceholderImage = require('../component/image/Login2.png');

const Login = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const onLoginClick = () => {
 
  }


  

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
    backgroundColor: '#E0FFFF',
    gap:10,
  },
  image: {
    width:'80%',
    height:100,
    resizeMode:"contain",
  
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:'white',
  },
  botao: {
    backgroundColor: 'red',
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
