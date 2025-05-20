import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    console.log("Inscription avec :", form);
  };

  return (
    <View>
      {/* big screen */}
      <Box className="w-full max-w-md self-center bg-gray-800  p-8 shadow-lg mt-10">
        <Heading className="text-center text-2xl font-bold mb-6 text-white">
          Créer un compte
        </Heading>
        <VStack space="6" className="items-center">
          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            Nom :
          </Text>
          <Input
            value={form.name}
            onChangeText={(val) => handleChange("name", val)}
            className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4 "
          >
            <InputField type="text" placeholder="Votre Nom" />
          </Input>
          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            Prénom :
          </Text>
          <Input
            value={form.name}
            onChangeText={(val) => handleChange("lastName", val)}
            className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4 "
          >
            <InputField type="text" placeholder="Votre Prenom" />
          </Input>

          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            Email :
          </Text>
          <Input
            keyboardType="email-address"
            value={form.email}
            onChangeText={(val) => handleChange("email", val)}
            className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4 "
          >
            <InputField type="email" placeholder="Votre Email" />
          </Input>

          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            Mot de passe :
          </Text>
          <Input
            placeholder="Mot de passe"
            placeholderTextColor="#ccc"
            secureTextEntry
            value={form.password}
            onChangeText={(val) => handleChange("password", val)}
            className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4"
          >
            <InputField type="password" placeholder="Votre Mot de passe" />
          </Input>
          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            Confirmer le mot de passe :
          </Text>
          <Input
            secureTextEntry
            value={form.password}
            onChangeText={(val) => handleChange("confirmPassword", val)}
            className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4"
          >
            <InputField
              type="password"
              placeholder="Confirmer votre mot de passe"
            />
          </Input>

          <Button
            onPress={handleSignUp}
            className="bg-blue-600 rounded mt-4 w-72 data-[hover=true]:bg-brandRed-300 dark:data-[hover=true]:bg-brandGreen-300"
          >
            <Text className="text-white font-semibold text-center ">
              S’inscrire
            </Text>
          </Button>
        </VStack>
        <Text className="text-center text-gray-400 mt-6">
          Déjà un compte ? Connecte-toi.
        </Text>
      </Box>
    </View>
  );
}
