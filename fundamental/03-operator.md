# Modul 03: Operator

---

### 1. Konsep Sederhana

Kamu sudah punya toples (variable) dan isinya (tipe data).  
Sekarang: **Bagaimana kalau kita ingin mengolah data-data itu?**
- Menghitung total belanjaan: `10000 + 20000`
- Mengecek apakah sisa saldo cukup: `saldo >= hargaBarang`
- Menggabungkan nama depan dan belakang: `"Bagas" + " Pratama"`

> **Operator adalah simbol khusus yang kita pakai untuk menghitung, membandingkan, atau menghubungkan data.**

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu sedang di kasir minimarket:
1. **Operator Hitung (Aritmatika)**: Kasir menjumlahkan harga roti + susu (`+`), lalu memberi diskon potongan harga (`-`).
2. **Operator Perbandingan**: Kasir mengecek: *"Apakah umur pembeli sudah lebih dari atau sama dengan 17 tahun (`>= 17`) untuk beli kopi kaleng tertentu?"* Hasilnya cuma Ya atau Tidak.
3. **Operator Logika**: *"Apakah toko buka AND kamu bawa uang?"* Kalau salah satu tidak terpenuhi, kamu tidak bisa belanja.

---

### 3. Syntax Dasar

Tiga kelompok operator paling penting di aplikasi mobile:

#### A. Operator Aritmatika (Hitungan)
- Tambah: `+`
- Kurang: `-`
- Kali: `*`
- Bagi: `/`

```typescript
const hargaSatuan = 25000;
const jumlahBeli = 3;
const totalBiaya = hargaSatuan * jumlahBeli; // 75000
```

#### B. Operator Perbandingan (Hasilnya selalu `true` atau `false`)
> 📂 **Panduan Lengkap & Studi Kasus Tiap Operator:** Lihat folder [latihan tambahan tahap 3](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/README.md)

1. **Sama persis (`===`)** -> [01-perbandingan-sama-persis.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/01-perbandingan-sama-persis.md)
   ```typescript
   const role = "Admin";
   const isAdmin = role === "Admin"; // true
   ```
2. **Tidak sama (`!==`)** -> [02-perbandingan-tidak-sama.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/02-perbandingan-tidak-sama.md)
   ```typescript
   const status = "Proses";
   const isBelumSelesai = status !== "Selesai"; // true
   ```
3. **Lebih besar (`>`)** -> [03-perbandingan-lebih-besar.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/03-perbandingan-lebih-besar.md)
   ```typescript
   const kantong = 60;
   const isTargetLewat = kantong > 50; // true
   ```
4. **Lebih kecil (`<`)** -> [04-perbandingan-lebih-kecil.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/04-perbandingan-lebih-kecil.md)
   ```typescript
   const sisaStok = 4;
   const isKritis = sisaStok < 10; // true
   ```
5. **Lebih besar sama dengan (`>=`)** -> [05-perbandingan-lebih-besar-sama-dengan.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/05-perbandingan-lebih-besar-sama-dengan.md)
   ```typescript
   const umur = 17;
   const isCukupUmur = umur >= 17; // true (17 pas tetap lolos!)
   ```
6. **Lebih kecil sama dengan (`<=`)** -> [06-perbandingan-lebih-kecil-sama-dengan.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/06-perbandingan-lebih-kecil-sama-dengan.md)
   ```typescript
   const muatan = 15;
   const isAman = muatan <= 15; // true (15 pas masih aman!)
   ```

#### C. Operator Logika (Menghubungkan kondisi)
> 📂 **Panduan Lengkap & Studi Kasus Tiap Operator:** Lihat folder [latihan tambahan tahap 3](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/README.md)

1. **DAN (`&&`)** -> [07-logika-dan.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/07-logika-dan.md)  
   *Semua syarat wajib benar baru bernilai `true`.*
   ```typescript
   const cukupUmur = true;
   const cukupBerat = true;
   const bolehDonor = cukupUmur && cukupBerat; // true
   ```
