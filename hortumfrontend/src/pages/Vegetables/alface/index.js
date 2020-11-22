import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import alfaceImg from '../../../assets/Verduras/alface.png';
import alfaceImg2 from '../../../assets/Verduras/alface2.png';
import alfaceImg3 from '../../../assets/Verduras/alface3.png';

import styles from './styles';

export default function Alface() {

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
                        A alface é rica em vitaminas, como cálcio e ferro. Além disso, possui propriedades calmantes que, se ingeridas à noite, ajudam a dormir melhor.
                        Segundo a Anvisa, a hortaliça é um dos alimentos mais contaminados por agrotóxicos no Brasil. Diante disso, plantá-la em casa torna-se ainda mais atrativo e seguro. E mesmo em pouco espaço é possível ter a verdura sempre fresca e assim aproveitar todos os seus benefícios nutricionais.
                        Para isso, escolha a varanda ou locais próximos a janelas para que a planta possa se desenvolver em um espaço arejado e tenha contato com o sol. O recipiente para cultivá-la deve possuir um palmo de profundidade e orifícios para drenar a água. Acompanhe a seguir como produzir alface em casa. 
                    </Text>

                    <Image style={styles.sementes} source={alfaceImg} />
                    <Image style={styles.sementes2} source={alfaceImg2} />

                    <Text style={styles.aviso}>( Deixe no copo por 7 dias e depois transfira a muda para o vaso )</Text>

                    <Image style={styles.sementes3} source={alfaceImg3} />

                    <Text style={styles.aviso2}>( conforme mostrado na imagem acima, esta forma de plantio também pode ser usada para a cebola, manjericão e aipo )</Text>

                </View>

            </ScrollView>

        </View>
    );
}