import React, { useEffect, useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Pressable } from '@/components/ui/pressable';
import { Divider } from '@/components/ui/divider';
import { Link, LinkText } from '@/components/ui/link';
import { useTranslation } from 'react-i18next';
import { API_URL } from "../../ApiConfig";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
        if (!response.data) {
          navigation.replace('Login'); // redirige vers login si pas connecté
          return;
        }
        setUser(response.data);
        console.log('Utilisateur :', response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération de l’utilisateur :', error);
        navigation.replace('Login'); // redirige vers login en cas d’erreur
      }
    };

    fetchUser();
  }, [navigation]);

  if (!user) {
    return (
      <Box className="flex-1 justify-center items-center">
        <Text className="text-gray-700 dark:text-white">{t("loading")}</Text>
      </Box>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Box className="bg-indigo-700 p-6 shadow-md dark:bg-gray-900">
        <Text className="text-white text-3xl dark:text-brandGreen-500 font-extrabold tracking-wide">
          {t('profile')}
        </Text>
      </Box>

      <Box className="p-6">
        <HStack
          className="flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0"
          alignItems="flex-start"
        >
          {/* Agent Card */}
          <Box className="bg-white rounded-3xl shadow-xl p-6 w-full md:w-1/3 dark:bg-gray-900">
            <VStack className="items-center space-y-5">
              <Avatar
                size="3xl"
                source={{ uri: user.avatar || 'https://i.pravatar.cc/150?img=12' }}
                alt="User Avatar"
                className="border-4 border-indigo-600"
              />
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.fullName || user.name || 'Nom Utilisateur'}
              </Text>
              <Text className="text-md text-indigo-600 font-semibold tracking-wide uppercase">
                {user.company || 'Entreprise'}
              </Text>

              {/* Contact info */}
              <VStack className="w-full space-y-2 px-6">
                <HStack className="items-center space-x-3">
                  <Text className="text-gray-600 font-medium">📞</Text>
                  <Text className="text-gray-800 text-lg font-semibold dark:text-white">
                    {user.phone || "+1 (555) 123-4567"}
                  </Text>
                </HStack>
                <HStack className="items-center space-x-3">
                  <Text className="text-gray-600 font-medium">✉️</Text>
                  <Text className="text-gray-800 text-lg font-semibold dark:text-white">
                    {user.email}
                  </Text>
                </HStack>
                <HStack className="items-center space-x-3">
                  <Text className="text-gray-600 font-medium">🌐</Text>
                  <Text className="text-indigo-600 underline cursor-pointer dark:text-white">
                    {user.website || "www.example.com"}
                  </Text>
                </HStack>
              </VStack>

              <Divider className="w-full my-5" />

              {/* Real estate stats */}
              <VStack className="space-y-3 w-full px-6">
                <HStack justifyContent="space-between">
                  <Text className="text-gray-700 font-medium dark:text-white">Properties Sold</Text>
                  <Text className="font-bold text-indigo-700 dark:text-white">128</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text className="text-gray-700 font-medium dark:text-white">Active Listings</Text>
                  <Text className="font-bold text-indigo-700 dark:text-white">9</Text>
                </HStack>
                <HStack justifyContent="space-between">
                  <Text className="text-gray-700 font-medium dark:text-white">Client Reviews</Text>
                  <Text className="font-bold text-indigo-700 dark:text-white">57</Text>
                </HStack>
              </VStack>

              <Pressable
                className="mt-6 bg-indigo-600 rounded-xl py-3 px-10 shadow-md hover:bg-white " 
                _pressed={{ bg: 'indigo.800' }}
              >
                <Text className="text-black font-semibold text-lg text-center dark:text-white">
                  Contact Agent
                </Text>
              </Pressable>
            </VStack>
          </Box>

          {/* Edit Profile Form */}
          <Box className="bg-white rounded-3xl shadow-xl p-8 flex-1 dark:bg-gray-900">
            {/* Tabs */}
            <HStack className="space-x-10 mb-6 border-b border-gray-200 pb-3">
              <Link onPress={() => Alert.alert('Account Info clicked')}>
                <LinkText className="text-indigo-700 font-semibold border-b-2 border-indigo-700 pb-1 ">
                  Account Info
                </LinkText>
              </Link>
              <Link onPress={() => Alert.alert('Reviews clicked')}>
                <LinkText className="text-indigo-700 font-semibold border-b-2 border-indigo-700 pb-1">
                  Reviews
                </LinkText>
              </Link>
              <Link onPress={() => Alert.alert('Settings clicked')}>
                <LinkText className="text-indigo-700 font-semibold border-b-2 border-indigo-700 pb-1">
                  Settings
                </LinkText>
              </Link>
            </HStack>

            {/* Form inputs */}
            <VStack className="space-y-6">
              <HStack className="space-x-6">
                <Text>First Name</Text>
                <Input className="flex-1">
                  <InputField placeholder="First Name" defaultValue={user.firstName || "Mohamed"} />
                </Input>
                <Text>Last Name</Text>
                <Input className="flex-1">
                  <InputField placeholder="Last Name" defaultValue={user.lastName || "Abouzrar"} />
                </Input>
              </HStack>

              <HStack className="space-x-6">
                <Text>Phone Number</Text>
                <Input className="flex-1">
                  <InputField placeholder="Phone Number" defaultValue={user.phone || "(+212) 636834185"} />
                </Input>
                <Text>Email</Text>
                <Input className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-base text-gray-800 dark:text-white">
                  <InputField placeholder="Email" defaultValue={user.email || "MohamedAbouzrar0@gmail.com"} keyboardType="email-address" />
                </Input>
              </HStack>

              <HStack className="space-x-6">
                <Text>Agency</Text>
                <Input className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-base text-gray-800 dark:text-white">
                  <InputField placeholder="Agency" defaultValue={user.company || "dahmad botgmaw"} />
                </Input>
                <Text>Website (optional)</Text>
                <Input className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-base text-gray-800 dark:text-white">
                  <InputField placeholder="Website" defaultValue={user.website || "www.carterrealty.com"} />
                </Input>
              </HStack>

              <Button
                className="bg-indigo-700 rounded-xl py-3 px-10 self-start shadow-lg hover:bg-indigo-800 active:bg-indigo-900"
                _pressed={{ bg: 'indigo.800' }}
              >
                <Text className="text-black  font-semibold dark:text-white">Save Changes</Text>
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default ProfileScreen;
