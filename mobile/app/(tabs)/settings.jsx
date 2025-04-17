import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';// i18n is used to change the language dynamically


export default function Contact() {
    const { t, i18n } = useTranslation();// i18n is used to change the language dynamically
  

  return (
    <View>
      <Text>Page de setttings</Text>
            <Text>{t('welcome')}</Text>
      
    </View>
  );
}
