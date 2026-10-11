# Modul 09: Object (Objek & Properti)

---

### 1. Konsep Sederhana

Array tadi bagus untuk menyimpan daftar sejenis, misalnya daftar nama: `["Bagas", "Siti", "Budi"]`.  
Tapi bagaimana kalau kita ingin menyimpan **satu profil orang lengkap**?
- Nama: Bagas
- Umur: 22
- Golongan Darah: O
- Sudah Donor: Ya

Kalau disimpan di array terpisah-pisah, datanya gampang tertukar dan berantakan. Di sinilah kita butuh **Object**.

> **Object adalah wadah yang membungkus banyak informasi tentang satu entitas/benda utuh, di mana setiap informasi diberi label (Key - Value).**

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Kartu Identitas (KTP / ID Card Relawan)**:
Di dalam 1 lembar kartu itu ada beberapa baris:
- **Nama**: Bagas
- **Jabatan**: Koordinator Lapangan
- **Unit**: PMI Cabang Jakarta
- **Status Aktif**: true

Seluruh kartu itu adalah **Object**. Kata "Nama", "Jabatan", "Unit" adalah **Key (Properti)**, sedangkan isi datanya adalah **Value (Nilai)**.

---

### 3. Syntax Dasar

Object dibuat menggunakan kurung kurawal `{ }` dengan format pasangan `kunci: nilai`.

```typescript
// Membuat Object
const user = {
  nama: "Bagas",
  umur: 22,
  golonganDarah: "O",
  isRelawanAktif: true
};

// Mengakses data di dalam object (Dot Notation)
console.log(user.nama);          // "Bagas"
console.log(user.golonganDarah); // "O"

// Mengubah isi properti
user.umur = 23;
```

#### Array of Objects (Kombinasi Array & Object)
Ini adalah bentuk data yang **paling sering kamu temukan di aplikasi mobile**:
```typescript
const daftarProject = [
  { id: 1, nama: "Aplikasi PMI", status: "Selesai" },
  { id: 2, nama: "Sistem Logistik Obat", status: "Proses" }
];

console.log(daftarProject[0].nama); // "Aplikasi PMI"
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana data object digunakan untuk menampilkan kartu profil user di layar HP:

```tsx
import { View, Text } from "react-native";

export default function ProfilPasienScreen() {
  // DATA OBJECT JAVASCRIPT
  const relawan = {
    nama: "Bagas Pratama",
    peran: "Logistik Medis",
    lokasiTugas: "Jakarta Pusat",
    totalMisi: 14,
    statusSiaga: true,
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      {/* KARTU PROFIL */}
      <View className="bg-white w-full p-5 rounded-2xl shadow-md border border-gray-100">
        <Text className="text-2xl font-bold text-gray-800">
          {relawan.nama}
        </Text>
        
        <Text className="text-sm font-semibold text-rose-600 mt-1">
          {relawan.peran} • {relawan.lokasiTugas}
        </Text>

        <View className="border-t border-gray-100 mt-4 pt-3 flex-row justify-between">
          <Text className="text-gray-500">Total Misi:</Text>
          <Text className="font-bold text-gray-800">{relawan.totalMisi} Kali</Text>
        </View>

        <View className="mt-2 flex-row justify-between">
          <Text className="text-gray-500">Status:</Text>
          <Text className="font-bold text-emerald-600">
            {relawan.statusSiaga ? "Siaga 24 Jam" : "Libur"}
          </Text>
        </View>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `const relawan = { nama: "Bagas Pratama", ... };`  
   Semua data pribadi relawan dibundel jadi satu kesatuan object.
2. Di dalam JSX: `{relawan.nama}`  
   Kita memakai tanda titik (`.`) untuk menjangkau properti di dalam object tersebut. Sangat mudah dibaca dan intuitif!

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 02: Kita belajar tipe data primitif (`string`, `number`, `boolean`).
- Di Modul 08: Kita belajar `Array` untuk daftar banyak benda.
- Di Modul 09 ini: Kita menggabungkan semua tipe data itu menjadi satu objek utuh yang merepresentasikan data nyata di dunia nyata (seperti data User, data Pasien, data Project).

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Mengetik nama properti yang salah (Typo)
```typescript
console.log(relawan.namma); // undefined! Karena key-nya adalah 'nama', bukan 'namma'
```

#### ❌ Kesalahan 2: Mencoba mencetak object utuh ke dalam `<Text>`
```tsx
// SALAH:
<Text>{relawan}</Text> // 🚨 CRASH! React Native akan error: "Objects are not valid as a React child"

// BENAR: Cetak propertinya secara spesifik:
<Text>{relawan.nama}</Text>
```

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Buatlah sebuah object `proyek` yang memiliki 3 properti:
- `judul`: bernilai `"Sistem Darah PMI"`
- `targetKantong`: bernilai `500`
- `isTercapai`: bernilai `false`

Bagaimana cara kamu memanggil nilai `targetKantong` dari object tersebut?

**Latihan 2:**  
Perhatikan data kombinasi berikut:
```typescript
const daftarPasien = [
  { nama: "Doni", golDarah: "A" },
  { nama: "Citra", golDarah: "B" }
];
```
Bagaimana cara mengambil golongan darah milik pasien bernama Citra? Tuliskan kodenya!

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan layar kartu project:
- Buat object `project = { nama: "Aplikasi PMI", kategori: "Kesehatan", persentase: 85 }`
- Tampilkan nama project dengan teks tebal (bold), kategori project dengan warna abu-abu, dan persentase progress project dengan warna hijau di dalam `<Text>`.
