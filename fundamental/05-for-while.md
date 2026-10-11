# Modul 05: Perulangan (for / while)

---

### 1. Konsep Sederhana

Manusia cepat lelah kalau disuruh mengulang pekerjaan yang sama 100 kali. Komputer justru paling suka hal itu!  
Misalnya:
- Mengirim notifikasi reminder ke 50 pasien donor darah.
- Menghitung total poin dari 10 aktivitas kerelawanan.

> **Perulangan (Looping) adalah cara kita memerintahkan komputer untuk mengeksekusi suatu blok kode berulang-ulang sampai batas tertentu yang kita tentukan.**

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu sedang push-up:
- Kamu mulai dari hitungan ke-1 (`i = 1`).
- Targetmu adalah 10 kali (`i <= 10`).
- Setiap kali selesai 1 kali push-up, hitungan bertambah 1 (`i++`).
- Begitu hitungan mencapai 11, kamu berhenti.

Itulah persis cara kerja perulangan `for`.

---

### 3. Syntax Dasar

#### A. Perulangan `for` (Paling sering dipakai saat tahu batasnya)
```typescript
for (let i = 1; i <= 5; i++) {
  console.log("Antrean nomor: " + i);
}
```
**Anatomi 3 bagian di dalam kurung:**
1. `let i = 1;` → Titik awal hitungan (inisialisasi).
2. `i <= 5;` → Syarat perulangan terus jalan (kondisi).
3. `i++` → Naik 1 angka setiap putaran (singkatan dari `i = i + 1`).

#### B. Perulangan `while` (Dipakai saat tidak tahu pasti berapa kali, tapi tahu syarat berhentinya)
```typescript
let bateraiAlat = 3;

while (bateraiAlat > 0) {
  console.log("Alat menyala, sisa bar:", bateraiAlat);
  bateraiAlat--; // Kurangi 1 setiap putaran
}
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana `for` loop digunakan untuk mengakumulasi (menjumlahkan) total kantong darah yang terkumpul minggu ini:

```tsx
import { View, Text } from "react-native";

export default function LaporanDonorScreen() {
  // Misal ada data kantong darah per hari (Senin s/d Jumat)
  const kantongHarian = [10, 15, 8, 12, 20];
  
  // Menggunakan loop untuk menghitung total
  let totalKantong = 0;
  for (let i = 0; i < kantongHarian.length; i++) {
    totalKantong = totalKantong + kantongHarian[i];
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <Text className="text-gray-600 text-base">
        Laporan Mingguan PMI
      </Text>

      <Text className="text-3xl font-bold text-rose-600 mt-2">
        {totalKantong} Kantong
      </Text>

      <Text className="text-sm text-gray-500 mt-1">
        Terkumpul dari 5 hari kegiatan
      </Text>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `let totalKantong = 0;`  
   Kita siapkan toples penampung hasil penjumlahan (sering disebut *accumulator*).
2. `for (let i = 0; i < 5; i++)`  
   Komputer berputar 5 kali, mengambil angka tiap hari (10, lalu 15, lalu 8...) dan menambahkannya ke toples `totalKantong`.
3. Setelah putaran selesai, angka total `65` dicetak rapi ke layar lewat `{totalKantong}`.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 01: Kita butuh `let totalKantong` karena nilainya terus berubah setiap kali putaran berjalan.
- Di Modul 03: Kita menggunakan operator aritmatika `+` dan operator perbandingan `<`.
- Di Modul 04: Loop juga bisa dipadukan dengan `if` di dalamnya (misal: hanya hitung jika angka > 10).

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Infinite Loop (Perulangan Abadi Tanpa Henti)
```typescript
for (let i = 1; i > 0; i++) {
  // 🚨 BAHAYA! Angka i akan terus naik selamanya (1, 2, 3...)
  // Aplikasi HP akan macet (freeze) atau crash!
}
```
*Solusi:* Pastikan kondisi akhirnya bisa tercapai dan syaratnya benar (misal `i <= 10`).

#### ❌ Kesalahan 2: Salah titik awal index
Di dunia programming, urutan index biasanya dimulai dari `0`, bukan `1`.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Perhatikan perulangan ini:
```typescript
let counter = 0;
for (let i = 1; i <= 3; i++) {
  counter = counter + 2;
}
```
Berapa nilai akhir dari variable `counter` setelah perulangan selesai? Coba hitung putaran demi putarannya!

**Latihan 2:**  
Apa yang akan terjadi jika kamu menulis kode `while` seperti ini:
```typescript
let angka = 5;
while (angka > 0) {
  console.log("Halo");
  // Lupa menulis: angka--;
}
```
Mengapa kode di atas bermasalah?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan logika perulangan untuk menghitung berapa kali tombol darurat ditekan:
- Buat variabel penampung `totalAlarm = 0`.
- Buat perulangan `for` sebanyak 4 kali.
- Setiap putaran, tambahkan `1` ke `totalAlarm`.
- Tampilkan hasil akhir `totalAlarm` di layar HP menggunakan `<Text>`.
