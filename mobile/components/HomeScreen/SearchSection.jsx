import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@/components/ui/icon";
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
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SearchSection() {
  const { t } = useTranslation();

  const types = [
    "cabin",
    "apartment",
    "house",
    "studio",
    "office",
    "commercial",
    "villa",
  ];

const [type, setType] = useState("");
  const navigation = useNavigation();

  return (
    <>
      {/* Big Screen */}
      <View className="flex-1 md:flex hidden justify-between mb-10 items-center">
        <Heading
          size="3xl"
          className="mb-6 mt-36 mx-36 text-center font-bold tracking-wide dark:text-brandGreen-500"
        >
          {t("start_your_search")}
        </Heading>
<HStack className="bg-white p-6 shadow-lg rounded-xl dark:bg-gray-900">
  <View className="w-4" />
  {/* Property Type */}
  <Select onValueChange={setType} value={type}>
    <SelectTrigger variant="underlined" size="lg" className="rounded-none">
      <SelectInput placeholder={t("property_type")} />
      <SelectIcon className="mr-3" as={ChevronDownIcon} />
    </SelectTrigger>
    <SelectPortal>
      <SelectBackdrop />
      <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
        <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
        </SelectDragIndicatorWrapper>
        {types.map((type) => (
          <SelectItem key={type} label={t(type)} value={type} />
        ))}
      </SelectContent>
    </SelectPortal>
  </Select>
  <View className="w-4" />
  <Button
    onPress={() => navigation.navigate("SearchPage", { type })}
    className="bg-brandRed-500 dark:bg-brandBlue-500"
    variant="solid"
    action="primary"
    disabled={!type}
  >
    {t("search")}
  </Button>
</HStack>


      </View>

      {/* Small Screen */}
      <View className="flex sm:hidden items-center justify-center px-4 my-10">
<View className="w-full bg-white p-4 rounded-lg shadow-md dark:bg-gray-900 space-y-4">
  <Heading
    size="xl"
    className="text-center font-bold text-gray-800 dark:text-brandGreen-500"
  >
    {t("start_your_search")}
  </Heading>
  <Select onValueChange={setType} value={type}>
    <SelectTrigger variant="underlined" size="md" className="rounded-none">
      <SelectInput placeholder={t("property_type")} />
      <SelectIcon className="mr-3" as={ChevronDownIcon} />
    </SelectTrigger>
    <SelectPortal>
      <SelectBackdrop />
      <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
        <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
        </SelectDragIndicatorWrapper>
        {types.map((type) => (
          <SelectItem key={type} label={t(type)} value={type} />
        ))}
      </SelectContent>
    </SelectPortal>
  </Select>

  <Button
    className="bg-brandRed-500 dark:bg-brandBlue-500"
    variant="solid"
    action="primary"
    onPress={() => navigation.navigate("SearchPage", { type })}
    disabled={!type}
  >
    {t("search")}
  </Button>
</View>

      </View>
    </>
  );
}
