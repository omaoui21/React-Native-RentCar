// Card.js
import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export const Card = ({ vehicle, navigation }) => {
  const onPress = () => {
    // Handle the press event if needed
  };

  return (
    <TouchableOpacity
    style={styles.element}
    activeOpacity={0.8}
    onPress={onPress}>
      <View style={styles.infoArea}>
        <Text style={styles.infoTitle}>{vehicle.make} {vehicle.model}</Text>
        <Text style={styles.infoSub}>{vehicle.type}-{vehicle.transmission}</Text>
        <Text style={styles.infoPrice}>
          <Text style={styles.infoAmount}>${vehicle.price_per_day} </Text>/day
        </Text>
      </View>
      <View style={styles.imageArea}>
        <Image
          source={vehicle.properties.imageUrl} // Access imageUrl property
          style={styles.vehicleImage}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    element: {
        height: 100,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 13,
        
      },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "140%",
    height: "140%",
  },
});

export default Card;
