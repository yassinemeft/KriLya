/* ─── FeaturedPropertiesSection.jsx ─────────────────────────────── */
import { View, Text, ScrollView } from "react-native";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useTranslation } from "react-i18next";

export default function FeaturedPropertiesSection() {
  const { t } = useTranslation();

  const listings = [
    {
      id: 1,
      title: "Charming Riad with Patio",
      city: "Marrakesh",
      price: `1 200 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      title: "Stylish Apartment in City Center",
      city: "Rabat",
      price: `1 500 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      title: "Cozy Guesthouse in Medina",
      city: "Fez",
      price: `900 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
    {
      id: 4,
      title: "Luxury Villa with Private Pool",
      city: "Agadir",
      price: `4 000 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
    {
      id: 5,
      title: "Modern Studio in Marina",
      city: "Casablanca",
      price: `1 800 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
    {
      id: 6,
      title: "Cozy Chalet in Atlas Mountains",
      city: "Imlil",
      price: `1 200 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
    {
      id: 7,
      title: "Boutique Hotel in Desert",
      city: "Merzouga",
      price: `2 500 MAD / ${t("night")}`,
      img: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <View className="w-full px-4 py-20 bg-white dark:bg-gray-900">
      <Heading
        size="lg"
        className="mb-10 text-center font-bold text-gray-800 dark:text-white"
      >
        {t("featured_properties")}
      </Heading>

      {/* Mobile: horizontal scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="sm:hidden px-1"
      >
        {listings.map((property) => (
          <PropertyCard key={property.id} {...property} className="mr-4 w-64" />
        ))}
      </ScrollView>

      {/* Desktop: grid layout */}
      <View className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
        {listings.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </View>
    </View>
  );
}

function PropertyCard({ title, city, price, img, className = "" }) {
  const { t } = useTranslation();

  return (
    <Card
      className={`bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}
    >
      <Image
        source={{ uri: img }}
        className="h-40 w-full object-cover"
      />
      <View className="p-4 space-y-1">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
          {title}
        </Text>
        <Text className="text-sm text-gray-600 dark:text-gray-300">{city}</Text>
        <Text className="text-base font-bold text-brandRed-500 dark:text-brandGreen-500">{price}</Text>
        <Button
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


