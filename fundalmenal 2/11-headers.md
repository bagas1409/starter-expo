# Level 2 - Modul 11: Headers (Label Informasi & Tiket Masuk)

---

### 1. Konsep Sederhana

Saat mengirim surat, kamu tidak hanya memasukkan kertas surat ke dalam amplop. Kamu juga menempelkan:
- Perangko pos kilat.
- Stiker: *"Dokumen Rahasia"*.
- Cap pos pengenal identitasmu.

Di dunia HTTP, stiker-stiker informasi tambahan ini disebut **Headers**.

> **Headers adalah metadata (informasi tentang data) yang menyertai setiap request dan response, memberi tahu server tentang format data, identitas aplikasi, atau tiket keamanan (token login).**

---

### 2. Tiga Headers yang Paling Sering Kamu Pakai

#### 1. `"Content-Type": "application/json"`
Memberitahu server: *"Server, surat yang saya bawa di dalam body ini berformat JSON ya!"*.

#### 2. `"Authorization": "Bearer <token_rahasia>"`
Ini adalah **tiket gelang / KTP digital**. Dipakai ketika kamu ingin mengakses data pribadi yang butuh login (misal melihat riwayat donor darah milik akunmu sendiri).

#### 3. `"Accept": "application/json"`
Memberitahu server: *"Tolong balas permintaan saya dalam format JSON juga ya!"*.

---

### 3. Contoh di Expo (React Native)

Perhatikan contoh penggunaan Headers dengan Authorization Token di layar aplikasi:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function HeadersAuthScreen() {
  const [statusAkses, setStatusAkses] = useState("Belum meminta data.");

  // SIMULASI TOKEN LOGIN YANG DIDAPAT SAAT LOGIN BERHASIL
  const tokenRahasia = "jwt-token-relawan-pmi-xyz123";

  const handleAksesDataRahasia = async () => {
    setStatusAkses("Mengirim request dengan Headers Token...");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "GET",
        // MEMASANG HEADERS RESMI
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenRahasia}`, // Tiket izin masuk
          "App-Version": "1.0.0", // Versi aplikasi kita
        },
      });

      if (response.ok) {
        setStatusAkses("✓ Akses Diterima: Server mengenali tiket Anda!");
      }
    } catch (err) {
      setStatusAkses("✕ Akses Ditolak.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Uji Otorisasi Headers
        </Text>

        <Text className="text-xs text-gray-500 mt-2">
          Token Pengguna:
        </Text>
        <Text className="text-xs font-mono bg-gray-100 p-2 rounded text-gray-700 mt-1">
          {tokenRahasia}
        </Text>

        <Text className="text-sm font-semibold text-blue-600 mt-4">
          Status: {statusAkses}
        </Text>

        <Pressable
          onPress={handleAksesDataRahasia}
          className="mt-6 bg-blue-600 active:bg-blue-700 p-3 rounded-full items-center"
        >
          <Text className="text-white font-bold text-sm">
            Kirim Request Ber-Header Token
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 4. Latihan (Uji Pemahaman)

**Latihan 1:**  
Apa fungsi dari header `Authorization: Bearer ...` di aplikasi mobile?

**Latihan 2:**  
Apa yang terjadi jika kamu mengirim request POST dengan body JSON, tetapi lupa mencantumkan `"Content-Type": "application/json"` di bagian headers?
