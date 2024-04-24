import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { icons } from '../constants';

const SearchSavedVideos = ({ placeholder }) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={() => {}}
      />
      <TouchableOpacity
        onPress={() => {
          //   if (!query) {
          //     return Alert.alert(
          //       'Missing query',
          //       'Please input something to search results across database'
          //     );
          //   }
          //   if (pathname.startsWith('/search')) router.setParams({ query });
          //   else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchSavedVideos;
