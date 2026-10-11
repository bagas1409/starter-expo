# Modul 04: Pengondisian (if / else)

---

### 1. Konsep Sederhana

Aplikasi pintar itu bukan aplikasi yang kaku, melainkan aplikasi yang bisa **mengambil keputusan**.
Contoh:
- *JIKA* user sudah login, tampilkan halaman Beranda.
- *KALAU BELUM*, arahkan ke halaman Login.

> **`if / else` adalah cara kita memberi tahu komputer: "Periksa kondisi ini. Kalau benar, lakukan jalan A. Kalau salah, lakukan jalan B."**

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu sedang berdiri di pintu masuk wahana bermain:
- Petugas mengecek tinggi badanmu:  
  **JIKA** tinggi badanmu lebih dari 140 cm, **MAKA** silakan naik roller coaster.  
  **SELAIN ITU (ELSE)**, mohon maaf kamu tidak boleh naik demi keselamatan.

Itulah cara kerja `if` dan `else`.

---

### 3. Syntax Dasar

```typescript
if (kondisi) {
  // Dijalankan jika kondisi bernilai TRUE
} else if (kondisiLain) {
  // Dijalankan jika kondisi kedua yang bernilai TRUE
} else {
  // Dijalankan jika SEMUA kondisi di atas SALAH (FALSE)
}
```

Contoh nyata:
```typescript
const statusDonor = "antri";

if (statusDonor === "selesai") {
  console.log("Terima kasih sudah mendonorkan darah!");
} else if (statusDonor === "antri") {
  console.log("Mohon menunggu nomor antrean dipanggil.");
} else {
  console.log("Silakan mendaftar terlebih dahulu.");
}
```

---

### 4. Contoh di Expo (React Native)

Di React Native, kita sering menggunakan `if/else` untuk menentukan tampilan apa yang harus muncul di layar HP:

```tsx
import { View, Text } from "react-native";

export default function StatusScreen() {
  const statusKoneksi = "offline"; // Coba ganti jadi "online"

  // LOGIKA PENGONDISIAN JAVASCRIPT
  let pesanStatus = "";
  let warnaTeks = "";

  if (statusKoneksi === "online") {
    pesanStatus = "Aplikasi Terhubung ke Server";
    warnaTeks = "text-emerald-600";
  } else {
    pesanStatus = "Koneksi Terputus, Cek Internet!";
    warnaTeks = "text-rose-600";
  }

  // TAMPILAN REACT NATIVE
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-gray-500 text-sm">Status Jaringan:</Text>
      
      {/* Warna dan isi teks berubah otomatis sesuai kondisi */}
      <Text className={`text-xl font-bold mt-2 ${warnaTeks}`}>
        {pesanStatus}
      </Text>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. Kita menyiapkan toples kosong yang bisa diisi nanti:  
   `let pesanStatus = "";` (menggunakan `let` karena nilainya akan berubah sesuai kondisi).
2. Blok `if (statusKoneksi === "online")` memeriksa apakah variabelnya sama dengan `"online"`.
3. Karena nilainya `"offline"`, komputer melewati blok `if` dan langsung masuk ke blok `else`.
4. Variabel `pesanStatus` diisi pesan peringatan, lalu dicetak rapi di komponen `<Text>`.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 02 & 03: Kita belajar bahwa perbandingan seperti `statusKoneksi === "online"` menghasilkan tipe data `boolean` (`true` atau `false`).
- Di Modul 04 ini: Hasil `true` atau `false` tersebut dimasukkan ke dalam kurung `if (...)` untuk mengontrol alur program.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa tanda kurung kurawal `{}`
```typescript
// Gaya malas yang berbahaya:
if (isLulus)
console.log("Selamat");
console.log("Ambil Ijazah"); // Baris ini akan selalu jalan apapun yang terjadi!
```
*Solusi:* Selalu gunakan kurung kurawal `{ }` agar jelas blok mana yang dikontrol oleh `if`.

#### ❌ Kesalahan 2: Kondisi selalu bernilai true karena salah tanda
```typescript
if (peran = "admin") { ... } // 🚨 Ini bukan mengecek, tapi mengisi peran jadi admin!
```
*Solusi:* Ingat Modul 03, selalu pakai `===` untuk membandingkan.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Tuliskan blok `if / else if / else` sederhana untuk menentukan status antrean donor darah berdasarkan variable `nomorAntrian = 5`:
- Jika `nomorAntrian === 1`, simpan teks `"Giliran Anda sekarang!"`
- Jika `nomorAntrian <= 3`, simpan teks `"Harap bersiap di dekat ruangan"`
- Selain itu, simpan teks `"Silakan duduk di ruang tunggu"`

**Latihan 2:**  
Perhatikan kode berikut:
```typescript
const stok = 0;
let label = "";

if (stok > 0) {
  label = "Tersedia";
} else {
  label = "Habis";
}
```
Apa isi variabel `label` setelah kode di atas dijalankan?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan layar verifikasi syarat donor darah:
- Buat variabel `beratBadan = 42` (dalam kg).
- Gunakan `if / else`:
  - Jika berat badan >= 45, simpan pesan `"Memenuhi Syarat Donor"`
  - Jika berat badan < 45, simpan pesan `"Berat Badan Kurang (Minimal 45kg)"`
- Tampilkan pesan tersebut di dalam `<Text>` layar Expo.
