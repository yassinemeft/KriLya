import { View, Text } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from "@/components/ui/card"
import { Heading } from "@/components/ui/heading"
import { Text as RNText } from "@/components/ui/text"
import { Image } from "@/components/ui/image"

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">{t('profile')}</Text>
      <Card size="md" variant="ghost" className="m-3 bg-blue-900">
        <Image
                source={{
                  uri: "https://gluestack.github.io/public-blog-video-assets/yoga.png",
                }}
                className="mb-6 h-[240px] w-full rounded-md aspect-[263/240]"
                alt="image"
              />
            <Heading size="md" className="mb-1">
              Quick Start
            </Heading>
            <RNText size="sm">Start building your next project in minutes</RNText>
          </Card>
    </View>
  );
}