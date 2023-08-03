import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { Image, View, Text, StyleSheet } from "react-native";

const RootDrawerNavigator = createDrawerNavigator();

function MyDrawer() {
  return (
    <RootDrawerNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "cadetblue",
        },
        headerTintColor: "white",
        drawerContentStyle: {
          backgroundColor: "cadetblue",
        },
        drawerActiveBackgroundColor: "white",
        drawerStyle: {
          color: "black",
        },
        drawerActiveTintColor: "cadetblue",
        headerTitle: (props) => (
          <View {...props} style={styles.header}>
            <Image
              source={require("../assets/heart_logo.png")}
              style={styles.img}
            />
            <Text style={styles.headerText}>GameZone</Text>
          </View>
        ),
      }}>
      <RootDrawerNavigator.Screen name="GameZone Home" component={HomeStack} />
      <RootDrawerNavigator.Screen
        name="About GameZone"
        component={AboutStack}
      />
    </RootDrawerNavigator.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
  },
  img: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
