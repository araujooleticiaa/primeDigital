import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, StyleSheet,Image, Text, TouchableOpacity, TextInput } from 'react-native';
import Imagem1 from '../../assets/1.png';

// import { Container } from './styles';

const Cart = () => {
  const navigation = useNavigation();

  function navigateToTime(){
    navigation.navigate('Store');
  }

  return(
    <View style={styles.container}>
      <View style={styles.cartItem} >
        <Image source={Imagem1}/>
        <Text style={styles.cartItemText}>Smartphone Samsumg A10 32GB R$ 849,00</Text>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalTextBold}>R$ 849,00</Text>
      </View>
      <View style={styles.pag}>
        <Text style={styles.pagText}>Informações do cartão</Text>
      
        <Text style={styles.inputText}>Numero do cartão:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputCampo}
        />

        <Text style={styles.inputText}>Nome do titular:</Text>
        <TextInput
          style={styles.inputCampo}
        />

        <Text style={styles.inputText}>Validade:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputCampo}
        />

        <Text style={styles.inputText}>COD:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputCampo}
        />
        <TouchableOpacity onPress={navigateToTime} style={styles.button}>
          <Text style={styles.buttonText}>finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItem:{
    display: 'flex',
    maxWidth: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemText:{
    fontSize: 21,
    marginLeft: 35,
    fontWeight: 'bold',
  },
  total:{
    marginTop: 30,
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText:{
    fontSize: 25,
  },
  totalTextBold:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  pag:{
    marginTop: 20,
  },
  pagText:{
    fontSize: 25,
  },
  inputText:{
    fontSize: 15,
    marginTop: 10,
  },
  inputCampo:{
    height: 40,
    width: 350,
    borderColor: 'gray',
    paddingLeft: 8,
    borderRadius: 8,
    borderWidth: 1
  },
  button:{
    backgroundColor: '#6CC841',
    height: 40,
    width: 350,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
  },
});
 

export default Cart;