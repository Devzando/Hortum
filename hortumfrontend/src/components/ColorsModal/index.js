import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ColorsModal({ handleColor }) {
    let initialColors = [  
    { color: '#32AC71', focus: false },
    { color: '#DC5353', focus: false },
    { color: '#566E7A', focus: false },
    { color: '#307196', focus: false },
    { color: '#28CA7C', focus: false }]
    const [colors, setColors] = useState(initialColors)
    const [idColor, setIdColor] = useState(0);

    return (
        <View style={styles.container_colors}>
            {colors.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() =>{ 
                            setIdColor(index);
                            handleColor(item.color);
                        }}
                    >
                        <View style={[styles.content_colors, {backgroundColor: item.color}, 
                            idColor == index ? {borderColor: '#AC08E6', borderWidth: 2} : null]}>

                        </View>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}