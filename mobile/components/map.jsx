import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useTranslation } from 'react-i18next';

export default function MapViewWithLocation() {
  const { t } = useTranslation();

  if (Platform.OS === 'web') {
    return (
      <View style={styles.loading}>
        <Text>{t('map')}</Text>
        <Text>{t('error_message')}</Text>
      </View>
    );
  }

  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);

  const [houses, setHouses] = useState([
    {
      name: t('home'),
      latitude: 31.512778,
      longitude: -9.757278,
    },
    {
      name: t('house_2'),
      latitude: 31.514528,
      longitude: -9.756611,
    },
    {
      name: t('house_3'),
      latitude: 31.51625,
      longitude: -9.756722,
    },
    {
      name: t('house_4'),
      latitude: 31.50525,
      longitude: -9.755861,
    },
    {
      name: t('house_5'),
      latitude: 31.497306,
      longitude: -9.757778,
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log(t('error_message'));
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setLocation(currentLocation.coords);
      setRegion(coords);
    })();
  }, []);

  if (!region) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>{t('loading')}</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      region={region}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {houses.map((house, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: house.latitude, longitude: house.longitude }}
          title={house.name}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

