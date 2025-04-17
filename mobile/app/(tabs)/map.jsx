import { View, Text, Platform } from 'react-native';
import React from 'react';
import MapViewWithLocation from '@/components/map';

export default function MapScreen() {
  if (Platform.OS === 'web') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map is not supported on the web platform.</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <MapViewWithLocation />
      </View>
    );
  }

  
}
