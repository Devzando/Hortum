import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

import Fertilizers_garrafa from './Garrafa';
import Fertilizers_latas from './Latas';
import Fertilizers_paletes from './Paletes';
import Fertilizers_pneus from './Pneus';
import Fertilizers_sapatos from './Sapatos';
import Fertilizers_banana from './Banana';
import Fertilizers_cafe from './Cafe';
import Fertilizers_cenoura from './Cenoura';
import Fertilizers_leite from './Leite';
import Fertilizers_ovo from './Ovo';



export default function Fertilizers() {
const navigation = useNavigation();

function navigateToBanana(){
    navigation.navigate('Fertilizers_banana');
}

function navigateToCafe(){
    navigation.navigate('Fertilizers_cafe');
}

function navigateToCenoura(){
    navigation.navigate('Fertilizers_cenoura');
}

function navigateToLeite(){
    navigation.navigate('Fertilizers_leite');
}

function navigateToOvo(){
    navigation.navigate('Fertilizers_ovo');
}

function navigateToGarrafa(){
    navigation.navigate('Fertilizers_garrafa');
}

function navigateToLatas(){
    navigation.navigate('Fertilizers_latas');
}

function navigateToPaletes(){
    navigation.navigate('Fertilizers_paletes');
}

function navigateToPneus(){
    navigation.navigate('Fertilizers_pneus');
}

function navigateToSapatos(){
    navigation.navigate('Fertilizers_sapatos');
}



    return (
    <View style={styles.container}>
      
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
                    <Text style={styles.title}>Adubos:</Text>
               
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToBanana}
                        >
                            <Text style={styles.buttonText}>Cascas de banana</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToCafe}
                        >
                            <Text style={styles.buttonText}>Pó de café</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToCenoura}
                        >
                            <Text style={styles.buttonText}>Restos de cenoura</Text>
                        </TouchableOpacity>
       
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToLeite}
                        >
                            <Text style={styles.buttonText}>Leite</Text>
                        </TouchableOpacity>
       
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToOvo}
                        >
                            <Text style={styles.buttonText}>Casca de ovos</Text>
                        </TouchableOpacity>

                    <Text style={styles.title}>Vasos:</Text>
        
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToGarrafa}
                        >
                            <Text style={styles.buttonText}>Garrafa PET</Text>
                        </TouchableOpacity>
       
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToLatas}>
                            <Text style={styles.buttonText}>Latas de metal ou alumínio</Text>
                        </TouchableOpacity>
       
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={navigateToPaletes}
                        >
                            <Text style={styles.buttonText}>Paletes de madeira</Text>
                        </TouchableOpacity>
       
                        <TouchableOpacity 
                            style={styles.button}
                            onPress={navigateToPneus} 
                            >
                            <Text style={styles.buttonText}>Pneus</Text>
                        </TouchableOpacity>
        
                        <TouchableOpacity 
                            style={styles.button2} 
                            onPress={navigateToSapatos}
                        >
                            <Text style={styles.buttonText}>Sapatos</Text>
                        </TouchableOpacity>

                </View>

        </ScrollView>
    </View>
    );
  }