import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  const stokMaksimal = 100;
  const stokTerpakai = 75;
  const sisaStok = stokMaksimal - stokTerpakai;

  const isStokKritis = sisaStok < 10;

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <View className="px-5 bg-[#FFF9F2] flex flex-1 pt-2">
          <Text>golongan darah 0</Text>
          <Text>
            sisah stok toko {isStokKritis ? " perlu di isi " : "stok aman"}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
