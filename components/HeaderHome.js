import { View,StyleSheet,Image } from "react-native"

const menu = require("../assets/menu.png");
const face = require("../assets/face.png");
export const HeaderHome = () => {

    return(
        <View style={styles.headerSection}>
          <Image
            source={menu}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
          <Image
            source={face}
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
            width: 30,
          },
          faceIconStyle: {
            width: 40,
          },
        }
    )