import React from 'react';
import { ScrollView,View } from 'react-native';
import { Image } from '@/components/ui/image';
import { Icon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Input,InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Avatar,AvatarFallbackText,AvatarImage} from '@/components/ui/avatar';
import { Divider} from '@/components/ui/divider';
import { Center} from '@/components/ui/center';
import { Card} from '@/components/ui/card';
import { Ionicons } from '@expo/vector-icons';
import { Link, LinkText} from '@/components/ui/link';

const ProfileScreen = () => {
  const user = {
    name: "Jane Walters",
    email: "j.walters@domain.com",
    location: "Dubai, UAE",
    phone: "+1 012 345 678",
    password: "password",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  };

  return (
    <ScrollView className="bg-white dark:bg-gray-800 flex-1">
      {/* Header */}
<Box className="bg-brandRed-500 dark:bg-brandGreen-400 px-4 py-6 items-center">
        <Text className="text-white text-3xl font-bold">Your Profile</Text>
      </Box>

      {/* Profile Card */}
      <Box className="p-4 items-center">
        <Card className="bg-white dark:bg-black w-full max-w-md rounded-2xl p-4 shadow-md">
            
          <VStack className="items-center space-y-4">
            <Avatar size="2xl">
              <AvatarFallbackText>{user.name}</AvatarFallbackText>
              <AvatarImage source={{ uri: user.avatar }} />
            </Avatar>
            <Text className="text-xl font-semibold text-gray-800 dark:text-white">
              {user.name}
            </Text>
            <Text className="text-blue-600 dark:text-blue-200">{user.email}</Text>
          </VStack>

          <Divider className="my-4" />

          <VStack space="md">
            <Detail label="Location" value={user.location} />
            <Detail label="Phone" value={user.phone} />
          </VStack>
        </Card>
        <Button className="mt-6 bg-brandRed-500 dark:bg-brandGreen-400 ">
           <Link href="/modifyUserProfile">
          <LinkText className="text-white font-semibold hover:text-black ">Modify</LinkText>
            </Link>
        </Button>
        
      </Box>
    </ScrollView>
  );
};
const Detail = ({ label, value }) => (
  <HStack className="justify-between py-2 border-b border-gray-200 dark:border-gray-700">
    <Text className="text-gray-700 dark:text-gray-300 font-semibold">
      {label}
    </Text>
    <Text className="text-gray-800 dark:text-gray-200">{value}</Text>
  </HStack>
);

export default ProfileScreen;
