import React from 'react';
import { useColorScheme } from 'react-native';
import { ScrollView, View } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { FormControl, FormControlLabel } from '@/components/ui/form-control';
import { Input, InputField } from '@/components/ui/input';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectContent,
  SelectItem,
  SelectPortal,
  SelectBackdrop,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectDragIndicator,
} from '@/components/ui/select';
import { ChevronDownIcon } from 'lucide-react-native';

const ContactPage = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <ScrollView className="min-h-screen max-h-screen overflow-y-auto flex-1 bg-gray-50 dark:bg-gray-900">
      <VStack className="space-y-xl items-center max-w-[640px] mx-auto px-4 py-8">
        <VStack className="space-y-4 items-center mb-8">
          <Heading className="text-3xl text-center font-bold dark:text-brandGreen-500">
            Get in Touch
          </Heading>
          <Text className="text-lg text-center text-gray-600 dark:text-white">
            We are here to assist you. Please fill out the form below to reach us.
          </Text>
        </VStack>

        {/* Formulaire modernisé */}
        <Box className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full">
          <VStack className="space-y-5">
            <FormControl>
              <FormControlLabel className="font-medium dark:text-white">Name</FormControlLabel>
              <Input className="bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3">
                <InputField
                  placeholder="Enter your name"
                  className="text-base placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
              </Input>
            </FormControl>

            <FormControl>
              <FormControlLabel className="font-medium dark:text-white">Email</FormControlLabel>
              <Input className="bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3">
                <InputField
                  placeholder="Enter your email"
                  className="text-base placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
              </Input>
            </FormControl>

            <FormControl>
              <FormControlLabel className="font-medium dark:text-white">Subject</FormControlLabel>
              <Select>
                <SelectTrigger className="bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3">
                  <SelectInput
                    placeholder="Select a subject"
                    className="text-base placeholder:text-gray-400 dark:placeholder:text-gray-300"
                  />
                  <SelectIcon as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent className="bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    {[
                      'Rental Inquiry',
                      'Property Listing',
                      'Technical Support',
                      'General Question',
                    ].map((type) => (
                      <SelectItem key={type} label={type} value={type} />
                    ))}
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>

            <FormControl>
              <FormControlLabel className="font-medium dark:text-white">Message</FormControlLabel>
              <Textarea className="bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3">
                <TextareaInput
                  placeholder="Write your message here..."
                  className="text-base placeholder:text-gray-400 dark:placeholder:text-gray-300"
                />
              </Textarea>
            </FormControl>

            <Button className="bg-brandRed-500 data-[hover=true]:bg-brandRed-300  dark:bg-brandBlue-500 dark:data-[hover=true]:bg-brandBlue-300">
              Send Message
            </Button>
          </VStack>
        </Box>

        {/* Coordonnées */}
        <VStack className="space-y-6 mt-8 w-full">
          <HStack className="items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Box className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Text>📧</Text>
            </Box>
            <VStack>
              <Text className="font-bold">Email</Text>
              <Text className="text-gray-600 dark:text-gray-300">
                contact@essaouriarentals.com
              </Text>
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
              <Text className="text-gray-600 dark:text-gray-300">
                123 Avenue Mohamed V, Essaouira
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default ContactPage;
