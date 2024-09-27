import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView className="flex-1 p-8 justify-center">
      <View className="flex-1 justify-center">
        <View className="items-center mb-12">
          <Text className="text-3xl text-primary font-bold mb-3">ADMIN LOGIN</Text>
          <Text className="font-regular text-lg text-center max-w-xs">
            Enter your credentials for GP/PHED
          </Text>
        </View>

        <View className="mb-12">
          <AppTextInput placeholder="UserID / Mobile Number" />
          <AppTextInput placeholder="Password" secureTextEntry />
          {/* <AppTextInput placeholder="Confirm Password" secureTextEntry /> */}
        </View>

        <TouchableOpacity className="bg-primary py-3 rounded-lg shadow-lg mb-6">
          <Text className="font-bold text-white text-lg text-center">
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Login")} className="py-2">
          <Text className="font-semibold text-text text-center text-sm">
            Already have an account?
          </Text>
        </TouchableOpacity>

        <View className="mt-12">
          <Text className="font-semibold text-primary text-center text-sm mb-2">
            Or continue with
          </Text>

          <View className="flex-row justify-center mt-2">
            {['logo-google', 'logo-apple', 'logo-facebook'].map((icon, index) => (
              <TouchableOpacity key={index} className="bg-gray-300 rounded-full p-3 mx-2">
                <Ionicons name={icon} color="#000" size={24} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
