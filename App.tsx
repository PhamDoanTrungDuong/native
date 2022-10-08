import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 text-white items-center justify-center bg-teal-400">
        <Text className="text-white text-3xl font-bold">Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}