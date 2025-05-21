import  NavDropdown  from '@/components/ui/NavDropdown';
import { View, Text } from 'react-native';


const Navbar = () => {
  const dropdownItems = [
    {
      label: 'All Properties',
      onPress: () => console.log('All Properties selected'),
    },
    {
      label: 'Beachfront',
      onPress: () => console.log('Beachfront selected'),
    },
    {
      label: 'Medina',
      onPress: () => console.log('Medina selected'),
    },
    {
      label: 'Luxury Villas',
      onPress: () => console.log('Luxury Villas selected'),
    },
  ];

  return (
    <View className="bg-blue-600 dark:bg-blue-900 p-4 flex-row justify-between items-center">
      <Text className="text-white font-bold text-xl">Essaouira Rentals</Text>
      
      <View className="flex-row items-center space-x-2">
        <NavDropdown 
          title="Categories" 
          items={dropdownItems} 
        />
        {/* Other nav items... */}
      </View>
    </View>
  );
};
export default Navbar;