import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  const person = "bagas";
  let data = 1;
  data++;
  for (; data <= 10; data++) console.log(data);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <View className="px-5 bg-[#FFF9F2] flex flex-1 pt-2">
          <Text>selesai</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
