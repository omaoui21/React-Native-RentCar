import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { HeaderHome } from "../components/HeaderHome";
import vehiclesData from '../data/Vehicles'; // Corrected import
import { Card } from "../components/Card";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";

export const HomeScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [noResults, setNoResults] = useState(false);
  const renderItem = ({ item }) => (
    <Card vehicle={item} navigation={navigation} />
  );

  useEffect(()=>{
    setIsSearching(true);
    const searchTime=setTimeout(()=>{
        const searchData=vehiclesData.vehicles.filter((car)=>
            car.make.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(searchData);
        setIsSearching(false);
      setNoResults(searchData.length === 0);
    },1000)
    return () => clearTimeout(searchTime);
  },[searchQuery])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderHome />
        <Text style={{fontSize:30,fontWeight:'700',marginBottom:10}}>Rent a Car</Text>
        <Searchbar 
        iconColor="grey" 
        style={{ backgroundColor: "#fff" }} 
        placeholder="Search for a car"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery} />
        <View style={styles.typesSection}>
          <Text style={styles.typesTextActive}>All</Text>
          <Text style={styles.typesText}>Dacia</Text>
          <Text style={styles.typesText}>Peugeot</Text>
          <Text style={styles.typesText}>Renault</Text>
        </View>
        {isSearching ? (
        <ActivityIndicator style={{marginTop:200}} animating={true} color='#000' size={'large'} />
      ) : noResults ? (
        <Text style={styles.noResultsText}>No Car found for '{searchQuery}'</Text>
      ) : (
        <FlatList style={styles.lists}
          data={filteredData.length > 0 ? filteredData : vehiclesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Use toString() to ensure a string key
        />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  lists:{
    marginTop:20
  },
  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },
});
