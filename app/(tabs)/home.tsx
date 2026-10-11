import { StatusBar } from "expo-status-bar";
import { CircleCheck, Clock, Ellipsis, FolderOpen } from "lucide-react-native";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const data = [
    { id: 750, isi: "followers" },
    { id: 1, isi: "following" },
    { id: 43, isi: "project" },
  ];

  const folders = [
    { nama: "Proyek Merah", tanggal: "PMI 20 Jan 2026", icon: FolderOpen },
    { nama: "Proyek RS", tanggal: "Azlin 10 Mei 2025", icon: FolderOpen },
    {
      nama: "Proyek Manajer",
      tanggal: "PDDIKTI 30 April 2024",
      icon: FolderOpen,
    },
    {
      nama: "Proyek Sekolah",
      tanggal: "Absensi 25 Maret 2024",
      icon: FolderOpen,
      active: CircleCheck,
    },
  ];

  const Teams = [
    {
      nama: "E-Commerce Application",
      tanggal: "Completed",
      icon: FolderOpen,
      active: CircleCheck,
    },
    {
      nama: "Banking App Redesign",
      tanggal: "Completed",
      icon: FolderOpen,
      active: CircleCheck,
    },
    {
      nama: "Medical Dashboard",
      tanggal: "In Progress",
      icon: FolderOpen,
      active: Ellipsis,
    },
    {
      nama: "Social Media Platform",
      tanggal: "Completed",
      icon: Clock,
      active: CircleCheck,
    },
  ];

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <View className="px-5 bg-[#FFF9F2] flex flex-1 pt-2">
          <View
            className="flex flex-col gap-3 items-center  justify-center bg-[#253C6D] border-1 border-[#EEEEEE] h-auto py-10  rounded-xl "
            style={{
              // boxShadow bekerja untuk New Architecture (Android, iOS, Web) dengan warna custom
              boxShadow: "2px 2px 2px rgba(4, 2, 2, 0.7)",
              // Fallback untuk iOS
              shadowColor: "#2D0000",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.7,
              shadowRadius: 19,
              // Fallback untuk Android klasik
              elevation: 8,
            }}
          >
            <View className="flex items-center justify-center border-2 border-[#FFF9F2] bg-slate-600 rounded-full  ">
              <Image
                source={require("../../assets/images/image.png")}
                className="h-[150px] w-[150px] rounded-full"
              />
            </View>
            <View className="flex flex-col items-center justify-center">
              <Text className="text-2xl font-bold text-white">
                Bagas permana
              </Text>
              <Text className="text-xl font-medium text-white">
                UI/UX Designer
              </Text>
            </View>
            {/* list */}

            <FlatList
              data={data}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View className="flex flex-col items-center justify-center gap-1  p-3">
                  <Text className="text-xl font-bold text-[#F2F2F2]">
                    {item.id}K
                  </Text>

                  <Text className="text-lg font-medium text-[#F2F2F2] capitalize">
                    {item.isi}
                  </Text>
                </View>
              )}
            />
          </View>
          {/* shadow*/}
          <View className="flex flex-col gap-3  my-6  ">
            <View className="flex flex-row justify-between items-center  ">
              <Text className="text-xl font-bold text-[#30497D]">Folders</Text>
              <Text className=" text-base font-bold text-[#757D6F]">
                view all
              </Text>
            </View>

            {/* icon */}
            <FlatList
              data={folders}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 12 }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                const Icon = item.icon;
                return (
                  <View className="flex flex-row gap-3 items-center justify-center bg-[#455B8A] p-3 rounded-lg border-2 border-[#30497D] ">
                    {/* box */}
                    <View className="flex flex-row gap-2 items-center justify-center">
                      <View>
                        <Icon size={24} color="#FFF9F2" />
                      </View>

                      <View className="flex flex-col">
                        <Text className="font-semibold text-white">
                          {item.nama}
                        </Text>
                        <Text className="text-xs text-[#FFF9F2]/70">
                          {item.tanggal}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View className="flex flex-row justify-between items-center mb-3 ">
            <Text className="text-xl font-bold text-[#30497D]">My Team</Text>
            <Text className=" text-base font-bold text-[#757D6F]">
              view all
            </Text>
          </View>
          <FlatList
            data={Teams}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 1 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              const Icon = item.icon;
              const ActiveIcon = item.active;
              return (
                // my team
                <View className="flex flex-row justify-between items-center bg-[#455B8A] p-3 rounded-lg">
                  {/* Sisi Kiri: Ikon + Teks */}
                  <View className="flex flex-row gap-3 items-center ">
                    <View className="border-[1px] border-[#455B8A] rounded-full p-3 bg-[#F3F4F4]">
                      <Icon size={24} color="#455B8A" />
                    </View>
                    <View className="flex flex-col">
                      <Text className="font-semibold text-white">
                        {item.nama}
                      </Text>
                      <Text className="text-xs text-[#FFF9F2]/70">
                        {item.tanggal}
                      </Text>
                    </View>
                  </View>

                  {/* Sisi Kanan: Ikon tambahan / aksi */}
                  <View className="flex flex-row items-center gap-2">
                    {ActiveIcon && <ActiveIcon size={20} color="#FFF9F2" />}
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
