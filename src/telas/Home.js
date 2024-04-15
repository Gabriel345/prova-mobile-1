import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import { createUserWithEmailAndPassword } from "firebase/auth";

const PlaceholderImage = require('../component/image/logo_fatec_cor.png');

const Home = () => {
  const navigation = useNavigation(); // Mova a chamada useNavigation aqui

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');

  const [semestre, setSemestre] = useState('');
  const [disciplina, setDisciplina] = useState('');

  const onLoginClick = () => {
    console.log('Nome de Usuário:', nomeUsuario);
    console.log('Nova Senha:', senha);
    console.log('confirma Senha:', senha2);
  }

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.titulo}>Home</Text>

      <TouchableOpacity style={styles.botao} onPress={() => handlePress('Login')}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => handlePress('Registrar')}>
        <Text style={styles.textoBotao}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => handlePress('Ficha')}>
        <Text style={styles.textoBotao}>Ficha</Text>
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
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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

export default Home;