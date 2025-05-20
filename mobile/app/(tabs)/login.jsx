import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function LoginScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    console.log("Connexion avec :", form);
  };

  return (
    <View>
      <Box className="w-full max-w-md self-center bg-white dark:bg-gray-800 p-8 shadow-lg mt-10 rounded-xl">
        <Heading className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Se connecter
        </Heading>

        <VStack space="6" className="items-center">
          <Text className="text-blue-600 dark:text-blue-200 text-center mb-4 mt-4 font-bold">
            Email :
          </Text>
          <Input
            keyboardType="email-address"
            value={form.email}
            onChangeText={(val) => handleChange("email", val)}
            className="w-72 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white px-4 placeholder:text-gray-500 placeholder:text-opacity-50"
          >
            <InputField type="email" placeholder="Votre Email" />
          </Input>

          <Text className="text-blue-600 dark:text-blue-200 text-center mb-4 mt-4 font-bold">
            Mot de passe :
          </Text>
          <Input
            secureTextEntry
            value={form.password}
            onChangeText={(val) => handleChange("password", val)}
            className="w-72 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white px-4"
          >
            <InputField
              type="password"
              placeholder="Votre mot de passe"
              placeholderTextColor="rgba(153,153,153,0.5)"
            />
          </Input>

          <Button
            onPress={handleLogin}
            className="bg-brandRed-500 dark:bg-brandGreen-400 hover:bg-blue-700 dark:hover:bg-brandGreen-500 rounded mt-4 w-72"
          >
            <Text className="text-white font-semibold text-center">
              Se connecter
            </Text>
          </Button>
        </VStack>

        <Text className="text-center text-gray-600 dark:text-gray-400 mt-6">
          Pas encore de compte ? Inscris-toi.
        </Text>
      </Box>
    </View>
  );
}
