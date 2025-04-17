import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Maps() {
  const { t, i18n } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">{t('welcome')}</Text>
      <Text className="text-lg font-bold">{i18n.t('welcome')}</Text>
    </View>
  );
}
