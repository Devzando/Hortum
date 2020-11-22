import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Latas( ) {

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
                <Text style={styles.title}>Vasos com latas de alumínio/metal</Text>
                <Text style={styles.incidentValue}>Um material facilmente encontrado nas residências e que pode ser facilmente usado e confeccionado. Ideal para o cultivo de pequenas folhas e flores, como é o caso do coentro e das margaridas. Em seu caso, os furos para drenagem da água são necessários.</Text>
            </View>
        </View>
    )
}