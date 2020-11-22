import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
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

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 16,
  },

  title:{ 
   fontSize: 25,
   textAlign: 'center',
   fontWeight: 'bold',
  },

  incidentProperty:{
     fontSize: 20,
     color: '#41414d',
     fontWeight: 'bold'
  },

  incidentValue:{
    marginTop: 8,
    fontSize: 18,
    marginBottom: 24,
    color: '#737380'
  }

})
