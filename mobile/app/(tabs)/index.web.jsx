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
import FeaturedPropertiesSection from "@/components/HomeScreen/FeaturedPropertiesSection";


export default function HomeScreen() {
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
    <View className="flex-1 justify-center items-center bg-blue-200 dark:bg-gray-800">
      {/* big screen */}
      <View className="flex-1 md:flex hidden justify-center mb-10 items-center">
        <Heading
          size="3xl"
          className="mb-6 mt-36 mx-36 text-center font-bold tracking-wide dark:text-brandGreen-500"
          style={{ letterSpacing: 1.5 }}
        >
          {t("start_your_search")}
        </Heading>
        <HStack className="max-w-7xl bg-white   p-6 shadow-lg rounded-xl dark:bg-gray-900">
          <Input
            className="flex-1 bg-transparent"
            variant="underlined"
            size="lg"
          >
            <InputField
              placeholder={t("search_placeholder")}
              className="rounded-none"
            />
            <InputSlot>
              <InputIcon className="mr-3" as={House} />
            </InputSlot>
          </Input>
          <View className="w-4" />
          <Select>
            <SelectTrigger
              variant="underlined"
              size="lg"
              className="rounded-none"
            >
              <SelectInput placeholder={t("property_type")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {[
                  "apartment",
                  "house",
                  "studio",
                  "office",
                  "commercial",
                  "villa",
                ].map((type) => (
                  <SelectItem key={type} label={t(type)} value={type} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
          <View className="w-4" />
          <Select>
            <SelectTrigger
              variant="underlined"
              size="lg"
              className="rounded-none"
            >
              <SelectInput placeholder={t("number_of_rooms")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem
                    key={num}
                    label={`${num} ${t("room", { count: num })}`}
                    value={num.toString()}
                  />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
          <View className="w-4" />
          <Button
            className="bg-brandRed-500 data-[hover=true]:bg-brandRed-300 data-[active=true]:bg-brandRed-700 dark:bg-brandBlue-500 dark:data-[hover=true]:bg-brandBlue-300 dark:data-[active=true]:bg-brandBlue-700"
            variant="solid"
            action="primary"
            onPress={() => console.log("Search")}
          >
            {t("search")}
          </Button>
        </HStack>
      </View>
      {/* big screen end */}

      {/* small screen */}
      <View className="flex sm:hidden items-center justify-center px-4 my-10">
        <View className="w-full bg-white p-4 rounded-lg shadow-md dark:bg-gray-900 space-y-4">
          <Heading
            size="md"
            className="text-center font-bold text-gray-800 dark:text-brandGreen-500"
          >
            {t("start_your_search")}
          </Heading>

          <Input className="bg-transparent" variant="underlined" size="md">
            <InputField
              placeholder={t("search_placeholder")}
              className="rounded-none"
            />
            <InputSlot>
              <InputIcon className="mr-3" as={House} />
            </InputSlot>
          </Input>

          <Select>
            <SelectTrigger
              variant="underlined"
              size="md"
              className="rounded-none"
            >
              <SelectInput placeholder={t("property_type")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {[
                  "apartment",
                  "house",
                  "studio",
                  "office",
                  "commercial",
                  "villa",
                ].map((type) => (
                  <SelectItem key={type} label={t(type)} value={type} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>

          <Select>
            <SelectTrigger
              variant="underlined"
              size="md"
              className="rounded-none"
            >
              <SelectInput placeholder={t("number_of_rooms")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem
                    key={num}
                    label={`${num} ${t("room", { count: num })}`}
                    value={num.toString()}
                  />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>

          <Button
            className="bg-brandRed-500 dark:bg-brandBlue-500"
            variant="solid"
            action="primary"
            onPress={() => console.log("Search")}
          >
            {t("search")}
          </Button>
        </View>
      </View>
      {/* small screen end*/}

      {/* Big screen how it works */}
      <View className="w-full sm:flex hidden px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <Heading
          size="lg"
          className="mb-6 text-gray-800 dark:text-white text-center font-bold"
        >
          {t("how_it_works")}
        </Heading>
        <HStack className="justify-between space-x-4">
          {[
            { icon: "🔍", title: t("find_property") },
            { icon: "📩", title: t("contact_agent") },
            { icon: "🏡", title: t("move_in") },
          ].map((step, i) => (
            <Card
              size="lg"
              variant="filled"
              className="bg-gray-100 dark:bg-gray-800 p-12 flex items-center justify-center"
              key={i}
            >
              <Text className="text-7xl mb-2">{step.icon}</Text>
              <Text className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {step.title}
              </Text>
            </Card>
          ))}
        </HStack>
      </View>
      {/* Big screen how it works end*/}

      {/* Small screen how it works */}
      <View className="w-full sm:hidden flex px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <Heading
          size="md"
          className="mb-6 text-gray-800 dark:text-white text-center font-bold"
        >
          {t("how_it_works")}
        </Heading>
        <HStack className="flex-col space-y-4">
          {[
            { icon: "🔍", title: t("find_property") },
            { icon: "📩", title: t("contact_agent") },
            { icon: "🏡", title: t("move_in") },
          ].map((step, i) => (
            <Card
              size="lg"
              variant="filled"
              className="bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center"
              key={i}
            >
              <Text className="text-5xl mb-2">{step.icon}</Text>
              <Text className="text-md font-semibold text-gray-700 dark:text-gray-200">
                {step.title}
              </Text>
            </Card>
          ))}
        </HStack>
      </View>
      {/* Small screen how it works end*/}

       <View className="w-full px-4 py-16 bg-blue-50 dark:bg-gray-900">
      {/* heading */}
      <Heading
        size="lg"
        className="mb-10 text-center font-bold text-gray-800 dark:text-white"
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

<FeaturedPropertiesSection />


      <SearchSection />
      <HowItWorksSection />
    </View>
  );
}
