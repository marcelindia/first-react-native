import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Hello Diana!!</Text>
      <Button
        title="Press Me"
        onPress={() => Alert.alert("You pressed the button!")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 40,
    color: "white",
    fontWeight: "900",
    fontFamily: "Arial",
  },
});
