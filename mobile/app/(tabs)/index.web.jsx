import { View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {  House } from "lucide-react-native";
import { ChevronDownIcon } from "@/components/ui/icon";
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

export default function HomeScreen() {
  const { t, i18n } = useTranslation();

  return (
    <View className="flex-1">
      {/* Fullscreen background image */}
      <Image
        source={require("@/assets/images/key.jpg")}
        alt="KriLya Background"
        className="absolute inset-0 w-full h-full object-cover"
        resizeMode="cover"
      />

      {/* Overlay content */}
      <HStack className="flex-1 justify-center items-center">
        <View className="flex flex-row w-full justify-center items-center m-20 z-10 px-4">
          <Input className="flex-row space-x-2 rounded-none bg-gray-100" variant="solid" action="primary">
        <View className="flex flex-row w-full  justify-center items-center m-20 z-10 px-4">
          <Input className="flex-row space-x-2 rounded-none " variant="solid" action="primary">
            <InputField placeholder={t("search_placeholder")} />
            <InputSlot>
              <InputIcon className="mr-3" as={House} />
            </InputSlot>
          </Input>
          <Select>
            <SelectTrigger variant="outline" size="md" className="rounded-none">
              <SelectInput placeholder={t("property_type")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label={t("apartment")} value="apartment" />
                <SelectItem label={t("house")} value="house" />
                <SelectItem label={t("studio")} value="studio" />
                <SelectItem label={t("office")} value="office" />
                <SelectItem label={t("commercial")} value="commercial" />
                <SelectItem label={t("villa")} value="villa" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <Select>
            <SelectTrigger variant="outline" size="md" className="rounded-none">
              <SelectInput placeholder={t("number_of_rooms")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label={`${1} ${t('room')}`} value="1" />
                <SelectItem label={`${2} ${t('rooms')}`} value="2" />
                <SelectItem label={`${3} ${t('rooms')}`} value="3" />
                <SelectItem label={`${4} ${t('rooms')}`} value="4" />
                <SelectItem label={`+${5} ${t('rooms')}`} value="5" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <Button className="outline rounded-none" onPress={() => console.log("Search")}>
          <Button className=" outline rounded-none" onPress={() => console.log("Search")}>
            {t("search")}
          </Button>
        </View>
      </HStack>
            <Button className="outline" title="Français" onPress={() => i18n.changeLanguage('fr')} />
            <Button className="outline" title="English" onPress={() => i18n.changeLanguage('en')} />
            <Button className="outline" title="العربية" onPress={() => i18n.changeLanguage('ar')} />
    </View>
  );
}
