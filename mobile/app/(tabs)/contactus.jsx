import React from 'react';
import { useColorScheme } from 'react-native';
import { ScrollView,View } from 'react-native';
import { Picker } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { FormControl, FormControlLabel } from '@/components/ui/form-control';
import { Input,InputField } from '@/components/ui/input';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectInput, SelectContent, SelectItem, SelectPortal, SelectBackdrop, SelectDragIndicatorWrapper,SelectIcon ,SelectDragIndicator} from '@/components/ui/select';
import { ChevronDownIcon } from 'lucide-react-native';

const ContactPage = () => {
   const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  return (
    <ScrollView className="min-h-screen max-h-screen overflow-y-auto bg-gray-100 px-4 py-6 dark:bg-gray-900">
      <VStack className="space-y-xl items-center max-w-[640px] mx-auto">
        <VStack className="space-y-4 items-center mb-8">
          <Heading className="text-3xl text-center font-bold dark:text-brandGreen-500">
            Get in Touch
          </Heading>
          <Text className="text-lg text-center text-gray-600 dark:text-white">
            We are here to assist you. Please fill out the form below to reach us.
          </Text>
        </VStack>

        <Box className="bg-white p-6 rounded-lg shadow-xl w-full dark:bg-gray-800">
          <VStack className="space-y-6">
            <FormControl>
              <FormControlLabel className="font-semibold">Name</FormControlLabel>
              <Input  className="border border-gray-300 p-2 rounded" >
              <InputField type="text" />
              </Input>
            </FormControl>

            <FormControl>
              <FormControlLabel className="font-semibold">Email</FormControlLabel>
              <Input  className="border border-gray-300 p-2 rounded" >
              <InputField type="text" />
              </Input>
            </FormControl>
            <FormControl>
              <FormControlLabel className="font-semibold">Subject</FormControlLabel>
               <View className="border border-gray-300 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Select>
            <SelectTrigger
              variant="underlined"
              size="lg"
              className="rounded-none"
            >
              <SelectInput className="text-gray dark:text-white" placeholder={("Select a subject")} />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent className="bg-white rounded-lg shadow-md dark:bg-gray-700">
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {[
                  "Rental Inquiry",
                  "Property Listing",
                  "Technical Support",
                  "General Question",
                ].map((type) => (
                  <SelectItem key={type} label={(type)} value={type} />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
                      </View>
            </FormControl>

            <FormControl>
              <FormControlLabel className="font-semibold">Message</FormControlLabel>
              <Textarea className="border border-gray-300 p-2 rounded">
                <TextareaInput placeholder="Write your message here..." />
              </Textarea>
            </FormControl>

            <Button className="mt-6 bg-blue-600 text-white p-3 rounded-full data-[hover=true]:bg-brandRed-300">
              Send Message
            </Button>
          </VStack>
        </Box>
       
        <VStack className=" min-h-screen max-h-screen overflow-y-auto space-y-6 mt-8 w-full">
        <HStack className="items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Box className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            {/* Replace with your icon component */}
            <Text>📧</Text>
          </Box>
          <VStack>
            <Text className="font-bold">Email</Text>
            <Text className="text-gray-600 dark:text-gray-300">contact@essaouriarentals.com</Text>
          </VStack>
        </HStack>
      
        <HStack className="items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Box className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
            <Text>📱</Text>
          </Box>
          <VStack>
            <Text className="font-bold">WhatsApp</Text>
            <Text className="text-gray-600 dark:text-gray-300">+212 6XX-XXXXXX</Text>
          </VStack>
        </HStack>
      
        <HStack className="items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Box className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
            <Text>🏢</Text>
          </Box>
          <VStack>
            <Text className="font-bold">Office</Text>
            <Text className="text-gray-600 dark:text-gray-300">123 Avenue Mohamed V, Essaouira</Text>
          </VStack>
        </HStack>
</VStack>
      </VStack>
    </ScrollView>
  );
};

export default ContactPage;

