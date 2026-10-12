import { Text, View } from "react-native";

export default function gerbang() {
  // STATUS USER YANG SEDANG MENEMPELKAN KARTU AKSES
  const isDokterJaga = false; // Bukan dokter
  const isKoordinatorPMI = true; // Tapi dia Koordinator PMI

  // LOGIKA ATAU (||): CUKUP SALAH SATU UNTUK BISA MASUK
  const bolehBukaGudang = isDokterJaga || isKoordinatorPMI; // true

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-500 text-xs uppercase font-bold tracking-wider">
          Smart Lock Gudang Obat Darurat
        </Text>

        <View className="mt-3">
          <Text className="text-sm text-gray-700">
            Status Dokter: {isDokterJaga ? "Ya" : "Bukan"}
          </Text>
          <Text className="text-sm text-gray-700 mt-1">
            Status Koordinator: {isKoordinatorPMI ? "Ya" : "Bukan"}
          </Text>
        </View>

        {/* STATUS PINTU BERDASARKAN HASIL LOGIKA || */}
        <View
          className={`mt-4 p-4 rounded-xl border ${
            bolehBukaGudang
              ? "bg-emerald-50 border-emerald-300"
              : "bg-rose-50 border-rose-300"
          }`}
        >
          <Text
            className={`font-bold text-center text-sm ${
              bolehBukaGudang ? "text-emerald-800" : "text-rose-800"
            }`}
          >
            {bolehBukaGudang
              ? "🔓 PINTU GUDANG TERBUKA (AKSES DITERIMA)"
              : "🔒 AKSES DITOLAK: ANDA TIDAK MEMILIKI OTORISASI"}
          </Text>
        </View>
      </View>
    </View>
  );
}
