import { Text, View } from "react-native";

export default function proyek() {
  // DATA JAVASCRIPT
  const namaProyek = "Aplikasi PMI Donor Mobile";
  const statusProyek = "Dalam Revisi"; // Coba ganti jadi "Selesai"

  // MEMERIKSA APAKAH STATUSNYA BELUM SELESAI
  const isBelumSelesai = statusProyek !== "Selesai"; // true

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">{namaProyek}</Text>

        <Text className="text-sm text-gray-500 mt-1">
          Status Saat Ini:{" "}
          <Text className="font-semibold text-gray-700">{statusProyek}</Text>
        </Text>

        {/* TAMPILKAN BANNER PERINGATAN JIKA BELUM SELESAI */}
        {isBelumSelesai ? (
          <View className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200">
            <Text className="text-amber-800 text-sm font-semibold">
              ⚠️ Proyek ini masih membutuhkan review sebelum diluncurkan!
            </Text>
          </View>
        ) : (
          <View className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <Text className="text-emerald-800 text-sm font-semibold">
              ✓ Proyek telah rampung dan siap digunakan.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
