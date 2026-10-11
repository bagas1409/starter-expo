# Modul 11: Array Method - filter()

---

### 1. Konsep Sederhana

Pernahkah kamu belanja di Shopee atau Tokopedia lalu menekan tombol **"Filter"** untuk hanya menampilkan barang yang "Bintang 4 ke atas" atau "Gratis Ongkir"?

Atau di aplikasi donor darah: kamu hanya ingin melihat kantong darah yang statusnya **"Tersedia"**?

> **`filter()` adalah cara JavaScript untuk menyaring isi array, hanya mengambil data yang memenuhi syarat tertentu, dan membuang yang tidak cocok.**

Hasil dari `filter()` adalah sebuah array baru yang isinya lebih sedikit (atau sama), tapi isinya sudah bersih sesuai kriteria yang kamu mau.

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Saringan Tepung / Pintu Gerbang Masuk**:
- Penjaga gerbang punya aturan: *"Hanya yang memakai seragam relawan (`isSeragam === true`) yang boleh masuk!"*.
- Dari 100 orang yang antre, penjaga memeriksa satu per satu.
- Yang berseragam dipersilakan masuk, yang tidak disuruh keluar.
- Hasil akhirnya adalah kelompok orang-orang yang sudah terverifikasi.

---

### 3. Syntax Dasar

```typescript
const daftarAngka = [5, 12, 8, 130, 44];

// Kita hanya ingin angka yang lebih besar dari 10
const angkaBesar = daftarAngka.filter((item) => {
  return item > 10;
});

console.log(angkaBesar); // [12, 130, 44]
```

**Aturan Emas `filter()`:**
1. Di dalam function-nya, kita wajib mengembalikan nilai `true` (jika ingin disimpan) atau `false` (jika ingin dibuang).
2. `filter()` tidak pernah mengubah data aslinya, melainkan membuat wadah array baru.

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana `filter()` dan `map()` digabung untuk hanya menampilkan project yang **sudah selesai**:

```tsx
import { View, Text } from "react-native";

export default function ProjectSelesaiScreen() {
  const semuaProject = [
    { id: 1, nama: "Aplikasi PMI", status: "selesai" },
    { id: 2, nama: "Renovasi Posko", status: "proses" },
    { id: 3, nama: "Distribusi Obat", status: "selesai" },
  ];

  // 1. FILTER: Ambil hanya yang statusnya "selesai"
  const projectSelesai = semuaProject.filter(
    (item) => item.status === "selesai"
  );

  return (
    <View className="flex-1 justify-center p-6 bg-gray-50">
      <Text className="text-xl font-bold text-gray-800 mb-4">
        Project Selesai ({projectSelesai.length})
      </Text>

      {/* 2. MAP: Tampilkan hasil filter ke layar */}
      {projectSelesai.map((item) => (
        <View
          key={item.id}
          className="bg-emerald-50 border border-emerald-200 p-4 mb-3 rounded-xl"
        >
          <Text className="text-base font-bold text-emerald-900">
            {item.nama}
          </Text>
          <Text className="text-sm text-emerald-700 mt-1">
            Status: Telah Tuntas
          </Text>
        </View>
      ))}
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `semuaProject.filter((item) => item.status === "selesai");`  
   JavaScript memeriksa item satu per satu:
   - Item 1: status "selesai"? YA (`true`) -> Disimpan!
   - Item 2: status "selesai"? TIDAK (`false`) -> Dibuang!
   - Item 3: status "selesai"? YA (`true`) -> Disimpan!
2. Hasilnya adalah array `projectSelesai` yang hanya berisi 2 item.
3. Lalu kita pakai `.map()` untuk menempelkan 2 item tersebut ke layar HP. Kolaborasi yang sangat rapi!

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Bedanya dengan `map()`:
  - `map()` **mengubah bentuk** setiap item (jumlah barang tetap sama).
  - `filter()` **memilih barang** yang lolos kualifikasi (jumlah barang bisa berkurang).

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Mengharapkan `filter()` mengubah bentuk data
```typescript
// SALAH PAHAM:
const hasil = angka.filter((item) => item * 2); // Ini salah fungsi! Kalau mau mengalikan, pakai .map()!
```
`filter()` hanya bertugas mengambil atau membuang berdasarkan kondisi `true`/`false`.

#### ❌ Kesalahan 2: Menggunakan `=` bukannya `===` di dalam syarat
```typescript
const lolos = pasien.filter((item) => item.golongan = "O"); // 🚨 Ini error fatal, jangan pakai 1 tanda sama dengan!
```

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Diberikan data kantong darah:
```typescript
const stokDarah = [
  { id: 1, gol: "A", jumlah: 10 },
  { id: 2, gol: "B", jumlah: 0 },
  { id: 3, gol: "O", jumlah: 25 },
  { id: 4, gol: "AB", jumlah: 0 }
];
```
Tuliskan satu baris kode `filter()` untuk hanya mengambil stok darah yang masih tersedia (`jumlah > 0`)!

**Latihan 2:**  
Apa perbedaan utama antara `map()` dan `filter()` dalam mengolah sebuah array?

---

### 9. Challenge (Tantangan Langsung di Expo)

Diberikan data relawan lapangan:
```typescript
const relawan = [
  { id: 1, nama: "Bagas", isSiaga: true },
  { id: 2, nama: "Rian", isSiaga: false },
  { id: 3, nama: "Siti", isSiaga: true }
];
```
Saring hanya relawan yang `isSiaga === true`, lalu gunakan `.map()` untuk menampilkan nama-nama mereka ke dalam komponen `<Text>` di layar HP.
