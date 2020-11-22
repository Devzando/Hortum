import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Modal, TextInput, KeyboardAvoidingView, ScrollView, Alert, ColorPropType } from 'react-native';
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import { MyTokenContext } from '../../contexts/TokenProvider';
import styles from './styles';

export default function HortumNetworking() {
    const [image, setImage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [Data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [Id, setId] = useState([0]);
    const [colorVisible, setColorVisisble] = useState([]);
    const navigation = useNavigation();
    const { setIsLoggedIn } = useContext(MyTokenContext);

    async function getPhoto() {
        const result = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            quality: 1,
            exif: true

        });
        if (!result.cancelled) {
            setImage(result);
            setModalVisible(true);
        }
    }

    async function submit() {
        let formdata = new FormData();

        formdata.append('name', name);
        formdata.append('description', description);
        formdata.append('heigth', image.height);
        formdata.append('width', image.width);
        formdata.append('file', {
            uri: image.uri,
            name: image.uri.split('/').pop(),
            type: `image/${image.uri.split('.').pop()}`
        });

        const token = await AsyncStorage.getItem('token');
        try {
            const response = await api.post("/sendimage", formdata, {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setData([...Data, response.data]);
            setModalVisible(false);
        } catch (error) {
            console.log(error);
            setModalVisible(false);
            Alert.alert(
                'Alerta',
                'Erro, faça login novamente',
                [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
            );
            await AsyncStorage.setItem('token', '');
        }
    }

    async function loadPost() {
        if (total && page > total) return;

        const token = await AsyncStorage.getItem('token');

        try {
            const response = await api.get(`/indeximage?page=${page}`, {
                headers: { 'x-access-token': token }
            });

            setTotal(Number(response.data.numberPage));
            setData([...Data, ...response.data.result]);
        } catch (error) {
            console.log(error);
            Alert.alert(
                'Alerta',
                'Erro, faça login novamente',
                [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
            )
            await AsyncStorage.setItem('token', '');
        }
        setPage(page + 1);
    }

    async function likePost(id, likePost) {
        const token = await AsyncStorage.getItem('token');
        let postLike=0;
        isNaN(likePost) ? postLike=0 : postLike = likePost; 
        
        const testeArray = Id.filter((value) => {
            return value == id;
        });

        (testeArray.length + 1) % 2 == 1 ? postLike += 1 : postLike;

        try {

            await api.put(`/likeimage/${id}`, { postLike }, {
                headers: { 'x-access-token': token }
            })

        } catch (error) {
            console.log(error)
            Alert.alert(
                'Alerta',
                'Erro, faça login novamente',
                [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
            )
            await AsyncStorage.setItem('token', '');
        }

    }

    function removeColor(id) {
        const itensArray = colorVisible.filter((value) => {
            return value != id;
        });

        colorVisible.includes(id) ? setColorVisisble([...itensArray])
            : setColorVisisble([...colorVisible, id]);
    }

    useEffect(() => {
        loadPost();
    }, []);

    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                statusBarTranslucent={false}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                >
                    <View style={styles.modal}>
                        <View style={{ paddingLeft: 260, marginBottom: 20, marginTop: -20 }}>
                            <TouchableOpacity
                                style={{ width: 30 }}
                                onPress={() => setModalVisible(false)}
                            >
                                <AntDesign name='closecircleo' size={30} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
                            <Image style={[styles.image, { marginBottom: 10 }]} source={{ uri: image.uri }} />
                            <TextInput
                                style={styles.input_modal}
                                placeholder='Informe um nome para sua imagem'
                                value={name}
                                onChangeText={name => setName(name)}
                            />
                            <TextInput
                                style={[styles.input_modal, { height: 150 }]}
                                textAlignVertical={'top'}
                                multiline={true}
                                placeholder='Informe uma descrição para sua imagem'
                                value={description}
                                onChangeText={description => setDescription(description)}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={submit}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.text_button}>Concluido</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            <View style={styles.container_header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Feather name='arrow-left' size={30} />
                </TouchableOpacity>
                <Text style={styles.header_text}>Hortum</Text>
                <TouchableOpacity
                    onPress={getPhoto}
                >
                    <MaterialCommunityIcons name='camera-plus-outline' size={30} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={{ flex: 1 }}
                ListFooterComponent={() => (<View style={{ marginBottom: 10 }} />)}
                onEndReached={loadPost}
                onEndReachedThreshold={0.1}
                data={Data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <View style={styles.container_postImage}>
                        <Image style={{ aspectRatio: item.aspect, width: '100%', borderRadius: 5 }}
                            source={{ uri: item.image_url }}
                        />
                        <View style={styles.container_texts}>
                            <View style={styles.space_text}>
                                <Text style={styles.text}>{item.name}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        removeColor(item.id);
                                        setId([...Id, item.id]);
                                        likePost(item.id, item.like);
                                    }}
                                >
                                    <AntDesign style={{ marginRight: 5 },
                                        colorVisible.includes(item.id) ? { color: '#00FF00' } : null}
                                        name="like2" size={30} color='black'
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text}> {item.description} </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}