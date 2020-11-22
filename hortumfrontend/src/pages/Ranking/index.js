import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Alert } from 'react-native';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MyTokenContext } from '../../contexts/TokenProvider';

import styles from './styles';
import imgbacground from '../../assets/bacgroud_plantas.png';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

export default function Ranking() {
    const navigation = useNavigation();
    const { setIsLoggedIn } = useContext(MyTokenContext);

    const [Data, setData] = useState([]);
    const [page, setpage] = useState(1);
    const [total, setTotal] = useState(0);

    async function loadRanking() {
        if (total && page > total || page > 10) return;

        const token = await AsyncStorage.getItem('token');

        try {
            const response = await api.get(`/listranking?page=${page}`, {
                headers: { 'x-access-token': token }
            });

            setData([...Data, ...response.data.result]);
            setTotal(Number(response.data.numberPage));

        } catch (error) {
            console.log(error);
            Alert.alert(
                'Alerta',
                'Erro, faça login novamente',
                [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
            )
            await AsyncStorage.setItem('token', '');
        }
        setpage(page + 1);
    }

    useEffect(() => {
        loadRanking();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Feather name='arrow-left' size={30} />
                </TouchableOpacity>

                <Text style={styles.text_header}>Hortum</Text>

                <FontAwesome name='leaf' size={30} color='green' />
            </View>

            <FlatList
                style={{ paddingHorizontal: 20 }}
                data={Data}
                keyExtractor={(item) => String(item.id)}
                onEndReached={loadRanking}
                onEndReachedThreshold={0.1}
                renderItem={({ item, index }) => {
                    return (
                    <View style={styles.container_position}>
                        <View style={[styles.square, 
                            index == 0 ? {backgroundColor: '#FFE900' } : null,
                            index == 1 ? {backgroundColor: '#7F443D' } : null,
                            index == 2 ? {backgroundColor: '#DBDFE0' } : null 
                            ]}>
                            <Text style={{ fontSize: 30 }}> {index + 1} </Text>
                        </View>

                        <View>
                            <Text style={styles.text}>Usuário: {item.name} </Text>
                        </View>

                        <View style={styles.container_trophy}>
                            <Text style={styles.score}> Pontuação: {item.like} </Text>
                            <AntDesign name='Trophy' size={30} />
                        </View>
                    </View>
                )}}
            />
        </View>
    )
}
