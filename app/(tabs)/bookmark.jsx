import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import SearchSavedVideos from '../../components/SearchSavedVideos';
import { useGlobalContext } from '../../context/GlobalProvider';
import useAppwrite from '../../lib/useAppwrite';
import { getLikedVideos } from '../../lib/appwrite';

const Bookmark = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: videos } = useAppwrite(() => getLikedVideos(user.$id));
  console.log('VIDEOS LIKED', videos);
  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 ">
            <Text className="text-2xl font-psemibold text-white">
              Saved Videos
            </Text>
            <View className="mt-6 mb-8">
              <SearchSavedVideos placeholder={'Search your saved videos'} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
