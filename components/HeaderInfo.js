import { View,StyleSheet,Image, Text, TouchableOpacity } from "react-native"

const leftArrow = require("../assets/left-arrow.png");
const dots = require("../assets/dots.png");
export const HeaderInfo = ({navigation}) => {

    return(
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={leftArrow}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
          </TouchableOpacity>
          <Text style={styles.text}>Detail</Text>
          <Image
            source={dots}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>
    )
}
const styles=StyleSheet.create({
        headerSection: {
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
          menuIconStyle: {
            width: 25,
          },
          faceIconStyle: {
            width: 32,
          },
          text:{
            fontSize:20,
            fontWeight:'600'
          }
        }
    )