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
const Profilemodify = () => {
    const user = {
    name: "Jane Walters",
    email: "j.walters@domain.com",
    location: "Dubai, UAE",
    phone: "+1 012 345 678",
    password: "password",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  };
    return(
<Box className="p-4 w-full max-w-md self-center">
    <Card className="bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl p-4 shadow-md dark:text-white">
        <VStack space="lg">
          <LabeledInput label="Name" value={user.name} />
          <LabeledInput label="Email" value={user.email} />
          <LabeledInput label="Password" value={user.password} secure />
          <LabeledInput label="Location" value={user.location} />
          <LabeledInput label="Phone" value={user.phone} />
        </VStack>
        </Card>
       <Button className="mt-6 bg-brandRed-500 dark:bg-brandGreen-400">
                <Text className="text-white font-semibold hover:text-black">Save Changes</Text>
              </Button>
       </Box>
    )
};
const LabeledInput = ({ label, value, secure }) => (
  <Box>
    <Text className="text-sm font-medium text-blue-600 mb-1 dark:text-blue-200">{label}</Text>
    <Input variant="outline">
      <InputField defaultValue={value} secureTextEntry={secure} />
    </Input>
  </Box>
);

const Detail = ({ label, value }) => (
  <HStack className="justify-between py-2 border-b border-gray-200 dark:border-gray-700">
    <Text className="text-gray-700 dark:text-gray-300 font-semibold">
      {label}
    </Text>
    <Text className="text-gray-800 dark:text-gray-200">{value}</Text>
  </HStack>
);

export default Profilemodify;
