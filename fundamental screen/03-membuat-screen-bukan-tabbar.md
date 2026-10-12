# Modul 03: Cara Membuat Screen Baru yang BUKAN di Tab Bar (Full Screen / Stack)

---

### 1. Kapan Kita Membutuhkan Screen di Luar Tab Bar?

Bayangkan ketika kamu sedang berada di Tab "Home", lalu kamu mengetuk salah satu kartu: **"Detail Pasien Bagas"** atau **"Formulir Pembayaran"**.

Ketika halaman detail itu terbuka:
- Layar akan tampil **penuh (Full Screen)**.
- Bilah menu bawah (Tab Bar) **otomatis HILANG / TERTUTUP**.
- Di bagian atas biasanya ada tombol panah kembali (Back).

Screen seperti ini disebut **Stack Screen (Layar Tumpukan)**.

---

### 2. Aturan Emas Lokasi File

> **Untuk membuat screen yang TIDAK punya tab bar di bawah, kamu WAJIB meletakkan filenya LANGSUNG di dalam folder `app/` (DI LUAR FOLDER `(tabs)`).**

Contoh Struktur Folder:
```text
app/
├── _layout.tsx
├── (tabs)/          <-- Folder Tab Bar
│   ├── _layout.tsx
│   └── home.tsx
│
├── detail.tsx       <-- SCREEN BUKAN TAB BAR (Layar Penuh!)
└── form-donor.tsx   <-- SCREEN BUKAN TAB BAR (Layar Penuh!)
```

---

### Langkah 1: Buat File Screen di Luar `(tabs)`

Buat file baru di lokasi:  
📁 `app/detail.tsx`

Tulis kode layarnya:

```tsx
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function DetailScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-6 justify-between">
      <View>
        {/* Tombol Kembali Manual */}
        <Pressable
          onPress={() => router.back()}
          className="self-start py-2 px-3 bg-gray-100 rounded-full mb-4"
        >
          <Text className="text-gray-700 font-bold text-xs">← Kembali</Text>
        </Pressable>

        <Text className="text-2xl font-black text-gray-800">
          Detail Pasien Darurat
        </Text>
        
        <Text className="text-sm text-gray-500 mt-2">
          Perhatikan bahwa di bawah layar ini TIDAK ADA Tab Bar! Ini adalah screen mandiri (Full Screen Stack).
        </Text>

        <View className="mt-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <Text className="font-bold text-gray-700">Nama: Bagas Pratama</Text>
          <Text className="text-gray-500 text-sm mt-1">Golongan Darah: O+</Text>
          <Text className="text-gray-500 text-sm mt-1">Status: Siaga Operasi</Text>
        </View>
      </View>

      {/* Tombol Aksi di Bawah Layar */}
      <Pressable
        onPress={() => router.back()}
        className="w-full bg-red-600 py-4 rounded-2xl items-center active:bg-red-700"
      >
        <Text className="text-white font-bold text-base">
          Selesai & Kembali ke Beranda
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
```

---

### Langkah 2 (Opsional): Daftarkan di `app/_layout.tsx`

Secara otomatis, Expo Router **sudah bisa langsung membuka** `/detail` tanpa kamu daftarkan.

Namun, jika kamu ingin mengatur judul header atas atau animasi tampilannya, buka file:  
📄 `app/_layout.tsx`

Tambahkan baris `<Stack.Screen name="detail" ... />` di dalam komponen `<Stack>`:

```tsx
export default function RootLayout() {
  return (
    <ThemeProvider ...>
      <Stack>
        {/* 1. Induk Tab Bar (Header disembunyikan) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* 2. Daftarkan screen mandiri baru kita */}
        <Stack.Screen
          name="detail"
          options={{
            headerShown: false, // Set 'true' jika ingin header bawaan bertombol back otomatis
            title: "Detail Pasien",
          }}
        />

        {/* 3. Contoh jika ingin model kartu MODAL (muncul dari bawah) */}
        <Stack.Screen
          name="modal-bantuan"
          options={{
            presentation: "modal", // Efek melayang dari bawah
            title: "Pusat Bantuan",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
```

---

### Ringkasan Cepat
1. Letakkan file langsung di: `app/nama-file.tsx` (bukan di dalam `(tabs)`).
2. Halaman ini otomatis menutup tab bar bawah saat dibuka.
3. Cocok untuk halaman formulir, pembayaran, detail item, dan popup modal!
