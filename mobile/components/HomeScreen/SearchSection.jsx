/* ─── SearchSection.jsx ─────────────────────────────── */
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react-native";
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

export default function SearchSection() {
  const { t } = useTranslation();

  const types = ["apartment", "house", "studio", "office", "commercial", "villa"];

  return (
    <>
      {/* Big Screen */}
      <View className="flex-1 md:flex hidden justify-center mb-10 items-center">
        <Heading
          size="3xl"
          className="mb-6 mt-36 mx-36 text-center font-bold tracking-wide dark:text-brandGreen-500"
        >
          {t("start_your_search")}
        </Heading>
        <HStack className="max-w-7xl bg-white p-6 shadow-lg rounded-xl dark:bg-gray-900">
          {/* Input */}
          <Input className="flex-1 bg-transparent" variant="underlined" size="lg">
            <InputField placeholder={t("search_placeholder")} className="rounded-none" />
            <InputSlot>
              <InputIcon className="mr-3" as={House} />
            </InputSlot>
          </Input>

          <View className="w-4" />

          {/* Property Type */}
          <Select>
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

          {/* Number of Rooms */}
          <Select>
            <SelectTrigger variant="underlined" size="lg" className="rounded-none">
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
                  <SelectItem key={num} label={`${num} ${t("room", { count: num })}`} value={num.toString()} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>

          <View className="w-4" />

          <Button
            className="bg-brandRed-500 dark:bg-brandBlue-500"
            variant="solid"
            action="primary"
            onPress={() => console.log("Search")}
          >
            {t("search")}
          </Button>
        </HStack>
      </View>

      {/* Small Screen */}
      <View className="flex sm:hidden items-center justify-center px-4 my-10">
        <View className="w-full bg-white p-4 rounded-lg shadow-md dark:bg-gray-900 space-y-4">
          <Heading size="xl" className="text-center font-bold text-gray-800 dark:text-brandGreen-500">
            {t("start_your_search")}
          </Heading>
          <Input className="bg-transparent" variant="underlined" size="md">
            <InputField placeholder={t("search_placeholder")} className="rounded-none" />
            <InputSlot>
              <InputIcon className="mr-3" as={House} />
            </InputSlot>
          </Input>

          <Select>
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

          <Select>
            <SelectTrigger variant="underlined" size="md" className="rounded-none">
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
                  <SelectItem key={num} label={`${num} ${t("room", { count: num })}`} value={num.toString()} />
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
    </>
  );
}
// This component is a search section for a real estate application. It includes an input field for searching properties, dropdowns for selecting property type and number of rooms, and a search button. The layout is responsive, adapting to both large and small screens.


