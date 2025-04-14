import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { askGroq } from '@/components/groqService';

export default function SettingsScreen() {


  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const reply = await askGroq(input);
    setResponse(reply);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">Settings Page</Text>

      



      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Ask something..."
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Send to AI" onPress={handleSend} />
      <Text style={{ marginTop: 20 }}>{response}</Text>

    </View>
  );
}
