import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import acelgaImg from '../../../assets/Verduras/acelga.png';
import acelgaImg2 from '../../../assets/Verduras/acelga2.png';
import acelgaImg3 from '../../../assets/Verduras/acelga3.png';

import styles from './styles';

export default function Acelga() {

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
                    Diferentemente da alface, que deve ser consumida crua, a acelga pode ser cozida e adicionada a sopas, refogados e bolinhos. Essa hortaliça é excelente para manter a dieta, já que é rica em antioxidantes e composta de vitaminas que promovem a saúde do corpo todo.
                    Para aproveitar todos esses benefícios, a verdura também pode ser cultivada em casa, por meio do preparo de canteiros, preferencialmente na primavera ou outono, que possuem temperaturas mais amenas, entre 18ºC e 20ºC — embora também seja resistente a climas mais quentes, de até 30ºC.
                    Veja a seguir o modo de plantio da acelga.
                    </Text>

                    <Image style={styles.sementes} source={acelgaImg} />
                    <Image style={styles.sementes2} source={acelgaImg2} />
                    <Image style={styles.sementes3} source={acelgaImg3} />
                </View>

            </ScrollView>

        </View>
    );
}