import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import vagemImg from '../../../assets/Verduras/vagem.png';
import vagemImg2 from '../../../assets/Verduras/vagem2.png';
import vagemImg3 from '../../../assets/Verduras/vagem3.png';

import styles from './styles';

export default function Vagem() {

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
                        Fruto verde do feijão, a vagem é versátil para ser incorporada a receitas com preparos quentes ou frios. Por ser rica em ácido fólico, traz muitos benefícios para o pleno desenvolvimento do bebê na gestação. Sem contar que seu consumo previne até mesmo certos tipos de cânceres, como o de cólon (maior parte do intestino grosso).
                        Essa planta também pode fazer parte da horta em sua casa, desde que seja possível colocá-la em um ambiente em que bata sol diretamente. É necessário checar ainda se a vagem é do tipo que cresce horizontalmente formando arbustos, ou verticalmente, sendo necessário colocar uma cerca de arame ao redor da área do plantio. Confira como produzir feijão-vagem em vasos, seguindo as recomendações das figuras abaixo.
                    </Text>

                    <Image style={styles.sementes} source={vagemImg} />
                    <Image style={styles.sementes2} source={vagemImg2} />

                    <Text style={styles.aviso}>( Indica-se colocar no máximo 2 sementes do feijão-vagem para cada vaso )</Text>

                    <Image style={styles.sementes3} source={vagemImg3} />
                </View>

            </ScrollView>

        </View>
    );
}