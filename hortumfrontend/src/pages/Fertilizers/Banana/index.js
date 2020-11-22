import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Banana() {

    const { goBack } = useNavigation();

    function handleGoBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.arrow} onPress={handleGoBack} >
                    <Feather name='arrow-left' size={30} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Hortum
                    </Text>
                <View style={styles.vazia} />
            </View>
            <ScrollView>

                <View style={styles.incident}>
                    <Text style={styles.title}>Adubo com cascas de banana</Text>
                    <Text style={styles.incidentValue}> A banana é rica em potássio, cálcio e magnésio, e ajuda a repor os nutrientes da terra. Assim, o adubo com a casca da banana facilita a clorofila, auxilia a manutenção das plantas e a sua nutrição.</Text>
                    <Text>



                    </Text>
                    <Text style={styles.incidentProperty}>Modo de preparo: </Text>
                    <Text style={styles.incidentValue}>Para produzir o adubo, é necessário cascas de 5 bananas, aproximadamente 1,5L de água, garrafa (cap. 1L) e uma panela. Inicialmente, as cascas devem ser cortadas em pequenos pedaços e levadas ao fogo com 1 litro de água, deixando ferver por 15 minutos. Depois disso, é preciso deixar esfriar e coar, aproveitando para repor a água que evaporou durante o processo.</Text>
                    <Text>





                    </Text>
                    <Text style={styles.incidentProperty}>Aplicação:</Text>
                    <Text style={styles.incidentValue}>O armazenamento deve ser feito na própria garrafa de vidro, e para aplicar, basta colocar os resíduos direto na composteira ou misturar na terra, devendo ser regada uma vez por semana com a mistura.</Text>

                </View>
            </ScrollView>
        </View>
    )
}