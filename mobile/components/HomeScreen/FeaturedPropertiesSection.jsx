import { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';


import { API_URL } from '../../ApiConfig'; // Import the API URL from config
import axios from "axios";

export default function FeaturedPropertiesSection() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/featured-houses`) // Replace with your domain
      .then((res) => setListings(res.data))
      .catch((err) => console.error("Error fetching featured houses:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View className="w-full px-4 py-20 bg-white dark:bg-gray-900 mb-4">
      <Heading
        size="lg"
        className="mb-10 text-center font-bold text-3xl tracking-tight text-gray-900 dark:text-brandGreen-500"
      >
        {t("featured_properties")}
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
            {listings.map((property) => (
              <PropertyCard key={property.id} {...property} className="mr-4 w-64" />
            ))}
          </ScrollView>

          <View className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
            {listings.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

function PropertyCard({ id, title, city, price, img, className = "" }) {
  const { t } = useTranslation();
  const navigation = useNavigation(); // 🔥 MISSING in your current code

  return (
    <Card className={`bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <Image source={{ uri: img }} className="h-40 w-full object-cover" />
      <View className="p-3 space-y-1">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {title}
        </Text>
        <Text className="text-sm text-gray-600 dark:text-gray-300">{city}</Text>
        <Text className="text-md font-bold text-brandRed-500 dark:text-brandGreen-500">{price} / {t("night")}</Text>
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


