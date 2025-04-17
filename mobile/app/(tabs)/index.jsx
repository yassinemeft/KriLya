import { View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API_URL } from '../../ApiConfig'; // Import the API URL from config


export default function HomeScreen() {
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState(i18n.language.startsWith('fr') ? 'fr' : 'en');

  const toggleLanguage = () => {
    const localeMap = {
      'en': 'ar',
      'ar': 'fr',
      'fr': 'en'
    };
    const newLocale = localeMap[locale];
    setLocale(newLocale);
    i18n.changeLanguage(newLocale); // au lieu de i18n.locale = ...
  };

  useEffect(() => {
    axios.get(`${API_URL}/test`) // Use the API URL from the config file
      .then(response => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setMessage('Failed to connect to Laravel, Yassine');
        setLoading(false);
      });
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text>{t('welcome')}</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Text className="text-lg font-bold text-gray-800">{message}</Text>
      )}
      <Text className="mt-4 text-gray-600">--Yassine--</Text>
      <TouchableOpacity className="mt-4 px-4 py-2 bg-blue-500 rounded shadow-lg">
        <Text className="text-white font-bold">Test Button</Text>
      </TouchableOpacity>
      <Text className="text-primary text-lg font-bold mt-4">{t('This is Primary (Red)')}</Text>
      <Text className="text-secondary text-lg font-bold mt-4">This is Secondary (Blue)</Text>
      <Text className="text-tertiary text-lg font-bold mt-4">This is Tertiary (Green)</Text>

      <Text style={{ fontSize: 20 }}>{i18n.t('welcome')}</Text>
      <Button title={i18n.t('switch_language')} onPress={toggleLanguage} />
      <Button title="Français" onPress={() => i18n.changeLanguage('fr')} />
      <Button title="English" onPress={() => i18n.changeLanguage('en')} />
      <Button title="العربية" onPress={() => i18n.changeLanguage('ar')} />
    </View>
  );
}


