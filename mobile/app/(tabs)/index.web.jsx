import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react-native";
import { ChevronDownIcon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
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
import { ShieldCheck, Wallet, Clock } from "lucide-react-native";

import SearchSection from "@/components/HomeScreen/SearchSection";
import HowItWorksSection from "@/components/HomeScreen/HowItWorksSection";
import WhyChooseSection from "../../components/HomeScreen/WhyChooseSection";
import FeaturedPropertiesSection from "@/components/HomeScreen/FeaturedPropertiesSection";
import TopIntermediariesSection from "@/components/HomeScreen/TopIntermediariesSection";

export default function HomeScreen() {
  const { t, i18n } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center bg-blue-200 dark:bg-gray-800">
      <SearchSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <FeaturedPropertiesSection />
      <TopIntermediariesSection />
    </View>
  );
}
