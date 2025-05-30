import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, ActivityIndicator, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useTranslation } from "react-i18next";
import { Image } from "@gluestack-ui/themed";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Icon, CheckIcon } from "@/components/ui/icon";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";

import { API_URL } from "../../ApiConfig";
import axios from "axios";

export default function PropertyDetails() {
  const { t } = useTranslation();
  const route = useRoute();
  const id = route?.params?.id;

  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/houses/${id}`)
      .then((res) => setHouse(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading || !house) {
    return (
      <View className="flex-1 items-center justify-center mt-10">
        <ActivityIndicator size="large" color="#2D9CDB" />
      </View>
    );
  }

  const width = Dimensions.get("window").width;
  const DetailRow = ({ label, value }) => (
    <View className="flex-row justify-between py-2 border-b border-gray-200 dark:border-gray-700">
      <Text className="font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </Text>
      <Text className="text-gray-800 dark:text-gray-200">{value}</Text>
    </View>
  );

  return (
    <View>
    <HStack
      space="4xl"
      className="flex-1 hidden sm:flex items-center justify-center mt-8 bg-white dark:bg-gray-900 px-4 pt-4 pb-20"
    >
      <View style={{ width: width * 0.55 }}>
        {/* Carousel */}
        <View className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6">
          {house.images?.length > 0 ? (
            <Carousel
              width={width * 0.6 - 32}
              height={340}
              loop
              autoPlay
              data={house.images}
              scrollAnimationDuration={1000}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={{ width: "100%", height: 340 }}
                  alt="House image"
                />
              )}
            />
          ) : (
            <Image
              source={{ uri: house.main_image }}
              style={{ width: "100%", height: 240 }}
              alt="Main House"
            />
          )}
        </View>

        {/* Title + Price */}
        <View className="mb-6">
          <Text className="text-3xl font-extrabold text-gray-900 dark:text-white">
            {house.title}
          </Text>
          <Text className="text-lg text-gray-500 dark:text-gray-400">
            {house.city}
          </Text>
          <Text className="text-2xl font-semibold text-red-500 dark:text-green-500 mt-1">
            {house.price_per_night} MAD / {t("night")}
          </Text>
        </View>

        {/* Description */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-9 shadow-md mb-6">
          <Text className="text-gray-800 dark:text-gray-200">
            {house.description}
          </Text>
        </View>

        {/* Details */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-9 shadow-md mb-6">
          <Text className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("house_details")}
          </Text>
          <DetailRow label="Type:" value={house.house_type} />
          <DetailRow label="Address:" value={house.address} />
          <DetailRow label="Available from:" value={house.available_from} />
          <DetailRow label="Available to:" value={house.available_to} />
          <DetailRow label="Rooms:" value={house.rooms} />
          <DetailRow label="Bathrooms:" value={house.bathrooms} />
          <DetailRow label="Capacity:" value={house.capacity} />
          <DetailRow label="Region:" value={house.region} />
          <DetailRow label="Bedrooms:" value={house.bedrooms} />
        </View>

        {/* Amenities */}
        {house.amenities?.length > 0 && (
          <View className="bg-white dark:bg-gray-800 rounded-xl p-9 shadow-md mb-6">
            <Text className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("amenities")}
            </Text>
            <View className="flex-row flex-wrap">
              {house.amenities.map((amenity, idx) => (
                <View
                  key={idx}
                  className="bg-red-100 dark:bg-green-700 rounded-full px-3 py-1 m-1"
                >
                  <Text className="text-red-600 dark:text-green-200 font-medium text-lg">
                    {amenity}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>

      <View style={{ width: width * 0.35 }}>
        {/* User Info Sidebar (Card Style) */}
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
          <Text className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("listed_by")}
          </Text>

          {/* Placeholder Avatar */}
          <View className="items-center mb-4">
            <Avatar size="2xl">
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
              John Doe
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-300">
              {t("agent_at")} CozyStay
            </Text>
          </View>

    <DetailRow label={t("email")} value="johndoe@example.com" />
    <DetailRow label={t("phone")} value="+212 600 123 456" />
    <DetailRow label={t("company_name")} value="CozyStay Rentals" />

          <View className="mt-2">
            <Text className="text-gray-700 dark:text-gray-300">
              John is a trusted housing agent with 5+ years of experience
              helping clients find comfortable and safe homes in Morocco.
            </Text>
          </View>
          <Button
            variant="solid"
            className="mt-2 bg-brandBlue-500 dark:text-white"
          >
            {t("View Profile")}
          </Button>
        </View>
        <View className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md mt-7">
          {/* House Location */}
          <View className="mt-4">
            <Text className="text-lg font-semibold text-gray-800 dark:text-white">
              {t("house_location")}{" "}
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-300">
              {house.latitude}, {house.longitude}
            </Text>
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${house.longitude}%2C${house.latitude}%2C${house.longitude}%2C${house.latitude}&layer=mapnik&marker=${house.latitude}%2C${house.longitude}`}
              width="100%"
              height="400"
            ></iframe>
          </View>
        </View>
      </View>
    </HStack>

    {      /* Mobile View */}
    <View className="flex sm:hidden flex-col px-4 pt-4 pb-20 bg-white dark:bg-gray-900">
  <View className="mb-4">
    <Text className="text-2xl font-bold text-gray-900 dark:text-white">
      {house.title}
    </Text>
    <Text className="text-md text-gray-500 dark:text-gray-400">
      {house.city}
    </Text>
    <Text className="text-lg font-semibold text-red-500 dark:text-green-500 mt-1">
      {house.price_per_night} MAD / {t("night")}
    </Text>
  </View>

  {house.images?.length > 0 && (
    <Carousel
      width={Dimensions.get("window").width - 32}
      height={240}
      loop
      autoPlay
      data={house.images}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{ width: "100%", height: 240 }}
          alt="House image"
        />
      )}
    />
  )}

  <View className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <Text className="font-bold text-gray-900 dark:text-white mb-2">
      {t("house_details")}
    </Text>
    <DetailRow label={t("house_type")} value={house.house_type} />
    <DetailRow label={t("address")} value={house.address} />
    <DetailRow label={t("available_from")} value={house.available_from} />
    <DetailRow label={t("available_to")} value={house.available_to} />
    <DetailRow label={t("rooms")} value={house.rooms} />
    <DetailRow label={t("bathrooms")} value={house.bathrooms} />
    <DetailRow label={t("capacity")} value={house.capacity} />
    <DetailRow label={t("region")} value={house.region} />
    <DetailRow label={t("bedrooms")} value={house.bedrooms} />
  </View>

  {/* Agent Info */}
  <View className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <Text className="font-bold text-gray-900 dark:text-white mb-2">
      {t("listed_by")}
    </Text>
    <View className="items-center mb-4">
      <Avatar size="xl">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80",
          }}
        />
        <AvatarBadge className="border-0">
          <Icon
            as={CheckIcon}
            className="text-white  bg-brandBlue-500 dark:bg-brandBlue-700 rounded-full"
            size="xl"
          />
        </AvatarBadge>
      </Avatar>
      <Text className="text-lg font-semibold text-gray-800 dark:text-white">
        John Doe
      </Text>
      <Text className="text-sm text-gray-500 dark:text-gray-300">
        {t("agent_at")} CozyStay
      </Text>
    </View>
    <DetailRow label={t("email")} value="johndoe@example.com" />
    <DetailRow label={t("phone")} value="+212 600 123 456" />
    <DetailRow label={t("company_name")} value="CozyStay Rentals" />
  </View>

  {/* Location Map */}
  <View className="mt-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
    <Text className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
      {t("house_location")}
    </Text>
    <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2">
      {house.latitude}, {house.longitude}
    </Text>
    <iframe
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${house.longitude}%2C${house.latitude}%2C${house.longitude}%2C${house.latitude}&layer=mapnik&marker=${house.latitude}%2C${house.longitude}`}
      width="100%"
      height="300"
    ></iframe>
  </View>
</View>
    </View>
  );
}
