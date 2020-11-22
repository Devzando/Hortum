import { StyleSheet } from 'react-native';
import constant from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: constant.statusBarHeight + 10,
        backgroundColor: '#D0E3CC'
    },
    container_header:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderBottomWidth: 2,

    },
    text_header:{
        fontSize: 30,
    },
    container_position:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#CACBC6'
    },
    text:{
        fontSize: 16
    },
    square:{
        width: 50,
        height: 45,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_trophy:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8
    },
    score:{
        marginRight:10
    }
});