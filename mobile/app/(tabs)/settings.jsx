import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">{t('settings')}</Text>
      <Button title="Français" onPress={() => i18n.changeLanguage('fr')} />
      <Button title="English" onPress={() => i18n.changeLanguage('en')} />
      <Button title="العربية" onPress={() => i18n.changeLanguage('ar')} />
    </View>
  );
}
