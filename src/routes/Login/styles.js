import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  textInput: {
    minWidth: 300,
    minHeight: 50,
    padding: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  button: {
    backgroundColor: '#467ac9',
    minWidth: 300,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 5,
  },
  textInButton: {
    color: 'white',
    fontWeight: 'bold'
  }

});