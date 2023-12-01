import React from "react";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { View, Text, StyleSheet } from "react-native";

const CourtFinder = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        return;
        const { coords } = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      } else {
        console.log("Location permission denied");
      }
    } catch (error) {
      console.log("Error fetching location:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <Text style={styles.text}>Latitude: {location.latitude}</Text>
          <Text style={styles.text}>Longitude: {location.longitude}</Text>
        </>
      ) : (
        <Text style={styles.text}>Fetching location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CourtFinder;
