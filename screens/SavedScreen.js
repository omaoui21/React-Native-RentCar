import { StyleSheet, Text, View } from "react-native"

export const SavedScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>Saved Screen</Text>
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