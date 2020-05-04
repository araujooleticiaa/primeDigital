import React from 'react';
import {useNavigation} from '@react-navigation/native'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import banner from '../../assets/banner.png';
import Image1 from '../../assets/1.png';
import Image2 from '../../assets/2.png';
import Image3 from '../../assets/3.png';
import Image4 from '../../assets/4.png';
import Image5 from '../../assets/5.png';

export default function Escolher() {

  const DATA = [
    {
      id: '0',
      title: 'Nome do produto',
      image: Image1,
      price: 'R$250,90',
      portion: '12x de R$ 19,04 sem juros, Receba R$ 4,83 (2% de volta)',
    },
    {
      id: '1',
      title: 'Nome do produto',
      image: Image2,
      price: 'R$250,90',
      portion: '12x de R$ 19,04 sem juros, Receba R$ 4,83 (2% de volta)',
    },
    {
      id: '2',
      title: 'Nome do produto',
      image: Image3,
      price: 'R$250,90',
      portion: '12x de R$ 19,04 sem juros, Receba R$ 4,83 (2% de volta)',
    },
    {
      id: '3',
      title: 'Nome do produto',
      image: Image4,
      price: 'R$250,90',
      portion: '12x de R$ 19,04 sem juros, Receba R$ 4,83 (2% de volta)',
    },
    {
      id: '4',
      title: 'Nome do produto',
      image: Image5,
      price: 'R$250,90',
      portion: '12x de R$ 19,04 sem juros, Receba R$ 4,83 (2% de volta)',
    },
  ];
 
  const navigation = useNavigation();

  function navigateToTime(){
     navigation.navigate('Details');
  }
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <MaterialIcons size={40} color="#D3553E" name="sentiment-dissatisfied" />
        <Text style={styles.headerText}>Você não tem nenhum agendamento</Text>
        <Image style={styles.banner} source={banner} />
      </View>

      <FlatList
        keyExtractor={item => item.id}
        data={DATA}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        renderItem={({item }) => (
          <TouchableOpacity onPress={navigateToTime} style={styles.box}>
            <Image style={styles.imagem} source={item.image}/>
            <View style={styles.textGroup}>
              <Text style={styles.textGroupTitle}>{item.title}</Text>
              <Text style={styles.textGroupPrice}>{item.price}</Text>
              <Text style={styles.textGroupPortion}>{item.portion}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginTop: 50,
    alignItems: 'center',
  },
  headerText:{
    fontSize: 20,
    color: '#D3553E',
    fontWeight: 'bold',
  },
  banner:{
    marginTop: 10,
  },
  box:{
    marginTop: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350,
    height: 130,
    borderRadius: 8,    
  },
  imagem:{
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist:{
    marginTop: 10,
  },
  textGroupTitle:{
    marginLeft: 5,
    fontSize: 21,
    marginRight: 5,
    color: '#000',
  },
  textGroupPrice:{
    fontSize: 21,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    fontWeight: 'bold',
  },
  textGroupPortion:{
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    fontSize: 15,
    maxWidth: 200,
  },
});
 

