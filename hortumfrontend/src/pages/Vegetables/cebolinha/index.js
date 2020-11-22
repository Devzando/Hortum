import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import cebolinhaImg from '../../../assets/Verduras/cebolinha.png';
import cebolinhaImg2 from '../../../assets/Verduras/cebolinha2.png';

import styles from './styles';

export default function Cebolinha() {

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
                        É considerada por muitos um tempero indispensável. Com ela, as receitas ganham mais sabor, sem que isso aumente as calorias das refeições. Com presença marcante, a cebolinha também faz a diferença na nossa saúde, já que seu consumo traz benefícios ao corpo, como auxiliar no controle da pressão arterial.
                        Pensando nisso, ter cebolinha sempre fresca e presente na sua dieta é possível mesmo sem muito espaço para plantá-la em casa. Para isso, é necessário procurar um lugar onde exista luz solar diretamente. Nas ilustrações a seguir está o modo de plantio desse vegetal.
                    </Text>

                    <Image style={styles.sementes} source={cebolinhaImg} />
                    <Image style={styles.sementes2} source={cebolinhaImg2} />
                </View>

            </ScrollView>

        </View>
    );
}