import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Sapatos() {

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
  <Text style={styles.title}>Vasos com sapatos</Text>
  <Text style={styles.incidentValue}>Sobretudo aqueles de borracha, as sapatilhas ou sapatos em geral podem ter uma segunda função depois de terem sido descartados. O cultivo de plantas e vegetais dentro desses objetos pode até mesmo dar um aspecto mais harmônico para a horta.</Text>
</View>
</View>
  );
}