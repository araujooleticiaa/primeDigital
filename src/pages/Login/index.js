import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';

export default function Login() {

 const navigation = useNavigation();

   function navigateToTime(){
      navigation.navigate('Escolher');
   }

  return (
    <View style={styles.container}>
     <Image style={styles.image} source={logo}></Image>
     <View style={styles.input}>
      <Text style={styles.inputText}>CPF:</Text>
      <TextInput
       keyboardType="numeric"
       style={styles.inputCampo}
      />
      <Text style={styles.inputText} >CELULAR:</Text>
      <TextInput
       keyboardType="numeric" 
       style={styles.inputCampo}
      />
     </View>
     <TouchableOpacity style={styles.button} onPress={navigateToTime}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },

 image:{
  width: 250,
  height: 250,
 },

 input:{
  marginTop: 5,
 },

 inputText:{
  marginTop: 5,
 },

 inputCampo:{
  height: 40,
  width: 350,
  borderColor: 'gray',
  paddingLeft: 8,
  borderRadius: 8,
  marginBottom: 20,
  borderWidth: 1
 },

 button:{
  backgroundColor: '#D3553E',
  height: 40,
  width: 350,
  alignItems: 'center',
  justifyContent: 'center',
 },
 buttonText:{
  color: '#fff',
 },


});
