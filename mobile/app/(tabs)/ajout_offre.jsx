import {View, TextInput} from 'react-native';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { ChevronDownIcon } from '@/components/ui/icon';
import { useState } from 'react';

export default function AddHouse() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    house_type: '',
    price_per_night: '',
    available_from: '',
    available_to: '',
    address: '',
    city: '',
    region: '',
    rooms: '',
    bedrooms: '',
    bathrooms: '',
    capacity: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', form);
    // Ajoute ici l’appel API backend ou autre action
  };

  return (
    <View className="bg-white dark:bg-gray-900 flex-1 p-8">
      <View className="max-w-lg mx-auto space-y-5 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <Heading size="lg" className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          Ajouter une maison à louer
        </Heading>

        {/* Titre */}
        <TextInput
          placeholder="Titre"
          value={form.title}
          onChangeText={(v) => handleChange('title', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />

        {/* Description */}
        <TextInput
          placeholder="Description"
          value={form.description}
          multiline
          onChangeText={(v) => handleChange('description', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />

        {/* Type de maison */}
        <Select value={form.house_type} onValueChange={(v) => handleChange('house_type', v)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Type de maison" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="Appartement" value="apartment" />
              <SelectItem label="Villa" value="villa" />
              <SelectItem label="Maison" value="house" />
              <SelectItem label="Studio" value="studio" />
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Prix */}
        <TextInput
          placeholder="Prix par nuit"
          value={form.price_per_night}
          keyboardType="numeric"
          onChangeText={(v) => handleChange('price_per_night', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />

        {/* Dates disponibles */}
        <TextInput
          placeholder="Disponible à partir de (YYYY-MM-DD)"
          value={form.available_from}
          onChangeText={(v) => handleChange('available_from', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Disponible jusqu'à (YYYY-MM-DD)"
          value={form.available_to}
          onChangeText={(v) => handleChange('available_to', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />

        {/* Adresse */}
        <TextInput
          placeholder="Adresse"
          value={form.address}
          onChangeText={(v) => handleChange('address', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Ville"
          value={form.city}
          onChangeText={(v) => handleChange('city', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />
        <TextInput
          placeholder="Région"
          value={form.region}
          onChangeText={(v) => handleChange('region', v)}
          className="w-full p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          placeholderTextColor="#aaa"
        />

        {/* Nombres - rooms */}
        <Select value={form.rooms} onValueChange={(v) => handleChange('rooms', v)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Nombre de pièces" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} label={`${num}`} value={String(num)} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Bedrooms */}
        <Select value={form.bedrooms} onValueChange={(v) => handleChange('bedrooms', v)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Nombre de chambres" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} label={`${num}`} value={String(num)} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Bathrooms */}
        <Select value={form.bathrooms} onValueChange={(v) => handleChange('bathrooms', v)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Nombre de salles de bain" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {[1, 2, 3].map((num) => (
                <SelectItem key={num} label={`${num}`} value={String(num)} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Capacity */}
        <Select value={form.capacity} onValueChange={(v) => handleChange('capacity', v)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Capacité (personnes)" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <SelectItem key={num} label={`${num}`} value={String(num)} />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Bouton */}
        <Button
          className="w-full py-4 bg-brandBlue-500 text-white data-[hover=true]:bg-gray-300 dark:data-[hover=true]:bg-gray-700  text-lg"
          onPress={handleSubmit}
        >
          Ajouter l'offre
        </Button>
      </View>
    </View>
  );
}
