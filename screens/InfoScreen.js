import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { HeaderInfo } from "../components/HeaderInfo";
import vehiclesData from '../data/Vehicles'; // Corrected import

export const InfoScreen = ({ navigation, route }) => {
    
  const vehicleId = route.params.vehicleId;

  const vehicle = vehiclesData.vehicles.find((element) => element.id === vehicleId);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderInfo navigation={navigation} />
        <Image style={styles.img} source={vehicle.properties.imageUrl} resizeMode="contain" />
        <View style={styles.headSection}>
          <View style={styles.topTextArea}>
            <Text style={styles.makemodelText}>
              {vehicle.make} {vehicle.model}
            </Text>
            <Text style={styles.price}>
              <Text style={styles.amount}>${vehicle.price_per_day}</Text> /day
            </Text>
          </View>
          <Text style={styles.typetranText}>
            {vehicle.type}-{vehicle.transmission}
          </Text>
        </View>
        <Text style={styles.descriptionText}>{vehicle.description}</Text>
        <Text style={styles.propertiesText}>Properties</Text>
        <View style={styles.propertiesArea}>
          <View style={styles.level}>
            <Text style={styles.propertyText}>
              Motor power:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.motor_power_hp} hp
              </Text>
            </Text>
            <Text style={styles.propertyText}>
              Engine capacity:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.engine_capacity_cc} cc
              </Text>
            </Text>
          </View>
          <View style={styles.level}>
            <Text style={styles.propertyText}>
              Fuel:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.fuel_type}
              </Text>
            </Text>

            <Text style={styles.propertyText}>
              Traction:
              <Text style={styles.valueText}>
                {" "}
                {vehicle.properties.traction}
              </Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.rentButton}>
          <Text style={styles.rentButtonText}>Rent a Car</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  img: {
    width: 280,
    height: 270,
  },

  topTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  price: {
    fontWeight: "400",
  },
  amount: {
    fontWeight: "bold",
  },
  typetranText: {
    marginTop: 1,
    color: "#696969",
    fontWeight: "600",
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: "#696969",
    fontWeight: "500",
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "500",
  },
  propertiesArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: "#696969",
  },
  valueText: {
    fontSize: 12,
    color: "black",
  },
  rentButton: {
    marginTop: 50,
    height: 40,
    // padding: 10,
    alignSelf: "center",
    width: 250,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rentButtonText: {
    color: "white",
    fontWeight: "500",
  },
});
