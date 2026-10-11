# Modul 12: Array Method - find()

---

### 1. Konsep Sederhana

Kalau `filter()` tadi menghasilkan **sekelompok data** (Array), bagaimana kalau kita cuma butuh mencari **SATU orang tertentu**?
Contoh:
- Mencari profil user yang memiliki ID `101`.
- Mencari detail transaksi nomor invoice `INV-2026-001`.

> **`find()` adalah cara JavaScript untuk mencari dan mengambil SATU butir item pertama di dalam array yang cocok dengan syarat yang kita cari.**

Begitu ketemu, `find()` langsung berhenti mencari dan memberikan barangnya langsung ke tangan kita (bukan dibungkus array lagi).

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu mencari **Pasien bernama Bagas** di dalam ruang tunggu:
- Kamu masuk ke ruangan dan memanggil: *"Apakah ada yang bernama Bagas?"*.
- Orang pertama yang mengacungkan tangan langsung kamu ajak bicara (`find`). Kamu tidak perlu memeriksa orang lain lagi.
- Kalau tidak ada satu pun orang yang bernama Bagas di ruangan itu, tanganmu pulang dalam keadaan kosong (**`undefined`**).

---

### 3. Syntax Dasar

```typescript
const daftarUser = [
  { id: 1, nama: "Andi" },
  { id: 2, nama: "Bagas" },
  { id: 3, nama: "Citra" },
];

// Mencari user dengan ID 2
const userDitemukan = daftarUser.find((user) => {
  return user.id === 2;
});

console.log(userDitemukan); 
// Hasilnya langsung 1 Object utuh: { id: 2, nama: "Bagas" }
```

**Perbedaan Utama:**
- `filter()` mengembalikan **Array** (meskipun yang cocok cuma 1, tetap dibungkus `[ ... ]`).
- `find()` mengembalikan **Object langsung**, atau `undefined` jika tidak ada yang cocok.

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana `find()` digunakan untuk menampilkan halaman detail pasien yang sedang dipilih:

```tsx
import { View, Text } from "react-native";

export default function DetailPasienScreen() {
  const semuaPasien = [
    { id: 101, nama: "Bagas Pratama", golDarah: "O", riwayat: "Donor 3x" },
    { id: 102, nama: "Siti Rahma", golDarah: "A", riwayat: "Donor 1x" },
    { id: 103, nama: "Budi Santoso", golDarah: "B", riwayat: "Baru Pertama" },
  ];

  // ID yang ingin dicari (misalnya user baru saja mengetuk kartu pasien 101)
  const idDicari = 101;
  const pasienTerpilih = semuaPasien.find((p) => p.id === idDicari);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <View className="bg-white p-6 rounded-2xl w-full shadow-md border border-gray-100">
        <Text className="text-sm font-semibold text-rose-600">
          DETAIL DATA PASIEN
        </Text>

        {pasienTerpilih ? (
          <>
            <Text className="text-2xl font-bold text-gray-800 mt-2">
              {pasienTerpilih.nama}
            </Text>
            <Text className="text-base text-gray-600 mt-1">
              Golongan Darah: {pasienTerpilih.golDarah}
            </Text>
            <Text className="text-sm text-gray-500 mt-2">
              Riwayat: {pasienTerpilih.riwayat}
            </Text>
          </>
        ) : (
          <Text className="text-gray-500 mt-2">Data tidak ditemukan!</Text>
        )}
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `semuaPasien.find((p) => p.id === idDicari)`  
   Komputer menyisir array. Di elemen pertama (`id: 101`), syaratnya cocok! Komputer langsung berhenti dan mengembalikan objek `{ id: 101, ... }`.
2. Kita bisa langsung memanggil propertinya: `pasienTerpilih.nama` tanpa perlu looping atau `[0]` lagi!

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 08: Array menyimpan kumpulan banyak data.
- Di Modul 11: `filter()` mengambil kelompok data yang cocok.
- Di Modul 12 ini: `find()` adalah pisau bedah spesifik untuk mengambil **satu item tunggal** berdasarkan ID unik atau kriteria tertentu.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa menangani jika data tidak ketemu (`undefined`)
Jika data yang dicari tidak ada, `find()` menghasilkan `undefined`.  
Kalau kamu langsung menulis:
```typescript
const pasien = semuaPasien.find((p) => p.id === 999);
console.log(pasien.nama); // 🚨 CRASH! TypeError: Cannot read property 'nama' of undefined
```
*Solusi:* Selalu pastikan cek dulu apakah datanya ada (misal dengan `if (pasien)` atau pengecekan sebelum render).

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Diberikan data obat darurat:
```typescript
const daftarObat = [
  { kode: "OB-1", nama: "Paracetamol", stok: 12 },
  { kode: "OB-2", nama: "Amoxicillin", stok: 5 },
  { kode: "OB-3", nama: "Antasida", stok: 20 }
];
```
Tuliskan kode menggunakan `find()` untuk mengambil data obat yang memiliki `kode === "OB-2"`!

**Latihan 2:**  
Apa perbedaan tipe data yang dihasilkan dari baris A dan baris B berikut?
```typescript
// Baris A:
const hasilA = daftarObat.filter((o) => o.kode === "OB-2");

// Baris B:
const hasilB = daftarObat.find((o) => o.kode === "OB-2");
```

---

### 9. Challenge (Tantangan Langsung di Expo)

Diberikan data relawan ambulans:
```typescript
const armada = [
  { nopol: "B 1234 PMI", driver: "Pak Joko", status: "Siaga" },
  { nopol: "B 5678 PMI", driver: "Pak Ahmad", status: "Di Jalan" }
];
```
Gunakan `.find()` untuk mencari mobil dengan nopol `"B 1234 PMI"`, lalu tampilkan nama driver dan status mobil tersebut ke dalam komponen `<Text>` di layar Expo.
