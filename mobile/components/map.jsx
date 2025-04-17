import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapViewWithLocation() {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.loading}>
        <Text>Map is not supported on the web platform.</Text>
      </View>
    );
  }

  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);

  const [houses, setHouses] = useState([
    {
      name: 'Home',
      latitude: 31.512778,
      longitude: -9.757278
    },
    {
      name: 'House 2',
      latitude: 31.514528,
      longitude: -9.756611

    },
    {
      name: 'House 3',
      latitude: 31.51625,
      longitude: -9.756722
    },
    {
      name: 'House 4',
      latitude: 31.50525,
      longitude: -9.755861

    },
    {
      name: 'House 5',
      latitude: 31.497306,
      longitude: -9.757778
    }
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
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
      {houses.map(house => (
        <Marker
          key={house.name}
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

