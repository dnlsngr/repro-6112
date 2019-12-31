import React from "react";
import * as Facebook from "expo-facebook";
import { StyleSheet, Button, View } from "react-native";

const FACEBOOK_APP_ID = <APP ID HERE>;
Facebook.initializeAsync(FACEBOOK_APP_ID, undefined);

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Login With Facebook"
        onPress={async () => {
          const result = await Facebook.logInWithReadPermissionsAsync({
            permissions: ["public_profile"]
          });
          console.log("Finished Facebook Login");
          console.log(result);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
