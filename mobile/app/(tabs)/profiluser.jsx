import React from 'react';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Pressable } from '@/components/ui/pressable';
import { Divider } from '@/components/ui/divider';
import { Alert } from 'react-native';
import { Link, LinkText } from '@/components/ui/link';
import { ScrollView, View } from 'react-native'; // Added View
import { Badge } from '@/components/ui/badge';

const ClientProfileScreen = () => {
  return (
    <ScrollView className="overflow-y-auto flex-1 bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <Box className="bg-blue-700 shadow p-4 items-center dark:bg-black">
        <Text className="text-white text-2xl font-bold dark:text-brandGreen-500">Agent Profile</Text>
      </Box>

      {/* Centered Container */}
      <View className="items-center p-4">
        {/* Profile Card */}
        <Box className="bg-white rounded-2xl shadow-md p-4 w-full max-w-md dark:bg-gray-900">
          <VStack className="items-center space-y-4">
            <Avatar
              size="2xl"
              source={{ uri: 'https://i.pravatar.cc/150?img=10' }}
            />
            <Text className="text-xl font-bold">Nathaniel Poole</Text>
            <Text className="text-sm text-gray-500 dark:text-white">Real Estate Consultant</Text>
            <Text className="text-sm text-gray-500 dark:text-white">Microsoft Inc. Realty Division</Text>
            <Badge className="mt-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full px-2 py-1">
              Verified Agent
            </Badge>
          </VStack>

          <Divider className="my-4" />
       
          <VStack className="space-y-2">
            <Text className="font-semibold text-sm items-center">⭐️ 4.8 / 5</Text>
            <Text className="text-gray-600 text-sm dark:text-white">📍 Bridgeport, WA, USA</Text>
            <Text className="text-gray-600 text-sm dark:text-white">📞 +1 800 000 000</Text>
            <Text className="text-gray-600 text-sm dark:text-white">📧 nathaniel.poole@microsoft.com</Text>
              <Text className="text-gray-700 dark:text-gray-300">
              nathaniel is a trusted housing agent with 5+ years of experience
              helping clients find comfortable and safe homes in Morocco.
            </Text>

          </VStack>

        </Box>

        {/* Navigation Links */}
        <Box className="bg-white rounded-2xl shadow-md p-6 mt-6 w-full max-w-md dark:bg-gray-900">
          <Text className="text-lg font-bold mb-4">Explore More</Text>
          <VStack className="space-y-3">
            <Link>
              <LinkText className="text-blue-600 font-semibold">View Listings</LinkText>
            </Link>
            <Link>
              <LinkText className="text-blue-600 font-semibold">Read Reviews</LinkText>
            </Link>
            <Link>
              <LinkText className="text-blue-600 font-semibold">Contact Agent</LinkText>
            </Link>
          </VStack>
        </Box>
      </View>
    </ScrollView>
  );
};

export default ClientProfileScreen;

