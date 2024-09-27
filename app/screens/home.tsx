import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window'); // Get device width for carousel

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  const [currentIndex, setCurrentIndex] = useState(0); // State for tracking current slide index

  const images = [
    {
      uri: 'https://assets-news.housing.com/news/wp-content/uploads/2021/06/14175932/A-guide-to-water-conservation-methods-and-its-importance-FB-1200x700-compressed.jpg',
      title: 'Government Water Conservation Scheme',
      description: 'Learn more about water conservation efforts in your area.',
    },
    {
      uri: 'https://www.smsfoundation.org/wp-content/uploads/2020/07/pic-1-blog.jpg',
      title: 'Upcoming Village Meeting',
      description: 'Join the village meeting to discuss water management strategies.',
    },
    {
      uri: 'https://www.smsfoundation.org/wp-content/uploads/2020/07/pic-1-blog.jpg',
      title: 'Water Supply Infrastructure Update',
      description: 'Updates on the new water pipeline installation in your village.',
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => handleNavigation('Notifications')}>
          <Icon name="notifications-outline" size={26} color="#4f6dff" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => handleNavigation('Profile')}>
          <Icon name="person-outline" size={26} color="#4f6dff" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleScroll = (event: any) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slide !== currentIndex) {
      setCurrentIndex(slide);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="p-5 items-center bg-blue-700 rounded-b-lg shadow">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {images.map((image, index) => (
              <View key={index} style={{ width }} className="items-center">
                <Image source={{ uri: image.uri }} className="w-full h-48 rounded-lg mb-2" />
                <Text className="text-white text-center text-xl font-semibold mb-1">{image.title}</Text>
                <Text className="text-white text-center text-md mb-2">{image.description}</Text>
              </View>
            ))}
          </ScrollView>

          <View className="flex-row mt-3">
            {images.map((_, index) => (
              <View
                key={index}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: currentIndex === index ? '#fff' : 'rgba(255, 255, 255, 0.4)',
                  marginHorizontal: 4,
                }}
              />
            ))}
          </View>

          <TouchableOpacity className="bg-yellow-500 p-4 rounded-lg mt-2 shadow">
            <Text className="font-bold text-black">Join Us</Text>
          </TouchableOpacity>
        </View>

        <View className="p-5 flex-row justify-between">
          <View className="bg-white rounded-lg shadow p-5 flex-1 mr-2">
            <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Current Weather</Text>
            <Text className="text-4xl font-bold text-center">Sunny, 28°C</Text>
          </View>
          <View className="bg-white rounded-lg shadow p-5 flex-1 ml-2">
            <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Current Location</Text>
            <Text className="text-xl text-center">Village XYZ</Text>
          </View>
        </View>

        <View className="p-5 bg-white rounded-lg shadow mb-5">
          <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Quick Access</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
            <TouchableOpacity className="bg-indigo-100 p-4 rounded-lg mr-2" onPress={() => handleNavigation('AssetTracking')}>
              <Text className="text-blue-700 font-bold">GIS Asset Tracking</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-indigo-100 p-4 rounded-lg mr-2" onPress={() => handleNavigation('Inventory')}>
              <Text className="text-blue-700 font-bold">Inventory Management</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-indigo-100 p-4 rounded-lg mr-2" onPress={() => handleNavigation('Financial')}>
              <Text className="text-blue-700 font-bold">Financial Management</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-indigo-100 p-4 rounded-lg" onPress={() => handleNavigation('Billing')}>
              <Text className="text-blue-700 font-bold">Billing & Payments</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>


        <View className="p-5 bg-white rounded-lg shadow mb-5">
          <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Quick Stats</Text>
          <View className="flex-row justify-between mb-4">
            <View className="bg-indigo-100 p-4 rounded-lg items-center flex-1 mr-2">
              <Text className="text-blue-700 text-3xl font-bold">12</Text>
              <Text className="text-gray-600">New Requests</Text>
            </View>
            <View className="bg-indigo-100 p-4 rounded-lg items-center flex-1 ml-2">
              <Text className="text-blue-700 text-3xl font-bold">5</Text>
              <Text className="text-gray-600">Pending Repairs</Text>
            </View>
          </View>
        </View>

        <View className="p-5 bg-white rounded-lg shadow mb-5">
          <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Water Supply Metrics</Text>
          <View className="flex-row justify-between mb-4">
            <View className="bg-indigo-100 p-4 rounded-lg items-center flex-1 mr-2">
              <Text className="text-blue-700 text-3xl font-bold">5000</Text>
              <Text className="text-gray-600">Litres Supplied</Text>
            </View>
            <View className="bg-indigo-100 p-4 rounded-lg items-center flex-1 ml-2">
              <Text className="text-blue-700 text-3xl font-bold">45%</Text>
              <Text className="text-gray-600">Usage Efficiency</Text>
            </View>
          </View>
          <View className="flex-row justify-between">
            <View className="bg-indigo-100 p-4 rounded-lg items-center flex-1 mr-2">
              <Text className="text-blue-700 text-3xl font-bold">100</Text>
              <Text className="text-gray-600">Villages Connected</Text>
            </View>
            <View className="bg-indigo-100 p-4 rounded-lg items-center flex-1 ml-2">
              <Text className="text-blue-700 text-3xl font-bold">10</Text>
              <Text className="text-gray-600">Repair Requests</Text>
            </View>
          </View>
        </View>

        <View className="p-5 bg-white rounded-lg shadow mb-5">
          <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Recent Activities</Text>
          <Text className="text-gray-600">- Requested maintenance on water pipe.</Text>
          <Text className="text-gray-600">- Updated billing information.</Text>
        </View>

        <View className="p-5 bg-white rounded-lg shadow mb-5">
          <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Latest News & Updates</Text>
          <Text className="text-gray-600">- New water supply project initiated in your area.</Text>
          <Text className="text-gray-600">- Upcoming public meeting on water quality next week.</Text>
        </View>

        <View className="p-5 bg-white rounded-lg shadow mb-5">
          <Text className="text-blue-700 text-2xl font-bold text-center mb-3">Emergency Services</Text>
          <Text className="text-gray-600">- 24/7 Helpline: 1800-XXX-XXXX</Text>
          <Text className="text-gray-600">- Report Issues: Call 101</Text>
        </View>

        <TouchableOpacity className="bg-blue-700 p-4 rounded-lg mb-2 items-center" onPress={() => handleNavigation('Feedback')}>
          <Text className="text-white font-bold">Give Feedback</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around p-3 bg-white border-t border-gray-300">
        <TouchableOpacity onPress={() => handleNavigation('Home')} className="items-center">
          <Icon name="home-outline" size={26} color="#4f6dff" />
          <Text className="text-xs text-blue-700">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Profile')} className="items-center">
          <Icon name="person-outline" size={26} color="#4f6dff" />
          <Text className="text-xs text-blue-700">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Activities')} className="items-center">
          <Icon name="list-outline" size={26} color="#4f6dff" />
          <Text className="text-xs text-blue-700">Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Settings')} className="items-center">
          <Icon name="settings-outline" size={26} color="#4f6dff" />
          <Text className="text-xs text-blue-700">Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;