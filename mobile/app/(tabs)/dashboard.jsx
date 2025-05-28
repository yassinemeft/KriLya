import { View, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  const listings = [
    { id: 1, title: 'Charming Riad with Patio', city: 'Marrakesh', price: `1 200 MAD / ${t('night')}`, img: 'https://cdn-blog.zameen.com/blog/wp-content/uploads/2021/01/Blog-Cover-01-6.jpg' },
    { id: 2, title: 'Stylish Apartment in City Center', city: 'Rabat', price: `1 500 MAD / ${t('night')}`, img: 'https://via.placeholder.com/400x300' },
    { id: 3, title: 'Cozy Guesthouse in Medina', city: 'Fez', price: `900 MAD / ${t('night')}`, img: 'https://via.placeholder.com/400x300' },
  ];

  return (
    <View className="flex-row bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Sidebar agrandie */}
      <View className="w-64 bg-gray-200 dark:bg-gray-800 p-4 space-y-4">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dashboard</Text>
        {['Statistiques', 'Utilisateurs', 'Paramètres', 'Support'].map((item) => (
          <TouchableOpacity
            key={item}
            className="py-2 px-4 rounded-lg bg-brandBlue-500 text-white text-center hover:bg-gray-300 hover:text-gray-700"
          >
            {t(item)}
          </TouchableOpacity>
        ))}
      </View>

      {/* Main content */}
      <View className="flex-1 p-6">
        <Heading size="lg" className="text-center text-3xl font-bold text-gray-900 dark:text-brandGreen-500 mb-6">{t('Vos annonces')}</Heading>

        <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((property) => (
            <Card key={property.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image source={{ uri: property.img }} className="h-40 w-full object-cover" />
              <View className="p-4 space-y-2">
                <Text className="text-lg font-semibold text-gray-900 dark:text-white">{property.title}</Text>
                <Text className="text-sm text-gray-600 dark:text-gray-300">{property.city}</Text>
                <Text className="text-md font-bold text-brandRed-500 dark:text-brandGreen-500">{property.price}</Text>
                <View className="flex-row justify-between space-x-2 mt-4">
                  <Button
                    variant="solid"
                    action="secondary"
                    className="flex-1 py-2 bg-brandBlue-500 text-white data-[hover=true]:bg-gray-300 dark:data-[hover=true]:bg-gray-700"
                  >
                    {t("Modifier l'offre")}
                  </Button>
                  <Button
                    variant="solid"
                    action="danger"
                    className="flex-1 py-2 bg-brandRed-500 text-white hover:bg-gray-300 hover:text-gray-700"
                  >
                    {t('Supprimer')}
                  </Button>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </View>
  );
}
