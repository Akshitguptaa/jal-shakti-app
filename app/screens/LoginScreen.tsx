import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // You can add validation or API calls here
    navigate("Home");
  };

  return (
    <SafeAreaView className="flex-1 p-8">
      <View className="flex-1 justify-center">
        <View className="items-center mb-12">
          <Text className="text-3xl text-primary font-bold mb-3">Login Here</Text>
          <Text className="font-semibold text-lg text-center max-w-xs">
            Welcome back, you've been missed!
          </Text>
        </View>
        
        <View className="mb-12">
          <AppTextInput
            placeholder="Customer Id"
            value={customerId}
            onChangeText={setCustomerId} // Handle input change
          />
          <AppTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword} // Handle input change
          />
        </View>

        <Text className="font-semibold text-sm text-primary self-end mb-3">
          Forgot your password?
        </Text>

        <TouchableOpacity 
          className="bg-primary py-3 rounded-lg shadow-lg mb-6"
          onPress={handleSignIn}
        >
          <Text className="font-bold text-white text-lg text-center">
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate("Register")} className="py-2">
          <Text className="font-semibold text-text text-center text-sm">
            Create a new account
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

export default LoginScreen;
