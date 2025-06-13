import React from 'react';
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

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Box className="bg-indigo-700 p-6 shadow-md dark:bg-gray-900">
        <Text className="text-white text-3xl dark:text-brandGreen-500 font-extrabold tracking-wide">
          Agent Profile
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
                source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                alt="Agent Avatar"
                className="border-4 border-indigo-600"
              />
              <Text className="text-2xl font-bold text-gray-900 dark:text-white">
                Samantha Carter
              </Text>
              <Text className="text-md text-indigo-600 font-semibold tracking-wide uppercase">
                Carter Realty Group
              </Text>

              {/* Contact info */}
              <VStack className="w-full space-y-2 px-6">
                <HStack className="items-center space-x-3">
                  <Text className="text-gray-600 font-medium">📞</Text>
                  <Text className="text-gray-800 text-lg font-semibold dark:text-white">
                    +1 (555) 123-4567
                  </Text>
                </HStack>
                <HStack className="items-center space-x-3">
                  <Text className="text-gray-600 font-medium">✉️</Text>
                  <Text className="text-gray-800 text-lg font-semibold dark:text-white">
                    samantha@carterrealty.com
                  </Text>
                </HStack>
                <HStack className="items-center space-x-3">
                  <Text className="text-gray-600 font-medium">🌐</Text>
                  <Text className="text-indigo-600 underline cursor-pointer dark:text-white">
                    www.carterrealty.com
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
                className="mt-6 bg-indigo-600 rounded-xl py-3 px-10 shadow-md hover:bg-white"
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
                <LinkText className="text-indigo-700 font-semibold border-b-2 border-indigo-700 pb-1">
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
                <Text className="text-base text-gray-800 dark:text-white">First Name</Text>
                <Input className="flex-1">
                  <InputField placeholder="First Name" defaultValue="Mohamed" />
                </Input>
                <Text className="text-base text-gray-800 dark:text-white">Last Name</Text>
                <Input className="flex-1">
                  <InputField placeholder="Last Name" defaultValue="Abouzrar" />
                </Input>
              </HStack>

              <HStack className="space-x-6">
                <Text className="text-base text-gray-800 dark:text-white">Phone Number</Text>
                <Input className="flex-1">
                  <InputField placeholder="Phone Number" defaultValue="(+212) 636834185" />
                </Input>
                <Text className="text-base text-gray-800 dark:text-white">Email</Text>
                <Input className="flex-1">
                  <InputField placeholder="Email" defaultValue="MohamedAbouzrar0@gmail" keyboardType="email-address" />
                </Input>
              </HStack>

              <HStack className="space-x-6">
                <Text className="text-base text-gray-800 dark:text-white">Agency</Text>
                <Input className="flex-1">
                  <InputField placeholder="Agency" defaultValue="dahmad botgmaw" />
                </Input>
                <Text className="text-base text-gray-800 dark:text-white">Website (optional)</Text>
                <Input className="flex-1">
                  <InputField placeholder="Website" defaultValue="www.carterrealty.com" />
                </Input>
              </HStack>

              {/* Modified Save Changes Button */}
              <Button
                className="mt-6 w-44 bg-brandRed-500 data-[hover=true]:bg-brandRed-300 dark:bg-brandBlue-500 dark:data-[hover=true]:bg-brandBlue-300 rounded items-center justify-center self-center"
              >
                <Text className="text-white font-semibold text-center">
                  Save Changes
                </Text>
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default ProfileScreen;
