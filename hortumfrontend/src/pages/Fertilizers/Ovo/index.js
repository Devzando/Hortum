import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

export default function Ovo( ) {

    const { goBack } = useNavigation();

    function handleGoBack () {
        goBack();
    }

    return (
        <View style={styles.container}>
                  <View style={styles.header}>
                    <TouchableOpacity style={styles.arrow} onPress={handleGoBack}>
                        <Feather name='arrow-left' size={30} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Hortum
                    </Text>
                    <View style={styles.vazia} />
             </View>

            <View style={styles.incident}>
                <Text style={styles.title}>Adubo com casca de ovo</Text>
                <Text style={styles.incidentValue}>A casca do ovo é rica em cálcio, potássio e magnésio, a casca de ovo é um composto extremamente nutritivo para as plantas, e pode ser aplicado diretamente nos vasos ou em contato com outro composto.</Text>
                <Text>       



                </Text>
                <Text style={styles.incidentProperty}>Modo de preparo: </Text>
                <Text style={styles.incidentValue}>Juntar cascas de ovo, deixa-las secar à sombra e em seguida moer no liquidificador, resultando em uma farinha fininha.</Text>
                <Text>       

                           
                                   
                                             
                    
                </Text>
                <Text style={styles.incidentProperty}>Aplicação:</Text>
                <Text style={styles.incidentValue}>Uma colher de sopa por canteiro, ou uma colher de café por vaso; deve ser feita a cada 40 dias, e conservado em um pote de vidro com tampa em lugar fresco.</Text>

            </View>
        </View>
    )
}