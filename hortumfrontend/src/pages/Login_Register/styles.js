import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00FF7F',
    },

    container_logo:{
        left: 90,
        top: 55,
        zIndex: 2,
        position: 'absolute',
    },

    container_signin_signup:{
        marginTop: 250,
        backgroundColor: '#FFFDFD',
        borderTopLeftRadius: 40,
        height: '100%',
        borderTopRightRadius: 40,
        
    },

    container_text:{
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
    },

    text:{
        fontSize: 20,
        fontWeight: '600',
        width: 85,
        marginTop: 30
    },
    container_form:{
        paddingHorizontal: 20,
        marginTop: 30,
    },

    input:{
        borderRadius: 5, 
        borderWidth: 1, 
        paddingLeft: 8, 
        opacity:0.5, 
        height: 40,
        marginBottom: 12,
    },

    text_label_input:{
        fontSize: 16,
        marginBottom: 10
    },

    container_send_values:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 60,
        marginTop: 40
    },

    text_button:{
        fontSize: 35,
        fontWeight: '600'
    },

    button:{
        backgroundColor: '#00FF7F',
        borderRadius: 18,
        alignItems: 'center',
        width: 120
        
    },
})    