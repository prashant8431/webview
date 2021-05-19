import React, { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  BackHandler,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go close the App?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://google.com" }} //add url
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator color="black" size="large" />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
