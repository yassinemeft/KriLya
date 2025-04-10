import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function HomeScreen() {

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://192.168.0.107:8000/api/test')  //Replace with your IP---192.168.0.20---Change this if testing on a real phone
      .then(response => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setMessage('Failed to connect to Laravel, Yassine');
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text style={styles.text}>{message}</Text>}
      <Text>--Yassine-<HelloWave />-</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
