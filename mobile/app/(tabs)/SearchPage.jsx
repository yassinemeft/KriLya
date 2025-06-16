import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { API_URL } from "../../ApiConfig";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import SearchSection from "@/components/HomeScreen/SearchSection";

export default function SearchPage() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  // Get the type from route params
  const route = useRoute();
  const { type } = route.params;
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await axios.post(`${API_URL}/search`, { type });
        const data = await response.data;
        setHouses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchHouses();
  }, [type]);

  if (loading) return <ActivityIndicator size="large" />;

  if (houses.length === 0)
    return (
      <View>
        <SearchSection />
              <Heading
        size="lg"
        className="mb-10 text-center font-bold text-3xl tracking-tight text-brandRed-900"
      >{t("no_results_found")} : {type}</Heading>
      </View>
    );

  return (
    <View className="flex-1 justify-center h-full items-center bg-blue-200 dark:bg-gray-800">
    <SearchSection />
    <View className="w-full px-4 py-6 bg-white dark:bg-gray-900 mb-4">
      <Heading
        size="lg"
        className="mb-10 text-center font-bold text-3xl tracking-tight text-gray-900 dark:text-brandGreen-500"
      >
        {t("search_results_for")} {type}
      </Heading>

      {loading ? (
        <ActivityIndicator size="large" className="my-10" color="#2D9CDB" />
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="sm:hidden px-1 py-2"
          >
            {houses.map((property) => (
              <PropertyCard key={property.id} {...property} className="mr-4 w-64" />
            ))}
          </ScrollView>

          <View className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
            {houses.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </View>
        </>
      )}
    </View>
    </View>
  );
}

function PropertyCard({ id, title, city, price, img, className = "" }) {
  const { t } = useTranslation();
  const navigation = useNavigation();

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
