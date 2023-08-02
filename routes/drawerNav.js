import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

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
