# Level 2 - Modul 01: Synchronous vs Asynchronous

---

### 1. Konsep Sederhana

Selamat datang di **Level 2**! Di Level 1, semua kode yang kita tulis berjalan secara instan dalam hitungan milidetik.
Tapi di aplikasi nyata seperti Gojek, Instagram, atau aplikasi PMI kita, ada proses-proses yang **membutuhkan waktu**:
- Mengambil daftar donor darah dari server internet (bisa butuh 1-3 detik).
- Mengunggah foto bukti transfer atau KTP.
- Menunggu GPS menemukan titik koordinat kita.

Pertanyaannya: **Bagaimana cara kerja JavaScript ketika menghadapi proses yang butuh waktu lama ini?**

Ada dua cara:
1. **Synchronous (Sinkron / Mengantre Kaku):**  
   JavaScript mengeksekusi kode baris demi baris secara berurutan. Baris ke-2 **TIDAK AKAN PERNAH DIJALANKAN** sebelum baris ke-1 selesai 100%. Kalau baris ke-1 butuh 5 detik, maka seluruh aplikasi HP akan **MACET TOTAL (Freeze / Not Responding)** selama 5 detik!
2. **Asynchronous (Asinkron / Multi-tasking Cerdas):**  
   JavaScript memulai proses yang butuh waktu lama itu di latar belakang (background), lalu **LANGSUNG LANJUT** menjalankan baris berikutnya tanpa menunggu! Nanti ketika proses lama itu selesai, baru hasilnya diambil. Layar HP tetap mulus, bisa di-scroll, dan tidak macet.

> **Synchronous = Tunggu giliran sampai selesai baru boleh lanjut.**  
> **Asynchronous = Titipkan pekerjaan lama ke latar belakang, kamu lanjut kerjakan yang lain dulu.**

---

### 2. Analogi Kehidupan Nyata: Pesan Kopi di Kafe

Bayangkan kamu sedang memesan kopi di kafe:

#### Skenario Synchronous (Kaku):
1. Pelanggan A pesan Kopi Espresso (butuh waktu seduh 5 menit).
2. Kasir berdiri diam menunggu mesin kopi selesai selama 5 menit.
3. Selama 5 menit itu, kasir **MENOLAK** melayani Pelanggan B, C, dan D di antrean.
4. Semua orang bengong menunggu. Antrean macet total!

#### Skenario Asynchronous (Cerdas):
1. Pelanggan A pesan Kopi Espresso.
2. Kasir mencatat pesanan, memberikan **nomor antrean / struk** ke Pelanggan A, lalu menyuruh barista membuatnya di belakang.
3. Kasir **LANGSUNG melayani** Pelanggan B dan C untuk pesan roti.
4. Begitu kopi Pelanggan A matang, nomor Pelanggan A dipanggil: *"Kopi siap diambil!"*.

Di aplikasi mobile, kita **WAJIB** memakai sistem Asynchronous agar HP user tidak terasa nge-lag atau freeze saat mengambil data dari internet.

---

### 3. Syntax Dasar & Eksperimen Sederhana

Di JavaScript, ada fungsi bawaan bernama `setTimeout(fungsi, waktuDalamMilidetik)` yang dipakai untuk meniru/mensimulasikan proses asynchronous yang butuh waktu.

Coba perhatikan urutan console ini:

```javascript
console.log("1. Buka Aplikasi PMI");

// Simulasi proses yang butuh waktu 2 detik (2000 milidetik)
setTimeout(() => {
  console.log("2. Data Pasien Berhasil Diambil dari Server!");
}, 2000);

console.log("3. Tampilkan Banner Menu Utama");
```

**Hasil urutan yang muncul di layar terminal:**
```text
1. Buka Aplikasi PMI
3. Tampilkan Banner Menu Utama
... (tunggu 2 detik) ...
2. Data Pasien Berhasil Diambil dari Server!
```

> 💡 **Lihat!** Nomor 3 keluar LEBIH DULU daripada nomor 2!  
> JavaScript tidak mau menunggu 2 detik dalam keadaan diam. Dia langsung lompat menjalankan nomor 3, sementara nomor 2 dibiarkan berjalan di latar belakang.

---

### 4. Contoh di Expo (React Native)

