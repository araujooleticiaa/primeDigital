import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import Imagem from '../../assets/6.png';

// import { Container } from './styles';

export default function Details() {

  const navigation = useNavigation();

  function navigateToTime(){
     navigation.navigate('Cart');
  }

  return (
    <View style={styles.container}>
     <Image source={Imagem} style={styles.imagem}></Image>
     <Text style={styles.title}>Smartphone Samsumg A10 32GB</Text>
     <Text style={styles.description}>Cod. 516566565</Text>
    
     <View style={styles.groupPrice}>
     <Text style={styles.price}>R$ 849,00</Text>
     <Text style={styles.portion}>12x de R$ 70,75 sem juros</Text>

     <TouchableOpacity onPress={navigateToTime} style={styles.buttonPurchase}>
      <MaterialIcons name="shopping-basket" color="#fff" size={30}/>
      <Text style={styles.buttonPurchaseText}>Comprar</Text>
     </TouchableOpacity>

     <TouchableOpacity  onPress={navigateToTime} style={styles.buttonAme}>
      <Text style={styles.buttonAmeText}>Comprar com o AME</Text>
     </TouchableOpacity>
     </View>

      <View style={styles.locker}>
        <MaterialIcons name="enhanced-encryption" color="#666" size={30} />
        <Text style={styles.lockerText}>Compre e retire no locker</Text>
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
  title:{
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
  }, 
  description:{
    fontSize: 18,
  },
  groupPrice:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price:{
    fontSize: 35,
    fontWeight: 'bold',
  },
  portion:{
    fontSize: 20,
  },
  buttonPurchase:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#6CC841',
    borderRadius: 8,
    color: '#fff',
    width: 300,
    marginTop: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPurchaseText:{
    color: '#fff',
    marginLeft: 8,
    fontSize: 21,
  },
  buttonAme:{
    borderColor: '#D3553E',
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 2,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAmeText:{
    fontSize: 21,
    color: '#D3553E',
  },
  locker:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockerText:{
    color: '#666',
    fontSize: 19,
    fontWeight: 'bold',
  }
});
 

