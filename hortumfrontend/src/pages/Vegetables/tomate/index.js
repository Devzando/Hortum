import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import novatomate from '../../../assets/Verduras/novatomate.jpg';

import styles from './styles';

export default function Tomate() {

    const navigation = useNavigation();

    function navigateToIncidents() {
        navigation.navigate('Incidents');
    }


    return (
        <View style={styles.inicio}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow} onPress={ () => navigation.goBack()}>
                    <Feather name='arrow-left' size={30} />
                </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Hortum
                    </Text>
                    <View style={styles.vazia} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={{fontSize: 20}}>
                    Originário das Américas, o tomate é bastante nutritivo. Ele concentra licopeno, que atua como antioxidante quando consumido em molhos e extratos (que são aquecidos).
                    Mesmo sem um quintal, é possível ter lindos tomates em casa, frescos e sem agrotóxicos. O do tipo cereja se adapta bem em vasos, desde que seja possível atender alguns aspectos, como a profundidade do vaso, sendo a ideal de 45 cm para o melhor desenvolvimento da planta.
                    Nas imagens a seguir você encontra o passo a passo do plantio de tomate que pode ser feito em sua casa.
                    </Text>

                    <Text style={styles.aviso}>( É recomendado deixar as sementes secarem entre 5 e 7 dias )</Text>

                    <Image style={styles.sementes} source={novatomate} />

                </View>

            </ScrollView>

        </View>
    );
}