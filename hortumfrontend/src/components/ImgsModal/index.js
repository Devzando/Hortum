import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { MyTokenContext } from '../../contexts/TokenProvider';
import { SvgUri } from 'react-native-svg';



export default function ImgsModal({ handleImg }) {
    const [Data, setData] = useState([]);
    const [idImg, setIdImg] = useState(1);
    const { setIsLoggedIn } = useContext(MyTokenContext);

    useEffect(() => {
        async function getImgs(){
            const token = await AsyncStorage.getItem('token');
            try {
                const response = await api.get('/listimagegarden',  {
                    headers:{'x-access-token': token}
                });

                setData(response.data);
            } catch (error) {
                console.log(error);
                Alert.alert(
                    'Alerta',
                    'Erro, faça login novamente',
                    [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
                  )
                await AsyncStorage.setItem('token', '');
            }

        }
        getImgs();
    }, []);

    return (
        <View style={styles.container_imgs}>
            {Data.map(item => (
                <TouchableOpacity
                    onPress={() => { 
                        setIdImg(item.id);
                        handleImg(item.id);
                    }}
                    style={idImg == item.id ? {borderColor: '#AC08E6', borderWidth: 2} : null} 
                    activeOpacity={0.8}
                    key={item.id}
                >
                    <SvgUri width={30} height={30} style={styles.img} uri={item.Image_url} />
                </TouchableOpacity>
            ))}
        </View>
    )
}