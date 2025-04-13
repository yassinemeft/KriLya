import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/test')  //Replace with your IP---192.168.0.20---Change this if testing on a real phone


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
    <View
      style={{ pointerEvents: 'auto' }} // Updated to use style.pointerEvents
      className={`flex-1 justify-center items-center `}
    >
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Text
          className={`text-lg font-bold `}
        >
          {message}
        </Text>
      )}
      <Text className={`mt-4 `}>
        --Yassine--
      </Text>
      <TouchableOpacity
        className="mt-4 px-4 py-2 bg-blue-500 rounded"
      >
        <Text className="text-white font-bold"> Test Button</Text>
      </TouchableOpacity>
    </View>
  );
}


