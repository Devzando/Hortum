import React, { useState, useContext, useRef, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
    Animated
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import styles from './styles';

import LogoSvg from '../../assets/logoSvg.svg';
import { MyTokenContext } from '../../contexts/TokenProvider';

export default function LoginRegister() {

    const { submit } = useContext(MyTokenContext);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [visibleBorder, setVisibleBorder] = useState(true);
    const [idform, setIDForm] = useState('signin');

    const [loaded] = useFonts({
        Raleway: require('../../assets/fonts/Raleway-MediumItalic.ttf'),
    });

    useEffect(() => {
        textinputanimated();
    },[])

    const valueanimated = useRef(new Animated.Value(-500)).current;

    const textinputanimated = () => {
        Animated.timing(valueanimated, {
           toValue: 0,
           duration: 1000,
           useNativeDriver: true 
        }).start()
    }

    if (!loaded) return null;

    function handleSubmit() {
        submit(idform, name, password);
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
            keyboardVerticalOffset={500}
        >


            <ScrollView
                endFillColor='#FFFDFD'
                keyboardShouldPersistTaps='handled'
            >
                <SafeAreaView style={styles.container}>
                    <View style={styles.container_logo}>
                        <LogoSvg width={190} style={styles.logo}></LogoSvg>
                    </View>

                    <View style={styles.container_signin_signup}>
                        <View style={styles.container_text}>
                            <TouchableOpacity
                                style={[{ width: 52 }, visibleBorder ? { borderBottomWidth: 2 } : null]}
                                onPress={() => {
                                    setVisibleBorder(true);
                                    setIDForm('signin');
                                    valueanimated.setValue(-400);
                                    textinputanimated();
                                }}
                            >
                                <Text style={[styles.text, { fontFamily: 'Raleway' }]}>Entrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[{ width: 77 }, !visibleBorder ? { borderBottomWidth: 2 } : null]}
                                onPress={() => {
                                    setVisibleBorder(false);
                                    setIDForm('signup');
                                    valueanimated.setValue(-400);
                                    textinputanimated();
                                }}
                            >
                                <Text style={[styles.text, { fontFamily: 'Raleway' }]}>Registrar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container_form}>
                            <Text style={[styles.text_label_input, { fontFamily: 'Raleway' }]}>Username</Text>
                            <Animated.View style={{transform: [{translateX: valueanimated}]}}>
                                <TextInput
                                    style={[styles.input]}
                                    placeholder={'...'}
                                    placeholderTextColor={'#000'}
                                    onChangeText={text => setName(text)}
                                    value={name}
                                />
                            </Animated.View>
                            <Text style={[styles.text_label_input, { fontFamily: 'Raleway' }]}>Password</Text>
                            <Animated.View style={{transform: [{translateX: valueanimated}]}}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={'...'}
                                    placeholderTextColor={'#000'}
                                    secureTextEntry={true}
                                    onChangeText={text => setPassword(text)}
                                    value={password}
                                />
                            </Animated.View>

                        </View>


                        <View style={styles.container_send_values}>
                            <Text style={[styles.text_button, { fontFamily: 'Raleway' }]}>Enviar</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    handleSubmit();
                                }}
                                style={[styles.button, { width: 120 }]}
                            >
                                <Feather name='corner-down-right' size={54}></Feather>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView >

    )
}