2. **ATAU (`||`)** -> [08-logika-atau.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/08-logika-atau.md)  
   *Cukup salah satu benar sudah bernilai `true`.*
   ```typescript
   const bayarQRIS = false;
   const bayarTransfer = true;
   const berhasilBayar = bayarQRIS || bayarTransfer; // true
   ```
3. **BUKAN / NEGASI (`!`)** -> [09-logika-bukan.md](file:///c:/Users/bagas/Desktop/belajar/Aplikasi/fundamental/latihan%20tambahan%20tahap%203/09-logika-bukan.md)  
   *Membalikkan nilai boolean (`!true` jadi `false`, `!false` jadi `true`).*
   ```typescript
   const isUploadFoto = false;
   const tombolDisabled = !isUploadFoto; // true
   ```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana operator dipakai untuk menghitung sisa stok dan mengecek kelayakan donor darah:

```tsx
import { View, Text } from "react-native";

export default function StokScreen() {
  // DATA
  const stokMaksimal = 100;
  const stokTerpakai = 75;
  
  // OPERATOR ARITMATIKA (Pengurangan)
  const sisaStok = stokMaksimal - stokTerpakai; // 25

  // OPERATOR PERBANDINGAN
  const isStokKritis = sisaStok < 30; // true

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-lg font-bold text-gray-800">
        Status Kantong Darah Golongan O
      </Text>

      <Text className="text-2xl font-extrabold text-blue-600 mt-2">
        Sisa: {sisaStok} Kantong
      </Text>

      <Text className="text-base text-red-500 font-semibold mt-2">
        Status Kritis: {isStokKritis ? "PERLU DONOR SEGERA!" : "Stok Aman"}
      </Text>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. **`const sisaStok = stokMaksimal - stokTerpakai;`**  
   Simbol minus `-` adalah operator aritmatika. Komputer mengambil isi toples `100` dikurangi `75`, lalu hasilnya `25` disimpan ke toples baru `sisaStok`.
2. **`const isStokKritis = sisaStok < 30;`**  
   Simbol `<` membandingkan: *"Apakah 25 lebih kecil dari 30?"*. Karena betul, maka variable `isStokKritis` otomatis menyimpan nilai `true`.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 01: Kita buat toples (`const`).
- Di Modul 02: Toples berisi tipe data (`number`, `string`, `boolean`).
- Di Modul 03 ini: Kita gunakan **operator** untuk mengolah isi toples tersebut dan menghasilkan toples baru.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Menggunakan 1 sama dengan `=` untuk membandingkan
```javascript
// SALAH FATAL:
if (umur = 17) { ... } 
```
*Kenapa salah?* Satu tanda `=` adalah **perintah mengisi toples**, bukan membandingkan. Untuk membandingkan, wajib gunakan `===`.

#### ❌ Kesalahan 2: Menggunakan `==` alih-alih `===`
```javascript
"5" == 5   // true (bisa berbahaya karena tipe beda dianggap sama)
"5" === 5  // false (aman, memeriksa nilai DAN tipe datanya)
```
Selalu biasakan memakai `===` (triple equals) di JavaScript/TypeScript modern.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Berapa hasil nilai dari variable `bisaLogin` di bawah ini (`true` atau `false`)?
```typescript
const emailTerdaftar = true;
const sandiValid = false;
const bisaLogin = emailTerdaftar && sandiValid;
```

**Latihan 2:**  
Sebuah tiket pendaftaran donor darah memiliki syarat:
- Usia minimal 17 tahun (`umur >= 17`)
- Berat badan minimal 45 kg (`beratBadan >= 45`)  
Bagaimana kamu menuliskan satu baris logika perbandingan menggunakan operator `&&` untuk mengecek variable `isBolehDonor`?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan kode kalkulator sisa kuota donor:
- Variable `kuotaHariIni = 50`
- Variable `pendaftarSekarang = 42`
- Hitung `sisaKuota` menggunakan operator pengurangan `-`
- Buat variable boolean `isPenuh` yang mengecek apakah `sisaKuota <= 0`
- Tampilkan `sisaKuota` dan teks statusnya di layar HP dengan `<Text>`.
