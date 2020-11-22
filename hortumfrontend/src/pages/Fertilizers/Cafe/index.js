import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Cafe( ) {

    const { goBack } = useNavigation();

    function handleGoBack () {
        goBack();
    }

    return (
        <View style={styles.container}>
                  <View style={styles.header}>
                    <TouchableOpacity style={styles.arrow} onPress={ handleGoBack}>
                        <Feather name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Hortum
                    </Text>
                    <View style={styles.vazia} />
             </View>

            <View style={styles.incident}>
                <Text style={styles.title}>Adubo com pó de café</Text>
                <Text style={styles.incidentValue}>O café é uma excelente fonte de azoto, as borras de café podem ser aplicadas diretamente na planta, ou pode ser usada para fabricação de um fertilizante líquido. No entanto, o principal benefício no uso de cafeína é que ela afasta as pragas das hortas.</Text>
                <Text>       



                </Text>
                <Text style={styles.incidentProperty}>Modo de preparo: </Text>
                <Text style={styles.incidentValue}>Colocar o pó moído de café em um recipiente, seguindo as proporções de 250g para 10L de água. Misturar e deixar de repouso por 24h. Ao fim, só basta coar a mistura e armazená-la em um pulverizador.</Text>
                <Text>       

                           
                                   
                                             
                    
                </Text>
                <Text style={styles.incidentProperty}>Aplicação:</Text>
                <Text style={styles.incidentValue}>Com o pulverizador, só é preciso borrifar nas plantas com uma certa frequência (3-5 vezes na semana).</Text>

            </View>
        </View>
    )
}