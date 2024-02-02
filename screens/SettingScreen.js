import { StyleSheet, Text, View } from "react-native"

export const SettingScreen = ()=>{
    return(
        <View style={styles.container}>
            <Text>Setting Screen</Text>
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