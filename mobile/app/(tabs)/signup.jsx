import { useState } from "react";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { ChevronDownIcon } from "@/components/ui/icon";
import { useNavigation } from "@react-navigation/native";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";

import axios from "axios";
import { API_URL } from "../../ApiConfig"; // Import the API URL from config
export default function Signup() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    company_name: "",
    address: "",
  });
  const [userType, setUserType] = useState("customer");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword,
        user_type: userType,
        phone_number: form.phone_number,
      };
      if (userType === "landlord") {
        payload.company_name = form.company_name;
        payload.address = form.address;
      }

      const response = await axios.post(`${API_URL}/register`, payload);
      console.log("Registration successful", response.data);
      // ✅ Send to Home screen (works with Tabs or Stack)
      // navigation.navigate("Home");
      navigation.navigate("/");
    } catch (err) {
      console.error("Registration error", err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      {/* big screen */}
      <Box className="w-full max-w-md self-center bg-gray-800  p-8 shadow-lg mt-10">
        <Heading className="text-center text-2xl font-bold mb-6 text-white">
          {t("sign_up")}
        </Heading>
        <VStack space="4" className="items-center">
          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("full_name")} :
          </Text>
          <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4 ">
            <InputField
              value={form.name}
              onChangeText={(val) => handleChange("name", val)}
              type="text"
              placeholder={t("your_full_name")}
            />
          </Input>

          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("email")} :
          </Text>
          <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4 ">
            <InputField
              keyboardType="email-address"
              value={form.email}
              onChangeText={(val) => handleChange("email", val)}
              type="email"
              placeholder={t("your_email")}
            />
          </Input>

          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("password")} :
          </Text>
          <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4">
            <InputField
              secureTextEntry
              value={form.password}
              onChangeText={(val) => handleChange("password", val)}
              type="password"
              placeholder={t("your_password")}
            />
          </Input>
          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("confirm_password")} :
          </Text>
          <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4">
            <InputField
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={(val) => handleChange("confirmPassword", val)}
              type="password"
              placeholder={t("confirm_password")}
            />
          </Input>

          
              <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
                {t("phone_number")}:
              </Text>
              <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4">
                <InputField
                  value={form.phone_number}
                  onChangeText={(val) => handleChange("phone_number", val)}
                  type="text"
                  placeholder={t("phone_number")}
                />
              </Input>

          {/* User Type Selection */}
          <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
            {t("select_role")}:
          </Text>
          <Select
            selectedValue={userType}
            onValueChange={(val) => setUserType(val)}
          >
            <SelectTrigger
              variant="solid"
              size="lg"
              className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4"
            >
              <SelectInput placeholder={t("select_role")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label={t("customer")} value="customer" />
                <SelectItem label={t("middleman")} value="landlord" />
              </SelectContent>
            </SelectPortal>
          </Select>

          {/* Landlord-only fields */}
          {userType === "landlord" && (
            <>
              <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
                {t("company_name")}:
              </Text>
              <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4">
                <InputField
                  value={form.company_name}
                  onChangeText={(val) => handleChange("company_name", val)}
                  type="text"
                  placeholder={t("company_name")}
                />
              </Input>
              <Text className="text-blue-200 text-center mb-4 mt-4 font-bold">
                {t("address")}:
              </Text>
              <Input className="w-72 bg-gray-900 border border-gray-600 rounded text-white px-4">
                <InputField
                  value={form.address}
                  onChangeText={(val) => handleChange("address", val)}
                  type="text"
                  placeholder={t("address")}
                />
              </Input>
            </>
          )}

          <Button
            onPress={handleSignUp}
            className="bg-blue-600 rounded mt-4 w-72 data-[hover=true]:bg-brandRed-300 dark:data-[hover=true]:bg-brandGreen-300"
          >
            <Text className="text-white font-semibold text-center ">
              {t("sign_up")}
            </Text>
          </Button>
        </VStack>
        <Text className="text-center text-gray-400 mt-6">
          {t("already_have_an_account")}
        </Text>
      </Box>
    </View>
  );
}
