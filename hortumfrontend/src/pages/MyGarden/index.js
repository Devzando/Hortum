import React, { useState, useContext, useEffect } from 'react';
import { Text, View, FlatList, Alert, Image, Modal, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { SvgUri } from 'react-native-svg';
import styles from './styles';
import imgGarden from '../../assets/Mygarden/minhas_hortas.png';
import ImgModal from '../../components/ImgsModal';
import ColorsModal from '../../components/ColorsModal';
import ModalInformationGarden from '../../components/ModalDescriptionGarden';
import api from '../../services/api';
import { MyTokenContext } from '../../contexts/TokenProvider';

export default function MyGarden() {
  const { setIsLoggedIn } = useContext(MyTokenContext);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#32AC71');
  const [idImg, setIdImg] = useState(1);
  const [Data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalGardenVisible, setModalGardenVisble] = useState(false);
  const [newRendering, setNewRendering] = useState(false);

  async function deleteGarden(id) {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await api.delete(`/deletegarden/${id}`, {
        headers: { 'x-access-token': token }
      });

      Alert.alert(
        'Concluido',
        `${response.data.massage}`,
        [{ text: "ok", onPress: () => setNewRendering(true) }],
      )
    } catch (error) {
      Alert.alert(
        'Alerta',
        'Erro, faça login novamente',
        [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
      )
    }
  }

  function alertDelete(id) {
    Alert.alert(
      'Confirmação',
      'Tem certeza que deseja apagar essa horta?',
      [{ text: "Cancelar", style: "cancel" },
      { text: "Confirmar", onPress: () => deleteGarden(id) }],
      { cancelable: false }
    )
  }

  async function createGarden() {
    const data = { name, description, color }
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await api.post(`/creategarden/${idImg}`, data, {
        headers: { 'x-access-token': token }
      });
      setNewRendering(true);
      setModalVisible(false);
    } catch (error) {
      setModalVisible(false);
      Alert.alert(
        'Alerta',
        'Erro, faça login novamente',
        [{ text: "ok", onPress: () => setIsLoggedIn(false) }],
      )
      await AsyncStorage.setItem('token', '');
    }
  }

  useEffect(() => {
    async function indexGarden() {
      const token = await AsyncStorage.getItem('token');
      try {
        const response = await api.get('/listgarden', {
          headers: { 'x-access-token': token }
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
    indexGarden();
    setNewRendering(false);
  }, [newRendering]);

  return (
    <View style={styles.container_garden}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' size={30} />
        </TouchableOpacity>
        <Text style={styles.text_header}>Hortum</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <AntDesign name='pluscircleo' size={30} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={false}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.modal}>
          <View style={{ paddingLeft: 240 }}>
            <TouchableOpacity
              style={{ width: 30 }}
              onPress={() => setModalVisible(false)}
            >
              <AntDesign name='closecircleo' size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text_modal}>Crie e personalize uma horta</Text>

          <TextInput
            style={styles.input_modal}
            textAlignVertical={"top"}
            maxLength={15}
            value={name}
            placeholder='De um nome a sua horta'
            onChangeText={name => setName(name)}
          />

          <TextInput
            style={[styles.input_modal, { height: 100 }]}
            textAlignVertical={"top"}
            multiline={true}
            value={description}
            placeholder='Coloque uma descrição'
            onChangeText={description => setDescription(description)}
          />
          <Text style={{ fontSize: 15, marginBottom: 10 }}>Escolha uma imagem que represente sua nova horta:</Text>

          <ImgModal handleImg={(id) => setIdImg(id)} />

          <Text style={{ fontSize: 15, marginBottom: 10 }}>Escolha uma cor para sua nova horta</Text>

          <ColorsModal handleColor={(valueColor) => setColor(valueColor)} />
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <TouchableOpacity
              onPress={createGarden}
              style={styles.buttomSend}
            >
              <Text style={styles.textButtom}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ModalInformationGarden
        modalGardenVisible={modalGardenVisible}
        onCloseModal={(visible) => setModalGardenVisble(visible)}
        nameGarden={name}
        descriptionGarden={description}
      />

      <FlatList
        style={{ flex: 1 }}
        ListFooterComponent={() => (<View style={{ marginBottom: 10 }} />)}
        ListHeaderComponent={() => (
          <View style={styles.reference_Mygarden}>
            <Text style={styles.text_mygarden}>Minhas hortas</Text>
            <Image source={imgGarden} ></Image>
          </View>
        )}
        ListHeaderComponentStyle={{ marginBottom: -4 }}
        data={Data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {

          return (
            <View style={styles.container_newgarden}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setModalGardenVisble(true);
                  setDescription(item.description);
                  setName(item.name);
                }}
              >
                <View style={[styles.newgarden, { backgroundColor: item.color }]}>
                  <View style={styles.marginItens}>
                    <Text style={styles.text_newgarden}>{item.name}</Text>
                    <View>
                      <TouchableOpacity
                        style={{ width: 30 }}
                        onPress={() => alertDelete(item.id)}
                      >
                        <AntDesign name='minuscircleo' size={25} style={styles.icon} />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{ backgroundColor: '#000', borderRadius: 8 }}>
                    <SvgUri width={167} height={144} uri={item.image_url} />
                  </View>
                </View>
              </TouchableOpacity>

            </View>
          )
        }}
      />
      {Data.length == 0 ?
        <>
          <View style={{ position: 'absolute', top: 240, left: 80}}>
            <LottieView source={require('../../assets/animations/lf30_editor_vdxjjqvk.json')}
              autoPlay={true}
              loop={true}
              autoSize
              style={{ opacity: 0.7 }}
            />
          </View>
            <Text 
              style={{ fontSize: 18, opacity: 0.3, marginBottom: 210, paddingHorizontal: 60 }}
            >
              Você não possui nenhuma horta criada. Crie uma agora.
            </Text>
        </>
        : null}

    </View>
  )
}

