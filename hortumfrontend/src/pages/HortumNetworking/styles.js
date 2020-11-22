import { StyleSheet } from 'react-native';
import constant  from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: constant.statusBarHeight + 10,
        backgroundColor: '#D0E3CC'
    },
    container_header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
    },
    header_text:{
        fontSize: 30
    },
    container_postImage:{
     paddingHorizontal: 10,
     marginTop: 10
    },
    container_image:{
        
    },
    image:{
        width: '100%',
        aspectRatio: 1.007462686567164,
        borderRadius: 5,
    },
    container_texts:{
       backgroundColor: '#FEFEFE',
       borderRadius: 8,
       marginTop: 5,
       paddingHorizontal: 5, 
    },
    space_text:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10
    },
    text:{
        fontSize: 15
    },

    modal:{
        margin: 20,
        marginTop: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        elevation: 5,
       
    },

    input_modal:{
        borderRadius: 5, 
        borderWidth: 1, 
        paddingLeft: 8, 
        opacity:0.5, 
        height: 32,
        marginBottom: 10
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32AC71',
        width: 240,
        height: 40,
        borderRadius: 5
    },
    text_button:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})