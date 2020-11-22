import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Pneus() {

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
  <Text style={styles.title}>Vasos com pneus</Text>
  <Text style={styles.incidentValue}>Além da pintura, os pneus podem ser cortados e usados de diferentes tamanhos e formatos. É ideal para hortas cultivadas em espaços pequenos, visto que pode ser adaptado às melhores condições do ambiente.</Text>
</View>
</View>
  );
}