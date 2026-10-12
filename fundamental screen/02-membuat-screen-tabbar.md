# Modul 02: Cara Membuat Screen Baru yang Masuk ke Tab Bar

---

### 1. Kapan Kita Membutuhkan Screen Tab Bar?

Screen Tab Bar digunakan untuk **menu navigasi utama** yang selalu ingin bisa diakses dengan satu sentuhan jempol di bagian bawah layar HP (seperti menu *Home*, *Riwayat*, *Relawan*, dan *Profil*).

Untuk membuat screen tab bar baru, ada **2 langkah wajib**:
1. Buat file screen di dalam `app/(tabs)/`
2. Daftarkan dan atur ikonnya di `app/(tabs)/_layout.tsx`

---

### Langkah 1: Buat File Screen Baru

Misalnya kita ingin membuat halaman tab baru bernama **Donor Darah** (`donor.tsx`):

Buat file baru di lokasi:  
📁 `app/(tabs)/donor.tsx`

Tulis kode komponennya:

```tsx
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DonorScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-6">
      <Text className="text-2xl font-bold text-gray-800">
        Jadwal Donor Darah PMI
      </Text>
      <Text className="text-sm text-gray-500 mt-2">
        Ini adalah screen yang berada di dalam bilah menu bawah (Tab Bar).
      </Text>

      {/* Kartu Informasi */}
      <View className="mt-6 bg-red-50 p-5 rounded-2xl border border-red-200">
        <Text className="text-red-700 font-bold text-base">
          🩸 Posko Donor Hari Ini
        </Text>
        <Text className="text-xs text-red-600 mt-1">
          PMI Kramat Raya • Buka 24 Jam
        </Text>
      </View>
    </SafeAreaView>
  );
}
```

---

### Langkah 2: Daftarkan di `app/(tabs)/_layout.tsx`

Buka file:  
📄 `app/(tabs)/_layout.tsx`

Di dalam file ini, ada komponen `<Tabs>`. Tambahkan satu baris `<Tabs.Screen>` baru:

```tsx
import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* 1. Tab Home yang sudah ada */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* 2. TAB BARU KITA: name harus sama persis dengan nama file 'donor.tsx' */}
      <Tabs.Screen
        name="donor"
        options={{
          title: "Donor",
          tabBarIcon: ({ color }) => (
            // Ganti nama ikon sesuai kebutuhan
            <IconSymbol size={28} name="drop.fill" color={color} />
          ),
        }}
      />

      {/* 3. Tab About yang sudah ada */}
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
```

> ⚠️ **Aturan Penting:** Nilai `name="donor"` pada `<Tabs.Screen>` **harus persis sama** dengan nama file `donor.tsx` (tanpa ekstensi `.tsx`).

---

### Tips Pro: Bagaimana Jika Ingin Punya File di `(tabs)` tapi Tidak Muncul Ikonnya di Bawah?

Kadang kita punya file di dalam folder `(tabs)`, tapi kita tidak mau menu bawahnya bertambah (misal file sementara).

Caranya cukup tambahkan `href: null`:

```tsx
<Tabs.Screen
  name="file-rahasia"
  options={{
    href: null, // <-- Menu ikonnya disembunyikan dari tab bar bawah!
  }}
/>
```

---

### Ringkasan Cepat
1. Buat file: `app/(tabs)/nama-layar.tsx`
2. Pasang `<Tabs.Screen name="nama-layar" options={{ title, tabBarIcon }} />` di `app/(tabs)/_layout.tsx`.
3. Selesai! Tab bar di bawah otomatis bertambah 1 tombol baru.
