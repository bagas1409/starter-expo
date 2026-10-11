# Modul 01: Variable (Variabel)

---

### 1. Konsep Sederhana

Bayangkan aplikasi HP yang sering kamu pakai, misalnya Instagram atau Gojek.
Di layar atas ada tulisan: *"Halo, Bagas!"*. Besoknya kalau akun lain yang login, tulisannya berubah jadi *"Halo, Budi!"*.

Pertanyaannya: **Di mana komputer menyimpan kata "Bagas" atau "Budi" itu sebelum ditampilkan ke layar?**

Jawabannya: Di dalam **Variable**.

> **Variable itu sebenarnya cuma tempat penyimpanan sementara di memori komputer untuk menaruh data, dan kita beri nama supaya gampang dipanggil kapan saja kita butuh.**

Tanpa variable, aplikasi kita tidak bisa mengingat apa-apa. Begitu ada data masuk, langsung hilang.

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu punya beberapa **toples / kotak kardus** di kamarmu:
- Toples pertama kamu tempel stiker bertuliskan **`namaUser`**, lalu dalamnya kamu isi kertas bertuliskan `"Bagas"`.
- Toples kedua kamu tempel stiker bertuliskan **`jumlahFollower`**, lalu dalamnya kamu masukkan angka `750`.

Setiap kali ada yang tanya *"Siapa nama usernya?"*, kamu tinggal lihat toples bernama `namaUser` dan ambil isinya.

- **Stiker label toples** = Nama Variable (identifier)
- **Barang di dalam toples** = Nilai/Isi (value)
- **Aksi memasukkan barang ke toples** = Memberi nilai (assignment)

---

### 3. Syntax Dasar

Di JavaScript & TypeScript modern, kita membuat toples (variable) menggunakan dua kata kunci utama: **`const`** dan **`let`**.

#### A. `const` (Constant / Tetap)
Gunakan ini kalau isinya **TIDAK AKAN PERNAH BERUBAH** setelah dibuat.
```javascript
const nama = "Bagas";
```
*Artinya: "Komputer, tolong siapkan toples bernama `nama`, kuncinya paten, isinya 'Bagas' dan jangan pernah boleh diganti lagi."*

#### B. `let` (Bisa berubah)
Gunakan ini kalau isinya **BISA BERUBAH** sewaktu-waktu.
```javascript
let skor = 0;
skor = 10; // Boleh diganti!
```
*Artinya: "Komputer, tolong siapkan toples bernama `skor`, isinya sekarang `0`. Nanti kalau bertambah, toples ini boleh diisi angka baru."*

> 💡 **Tips Programmer:** Selalu pakai `const` secara default! Baru ubah ke `let` kalau kamu tahu pasti nilainya nanti bakal berganti. Hindari kata kuno `var` karena itu gaya lama yang rawan bug.

---

### 4. Contoh di Expo (React Native)

Coba perhatikan potongan kode layar HP berikut:

```tsx
import { View, Text } from "react-native";

export default function ContohScreen() {
  // 1. BAGIAN JAVASCRIPT (Logika & Penyimpanan Data)
  const namaUser = "Bagas";
  const namaProyek = "Aplikasi PMI";
  let statusProyek = "Sedang Dikerjakan";

  // 2. BAGIAN REACT NATIVE (Tampilan Layar / UI)
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-xl font-bold text-gray-800">
        Halo, {namaUser}!
      </Text>
      
      <Text className="text-base text-blue-600 mt-2">
        Proyek: {namaProyek}
      </Text>
      
      <Text className="text-sm text-gray-500 mt-1">
        Status: {statusProyek}
      </Text>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. **`const namaUser = "Bagas";`**  
   Ini murni **JavaScript**. Kita membuat variable bernama `namaUser` yang menyimpan teks `"Bagas"`. Komputer menyimpannya di memori, tapi belum tampil apa-apa di layar.
2. **`return ( <View> ... </View> )`**  
   Ini adalah **React Native (JSX)**, yaitu cetak biru tampilan HP kita.
3. **Tanda Kurung Kurawal `{namaUser}` di dalam `<Text>`**  
   Ini jembatan penting! Di React Native, kalau kamu ingin memanggil isi variable JavaScript ke dalam teks layar, kamu wajib membungkusnya dengan kurung kurawal `{ }`.  
   Tanda `{namaUser}` artinya: *"Tolong ambil isi dari toples `namaUser`, lalu cetak teksnya di sini."*

---

### 6. Hubungkan dengan Konsep Sebelumnya

Karena ini materi pertama kita, variable adalah **batu bata paling dasar** dari seluruh kode yang akan pernah kamu tulis.  
Tanpa variable:
- Kamu tidak bisa membuat kondisi (karena tidak ada data yang dicek).
- Kamu tidak bisa membuat function (karena tidak ada data yang diolah).
- Kamu tidak bisa menampilkan data dinamis di layar Expo.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Mengubah isi `const`
```javascript
const role = "Admin";
role = "User"; // 🚨 ERROR! TypeError: Assignment to constant variable.
```
*Kenapa salah?* Karena `const` artinya terkunci permanen. Kalau nilainya mau diubah, gunakan `let`.

#### ❌ Kesalahan 2: Lupa kurung kurawal `{}` di React Native
```tsx
// Salah:
<Text>namaUser</Text> 
// Di layar HP malah muncul tulisan harfiah: "namaUser", bukan "Bagas"!

// Benar:
<Text>{namaUser}</Text>
// Di layar HP muncul: "Bagas"
```

#### ❌ Kesalahan 3: Menamai variable dengan spasi atau diawali angka
```javascript
const nama user = "Bagas"; // 🚨 ERROR (ada spasi)
const 1nama = "Bagas";     // 🚨 ERROR (diawali angka)

// Benar (camelCase):
const namaUser = "Bagas";
```

---

### 8. Latihan (Uji Pemahaman)

Jawab pertanyaan-pertanyaan ini dulu ya, jangan buka contekan dulu!

**Latihan 1:**  
Di sebuah aplikasi ojek online, kita punya dua data:
- Nomor Induk Kependudukan (NIK) driver yang tidak boleh pernah berubah setelah terdaftar.
- Saldo dompet driver yang bisa bertambah atau berkurang setiap kali ada tarikan orderan.  
*Pertanyaan:* Manakah yang harus kamu buat dengan `const` dan manakah yang harus dibuat dengan `let`? Jelaskan alasannya dengan bahasamu sendiri!

**Latihan 2:**  
Perhatikan potongan kode ini:
```tsx
const namaAplikasi = "PMI Mobile";

return (
  <View>
    <Text>Selamat datang di namaAplikasi</Text>
  </View>
);
```
Saat aplikasi dijalankan di HP, apa teks yang muncul di layar? Apakah sudah benar kalau tujuannya ingin menampilkan tulisan *"Selamat datang di PMI Mobile"*? Kalau belum benar, bagaimana cara memperbaikinya?

---

### 9. Challenge (Tantangan Langsung di Expo)

Tuliskan sebuah function komponen sederhana (atau cukup tuliskan baris kode variabel & JSX `<Text>` nya saja) yang memiliki:
1. Satu variable `const` untuk nama kamu.
2. Satu variable `const` untuk nama kota tempat tinggalmu.
3. Satu variable `let` untuk status kamu hari ini (contoh: `"Sedang belajar React Native"`).
4. Tampilkan ketiga data tersebut di dalam komponen `<Text>` sehingga menghasilkan tampilan yang rapi di layar.
