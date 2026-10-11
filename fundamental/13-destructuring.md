# Modul 13: Destructuring (Membongkar Paket Data)

---

### 1. Konsep Sederhana

Pernahkah kamu melihat kode yang membosankan dan panjang seperti ini?
```javascript
const user = { nama: "Bagas", kota: "Jakarta", umur: 22 };

// Memanggilnya berulang-ulang:
console.log(user.nama);
console.log(user.kota);
console.log(user.umur);
```
Setiap kali mau pakai, harus ketik `user.` lagi, `user.` lagi... Capek kan?

> **Destructuring adalah cara singkat dan elegan di JavaScript untuk membongkar isi object atau array dan langsung menyimpannya ke dalam variable-variable tersendiri.**

Bahkan sejak hari pertama kamu menulis `import { View, Text } from "react-native"`, kamu sebenarnya sudah mempraktikkan konsep Destructuring ini!

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu menerima **Paket Kardus Belanjaan**:
- Di dalam kardus ada: Baju, Sepatu, dan Topi.
- Kamu tidak membiarkan barang-barang itu selamanya di dalam kardus.
- Kamu **membongkar kardus itu**, lalu meletakkan Baju di gantungan baju, Sepatu di rak sepatu, dan Topi di meja.

Membongkar isi kardus ke tempatnya masing-masing itulah **Destructuring**.

---

### 3. Syntax Dasar

#### A. Object Destructuring (Paling sering dipakai)
Menggunakan kurung kurawal `{ }` di sebelah kiri tanda sama dengan:
```typescript
const relawan = {
  nama: "Bagas",
  tugas: "Medis",
  kantongDarah: 4
};

// MEMBONGKAR (Destructuring):
const { nama, tugas, kantongDarah } = relawan;

// Sekarang bisa langsung panggil namanya tanpa "relawan." lagi!
console.log(nama);         // "Bagas"
console.log(tugas);        // "Medis"
console.log(kantongDarah); // 4
```

#### B. Array Destructuring
Menggunakan kurung siku `[ ]` di sebelah kiri:
```typescript
const koordinat = [-6.2088, 106.8456];

// Membongkar sesuai urutan index:
const [latitude, longitude] = koordinat;

console.log(latitude);  // -6.2088
console.log(longitude); // 106.8456
```
*(Catatan: Ini persis cara kerja `useState` di React nanti: `const [count, setCount] = useState(0)`)*

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana destructuring membuat kode komponen Expo menjadi jauh lebih bersih dan nyaman dibaca:

```tsx
import { View, Text } from "react-native";

export default function RingkasanDonorScreen() {
  // DATA DARI OBJECT
  const donorData = {
    namaDonatur: "Bagas Pratama",
    golonganDarah: "O+",
    lokasiDonor: "PMI Kramat Raya",
    statusVerifikasi: "Terverifikasi",
  };

  // KITA BONGKAR PROPERTINYA MENGGUNAKAN DESTRUCTURING:
  const { namaDonatur, golonganDarah, lokasiDonor, statusVerifikasi } = donorData;

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl w-full border border-gray-200 shadow-sm">
        {/* Kode jauh lebih ringkas, tidak perlu 'donorData.namaDonatur' lagi! */}
        <Text className="text-xl font-bold text-gray-800">
          {namaDonatur}
        </Text>

        <Text className="text-base text-rose-600 font-semibold mt-1">
          Golongan Darah: {golonganDarah}
        </Text>

        <Text className="text-sm text-gray-600 mt-2">
          Lokasi: {lokasiDonor}
        </Text>

        <Text className="text-xs font-bold text-emerald-600 mt-3">
          ✓ {statusVerifikasi}
        </Text>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `const { namaDonatur, golonganDarah } = donorData;`  
   JavaScript secara otomatis mencocokkan nama properti di dalam object `donorData` dan membuat variable mandiri dengan nama yang persis sama.
2. Di dalam JSX `<Text>`, kita cukup menulis `{namaDonatur}`, bukan `{donorData.namaDonatur}`. Kodenya jadi sangat bersih!

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 09: Kita membuat dan mengakses object dengan cara lama `titik` (`user.nama`).
- Di Modul 13 ini: Kita mempercepat dan mempercantik cara mengakses object tersebut lewat **Destructuring**.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Nama variable tidak cocok dengan nama properti di object
```typescript
const user = { nama: "Bagas" };
const { name } = user; // 🚨 Salah ketik 'name', hasilnya undefined!
```
*Aturan:* Nama di dalam `{ }` harus persis sama dengan nama key yang ada di dalam object aslinya.

#### ❌ Kesalahan 2: Tertukar antara `{}` dan `[]`
- Untuk Object, gunakan kurung kurawal `{ }`.
- Untuk Array, gunakan kurung siku `[ ]`.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Bongkarlah object di bawah ini menggunakan destructuring agar kamu mendapatkan variable `judul` dan `persentase`:
```typescript
const proyek = {
  id: 1,
  judul: "Aplikasi Relawan PMI",
  persentase: 90,
  isSelesai: true
};
```

**Latihan 2:**  
Diberikan array nama tim:
```typescript
const tim = ["Bagas", "Rian", "Fahri"];
```
Bagaimana cara melakukan destructuring untuk mengambil orang pertama sebagai `ketua` dan orang kedua sebagai `wakil`?

---

### 9. Challenge (Tantangan Langsung di Expo)

Diberikan sebuah data pasien:
```typescript
const pasien = {
  nama: "Siti Rahma",
  umur: 24,
  tekananDarah: "120/80"
};
```
Gunakan destructuring untuk membongkar `nama`, `umur`, dan `tekananDarah`, lalu tampilkan ketiganya di dalam komponen `<Text>` di layar Expo.
