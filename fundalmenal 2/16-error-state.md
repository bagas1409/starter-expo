# Level 2 - Modul 16: Error State (Tampilan Khusus Saat Masalah Terjadi)

---

### 1. Konsep Sederhana

Ketika koneksi API gagal, kita tidak boleh membiarkan layar HP tetap menampilkan komponen kosong tanpa penjelasan.  
Aplikasi modern memiliki kondisi khusus bernama **Error State**.

> **Error State adalah kondisi tampilan layar yang secara khusus dirancang untuk memberi tahu user bahwa telah terjadi gangguan, menampilkan pesan masalahnya, dan menyediakan tombol untuk mencoba kembali (Retry).**

---

### 2. Tiga Pilar Error State yang Baik

1. **Ilustrasi / Ikon Masalah:** Memberi tanda visual instan (misal ikon sinyal silang atau seru).
2. **Pesan yang Jelas:** Jelaskan apa yang salah dengan bahasa manusiawi tanpa kode rumit.
3. **Tombol Solusi (Actionable):** Sediakan tombol **"Coba Lagi"** agar user tidak perlu menutup dan membuka ulang aplikasi.

---

### 3. Contoh di Expo (React Native)

Perhatikan contoh screen dengan Error State yang elegan:

```tsx
import { useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

export default function ErrorStateScreen() {
  const [dataDarah, setDataDarah] = useState<string | null>(null);
  const [errorPesan, setErrorPesan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchStok = async (sukses: boolean) => {
    setLoading(true);
    setErrorPesan(null); // RESET ERROR STATE SEBELUM MENCOBA LAGI!

    try {
      await new Promise((res) => setTimeout(res, 1500));
      if (!sukses) {
        throw new Error("Gagal menyambung ke server PMI pusat. Periksa koneksi internet Anda.");
      }
      setDataDarah("Stok Darah Golongan O: 42 Kantong Tersedia");
    } catch (err: any) {
      setErrorPesan(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-center">
        {/* 1. KONDISI LOADING */}
        {loading && (
          <View className="py-8 items-center">
            <ActivityIndicator size="large" color="#dc2626" />
            <Text className="text-gray-500 text-xs mt-3">Mengambil data terbaru...</Text>
          </View>
        )}

        {/* 2. KONDISI ERROR STATE (TAMPILKAN TAMPILAN KHUSUS) */}
        {!loading && errorPesan && (
          <View className="py-4 items-center w-full">
            <View className="w-14 h-14 bg-rose-100 rounded-full justify-center items-center mb-3">
              <Text className="text-2xl">⚠️</Text>
            </View>
            <Text className="text-lg font-bold text-gray-800">Ups, Terjadi Kendala!</Text>
            <Text className="text-xs text-gray-500 text-center mt-1 px-4">
              {errorPesan}
            </Text>

            {/* TOMBOL COBA LAGI */}
            <Pressable
              onPress={() => fetchStok(true)}
              className="mt-5 bg-rose-600 px-6 py-2.5 rounded-full active:bg-rose-700"
            >
              <Text className="text-white font-bold text-xs">Coba Lagi</Text>
            </Pressable>
          </View>
        )}

        {/* 3. KONDISI SUKSES */}
        {!loading && !errorPesan && dataDarah && (
          <View className="py-6 items-center">
            <Text className="text-2xl">🩸</Text>
            <Text className="text-base font-bold text-gray-800 mt-2">{dataDarah}</Text>
          </View>
        )}

        {/* TOMBOL PICU ERROR SIMULASI */}
        {!loading && !dataDarah && !errorPesan && (
          <Pressable
            onPress={() => fetchStok(false)}
            className="mt-4 bg-gray-800 px-6 py-3 rounded-xl"
          >
            <Text className="text-white font-bold text-xs">Uji Skenario Error</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

- Perhatikan baris `setErrorPesan(null)` di awal fungsi: Sangat penting untuk **mereset** error state lama sebelum mencoba memanggil data lagi, agar tampilan error lama langsung menghilang saat user menekan "Coba Lagi".

---

### 5. Latihan (Uji Pemahaman)

**Latihan:**  
Mengapa mereset variabel `errorPesan` menjadi `null` di awal fungsi pengambilan data sangat penting dilakukan?
