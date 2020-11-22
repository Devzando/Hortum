import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigateToPimentão() {
        navigation.navigate('Vegetables_pimentao');
    }
    function navigateToTomate() {
        navigation.navigate('Vegetables_tomate');
    }
    function navigateToAbacaxi() {
        navigation.navigate('Vegetables_abacaxi');
    }
    function navigateToVagem() {
        navigation.navigate('Vegetables_vagem');
    }
    function navigateToAlface() {
        navigation.navigate('Vegetables_alface');
    }
    function navigateToAcelga() {
        navigation.navigate('Vegetables_acelga');
    }
    function navigateToCebolinha() {
        navigation.navigate('Vegetables_cebolinha');
    }
    function navigateToCoentro() {
        navigation.navigate('Vegetables_coentro');
    }

    return (
        <View style={styles.inicio}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()} >
                    <Feather name='arrow-left' size={30} />
                </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Hortum
                    </Text>
                    <View style={styles.vazia} />
            </View>

            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                
                    <View style={styles.buttons}>
                        <TouchableOpacity 
                        style={styles.button} 
                        onPress={navigateToPimentão}
                        >
                            <Text style={styles.buttonText}>PIMENTÃO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button2} 
                        onPress={navigateToTomate}
                        >
                            <Text style={styles.buttonText2}>TOMATE</Text>
                        </TouchableOpacity>


                        <TouchableOpacity 
                        style={styles.button3} 
                        onPress={navigateToAbacaxi}
                        >
                            <Text style={styles.buttonText3}>ABACAXI</Text>
                        </TouchableOpacity>


                        <TouchableOpacity 
                        style={styles.button4} 
                        onPress={navigateToVagem}
                        >
                            <Text style={styles.buttonText4}>VAGEM</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button5} 
                        onPress={navigateToAlface}
                        >
                            <Text style={styles.buttonText5}>ALFACE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button6} 
                        onPress={navigateToAcelga}
                        >
                            <Text style={styles.buttonText6}>ACELGA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button7} 
                        onPress={navigateToCebolinha}
                        >
                            <Text style={styles.buttonText7}>CEBOLINHA</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.button8} 
                        onPress={navigateToCoentro}
                        >
                            <Text style={styles.buttonText8}>COENTRO</Text>
                        </TouchableOpacity>

                        <View style={{marginBottom: 8}} />

                    </View>
            </ScrollView>
        </View>
    );
}