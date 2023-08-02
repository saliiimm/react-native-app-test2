import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "cadetblue",
        },
        headerTintColor: "white",
        headerShown: false,
      }}>
      <Stack.Screen name="About gameZone" component={About} />
    </Stack.Navigator>
  );
}

export default AboutStack;
