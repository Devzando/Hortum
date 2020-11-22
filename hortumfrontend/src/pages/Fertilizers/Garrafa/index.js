import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Garrafa( ) {

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
                <Text style={styles.title}>Vasos com garrafas PET</Text>
                <Text style={styles.incidentValue}>Apesar de já ser um dos queridinhos da produção de hortas, não são todos que sabem dos benefícios do uso das garrafas pet nas suas decorações. Com ela, é possível criar jardins verticais ou suspensos, utilizando pouco espaço. É importante ressaltar que as garrafas devem ter pequenos furos para drenar a água.</Text>
            </View>
        </View>
    )
}