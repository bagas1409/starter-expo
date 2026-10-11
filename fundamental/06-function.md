# Modul 06: Function (Fungsi)

---

### 1. Konsep Sederhana

Pernahkah kamu menyalin (copy-paste) 5 baris kode yang sama di 3 tempat berbeda? Kalau kodenya ada yang salah, kamu harus mengedit ketiga tempat itu satu per satu. Capek dan gampang bikin salah!

Di sinilah kita butuh **Function**.

> **Function adalah sekumpulan instruksi kode yang kita bungkus dan beri nama, agar bisa kita panggil berulang kali kapan saja kita butuhkan tanpa harus menulis ulang.**

Bahkan di Expo React Native, layar yang kamu buat itu sendiri (seperti `export default function HomeScreen()`) sebenarnya adalah sebuah function!

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Mesin Pembuat Kopi (Coffee Maker)** di kantor PMI:
- Di dalam mesin sudah ada instruksi otomatis: giling biji kopi -> rebus air -> tuang ke cangkir.
- Setiap kali kamu haus, kamu tidak perlu mengulang proses memasak air dari nol. Kamu tinggal **tekan tombol "Buat Kopi"**, dan mesin langsung mengeksekusi instruksi tersebut.

Tombol "Buat Kopi" itulah pemanggilan sebuah **Function**.

---

### 3. Syntax Dasar

Ada 2 gaya penulisan function yang sering dipakai di JavaScript & React Native:

#### A. Gaya Standar (`function declaration`)
```typescript
function bunyikanSirine() {
  console.log("WIIU WIIU! Ambulans Berangkat!");
}

// Memanggil function:
bunyikanSirine();
```

#### B. Gaya Modern Panah (`arrow function`)
Gaya ini yang paling populer di React Native saat ini:
```typescript
const bunyikanSirine = () => {
  console.log("WIIU WIIU! Ambulans Berangkat!");
};

// Memanggil function:
bunyikanSirine();
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana function digunakan untuk merespons saat tombol `<Pressable>` ditekan oleh user:

```tsx
import { View, Text, Pressable } from "react-native";

export default function TombolDaruratScreen() {
  // MEMBUAT FUNCTION
  const kirimSinyalBantuan = () => {
    console.log("Panggilan darurat terkirim ke markas PMI!");
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-gray-800 text-lg mb-4">
        Layanan Tanggap Bencana
      </Text>

      {/* Menghubungkan function ke tombol dengan 'onPress' */}
      <Pressable
        onPress={kirimSinyalBantuan}
        className="bg-red-600 px-6 py-3 rounded-full active:bg-red-700 shadow"
      >
        <Text className="text-white font-bold text-base">
          Minta Bantuan Cepat
        </Text>
      </Pressable>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `const kirimSinyalBantuan = () => { ... }`  
   Ini murni logika **JavaScript**. Kita meracik sekumpulan aksi di dalam kurung kurawal `{ }`.
2. `<Pressable onPress={kirimSinyalBantuan}>`  
   Ini komponen **React Native**. Properti `onPress` artinya: *"Saat tombol ini disentuh oleh jari user di layar HP, tolong jalankan function `kirimSinyalBantuan`!"*.
3. Perhatikan bahwa di `onPress={kirimSinyalBantuan}`, kita **TIDAK menulis tanda kurung `()`**.  
   Kenapa? Karena kita hanya ingin menitipkan function ke tombol, bukan langsung menjalankannya saat layar baru terbuka.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 01-05: Kita belajar membuat variable, tipe data, kondisi `if/else`, dan loop.
- Di Modul 06 ini: Semua logika tersebut sekarang bisa kita bungkus rapi di dalam sebuah **Function** agar rapi, terstruktur, dan bisa dijalankan saat user menekan tombol di HP.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Menulis tanda kurung `()` saat menempelkan function ke tombol
```tsx
// SALAH:
<Pressable onPress={kirimSinyalBantuan()}>
```
*Kenapa salah?* Tanda `()` artinya **"Jalankan sekarang juga!"**. Akibatnya function langsung jalan begitu aplikasi terbuka, bukan saat tombol disentuh!
```tsx
// BENAR:
<Pressable onPress={kirimSinyalBantuan}>
```

#### ❌ Kesalahan 2: Membuat function tapi lupa dipanggil
Function yang dibuat tapi tidak pernah dipanggil hanya akan diam di memori dan tidak akan mengeksekusi instruksi di dalamnya.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Tuliskan sebuah arrow function sederhana bernama `sapaRelawan` yang mencetak teks `"Halo Relawan PMI, terima kasih atas dedikasi Anda!"` ke console.

**Latihan 2:**  
Perhatikan dua baris berikut:
```tsx
// Baris A:
<Pressable onPress={cekData}>

// Baris B:
<Pressable onPress={cekData()}>
```
Jelaskan perbedaan mendasar antara Baris A dan Baris B saat layar HP dibuka!

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan layar tombol check-in kehadiran donor:
- Buat sebuah function `handleCheckIn` yang mencetak status `"Pasien berhasil check-in!"` ke terminal / console.
- Buat sebuah tombol `<Pressable>` berwarna biru bertuliskan `"Check In Sekarang"`.
- Sambungkan function tersebut ke properti `onPress` milik tombol.
