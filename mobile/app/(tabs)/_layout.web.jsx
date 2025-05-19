import { Slot, Tabs } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Link, LinkText } from "@/components/ui/link";
import { Icon, SunIcon, MoonIcon, MenuIcon } from "@/components/ui/icon";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useTheme } from "@/components/theme/ThemeProvider";
import { View, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import "../../i18n"; // Load translations
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { theme, toggleTheme } = useTheme();

  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState(
    i18n.language.startsWith("ar") ? "ar" : "fr"
  );

  const toggleLanguage = () => {
    const localeMap = {
      en: "ar",
      ar: "fr",
      fr: "en",
    };
    const newLocale = localeMap[locale];
    setLocale(newLocale);
    i18n.changeLanguage(newLocale); // au lieu de i18n.locale = ...
  };

  return (
    <ScrollView>
      <HStack
        className="flex flex-row items-center justify-between h-14 px-7
      bg-brandBlue-500 text-white dark:bg-black dark:text-brandGreen-500 shadow"
      >
        <Image
          source={require("@/assets/images/logo.png")}
          alt="KriLya Logo"
          className="hidden sm:flex w-full max-w-[200px]"
          resizeMode="contain"
          size="xs"
        />
        <Icon className="sm:hidden flex" as={MenuIcon} />
        <Button onPress={toggleTheme}>
          <ButtonText>
            {theme === "light" ? (
              <Icon className="text-typography-500" as={SunIcon} />
            ) : (
              <Icon className="text-typography-500" as={MoonIcon} />
            )}
          </ButtonText>
        </Button>
        <Button  onPress={toggleLanguage}>
          <ButtonText>{t("switch_language")}</ButtonText>
        </Button>

        <HStack className="space-x-2 hidden sm:flex items-center">
          <Button variant="link" size="xs">
            <ButtonText>Github</ButtonText>
          </Button>
          <Divider orientation="vertical" className="hidden mx-2.5" />
          <Button variant="link" size="xs">
            <ButtonText>Twitter</ButtonText>
          </Button>
        </HStack>

        <HStack className="space-x-2 hidden sm:flex items-center">
          <Link href="/login">
            <LinkText>Sign in</LinkText>
          </Link>
          <Divider orientation="vertical" className="mx-2.5" />
          <Link href="/register">
            <LinkText>Sign up</LinkText>
          </Link>
        </HStack>
      </HStack>
      <Slot />
    </ScrollView>
  );
}
