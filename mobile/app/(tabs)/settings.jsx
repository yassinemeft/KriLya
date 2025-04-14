import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, KeyboardAvoidingView } from 'react-native';
import { askGroq } from '@/components/groqService';

export default function SettingsScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = await askGroq(input);
    const aiMessage = { role: 'ai', content: reply };
    setMessages((prev) => [...prev, aiMessage]);

    setInput('');
  };

  const renderMessage = ({ item }) => (
    <View
      className={`p-3 my-2 rounded ${
        item.role === 'user' ? 'bg-blue-500 self-end' : 'bg-gray-300 self-start'
      }`}
    >
      <Text className={`${item.role === 'user' ? 'text-white' : 'text-black'}`}>
        {item.content}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView className="flex-1 bg-gray-100" behavior="padding">
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ padding: 10 }}
      />
      <View className="flex-row items-center p-4 border-t border-gray-300 bg-white">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-4 py-2 mr-2"
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
}
