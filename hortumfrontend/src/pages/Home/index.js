import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, Animated, Alert } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { MyTokenContext } from '../../contexts/TokenProvider';

import logo from '../../assets/logo.png';
import imgGarden from '../../assets/Mygarden/minhas_hortas.png';
import imgFertilizers from '../../assets/adubos/adubos_vasos.png';
import imgVegetables from '../../assets/Verduras/verduras.png';
import imgRanking from '../../assets/ranking/hortum_ranking.png';
import imgNetworking from '../../assets/networking/hortum_networking.png';
import AsyncStorage from '@react-native-community/async-storage';


export default function Home() {
    const { setIsLoggedIn } = useContext(MyTokenContext);
    const [valueScale] = useState(new Animated.Value(0));
    const [valueScale2] = useState(new Animated.Value(1));

    useEffect(()=>{
        scaleAniamtion();
    }, []);

    let Data = [
        {
            img: imgGarden,
            name: 'Minhas hortas',
            id: '1',
            newBackgroundColor: '#32AC71',
        },

        {
            img: imgFertilizers,
            name: 'Vasos e adubos',
            id: '2',
            newBackgroundColor: '#307196',
        },

        {
            img: imgVegetables,
            name: "Verduras",
            id: '3',
            newBackgroundColor: '#566E7A',
        },

        {
            img: imgNetworking,
            name: "Networking",
            id: '4',
            newBackgroundColor: '#94AAB5',
        },

        {
            img: imgRanking,
            name: "Ranking",
            id: '5',
            newBackgroundColor: '#3FAB9E',
        },

    ]

    const navigation = useNavigation();
    function navigateToTabs(id) {
        if (id === '1') navigation.navigate('MyGarden');
        if (id === '2') navigation.navigate('Fertilizers');
        if (id === '3') navigation.navigate('Vegetables');
        if (id === '4') navigation.navigate('HortumNetworking');
        if (id === '5') navigation.navigate('Ranking');
    }

    const scaleAniamtion = () => {
        Animated.spring(valueScale, {
            toValue: 1,
            friction: 3,
            velocity: 8,
            useNativeDriver: true
        }).start()
    }

     function logout(){
        Alert.alert(
            'confirmação',
            'Tem certeza que deseja sair da sua conta atual?',
            [{text: 'cancelar', style: 'cancel'},
            {text: 'confirmar', onPress: async () => {
                await AsyncStorage.setItem('token', '');
                setIsLoggedIn(false); 
            }}]
        );
            
    }

    return (
        <View style={styles.container_home}>
            <View style={styles.header}>
                <TouchableOpacity onPress={logout}>
                    <SimpleLineIcons  name='logout' size={30} />
                </TouchableOpacity>
                <Text style={styles.text_header}>Hortum</Text>
                <Image source={logo} style={styles.img_header}></Image>
            </View>

            
                <FlatList
                    style={styles.container_tabs}
                    ListFooterComponent={() => (<View style={{ marginBottom: 20 }} />)}
                    data={Data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigateToTabs(item.id)}
                                activeOpacity={0.8}
                            >
                                <Animated.View style={[styles.content_tabs, { backgroundColor: item.newBackgroundColor, transform: [{ scale: valueScale }] }]}>
                                    <Text style={styles.text_content_tabs}>{item.name}</Text>
                                    <Image source={item.img} style={styles.imgs}></Image>
                                </Animated.View>

                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
    );
}
