
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './src/telas/Home';
import Login from './src/telas/Login';
import Registrar from './src/telas/Registrar';
import Ficha from './src/telas/Ficha';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="Ficha" component={Ficha} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
export default App;
