import "react-native-gesture-handler";
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
} from "@expo-google-fonts/nunito";
import MyDrawer from "./routes/drawerNav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
