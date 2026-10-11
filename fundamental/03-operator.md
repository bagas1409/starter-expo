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
- Sama persis: `===` (Gunakan selalu 3 tanda sama dengan!)
- Tidak sama: `!==`
- Lebih besar: `>`
- Lebih kecil: `<`
- Lebih besar sama dengan: `>=`
- Lebih kecil sama dengan: `<=`

```typescript
const stokDarah = 0;
const isStokHabis = stokDarah === 0; // true
const umur = 16;
const bolehDonor = umur >= 17; // false
```

#### C. Operator Logika (Menghubungkan kondisi)
- **DAN (`&&`)**: Dua-duanya harus benar baru bernilai `true`.
- **ATAU (`||`)**: Cukup salah satu benar sudah bernilai `true`.
- **BUKAN / KEBALIKAN (`!`)**: Membalikkan boolean (`!true` jadi `false`).

```typescript
const punyaAkun = true;
const passwordBenar = true;
const bisaMasuk = punyaAkun && passwordBenar; // true
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
