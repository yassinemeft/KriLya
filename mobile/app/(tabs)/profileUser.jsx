import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRoute } from "@react-navigation/native";

import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Pressable } from "@/components/ui/pressable";
import { Divider } from "@/components/ui/divider";
import { Alert } from "react-native";
import { Link, LinkText } from "@/components/ui/link";
import { Icon, CheckIcon } from "@/components/ui/icon";
import { ScrollView, View } from "react-native"; // Added View
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Image } from "@/components/ui/image";
import axios from "axios";
import { API_URL } from "../../ApiConfig";
import { useNavigation } from "@react-navigation/native";
const ClientProfileScreen = () => {
  const route = useRoute();
  const owner = route.params?.owner;
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (owner?.id) {
      axios
        .get(`${API_URL}/users/${owner.id}/houses`)
        .then((res) => setHouses(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [owner]);

  const DetailRow = ({ label, value }) => (
    <View className="flex-row justify-between py-2 border-b border-gray-200 dark:border-gray-700">
      <Text className="font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </Text>
      <Text className="text-gray-800 dark:text-gray-200">{value}</Text>
    </View>
  );
  const { t } = useTranslation();

  return (
    <ScrollView className="overflow-y-auto flex-1 bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <Box className="bg-blue-700 shadow p-4 items-center dark:bg-black">
        <Text className="text-white text-2xl font-bold dark:text-brandGreen-500">
          {t("agent_profile")}
        </Text>
      </Box>

      {/* Centered Container */}
      <View className="items-center p-4 flex-row space-x-6">
        {/* Profile Card */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 w-full max-w-md">
          <VStack className="items-center space-y-4">
            <Avatar size="2xl">
              <AvatarFallbackText>{owner?.name}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: owner?.avatar || "https://via.placeholder.com/150",
                }}
              />
              <AvatarBadge className="border-0">
                <Icon
                  as={CheckIcon}
                  className="text-white  bg-brandBlue-500 dark:bg-brandBlue-700 rounded-full"
                  size="2xl"
                />
              </AvatarBadge>
            </Avatar>
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              {owner?.name}
            </Text>
          </VStack>

          <Divider className="my-4" />

          <VStack className="space-y-2">
            <DetailRow label={t("email")} value={owner?.email} />
            <DetailRow label={t("phone")} value={owner?.phone} />
            <DetailRow label={t("address")} value={owner?.address || "Essaouira"} />
            <DetailRow label={t("company_name")} value={owner?.company} />
            <Text className="text-gray-700 dark:text-gray-300">
              {owner?.description}
            </Text>
          </VStack>
        </Box>
        <Box className="bg-white rounded-2xl shadow-md p-6 w-full dark:bg-gray-900">
          <View className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
            {houses.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </View>
        </Box>{" "}
      </View>

      {/* Navigation Links */}
      <Box className="bg-white rounded-2xl shadow-md p-6 mt-6 w-full max-w-md dark:bg-gray-900">
        <Text className="text-lg font-bold mb-4">Explore More</Text>
        <VStack className="space-y-3">
          <Link>
            <LinkText className="text-blue-600 font-semibold">
              View Listings
            </LinkText>
          </Link>
          <Link>
            <LinkText className="text-blue-600 font-semibold">
              Read Reviews
            </LinkText>
          </Link>
          <Link>
            <LinkText className="text-blue-600 font-semibold">
              Contact Agent
            </LinkText>
          </Link>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default ClientProfileScreen;

function PropertyCard({ id, title, city, price, main_image: img, className = "" }) {
  const { t } = useTranslation();
  const navigation = useNavigation(); // 🔥 MISSING in your current code

  return (
    <Card
      className={`bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}
    >
      <Image source={{ uri: img }} className="h-40 w-full object-cover" />
      <View className="p-3 space-y-1">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {title}
        </Text>
        <Text className="text-sm text-gray-600 dark:text-gray-300">{city}</Text>
        <Text className="text-md font-bold text-brandRed-500 dark:text-brandGreen-500">
          {price} / {t("night")}
        </Text>
        <Button
          onPress={() => navigation.navigate("PropertyDetails", { id })}
          variant="solid"
          action="secondary"
          className="w-full mt-5 py-2 text-sm font-medium bg-brandBlue-500 data-[hover=true]:bg-brandBlue-300 data-[active=true]:bg-brandBlue-700"
        >
          {t("view_details")}
        </Button>
      </View>
    </Card>
  );
}
