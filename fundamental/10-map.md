# Modul 10: Array Method - map()

---

### 1. Konsep Sederhana

Pernahkah kamu melihat daftar 20 chat di WhatsApp, atau daftar postingan di Instagram?  
Apakah programmernya mengetik 20 komponen satu per satu? Tentu tidak!

Mereka punya 1 daftar data (Array), lalu menyuruh komputer:  
*"Tolong ubah setiap satu butir data di daftar ini menjadi satu kartu di layar HP!"*

> **`map()` adalah jurus sakti JavaScript untuk mengubah setiap elemen di dalam array menjadi bentuk baru satu per satu secara otomatis.**

Di React Native, `map()` adalah cara nomor 1 yang paling sering dipakai untuk menyulap data mentah menjadi deretan komponen tampilan UI!

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Pabrik Pencetak Paspor**:
- Bahan mentah: Tumpukan 100 lembar formulir data warga (Array data).
- Mesin: Setiap formulir masuk, mesin mencetak 1 buku paspor resmi berfoto (`map`).
- Hasil akhir: 100 buku paspor siap pakai.

Satu data masuk -> diolah -> keluar satu kartu UI.

---

### 3. Syntax Dasar

```typescript
const angka = [1, 2, 3];

// Mengalikan setiap angka dengan 10
const hasilBaru = angka.map((item) => {
  return item * 10;
});

console.log(hasilBaru); // [10, 20, 30]
```

**Aturan Emas `map()`:**
1. Jumlah elemen hasil olahan **selalu sama persis** dengan jumlah aslinya.
2. `map()` **tidak merusak** array aslinya, melainkan menghasilkan array baru.

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana `map()` menyulap daftar project menjadi deretan kartu UI di layar:

```tsx
import { View, Text } from "react-native";

export default function DaftarProjectScreen() {
  // DATA ARRAY OF OBJECTS
  const daftarProject = [
    { id: 1, nama: "Aplikasi PMI", status: "Selesai" },
    { id: 2, nama: "Donor Darah Keliling", status: "Berjalan" },
    { id: 3, nama: "Pelatihan Relawan", status: "Rencana" },
  ];

  return (
    <View className="flex-1 justify-center p-6 bg-gray-50">
      <Text className="text-xl font-bold text-gray-800 mb-4">
        Daftar Agenda Kegiatan
      </Text>

      {/* MENYULAP DATA MENJADI TAMPILAN MENGGUNAKAN .map() */}
      {daftarProject.map((item) => (
        <View
          key={item.id}
          className="bg-white p-4 mb-3 rounded-xl border border-gray-200 shadow-sm"
        >
          <Text className="text-base font-bold text-gray-800">
            {item.nama}
          </Text>
          <Text className="text-sm text-blue-600 mt-1">
            Status: {item.status}
          </Text>
        </View>
      ))}
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `{daftarProject.map((item) => ( ... ))}`  
   Kita menyisipkan kode JavaScript di dalam JSX menggunakan kurung kurawal `{}`.
2. `item` mewakili setiap satu objek project (giliran pertama: project id 1, giliran kedua: project id 2, dst).
3. **`key={item.id}` (SANGAT PENTING!)**  
   React Native mewajibkan setiap kartu yang dicetak oleh `map()` memiliki `key` unik (seperti nomor KTP). Ini agar React tahu kartu mana yang berubah jika ada update data.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 06 & 07: Kamu belajar bahwa `(item) => { return ... }` adalah sebuah **function dengan parameter dan return**.
- Di Modul 08: Kamu belajar **Array**.
- Di Modul 10 ini: `map()` menggabungkan keduanya! `map()` menjalankan function tersebut ke setiap butir di dalam array.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa memberikan properti `key`
```tsx
// Memunculkan warning kuning di Expo:
{daftarProject.map((item) => (
  <View> ... </View> // 🚨 Warning: Each child in a list should have a unique "key" prop!
))}
```
*Solusi:* Selalu tambahkan `key={item.id}` di elemen pembungkus terluar.

#### ❌ Kesalahan 2: Lupa mengembalikan (return) nilai JSX
Jika menggunakan kurung kurawal `{ }`, kamu wajib menulis kata kunci `return`:
```tsx
// SALAH:
{data.map((item) => {
  <Text>{item}</Text> // Kosong di layar! Karena tidak ada kata return!
})}

// BENAR: Gunakan return, atau gunakan kurung biasa ( ) sebagai shorthand
{data.map((item) => (
  <Text key={item}>{item}</Text>
))}
```

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Kamu punya data sederhana:
```typescript
const kotaTugas = ["Jakarta", "Bandung", "Surabaya"];
```
Jika kita melakukan `kotaTugas.map((kota) => "Kota " + kota)`, apa hasil array barunya?

**Latihan 2:**  
Mengapa React Native selalu meminta kita menuliskan `key={...}` saat menggunakan `.map()` untuk merender daftar kartu di layar? Jelaskan secara sederhana!

---

### 9. Challenge (Tantangan Langsung di Expo)

Diberikan data relawan:
```typescript
const relawan = [
  { id: 101, nama: "Bagas", tugas: "Ambulans" },
  { id: 102, nama: "Siti", tugas: "Dapur Umum" },
  { id: 103, nama: "Budi", tugas: "P3K Lapangan" }
];
```
Gunakan `.map()` untuk merender ketiga data relawan tersebut menjadi 3 kartu `<View>` yang masing-masing menampilkan nama dan tugas relawan. Pastikan menyertakan properti `key`!
