import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {createUserWithEmailAndPassword } from "firebase/auth";


const PlaceholderImage = require('../component/image/Login2.png');

const Ficha = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');

  const [ semestre, setSemestre] = useState('');
  const [ disciplina, setDisciplina] = useState('');


  const onLoginClick = () => {
    console.log('Nome de Usuário:', nomeUsuario);
    console.log('Nova Senha:', senha);
    console.log('confirma Senha:', senha2);
 }

 

  return (
    <View style={styles.container}>
            <Image source={PlaceholderImage} style={styles.image} />
            <Text style={styles.titulo}>Home</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Aluno"
        onChangeText={text => setNomeUsuario(text)}
        value={nomeUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="RA"
        onChangeText={text => setSenha(text)}
        value={senha}
        
      />
       <TextInput
        style={styles.input}
        placeholder="Semestre"
        onChangeText={text => setSemestre(text)}
        value={semestre}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Disciplina"
        onChangeText={text => setDisciplina(text)}
        value={disciplina}
        
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

export default Ficha;