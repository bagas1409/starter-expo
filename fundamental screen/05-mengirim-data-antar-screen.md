# Modul 05: Cara Mengirim & Menerima Data Saat Berpindah Screen

---

### 1. Konsep Sederhana: Menitipkan Data Bawaan

Saat kamu berpindah halaman, biasanya kamu tidak hanya ingin sekadar pindah layar kosong:
- Di layar Beranda, kamu mengetuk kartu donor milik: **"Bagas"** (ID: 101).
- Layar Detail harus tahu bahwa data yang harus ditampilkan adalah data milik si **"Bagas"**, bukan orang lain!

Bagaimana cara Layar A memberi tahu Layar B?  
👉 Menggunakan **Navigation Params (Parameter Navigasi)**!

---

### 2. Cara Mengirim Data dari Layar Asal (Pengirim)

Di layar asal, oper objek ke dalam `router.push`:

```tsx
import { router } from "expo-router";

const bukaDetailPasien = (pasien: any) => {
  router.push({
    pathname: "/detail", // Alamat tujuan
    params: {
      id: pasien.id,
      nama: pasien.nama,
      golDarah: pasien.golDarah,
    },
  });
};
```

---

### 3. Cara Menerima Data di Layar Tujuan (Penerima)

Di file `app/detail.tsx`, kita membaca data kiriman tersebut menggunakan hook bawaan **`useLocalSearchParams()`**:

```tsx
import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function DetailScreen() {
  // BACA DATA KIRIMAN DENGAN DESTRUCTURING (Ilmu Level 1!)
  const { id, nama, golDarah } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xs font-bold text-rose-600 uppercase">
          Detail Pasien #{id}
        </Text>

        <Text className="text-2xl font-black text-gray-800 mt-2">
          {nama}
        </Text>

        <View className="mt-4 p-3 bg-red-50 rounded-xl border border-red-200">
          <Text className="text-sm font-bold text-red-700">
            Golongan Darah: {golDarah}
          </Text>
        </View>

        <Pressable
          onPress={() => router.back()}
          className="mt-6 bg-gray-900 py-3 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-xs">← Kembali</Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. Pengirim menyertakan paket data di `params: { id, nama, golDarah }`.
2. Penerima membongkarnya dengan `const { id, nama, golDarah } = useLocalSearchParams();`.
3. Selesai! Dua layar kini terhubung erat dan dinamis.