Perhatikan contoh screen sederhana yang mensimulasikan proses download data relawan:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function SimulasiSyncAsyncScreen() {
  // State sederhana untuk teks status di layar
  const [status, setStatus] = useState("Menunggu Tindakan...");

  const handleAmbilData = () => {
    // 1. Langsung jalan seketika
    setStatus("Sedang menghubungkan ke server PMI...");
    console.log("Langkah A: Mulai request");

    // 2. PROSES ASYNCHRONOUS (butuh waktu 3 detik)
    setTimeout(() => {
      setStatus("✓ Berhasil: 50 Data Relawan Siap Digunakan!");
      console.log("Langkah C: Data selesai diunduh!");
    }, 3000);

    // 3. Apakah baris ini menunggu 3 detik? TIDAK!
    console.log("Langkah B: UI tetap lancar tidak macet!");
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-center">
        <Text className="text-gray-500 text-xs font-bold uppercase tracking-wider">
          Simulasi Proses Asynchronous
        </Text>

        <Text className="text-xl font-bold text-gray-800 text-center mt-3">
          {status}
        </Text>

        <Pressable
          onPress={handleAmbilData}
          className="mt-6 bg-red-600 active:bg-red-700 px-6 py-3 rounded-full"
        >
          <Text className="text-white font-bold text-sm">
            Tarik Data Relawan (3 Detik)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. Saat tombol ditekan, `handleAmbilData` dijalankan.
2. `Langkah A` langsung dieksekusi.
3. `setTimeout` dititipkan ke browser/mesin JavaScript untuk dihitung mundur selama 3 detik.
4. JavaScript **TIDAK BERHENTI** di situ! Ia langsung mengeksekusi `Langkah B`. Layar HP tetap responsif, tombol tetap bisa ditekan, animasi tetap berjalan.
5. Setelah 3 detik berlalu, kode di dalam `setTimeout` dipanggil (`Langkah C`), dan teks layar berubah menjadi *"Berhasil: 50 Data Relawan..."*.

---

### 6. Hubungkan dengan Konsep Level 1

- Di Level 1, kita belajar **Function** dan **Arrow Function** (`() => { ... }`).
- Di dalam `setTimeout(() => { ... }, 3000)`, fungsi panah tersebut disebut **Callback Function**, yaitu fungsi yang kita titipkan untuk dijalankan nanti ketika waktu tunggunya habis.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Mengira kode pasti berjalan berurutan dari atas ke bawah
```javascript
let dataRelawan = null;

setTimeout(() => {
  dataRelawan = ["Bagas", "Siti"];
}, 2000);

console.log(dataRelawan); // 🚨 HASILNYA: null!
```
*Kenapa null?* Karena `console.log` dieksekusi **SEKETIKA ITU JUGA**, sebelum 2 detiknya selesai! Data baru terisi 2 detik kemudian. Ini adalah jebakan terbesar bagi programmer pemula yang belum paham Asynchronous.

#### ❌ Kesalahan 2: Membuat proses berat secara synchronous
Jika kamu menjalankan proses looping 1 miliar data secara synchronous, aplikasi HP akan freeze dan Android/iOS akan memunculkan popup *"Application Not Responding (ANR) - Force Close"*.

---

### 8. Latihan (Uji Pemahaman)

Coba jawab 3 latihan ini dengan pemahamanmu sendiri:

**Latihan 1:**  
Jelaskan dengan bahasamu sendiri (seperti sedang bercerita ke teman), apa bedanya **Synchronous** dan **Asynchronous** dalam aplikasi mobile? Masalah apa yang terjadi pada aplikasi HP jika proses download data dijalankan secara synchronous?

**Latihan 2:**  
Perhatikan urutan kode JavaScript berikut:
```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```
Tuliskan urutan huruf yang akan tercetak di layar terminal! Apakah `A - B - C` atau `A - C - B`? Mengapa?

**Latihan 3:**  
Perhatikan kasus ini:
```javascript
let namaUser = "Tamu";

setTimeout(() => {
  namaUser = "Bagas";
}, 3000);

console.log("Halo, " + namaUser);
```
Saat baris `console.log` terakhir berjalan, apakah tulisan yang muncul adalah `"Halo, Bagas"` atau `"Halo, Tamu"`? Jelaskan alasannya!

---

### 9. Challenge (Tantangan Singkat)

Bayangkan di aplikasi donor darah PMI kita, user menekan tombol **"Verifikasi Golongan Darah"**:
1. Buat alur logika sederhana menggunakan `console.log` dan `setTimeout(..., 2000)`:
   - Cetak dulu pesan pertama: `"Memulai verifikasi data..."`
   - Buat proses asynchronous selama 2 detik yang akan mencetak: `"Data Golongan Darah Valid: O+"`
   - Cetak pesan ketiga di luar timeout: `"Sistem tetap berjalan lancar..."`
2. Menurut kamu, mana pesan yang akan dibaca oleh user terlebih dahulu?
