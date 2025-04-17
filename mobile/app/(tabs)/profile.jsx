import { View, Text } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">{t('profile')}</Text>
    </View>
  );
}