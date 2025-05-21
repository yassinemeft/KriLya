import { View, Text, ScrollView } from "react-native";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarBadge, AvatarImage, AvatarFallbackText } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useTranslation } from "react-i18next";

export default function TopIntermediariesSection() {

    const { t } = useTranslation();

  const agents = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 4.9,
      rentals: 42,
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      id: 2,
      name: "Youssef B.",
      rating: 4.8,
      rentals: 36,
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      id: 3,
      name: "Amina L.",
      rating: 5.0,
      rentals: 50,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 4,
      name: "Khalid A.",
      rating: 4.7,
      rentals: 30,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 5,
      name: "Fatima Z.",
      rating: 4.9,
      rentals: 45,
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 6,
      name: "Yassine M.",
      rating: 4.8,
      rentals: 38,
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 7,
      name: "Laila S.",
      rating: 5.0,
      rentals: 52,
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 8,
      name: "Omar T.",
      rating: 4.6,
      rentals: 28,
      image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
      id: 9,
      name: "Nora F.",
      rating: 4.5,
      rentals: 33,
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: 10,
      name: "Adam R.",
      rating: 4.4,
      rentals: 29,
      image: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: 11,
      name: "Rania K.",
      rating: 5.0,
      rentals: 55,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 12,
      name: "Samir J.",
      rating: 4.7,
      rentals: 40,
      image: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      id: 13,
      name: "Aya B.",
      rating: 4.9,
      rentals: 47,
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      id: 14,
      name: "Hassan C.",
      rating: 4.8,
      rentals: 39,
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 15,
      name: "Salma N.",
      rating: 4.6,
      rentals: 27,
      image: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      id: 16,
      name: "Tarek O.",
      rating: 4.7,
      rentals: 31,
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 17,
      name: "Zara Q.",
      rating: 4.9,
      rentals: 48,
      image: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: 18,
      name: "Mehdi L.",
      rating: 4.5,
      rentals: 32,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 19,
      name: "Layla P.",
      rating: 5.0,
      rentals: 54,
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 20,
      name: "Karim D.",
      rating: 4.8,
      rentals: 37,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 21,
      name: "Mona H.",
      rating: 4.6,
      rentals: 34,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 22,
      name: "Rami V.",
      rating: 4.7,
      rentals: 30,
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      id: 23,
      name: "Dalia E.",
      rating: 5.0,
      rentals: 53,
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    }
  ];

  return (
    <View className="w-full px-4 py-16">
      <Heading
        size="lg"
        className="mb-10 text-center font-bold text-3xl tracking-tight text-gray-900 dark:text-brandGreen-500"
      >
        Trusted Intermediaries
      </Heading>

      {/* Mobile: horizontal scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="sm:hidden">
        {agents.map((agent) => (
          <Card key={agent.id} className="w-64 mr-4 p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800">
            <Avatar size="md">
              <AvatarFallbackText>{agent.name.charAt(0)}</AvatarFallbackText>
              <AvatarImage source={{ uri: agent.image }} />
            </Avatar>
            <Text className="text-center text-lg font-semibold text-gray-900 dark:text-white mt-3">
              {agent.name}
            </Text>
            <Text className="text-center text-sm text-gray-500 dark:text-gray-300 mb-2">
                ⭐ {agent.rating} • {agent.rentals} {t("rentals")} 
            </Text>
            <Button variant="outline" className="mt-2">
              {t("View Profile")}
            </Button>
          </Card>
        ))}
      </ScrollView>

      {/* Desktop: grid layout with horizontal avatar + content */}
      <View className="hidden sm:flex justify-center flex-row flex-wrap px-1">
        {agents.map((agent) => (
          <Card
            key={agent.id}
            className="flex items-center mr-4 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900 mb-8"
          >
            <Avatar size="xl" className="mr-6 flex-shrink-0">
              <AvatarFallbackText>{agent.name.charAt(0)}</AvatarFallbackText>
              <AvatarImage source={{ uri: agent.image }} />
            </Avatar>

            <View className="flex-1">
              <Text className="text-base font-bold text-gray-900 dark:text-white truncate">
                {agent.name}
              </Text>
              <Text className="text-sm text-gray-500 dark:text-gray-300">
                ⭐ {agent.rating} • {agent.rentals} {t("rentals")} 
              </Text>
            </View>

            <Button variant="solid" action="secondary" size="md" className="text-sm font-medium ml-6 mt-3 flex-shrink-0 whitespace-nowrap bg-brandBlue-500 data-[hover=true]:bg-brandBlue-300 data-[active=true]:bg-brandBlue-700">
              {t("view_profile")}
            </Button>
          </Card>
        ))}
      </View>
    </View>
  );
}
