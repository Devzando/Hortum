import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import novopimentao from '../../../assets/Verduras/novopimentao.jpg';

import styles from './styles';

export default function Pimentao() {

    const navigation = useNavigation();

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
                        As receitas ganham um colorido especial com pimentões verdes, vermelhos ou amarelos. De sabor característico, levemente adocicado, trata-se de um excelente alimento para a saúde, pois possui elevada quantidade de vitamina C, que pode reduzir a gravidade de resfriados ou até mesmo prevenir câncer de cólon.
                        Ter essa planta em casa garante um alimentação saudável, orgânica e funciona até mesmo como decoração para os ambientes. O pimentão se adapta a climas quentes, mas a temperatura ideal é de 20 °C a 25 °C. Os frutos crescem em tamanho reduzido acima dos 30 ºC.
                        É indicado posicionar o vaso em uma área com luz solar direta. O pé de pimentão deve receber água sempre que possível, com o cuidado de não encharcar o solo. A seguir, o passo a passo para o cultivo do pimentão em casa.
                    </Text>

                    <Image style={styles.sementes} source={novopimentao} />
                </View>

            </ScrollView>

        </View>
    );
}