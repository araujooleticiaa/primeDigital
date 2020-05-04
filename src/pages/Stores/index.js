import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Image1 from '../../assets/7.png';


export default function Store() {

  const navigation = useNavigation();

  function navigateToTime(){
     navigation.navigate('Schedule');
  }
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons name="location-on" size={60} color="#fff"/>
      </View>
      <Text style={styles.title}>Qual loja deseja agendar?</Text>
      <Image source={Image1} />

      <View style={styles.stores}>

        <TouchableOpacity onPress={navigateToTime}>
        <View style={styles.store}>
          <View style={styles.icones}>
            <MaterialIcons name="location-on" size={30} color="#000"/>
            <Text style={styles.iconesText}>1.5km</Text>
          </View>
          <View style={styles.endereco}>
            <Text style={styles.enderecoTextBold}>Lojas Americanas</Text>
            <Text style={styles.enderecoText}>Av.Paulista, 320</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToTime}>
        <View style={styles.store}>
          <View style={styles.icones}>
            <MaterialIcons name="location-on" size={30} color="#000"/>
            <Text style={styles.iconesText}>2.5km</Text>
          </View>
          <View style={styles.endereco}>
            <Text style={styles.enderecoTextBold}>Lojas Americanas</Text>
            <Text style={styles.enderecoText}>Rua São Bento, 352</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToTime}>
        <View style={styles.store}>
          <View style={styles.icones}>
            <MaterialIcons name="location-on" size={30} color="#000"/>
            <Text style={styles.iconesText}>3.0km</Text>
          </View>
          <View style={styles.endereco}>
            <Text style={styles.enderecoTextBold}>Lojas Americanas</Text>
            <Text style={styles.enderecoText}>Rua Silva Bueni, 152</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToTime}>
        <View style={styles.store}>
          <View style={styles.icones}>
            <MaterialIcons name="location-on" size={30} color="#000"/>
            <Text style={styles.iconesText}>5.5km</Text>
          </View>
          <View style={styles.endereco}>
            <Text style={styles.enderecoTextBold}>Lojas Americanas</Text>
            <Text style={styles.enderecoText}>Rua Pedroso, 25</Text>
          </View>
        </View>
        </TouchableOpacity>

      </View>
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
  icon:{
    backgroundColor: '#6CC841',
    borderRadius:50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
   store:{
    width: 450,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#666',
    borderBottomWidth: 2,
  },
  icones:{
    marginLeft: 10,
    alignItems: 'center',
  },
  iconesText:{
    fontSize:18,
  },
  endereco:{
    marginLeft: 20,
  },
  enderecoTextBold:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  enderecoText:{
    fontSize: 18,
  },




});
 

