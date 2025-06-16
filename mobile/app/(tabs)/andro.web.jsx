import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { askGroq } from "@/components/groqService";

export default function WebChatCard() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = await askGroq(input);
    const aiMessage = { role: "ai", content: reply };
    setMessages((prev) => [...prev, aiMessage]);

    setInput("");
  };

  const renderMessage = ({ item }) => (
    <View
      className={`p-3 my-2 rounded max-w-[90%] ${
        item.role === "user"
          ? "bg-green-600 self-end"
          : "bg-gray-300 self-start"
      }`}
    >
      {item.role === "ai" ? (
        <Markdown style={markdownStyles}>{item.content}</Markdown>
      ) : (
        <Text className="text-white">{item.content}</Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      className={`flex-1 items-center justify-center bg-gray-100 dark:bg-gray-800`}
      behavior="padding"
    >
      {/* 💻 Desktop */}
      <View className="hidden sm:flex w-full max-w-[900px] bg-white dark:bg-gray-700 rounded-xl shadow-xl p-4" style={{ width: "60%" }}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ padding: 10 }}
        />
        <View className="flex-row items-center p-4 border-t border-gray-300 bg-white dark:bg-gray-800">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded px-4 py-2 mr-2"
          />
          <Button title="Send" color="green" onPress={handleSend} />
        </View>
      </View>

      {/* 📱 Mobile */}
      <View className="sm:hidden flex w-full max-w-[300px] bg-white rounded-md shadow-xl p-2">
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ padding: 10 }}
        />
        <View className="flex-row items-center p-2 border-t border-gray-300 bg-white">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded px-4 py-2 mr-2"
          />
          <Button title="Send" color="green" onPress={handleSend} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const markdownStyles = StyleSheet.create({
  body: { color: "#333", fontSize: 16 },
  code_block: {
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 4,
    fontFamily: "Courier",
  },
  code_inline: {
    backgroundColor: "#eaeaea",
    padding: 3,
    borderRadius: 4,
    fontFamily: "Courier",
  },
});
