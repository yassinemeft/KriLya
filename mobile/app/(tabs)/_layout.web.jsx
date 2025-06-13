import { Slot } from "expo-router";
import React, { useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Link, LinkText } from "@/components/ui/link";
import { Icon, SunIcon, MoonIcon, MenuIcon } from "@/components/ui/icon";
import { TwitterIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { HomeIcon } from "lucide-react";
import { GlobeIcon } from "lucide-react";

export default function TabLayout() {
  // Récupère le schéma de couleur du système (clair/sombre)
  const colorScheme = useColorScheme();
  // Récupère le thème actuel et la fonction pour le changer
  const { theme, toggleTheme } = useTheme();
  // Récupère la fonction de traduction et l'objet i18n
  const { t, i18n } = useTranslation();

  // État local pour la langue sélectionnée
  const [locale, setLocale] = useState(
    i18n.language.startsWith("ar") ? "ar" : "fr"
  );

  // Fonction pour basculer entre les langues
  const toggleLanguage = () => {
    const localeMap = { en: "ar", ar: "fr", fr: "en" };
    const newLocale = localeMap[locale];
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  };

  // Année courante pour le copyright
  const currentYear = new Date().getFullYear();

  // Couleurs du footer selon le thème
  const footerBg = theme === "light" ? "#1e40af" : "#000"; // fond du footer
  const footerTextPrimary = theme === "light" ? "white" : "#22c55e"; // texte principal
  const footerTextSecondary = theme === "light" ? "#cbd5e1" : "#6b7280"; // texte secondaire

  // Constantes de style du footer
  const logoWidth = 160;
  const logoHeight = 40;
  const titleFontSize = 18;
  const contactFontSize = 20;
  const copyrightFontSize = 20;
  const footerNoteFontSize = 15;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* =================== Navbar =================== */}
      <View style={{ width: "100%" }}>
        <HStack
          className="flex flex-row items-center justify-between h-14 px-7
        bg-brandBlue-500 text-white dark:bg-black dark:text-brandGreen-500 shadow"
        >
          {/* Logo (affiché sur desktop) */}
          <Image
            source={
              theme === "light"
                ? require("@/assets/images/logo.png")
                : require("@/assets/images/LOGO DARK.png")
            }
            alt="KriLya Logo"
            className="hidden sm:flex w-full max-w-[200px]"
            resizeMode="contain"
            size="xs"
          />
          {/* Menu burger (affiché sur mobile) */}
          <Icon className="sm:hidden flex" as={MenuIcon} />
          {/* Bouton pour changer le thème */}
          <Button onPress={toggleTheme}>
            <ButtonText>
              {theme === "light" ? (
                <Icon
                  className="text-typography-500"
                  as={SunIcon}
                  Style={{ size: 24 }}
                />
              ) : (
                <Icon
                  className="text-typography-500"
                  as={MoonIcon}
                  Style={{ size: 24 }}
                />
              )}
            </ButtonText>
          </Button>

          <Link href="/">
            <HStack className="items-center space-x-1">
              <Icon
                as={HomeIcon}
                size={20}
                className="text-white dark:text-brandGreen-500"
              />
              <Text className="text-white dark:text-brandGreen-500 text-lg font-semibold ">
                Home
              </Text>
            </HStack>
          </Link>

          {/* Liens de navigation (desktop) */}
          <HStack className="space-x-2 hidden sm:flex items-center">
            <HStack className="space-x-2 hidden sm:flex items-center">
              <Button variant="link" size="xs">
                <ButtonText>Sign in</ButtonText>
              </Button>
              <Divider orientation="vertical" className="hidden mx-2.5" />
              <Button variant="link" size="xs">
                <ButtonText>Sign up</ButtonText>
              </Button>
              {/* Bouton pour changer la langue */}
              <Button onPress={toggleLanguage}>
                <HStack className="items-center space-x-1">
                  <Icon
                    as={GlobeIcon}
                    size={20}
                    className="text-white dark:text-brandGreen-500"
                  />
                  <ButtonText>{t("switch_language")}</ButtonText>
                </HStack>
              </Button>
            </HStack>
          </HStack>
        </HStack>
      </View>

      {/* =================== Contenu principal + Footer =================== */}
      <ScrollView style={{ flex: 1 }}>
        {/* Affiche la page courante */}
        <Slot />
        <View style={{ height: 20 }} />
        {/* =================== Footer =================== */}
        <VStack
          style={{
            paddingVertical: 24,
            paddingHorizontal: 16,
            backgroundColor: footerBg,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo dans le footer */}
          <Image
            source={
              theme === "light"
                ? require("@/assets/images/logo.png")
                : require("@/assets/images/LOGO DARK.png")
            }
            alt="KriLya Logo"
            className="hidden sm:flex w-full max-w-[200px]"
            resizeMode="contain"
            marginBottom={16}
          />

          {/* Informations de contact */}
          <Text
            style={{
              color: footerTextPrimary,
              fontSize: titleFontSize,
              fontWeight: "700",
              marginBottom: 6,
            }}
          >
            {t("footer_contact_us")}
          </Text>
          <Link href="mailto:contact@krilya.com" style={{ marginBottom: 4 }}>
            <Text
              style={{ color: footerTextSecondary, fontSize: contactFontSize }}
            >
              {t("footer_email")} : contact@krilya.com
            </Text>
          </Link>
          <Link href="tel:+212612345678" style={{ marginBottom: 16 }}>
            <Text
              style={{ color: footerTextSecondary, fontSize: contactFontSize }}
            >
              {t("footer_phone")} : +212 6 12 34 56 78
            </Text>
          </Link>

          {/* Icônes des réseaux sociaux */}
          <HStack space={24} style={{ marginBottom: 20 }}>
            <Link
              href="https://twitter.com/krilya"
              target="_blank"
              accessibilityLabel="Twitter"
            >
              <Icon as={TwitterIcon} color={footerTextPrimary} size={28} />
            </Link>
            <Link
              href="https://facebook.com/krilya"
              target="_blank"
              accessibilityLabel="Facebook"
            >
              <Icon as={FacebookIcon} color={footerTextPrimary} size={28} />
            </Link>
            <Link
              href="https://instagram.com/krilya"
              target="_blank"
              accessibilityLabel="Instagram"
            >
              <Icon as={InstagramIcon} color={footerTextPrimary} size={28} />
            </Link>
          </HStack>

          {/* Copyright */}
          <Text
            style={{
              color: footerTextPrimary,
              fontSize: copyrightFontSize,
              fontWeight: "600",
              marginBottom: 2,
            }}
          >
            {t("footer_rights")}
          </Text>
          {/* Note de remerciement */}
          <Text
            style={{ color: footerTextSecondary, fontSize: footerNoteFontSize }}
          >
            {t("footer_thanks")}
          </Text>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
