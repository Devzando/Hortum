import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 15,
      backgroundColor: '#D0E3CC',
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
      marginBottom: 3,
  },

  title: {
    fontSize: 30,
  },

  button: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#008B8B',
    marginTop: 30,
    marginBottom: 8,
    textAlign: 'center',
},

button2: {
  padding: 24,
  borderRadius: 8,
  backgroundColor: '#008B8B',
  marginTop: 30,
  marginBottom: 50,
  textAlign: 'center',
},

buttonText: {
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
},

})