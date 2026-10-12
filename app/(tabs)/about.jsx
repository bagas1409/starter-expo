import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  const stokMaksimal = 100;
  const stokTerpakai = 75;
  const sisaStok = stokMaksimal - stokTerpakai;
  const isStokKritis = sisaStok < 10;

  //pemeriksaan login
  const jabatan: String = "ketua angkatan";
  const kodeJabatan: String = "RPL-2023";
  const inputUser: String = "RPL-2023";

  // perbandingan

  const isJabatanActive = jabatan === "ketua angkatan";
  console.log({isJabatanActive})
  const isKodeMasuk = kodeJabatan === inputUser;

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <View className="px-5 bg-[#FFF9F2] flex flex-1 pt-2 gap-3">
          <View className="flex flex-col bg-slate-400 ">
            <Text>golongan darah 0</Text>
            <Text>
              sisah stok toko {isStokKritis ? " perlu di isi " : "stok aman"}
            </Text>
          </View>
          <View className="flex flex-col bg-slate-400 ">
            <Text>pemeriksaan login</Text>
            <Text>siapa kamu: {jabatan}</Text>
            <Text>
              {isJabatanActive ? "akses penuh " : "tidak boleh di akses"}
            </Text>
            <Text>karna kode {isKodeMasuk ? " cocok" : "tidak cocok"}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
