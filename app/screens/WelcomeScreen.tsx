import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView  className="flex-1 bg-background">
      <View className="flex-1 justify-center align-center">
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="cover"
          source={require("../assets/images/welcome-img.png")}
        />
        <View style={styles.textContainer}>
          <Text className="text-3xl text-primary font-bold text-center mb-4">
            Discover Your Dream Job Here
          </Text>
          <Text className="text-sm text-gray-600 font-normal text-center mt-4">
            Explore all the existing job roles based on your interest and study major.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigate("Login")}
            style={styles.loginButton}
          >
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Register")}
            style={styles.registerButton}
          >
            <Text style={styles.buttonTextDark}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageBackground: {
    height: height /2,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 2,
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
    marginBottom: Spacing,
  },
  subtitle: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
    marginTop: Spacing,
  },
  buttonContainer: {
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
  },
  loginButton: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  registerButton: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "48%",
    borderRadius: Spacing,
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
  buttonTextDark: {
    fontFamily: Font["poppins-bold"],
    color: Colors.primary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});
