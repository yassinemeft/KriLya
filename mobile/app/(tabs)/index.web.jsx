import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 bg-gray-100">
      {/* Fullscreen background image */}
      <Image
        source={require("@/assets/images/key.jpg")}
        alt="KriLya Background"
        className="absolute inset-0 w-full h-full object-cover"
        resizeMode="cover"
      />

      {/* Overlay content */}
      <HStack className="flex-1 justify-center items-center m-20 z-10 px-4">
        {/* Replace this with your actual search bar */}
        <Text className="h-96 text-white text-2xl m-11 font-bold">{t('welcome')}</Text>
      </HStack>
    </View>
  );
}
