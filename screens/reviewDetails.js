import { React } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import { Card } from "../component/card";
import { images } from "../styles/global";

export default function ReviewDetails() {
  const route = useRoute();
  const rating = route.params.item.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.item.title}</Text>
        <Text>{route.params.item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
