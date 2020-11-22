import React from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function ModalGarden({ modalGardenVisible, onCloseModal, nameGarden, descriptionGarden }) {
    return (
        <Modal
            transparent={true}
            visible={modalGardenVisible}
            statusBarTranslucent={false}
            onRequestClose={() => {
                onCloseModal(false)
            }}
        >
            <View style={styles.modal}>
                <ScrollView

                >
                    <View style={{ paddingLeft: 240 }}>
                        <TouchableOpacity
                            style={{ width: 30 }}
                            onPress={() => onCloseModal(false)}
                        >
                            <AntDesign name='closecircleo' size={30} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 30, marginBottom: 10, marginTop: 20 }}>Informações desta horta:</Text>
                    <Text style={styles.text}>Nome: {nameGarden} </Text>
                    <Text style={styles.text}>Descrição: {descriptionGarden} </Text>

                </ScrollView>
            </View>
        </Modal>

    )
}