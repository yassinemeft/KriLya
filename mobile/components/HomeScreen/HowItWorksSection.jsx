/* ─── HowItWorksSection.jsx ─────────────────────────────── */ 
import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";

export default function HowItWorksSection() {
  const { t } = useTranslation();

  const steps = [
    { icon: "🔍", title: t("find_property") },
    { icon: "📩", title: t("contact_agent") },
    { icon: "🏡", title: t("move_in") },
  ];

  return (
    <>
      {/* Big Screen */}
      <View className="w-full sm:flex hidden px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <Heading size="lg" className="mb-6 text-gray-800 dark:text-white text-center font-bold">
          {t("how_it_works")}
        </Heading>
        <HStack className="justify-between space-x-4">
          {steps.map((step, i) => (
            <Card key={i} size="lg" variant="filled" className="bg-gray-100 dark:bg-gray-800 p-12 flex items-center justify-center">
              <Text className="text-7xl mb-2">{step.icon}</Text>
              <Text className="text-lg font-semibold text-gray-700 dark:text-gray-200">{step.title}</Text>
            </Card>
          ))}
        </HStack>
      </View>

      {/* Small Screen */}
      <View className="w-full sm:hidden flex px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <Heading size="md" className="mb-6 text-gray-800 dark:text-white text-center font-bold">
          {t("how_it_works")}
        </Heading>
        <HStack className="flex-col space-y-4">
          {steps.map((step, i) => (
            <Card key={i} size="lg" variant="filled" className="bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center">
              <Text className="text-5xl mb-2">{step.icon}</Text>
              <Text className="text-md font-semibold text-gray-700 dark:text-gray-200">{step.title}</Text>
            </Card>
          ))}
        </HStack>
      </View>
    </>
  );
}
