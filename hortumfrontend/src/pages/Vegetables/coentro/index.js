import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import coentroImg from '../../../assets/Verduras/coentro.png';
import coentroImg2 from '../../../assets/Verduras/coentro2.png';
import coentroImg3 from '../../../assets/Verduras/coentro3.png';

import styles from './styles';

export default function Coentro() {

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
                        É rico em vitaminas A, C e K e é uma excelente fonte de fibras.
                        Adicioná-lo à sua comida em uma base diária pode ajudar seu estômago, fígado e intestinos a funcionar no seu melhor.
                        Coentro possui muito ferro. De fato, a cada 100 gramas, 91% de sua dose diária recomendada de ferro. Também é rico em magnésio e cálcio, o que significa que é uma ótima maneira de ajudar seu corpo se você estiver anêmico ou deficiente em qualquer um desses minerais.
                        O Coentro pode ser cultivado durante o ano todo, crescendo facilmente em pequenos vasos dentro ou fora de casa, mas sempre em locais que recebam bastante luz do sol.
                    </Text>

                    <Image style={styles.sementes} source={coentroImg} />
                    <Image style={styles.sementes2} source={coentroImg2} />
                    <Image style={styles.sementes3} source={coentroImg3} />
                </View>

            </ScrollView>

        </View>
    );
}