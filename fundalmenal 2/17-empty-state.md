# Level 2 - Modul 17: Empty State (Ketika Data Masih Kosong)

---

### 1. Konsep Sederhana

Bayangkan aplikasi berhasil menghubungi server, tidak ada error sama sekali (status 200 OK).  
Namun ketika data dibuka... **ternyata belum ada satu pun data pendaftar (Array kosong `[]`)!**

Jika kamu tidak menangani kondisi ini:
- Layar HP akan terlihat putih polos dan kosong melompong.
- User mengira aplikasinya rusak atau sedang macet!

> **Empty State adalah tampilan ramah yang dirancang khusus ketika data berhasil diambil, tetapi isi datanya memang masih nol (kosong), lengkap dengan ajakan untuk mulai mengisi data.**

---

### 2. Tiga Keadaan Layar Utama (The 3 States of Data)

Dalam setiap layar aplikasi yang mengambil data dari server, selalu ada 3 keadaan yang wajib kamu siapkan:
1. **Loading State:** `isLoading === true` -> Tampilkan Spinner.
2. **Error State:** `error !== null` -> Tampilkan Pesan Gangguan + Tombol Coba Lagi.
3. **Empty State:** `!isLoading && !error && data.length === 0` -> Tampilkan Ilustrasi Kosong + Tombol Tambah Data.
4. **Data State:** `data.length > 0` -> Tampilkan Kartu-kartu Data.

---

### 3. Contoh di Expo (React Native)

Perhatikan contoh screen daftar riwayat donor darah:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function EmptyStateScreen() {
  // SIMULASI DATA RIWAYAT DONOR (Awalnya kosong [])
  const [riwayatDonor, setRiwayatDonor] = useState<any[]>([]);

  const handleTambahRiwayat = () => {
    setRiwayatDonor([
      { id: 1, tanggal: "12 Okt 2026", lokasi: "PMI Kramat", kantong: 1 },
    ]);
  };

  const handleResetKosong = () => {
    setRiwayatDonor([]);
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-center">
        <Text className="text-xl font-bold text-gray-800 mb-4">
          Riwayat Donor Darah Anda
        </Text>

        {/* LOGIKA EMPTY STATE DENGAN PERBANDINGAN .length === 0 */}
        {riwayatDonor.length === 0 ? (
          <View className="py-8 items-center w-full">
            <View className="w-16 h-16 bg-gray-100 rounded-full justify-center items-center mb-3">
              <Text className="text-3xl">📭</Text>
            </View>

            <Text className="text-base font-bold text-gray-700">
              Belum Ada Riwayat Donor
            </Text>

            <Text className="text-xs text-gray-400 text-center mt-1 px-4">
              Anda belum pernah mendonorkan darah melalui aplikasi ini. Jadilah pahlawan kemanusiaan hari ini!
            </Text>

            <Pressable
              onPress={handleTambahRiwayat}
              className="mt-6 bg-red-600 px-6 py-2.5 rounded-full active:bg-red-700"
            >
              <Text className="text-white font-bold text-xs">
                + Daftar Donor Pertama
              </Text>
            </Pressable>
          </View>
        ) : (
          /* JIKA ADA DATA (DATA STATE) */
          <View className="w-full">
            {riwayatDonor.map((item) => (
              <View key={item.id} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <Text className="font-bold text-red-900">{item.lokasi}</Text>
                <Text className="text-xs text-red-700 mt-1">{item.tanggal} • {item.kantong} Kantong</Text>
              </View>
            ))}

            <Pressable
              onPress={handleResetKosong}
              className="mt-4 bg-gray-200 py-2 rounded-xl items-center"
            >
              <Text className="text-gray-700 font-bold text-xs">Kembalikan ke Kondisi Kosong</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
```

---

### 4. Latihan (Uji Pemahaman)

**Latihan:**  
Apa perbedaan mendasar antara **Error State** dan **Empty State**? Mengapa Empty State bukan merupakan sebuah error?
