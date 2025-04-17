import { Stack } from "expo-router";
import "../global.css"; // Ensure this file exists in the root directory

// app/_layout.web.jsx
import { View, Text } from 'react-native';

export default function WebLayout() {
  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 24 }}>🌐 Web Layout ici</Text>
    </View>
  );
}
