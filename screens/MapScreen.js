import { StyleSheet, Text, View } from "react-native"

export const MapScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>Map Screen</Text>
        </View>
    )
}
const styles=StyleSheet.create(
{container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},}
)