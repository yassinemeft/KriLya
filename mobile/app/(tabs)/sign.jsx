import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { card } from '@/components/ui/card';


export default function SignScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-bold">{t('sign')}</Text>
        <TextInput
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder={t('username')}
        />
        <TextInput
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder={t('password')}
            secureTextEntry
        />
        <Button title={t('sign')} onPress={() => console.log('Signing in...')} />
    </View>
  );
}