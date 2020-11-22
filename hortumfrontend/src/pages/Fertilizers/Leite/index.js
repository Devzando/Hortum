import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Leite( ) {

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
                <Text style={styles.title}>Adubo com leite</Text>
                <Text style={styles.incidentValue}>Rico em cálcio, o leite é fundamental para a manutenção da fisiologia das plantas, além de ajudar na realização da fotossíntese.</Text>
                <Text>       



                </Text>
                <Text style={styles.incidentProperty}>Modo de preparo: </Text>
                <Text style={styles.incidentValue}>Só é necessário lavar as embalagens de leite e reservar o líquido resultante em um regador.</Text>
                <Text>       

                           
                                   
                                             
                    
                </Text>
                <Text style={styles.incidentProperty}>Aplicação:</Text>
                <Text style={styles.incidentValue}>O líquido deve ser usado para regar as plantas, e é importante destacar que não deve permanecer armazenado por mais de 24h.</Text>

            </View>
        </View>
    )
}