import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

export default StyleSheet.create({
    container_garden: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#D0E3CC'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
    },

    text_header: {
        fontSize: 30
    },

    reference_Mygarden: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#32AC71',
    },

    text_mygarden: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },

    container_newgarden: {
        position: 'relative',
        paddingHorizontal: 10,
    },

    newgarden: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8, 
        marginTop: 20,
        elevation: 4
    },

    marginItens: {
        paddingLeft: 10,
        
    },

    text_newgarden: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 10,
        width: 140,
        height: 30,
        marginBottom: 50
    },

    icon: {
        position: 'relative',
        left: 2,
        top: 10
    },

    modal: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        elevation: 5
    },

    text_modal: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:20
    },

    input_modal: {
        borderRadius: 5, 
        borderWidth: 1, 
        paddingLeft: 8, 
        opacity:0.5, 
        height: 32,
        marginBottom: 10
    },

    buttomSend:{
        width: 250,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#32AC71',
    },
    textButtom:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});
