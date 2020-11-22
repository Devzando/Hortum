import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import abacaxiImg from '../../../assets/Verduras/abacaxi.png';
import abacaxiImg2 from '../../../assets/Verduras/abacaxi2.png';
import abacaxiImg3 from '../../../assets/Verduras/abacaxi3.png';

import styles from './styles';

export default function Abacaxi() {

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
                    Quando maduro o abacaxi apresenta sabor muito ácido e muitas vezes adocicado. É rico em vitaminas C, B1, B6, ferro, magnésio e fibras.
                    O abacaxi é uma fruta típica de países tropicais e subtropicais, portanto, não se adapta em regiões de clima frio.
                    O abacaxizeiro costuma florescer na época do inverno. Uma boa forma de verificar se o abacaxi está maduro é puxando uma das folhas de sua coroa. Se a folha soltar facilmente é porque o fruto está maduro, caso contrário ele ainda está verde.
                    Nas imagens a seguir você encontra o passo a passo para o plantio do abacaxi em sua casa.
                    </Text>

                    <Image style={styles.sementes} source={abacaxiImg} />

                    <Text style={styles.aviso}>( Deixe descançar por alguns dias )</Text>

                    <Image style={styles.sementes2} source={abacaxiImg2} />

                    <Text style={styles.aviso2}>( Deixe até que as raízes apareçam )</Text>

                    <Image style={styles.sementes3} source={abacaxiImg3} />
                </View>

            </ScrollView>

        </View>
    );
}