import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/telas/Home/index';

function App(){
  return <SafeAreaView style={estilos.tela}>
       <Home />
    </SafeAreaView>
}
const estilos = StyleSheet.create({
  tela:
  {
    flex: 1,
    backgroundColor:"white",
  }
})
export default App;