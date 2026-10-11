# Modul 02: Tipe Data (Data Types)

---

### 1. Konsep Sederhana

Kemarin kita sudah tahu kalau **variable itu seperti toples**.
Nah, sekarang pertanyaannya: **Barang apa yang boleh kita masukkan ke dalam toples itu?**

Benda cair (air) tentu wadah atau perlakuannya beda dengan benda padat (batu).
Di dalam programming, komputer perlu tahu jenis benda apa yang sedang ia simpan agar tidak salah perlakuan.

> **Tipe data adalah jenis atau kategori data yang kita simpan di dalam variable.**

Apakah itu tulisan kata-kata? Angka untuk berhitung? Atau saklar sakti yang cuma punya nilai Ya/Tidak? Komputer harus tahu jenisnya!

---

### 2. Analogi Kehidupan Nyata

Bayangkan jenis barang yang kamu simpan di saku celana:
1. **KTP / Kartu Nama**: Berisi tulisan huruf dan nama. Di programming ini disebut **String** (teks).
2. **Uang Kertas / Koin**: Berisi nominal angka untuk transaksi hitung-hitungan. Di programming ini disebut **Number** (angka).
3. **Saklar Lampu**: Cuma punya dua kemungkinan: Menyala atau Padam. Di programming ini disebut **Boolean** (benar/salah, ya/tidak).
4. **Dompet Kosong**: Dompetnya ada, tapi belum ada isinya sama sekali. Di programming ini disebut **Null** atau **Undefined**.

---

### 3. Syntax Dasar

Tipe data dasar (primitif) yang paling sering kamu pakai di aplikasi mobile:

#### A. String (Teks / Tulisan)
Harus selalu diapit tanda petik (`""`, `''`, atau backtick `` ``).
```typescript
const namaPasien = "Bagas";
const nomorHP = "08123456789"; // Angka yang tidak dihitung simpan sebagai teks!
```

#### B. Number (Angka)
Ditulis murni angkanya saja tanpa tanda petik, bisa bilangan bulat atau desimal.
```typescript
const umur = 22;
const ratingAplikasi = 4.8;
```

#### C. Boolean (Hanya ada 2 nilai: `true` atau `false`)
Dipakai untuk status ya/tidak, aktif/nonaktif.
```typescript
const isLogin = true;
const isDonaturTetap = false;
```

#### D. Undefined & Null (Kosong)
- `undefined`: Toplesnya ada, tapi belum pernah diisi apa-apa.
- `null`: Toplesnya sengaja dikosongkan secara sadar oleh kita.
```typescript
let fotoProfil = null; // Belum upload foto
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana kita menampilkan berbagai tipe data ini di layar HP:

```tsx
import { View, Text } from "react-native";

export default function ProfilScreen() {
  // 1. DATA JAVASCRIPT / TYPESCRIPT
  const namaUser: string = "Bagas";
  const jumlahKantongDarah: number = 3;
  const isDonorAktif: boolean = true;

  // 2. TAMPILAN REACT NATIVE
  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      {/* Tipe String */}
      <Text className="text-xl font-bold text-gray-800">
        Nama: {namaUser}
      </Text>

      {/* Tipe Number */}
      <Text className="text-base text-gray-600 mt-2">
        Total Donor: {jumlahKantongDarah} kantong
      </Text>

      {/* Tipe Boolean: Jangan cetak langsung {isDonorAktif}, karena boolean tidak muncul di layar! */}
      <Text className="text-sm font-semibold text-emerald-600 mt-2">
        Status Aktif: {isDonorAktif ? "Aktif" : "Tidak Aktif"}
      </Text>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. **`namaUser: string = "Bagas";`**  
   Titik dua `: string` atau `: number` adalah fitur **TypeScript** (anak kandung JavaScript). Fungsinya memberi label tegas: *"Toples ini khusus diisi teks ya!"*. Kalau kamu coba masukkan angka, TypeScript langsung mengingatkan kamu sebelum aplikasi error.
2. **Kenapa boolean butuh `{isDonorAktif ? "Aktif" : "Tidak Aktif"}`?**  
   Di React Native, data tipe `boolean` (`true` atau `false`) **tidak akan terlihat di layar jika dicetak langsung** `<Text>{isDonorAktif}</Text>`. Komputer menyembunyikannya. Jadi kita perlu mengubahnya jadi teks manusia dulu.

---

### 6. Hubungkan dengan Konsep Sebelumnya

Di Modul 01, kamu sudah belajar cara membuat toples (`const` dan `let`).  
Di Modul 02 ini, kamu belajar **apa saja jenis barang** yang dimasukkan ke dalam toples tersebut. Toples (`const`) menampung data sesuai **tipe datanya**.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Angka tapi dikasih tanda petik
```javascript
const harga1 = "50000";
const harga2 = "20000";
const total = harga1 + harga2; // Hasilnya bukan 70000, tapi "5000020000"!
```
*Kenapa salah?* Tanda petik membuat angka dianggap teks. Teks yang ditambah teks hasilnya digabung, bukan dijumlahkan.

#### ❌ Kesalahan 2: Menyimpan nomor HP atau NIK sebagai Number
```javascript
const nik = 3201234567890001; // Bahaya!
```
Nomor HP, NIK, kode pos sebaiknya disimpan sebagai `String` (`"0812..."`). Karena tidak pernah dihitung penambahan/pengurangan, dan angka berawalan `0` bisa hilang jika memakai tipe Number.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Tentukan tipe data yang paling tepat (`string`, `number`, atau `boolean`) untuk data aplikasi berikut:
1. Status apakah user sedang menyalakan Dark Mode di HP.
2. Jumlah sisa kuota donor darah hari ini (misal: 15).
3. Kode OTP 6 digit yang dikirim via SMS (misal: "847291").
4. Judul pengumuman kegiatan PMI di beranda aplikasi.

**Latihan 2:**  
Perhatikan baris kode ini:
```javascript
const durasiBelajar = "2"; 
const totalHari = 5;
```
Jika kita melakukan `durasiBelajar + totalHari`, apakah hasilnya `7`? Kalau bukan, berapa hasilnya dan kenapa hal itu terjadi?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan kode untuk menampilkan kartu informasi status kurir pengantar obat:
- Buat variable `namaKurir` (String)
- Buat variable `jumlahPaketDiantar` (Number)
- Buat variable `isSedangBertugas` (Boolean)
- Tampilkan ketiga data tersebut ke dalam komponen `<View>` dan `<Text>`.
