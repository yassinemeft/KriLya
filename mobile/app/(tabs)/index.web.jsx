import { View } from "react-native";
import { useEffect } from "react";

import axios from 'axios';
import { API_URL } from "../../ApiConfig"; // Import the API URL from config

import SearchSection from "@/components/HomeScreen/SearchSection";
import HowItWorksSection from "@/components/HomeScreen/HowItWorksSection";
import WhyChooseSection from "../../components/HomeScreen/WhyChooseSection";
import FeaturedPropertiesSection from "@/components/HomeScreen/FeaturedPropertiesSection";
import TopIntermediariesSection from "@/components/HomeScreen/TopIntermediariesSection";

export default function HomeScreen() {



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
