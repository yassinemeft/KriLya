/*  WhyChoose.jsx */
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { HStack } from "@/components/ui/hstack";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { ShieldCheck, Wallet, Clock } from "lucide-react-native";

export default function WhyChooseSection() {
      const { t, i18n } = useTranslation();
  const perks = [
    {
      icon: ShieldCheck,
      title: t("secure_booking"),
      desc: t("secure_booking_desc"),
    },
    {
      icon: Wallet,
      title: t("best_price"),
      desc: t("best_price_desc"),
    },
    {
      icon: Clock,
      title: t("24_support"),
      desc: t("24_support_desc"),
    },
  ];
    return (
<View className="w-full px-4 py-16 bg-blue-50 dark:bg-gray-900">
      {/* heading */}
      <Heading
        size="lg"
        className="mb-10 text-center font-bold text-3xl tracking-tight text-gray-900 dark:text-brandGreen-500"
      >
        {t("why_choose_krilya")}
      </Heading>

      {/* cards */}
      <HStack className="flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 max-w-6xl mx-auto">
        {perks.map(({ icon: Icon, title, desc }, idx) => (
          <Card
            key={idx}
            className="flex-1 items-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md"
          >
            <Icon size={48} className="text-brandBlue-500 mb-4 dark:text-brandGreen-500" />
            <Text className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {title}
            </Text>
            <Text className="text-center text-gray-600 dark:text-gray-300">
              {desc}
            </Text>
          </Card>
        ))}
      </HStack>
    </View>

    );
}