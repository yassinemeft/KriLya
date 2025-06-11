import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { Link, LinkText } from "@/components/ui/link";
import { HStack } from "@/components/ui/hstack";

import { API_URL } from "../../ApiConfig"; // Import the API URL from config
import axios from "axios";
export default function LoginScreen() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${API_URL}/login`, payload);
      console.log("Login successful", response.data);
      // ✅ Send to Home screen (works with Tabs or Stack)
      // navigation.navigate("Home");
      navigation.navigate("/");
    } catch (err) {
      console.error("Login error", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };




  return (
    <View>
      <Box className="w-full max-w-md self-center bg-white dark:bg-gray-800 p-8 shadow-lg mt-10 rounded-xl">
        <Heading className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          {t("login")}
        </Heading>

        <VStack space="6" className="items-center">
          <Text className="text-blue-600 dark:text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("email")} :
          </Text>
          <Input
            keyboardType="email-address"
            className="w-72 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white px-4 placeholder:text-gray-500 placeholder:text-opacity-50"
          >
            <InputField 
            value={form.email}
            onChangeText={(val) => handleChange("email", val)} type="email" placeholder={t("your_email")} />
          </Input>

          <Text className="text-blue-600 dark:text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("password")} :
          </Text>
          <Input
            secureTextEntry
            className="w-72 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-white px-4"
          >
            <InputField
            value={form.password}
            onChangeText={(val) => handleChange("password", val)}
              type="password"
              placeholder={t("your_password")}
              placeholderTextColor="rgba(153,153,153,0.5)"
            />
          </Input>

          <Button
            onPress={handleLogin}
            className="bg-brandRed-500 data-[hover=true]:bg-brandRed-300  dark:bg-brandBlue-500 dark:data-[hover=true]:bg-brandBlue-300 rounded mt-4 w-72"
          >
            <Text className="text-white font-semibold text-center">
              {t("login")}
            </Text>
          </Button>
        </VStack>

        <HStack className="justify-center mt-5">
          <Text className=" text-gray-600 dark:text-gray-400">
            {t("don't_have_an_account")}{" "}
          </Text>
          <Link href="/signup">
            <LinkText className=" text-blue-600 dark:text-blue-400">
              {t("sign_up")}
            </LinkText>
          </Link>
        </HStack>
      </Box>
    </View>
  );
}
