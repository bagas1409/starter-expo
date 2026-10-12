# Modul 04: Cara Berpindah Screen Menggunakan Tombol

---

### 1. Konsep Sederhana: Alat Pengemudi Rute (`router`)

Setelah kita membuat screen baru, bagaimana cara membuka screen tersebut saat user mengetuk sebuah tombol di layar HP?

Expo Router menyediakan satu objek pengemudi bernama **`router`**.

> **`router` adalah setir kemudi aplikasi yang bisa kita perintahkan untuk maju ke halaman baru, kembali ke halaman sebelumnya, atau melompat mengganti halaman.**

Kita mengimpornya langsung dari `expo-router`:
```typescript
import { router } from "expo-router";
```

---

### 2. Tiga Perintah Sakti `router`

| Perintah | Cara Kerja | Analogi Nyata | Kapan Digunakan? |
|---|---|---|---|
| **`router.push("/tujuan")`** | **Menumpuk layar baru** di atas layar sekarang. | Menumpuk piring baru di atas piring lama. | Membuka halaman detail, membuka form input (user masih bisa tekan tombol Back kembali). |
| **`router.back()`** | **Mundur 1 langkah** ke layar sebelumnya. | Mengambil kembali piring teratas. | Tombol panah kembali (← Batal / Selesai). |
| **`router.replace("/tujuan")`** | **Mengganti layar sekarang** dan menghapus riwayat mundur. | Membakar piring lama lalu menggantinya dengan piring baru. | Setelah Login berhasil (agar user tidak bisa menekan Back ke form Login lagi) atau saat Logout. |

---

### 3. Alternatif Komponen: `<Link>`

Selain `router.push()`, Expo Router juga menyediakan komponen **`<Link>`** (mirip tag tautan web `<a>`, tapi dioptimalkan untuk mobile):

```tsx
import { Link } from "expo-router";
import { Text } from "react-native";

<Link href="/detail" className="text-blue-600 font-bold">
  Buka Detail Pasien
</Link>
```

---

### 4. Contoh Nyata di Expo (React Native)

Berikut contoh kode tombol navigasi di dalam screen `app/(tabs)/home.tsx`:

```tsx
import { View, Text, Pressable } from "react-native";
import { router, Link } from "expo-router";

export default function HomeNavigasiScreen() {
  // CARA 1: NAVIGASI DENGAN FUNGSI (onPress + router.push)
  const handleBukaDetail = () => {
    // Alamat rute sesuai nama file: 'app/detail.tsx' -> '/detail'
    router.push("/detail");
  };

  // CARA 2: NAVIGASI PINDAH TAB (onPress + router.push ke sesama tab)
  const handlePindahKeTabAbout = () => {
    router.push("/about");
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-2xl font-black text-gray-800">
          Uji Navigasi Tombol
        </Text>
        <Text className="text-xs text-gray-400 mt-1 mb-6">
          Tekan tombol di bawah untuk berpindah halaman
        </Text>

        {/* 1. TOMBOL MENUJU SCREEN MANDIRI (STACK) */}
        <Pressable
          onPress={handleBukaDetail}
          className="bg-red-600 p-4 rounded-xl items-center active:bg-red-700 mb-3"
        >
          <Text className="text-white font-bold text-sm">
            1. Buka Detail (Full Screen Tanpa Tab)
          </Text>
        </Pressable>

        {/* 2. TOMBOL PINDAH KE TAB LAIN */}
        <Pressable
          onPress={handlePindahKeTabAbout}
          className="bg-blue-600 p-4 rounded-xl items-center active:bg-blue-700 mb-4"
        >
          <Text className="text-white font-bold text-sm">
            2. Pindah ke Tab About
          </Text>
        </Pressable>

        {/* 3. CONTOH MEMAKAI KOMPONEN <Link> */}
        <View className="items-center mt-2">
          <Link href="/detail" asChild>
            <Pressable className="py-2 px-4 rounded-lg bg-gray-100 active:bg-gray-200">
              <Text className="text-gray-700 text-xs font-semibold">
                Atau Buka Detail via Komponen &lt;Link&gt;
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `router.push("/detail")`  
   Expo Router langsung mencari file `app/detail.tsx`, lalu meluncurkan animasinya meluncur dari kanan ke kiri.
2. Saat user berada di `/detail` dan menekan `router.back()`, layar tersebut meluncur kembali ke kanan dan user kembali ke posisi semula di `/home`.

---

### 6. Latihan (Uji Pemahaman)

**Latihan 1:**  
Kapan kamu harus menggunakan `router.push()` dan kapan kamu harus menggunakan `router.replace()`? Berikan contoh kasus nyata di aplikasi!

**Latihan 2:**  
Jika kamu punya file di lokasi `app/profil/edit.tsx`, bagaimana cara menuliskan alamat tujuan di dalam `router.push(...)`?
