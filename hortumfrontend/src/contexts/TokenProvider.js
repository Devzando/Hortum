import React, { useState, useEffect, createContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export const MyTokenContext = createContext();

function TokenProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function submit(whichform, name, password) {
        const data = { name, password };

        if (whichform == 'signin') {
            try {
                const response = await api.post('/login', data);

                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('userId', String(response.data.id));

                setIsLoggedIn(true);
                console.log('funcionou');
               
            } catch (error) {
                await AsyncStorage.setItem('token', '');
                Alert.alert("Erro ao executar a ação, tente novamente");
            }
        } else {
            try {
                const response = await api.post('/register', data);
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem('userId', String(response.data.id));

                setIsLoggedIn(true);

            } catch (error) {
                await AsyncStorage.setItem('token', '');
                Alert.alert('Erro ao executar a ação, tente novamente');
            }
        }
       
    }
   

    return (
        <MyTokenContext.Provider value={{isLoggedIn, submit, setIsLoggedIn}}>
            {children}
        </MyTokenContext.Provider>
    )
}

export default TokenProvider;