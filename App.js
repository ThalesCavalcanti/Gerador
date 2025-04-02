import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  const [size, setSize] = useState(10);
  
  let charsets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  const generatePassword = ()=>{
    let password = '';
    for(let i = 0, n = charsets.length; i< size; i++){
      password += charsets.charAt(Math.floor(Math.random() * n));
    }
    console.log(password);
  }
  return (
    <View style={styles.container}>

      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          thumbTintColor='392de9'
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3FF",
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 60,
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8},

  button: {
    backgroundColor: '#392de9',
    color: '#FFF',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    },

    buttonText: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold',
    },

    title:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#000',
    }
});
