// components/ui/NavDropdown.tsx
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { VStack } from "@/components/ui/vstack";

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ position: "relative" }}
    >
      <Pressable>
        <Text className="text-white">For middlemen ▼</Text>
      </Pressable>
      {isOpen && (
        <VStack className="absolute top-full mt-2 bg-white shadow rounded p-2 z-50">
          <Pressable onPress={() => console.log("Option 1")}>
            <Text className="p-2 hover:bg-gray-100">publish an article</Text>
          </Pressable>
          <Pressable onPress={() => console.log("Option 2")}>
            <Text className="p-2 hover:bg-gray-100">view my articles</Text>
          </Pressable>
          <Pressable onPress={() => console.log("Option 2")}>
            <Text className="p-2 hover:bg-gray-100">view profile</Text>
          </Pressable>
        </VStack>
      )}
    </View>
  );
}
export { NavDropdown };