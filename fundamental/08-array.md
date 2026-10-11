# Modul 08: Array (Daftar / List)

---

### 1. Konsep Sederhana

Bayangkan kamu disuruh menyimpan nama 50 relawan PMI:
Apakah kamu akan membuat toples satu per satu seperti ini?
```javascript
const relawan1 = "Bagas";
const relawan2 = "Siti";
const relawan3 = "Ahmad";
// ...sampai relawan50?! Melelahkan sekali!
```

Tentu tidak. Di sinilah kita butuh **Array**.

> **Array adalah satu wadah besar yang bisa menampung banyak data sekaligus secara berurutan dalam bentuk daftar (list).**

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Rak Sepatu Bertingkat**:
- Di rak sepatu itu ada banyak slot bernomor: Slot 0, Slot 1, Slot 2, Slot 3.
- Kamu bisa menaruh sepatu lari di slot 0, sepatu kantor di slot 1, dan sandal di slot 2.
- Seluruh rak itu punya satu nama: `rakSepatu`.

Atau bayangkan **Daftar Kontak** atau **Chat List** di WhatsApp HP kamu. Setiap baris chat adalah satu elemen di dalam sebuah Array.

---

### 3. Syntax Dasar

Array dibuat menggunakan tanda kurung siku: `[ ]`.

```typescript
// Membuat array berisi string
const daftarGolonganDarah = ["A", "B", "AB", "O"];

// Mengakses data berdasarkan nomor slot (INDEX)
// INGAT: Index programming selalu dimulai dari 0!
console.log(daftarGolonganDarah[0]); // "A"
console.log(daftarGolonganDarah[1]); // "B"
console.log(daftarGolonganDarah[3]); // "O"

// Mengetahui jumlah total isi array
console.log(daftarGolonganDarah.length); // 4

// Menambahkan data baru di antrean belakang
daftarGolonganDarah.push("A+");
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana kita menampilkan elemen-elemen dari sebuah Array ke dalam tampilan layar HP:

```tsx
import { View, Text } from "react-native";

export default function DaftarKategoriScreen() {
  // DATA ARRAY JAVASCRIPT
  const poskoBencana = ["Posko Aceh", "Posko Padang", "Posko Cianjur"];

  return (
    <View className="flex-1 justify-center p-6 bg-gray-50">
      <Text className="text-xl font-bold text-gray-800 mb-4">
        Daftar Posko Aktif ({poskoBencana.length} Lokasi)
      </Text>

      {/* Menampilkan isi array satu per satu dengan index */}
      <View className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <Text className="text-base font-semibold text-rose-600">
          1. {poskoBencana[0]}
        </Text>
        <Text className="text-base font-semibold text-rose-600 mt-2">
          2. {poskoBencana[1]}
        </Text>
        <Text className="text-base font-semibold text-rose-600 mt-2">
          3. {poskoBencana[2]}
        </Text>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `const poskoBencana = ["Posko Aceh", "Posko Padang", "Posko Cianjur"];`  
   Ini array JavaScript berisi 3 teks nama posko.
2. `poskoBencana.length`  
   Properti bawaan JavaScript untuk menghitung berapa banyak barang di dalam array. Di sini hasilnya adalah `3`.
3. `poskoBencana[0]` mengambil elemen pertama (`"Posko Aceh"`), `poskoBencana[1]` mengambil elemen kedua (`"Posko Padang"`).

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 01: Satu variable biasa cuma muat 1 nilai.
- Di Modul 08 ini: Satu variable array bisa muat puluhan bahkan ribuan data sekaligus!
- Nanti di Modul 10, kita akan belajar cara otomatis menampilkan semua isi array ke layar tanpa harus mengetik `[0]`, `[1]`, `[2]` secara manual.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa bahwa index dimulai dari 0
```typescript
const buah = ["Apel", "Jeruk", "Mangga"];
console.log(buah[1]); // Banyak pemula mengira ini "Apel", padahal hasilnya "Jeruk"!
```

#### ❌ Kesalahan 2: Mengakses index yang tidak ada
```typescript
console.log(buah[10]); // undefined (karena slot ke-10 tidak ada isinya)
```

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Diberikan array jadwal piket relawan:
```typescript
const relawan = ["Bagas", "Doni", "Rina", "Maya"];
```
1. Siapakah relawan yang berada di posisi `relawan[2]`?
2. Bagaimana cara mengambil nama `"Bagas"`?
3. Berapa nilai dari `relawan.length`?

**Latihan 2:**  
Jika kamu punya array kosong:
```typescript
const antrean = [];
antrean.push("Pasien 1");
antrean.push("Pasien 2");
```
Berapa jumlah elemen di dalam `antrean` sekarang, dan siapa yang ada di `antrean[0]`?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan kode untuk menampilkan ringkasan jenis darah yang tersedia:
- Buat array `golonganDarah = ["A", "B", "O", "AB"]`
- Tampilkan jumlah total jenis darah menggunakan `.length`
- Tampilkan golongan darah pertama dan terakhir di dalam komponen `<Text>` yang terpisah.
