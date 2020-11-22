import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    inicio: {
        backgroundColor: '#D0E3CC',
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 15,
    },

    header: {
        borderBottomWidth: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerText: {
        fontSize: 30,
        color: '#1C1C1C',
        textAlign: 'center',
        marginRight: 38,
    },

    container: {
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#F8F8FF',
    },

    sementes: {
        marginTop: 15,
        width: 280,
        height: 280,
    },

    sementes2: {
        marginTop: 15,
        width: 280,
        height: 280,    
    },

    sementes3: {
        marginTop: 15,
        width: 280,
        height: 280,    
    },
});