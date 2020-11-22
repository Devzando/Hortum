import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Paletes() {

  const { goBack } = useNavigation();

    function handleGoBack () {
        goBack();
    }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.arrow} onPress={handleGoBack} >
          <Feather name='arrow-left' size={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}>
          Hortum
      </Text>
      <View style={styles.vazia} />
</View>

<View style={styles.incident}>
  <Text style={styles.title}>Vasos com paletes de madeira</Text>
  <Text style={styles.incidentValue}>Para as hortas ou jardins verticais, são uma opção excelente. Além disso, são de fácil manuseio e de baixo custo, comparado com alguns outros materiais. Mas é preciso ficar atento ao tipo de alimento que vai ser cultivado nessa instância, visto que muitas vezes acaba por não oferecer a iluminação e o espaço necessários.</Text>
</View>
</View>
  );
}