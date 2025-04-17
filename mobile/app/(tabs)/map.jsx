import { View, Text, Platform } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MapViewWithLocation from '@/components/map';

export default function MapScreen() {
  const { t } = useTranslation();

  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{t('map')}</Text>
        <Text>{t('error_message')}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapViewWithLocation />
    </View>
  );
}
