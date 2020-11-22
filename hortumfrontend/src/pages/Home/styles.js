import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

export default StyleSheet.create({
    container_home:{
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#D0E3CC'
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#000',
        borderRadius:20,
        borderBottomWidth: 2,
        paddingHorizontal: 15
    },

    text_header:{
        fontFamily: 'Roboto',
        fontSize: 30,
        
    },

    img_header:{
        marginBottom: 10
    },

    container_tabs:{
        paddingTop: 20,
        paddingHorizontal: 10
    },

    content_tabs:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 8,

    },

    text_content_tabs:{
        fontSize: 20,
        fontWeight: 'bold',
    },

    imgs:{
        borderRadius: 8
    }

   
});