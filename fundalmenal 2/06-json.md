# Level 2 - Modul 06: JSON (Bahasa Universal Pertukaran Data)

---

### 1. Konsep Sederhana

Ketika aplikasi Expo di HP kamu ingin mengirim data ke server (misal server Python, PHP, Java, atau Node.js di awan), ada satu masalah besar:  
**Server di internet belum tentu mengerti objek JavaScript mentah!**

Kabel internet dan sinyal WiFi hanya bisa mengirimkan **rangkaian teks (String)**.

Agar semua komputer dan HP di seluruh dunia bisa saling mengerti isi data teks tersebut, dibuatlah satu format standar bernama **JSON** (*JavaScript Object Notation*).

> **JSON adalah format teks standar universal untuk menyimpan dan mengirim data antar aplikasi dan server.**

Hampir 99% data yang kamu ambil dari API internet di dunia mobile akan berformat JSON!

---

### 2. Analogi Kehidupan Nyata: Pengiriman Barang Lewat Kardus Paket 📦

Bayangkan kamu ingin mengirim sepeda ke temanmu di luar kota:
1. Kamu tidak bisa mengirim sepeda dalam bentuk utuh berdiri di atas rel kereta.
2. Kamu harus **membongkar dan memadatkan sepeda itu ke dalam kardus paket yang ringkas** (**`JSON.stringify`**).
3. Paket kardus dikirim lewat kurir ekspedisi (kabel internet).
4. Temanmu menerima kardus paket, lalu **merakit kembali sepeda tersebut agar bisa dinaiki** (**`JSON.parse`**).

---

### 3. Perbedaan Object JavaScript vs JSON

Meskipun mirip, ada aturan ketat pada JSON:
- **Object JavaScript:** Kunci (key) tidak wajib pakai tanda petik. Boleh menyimpan function.
- **Teks JSON:** Semua kunci (key) **WAJIB diapit tanda petik dua ganda (`" "`)**. Nilainya hanya boleh teks, angka, boolean, array, atau null (tidak boleh function).

```javascript
// 1. OBJECT JAVASCRIPT BIASA
const userObj = {
  nama: "Bagas",
  umur: 22
};

// 2. TEKS FORMAT JSON (SEPERTI INI SAAT LEWAT KABEL INTERNET)
// '{"nama":"Bagas","umur":22}'
```

---

### 4. Dua Fungsi Utama: `JSON.stringify()` dan `JSON.parse()`

#### A. `JSON.stringify(objek)`  
*Mengubah Objek JS menjadi Teks JSON (dipakai saat ingin MENGIRIM data ke API)*
```typescript
const dataDonor = { nama: "Bagas", golDarah: "O" };
const teksPaket = JSON.stringify(dataDonor);

console.log(teksPaket); 
// Hasilnya bertipe string: '{"nama":"Bagas","golDarah":"O"}'
```

#### B. `JSON.parse(teksJSON)`  
*Mengubah Teks JSON menjadi Objek JS (dipakai saat MENERIMA data mentah dari API)*
```typescript
const dataDariServer = '{"nama":"Siti","stok":15}';
const objekAsli = JSON.parse(dataDariServer);

console.log(objekAsli.nama); // "Siti"
console.log(objekAsli.stok); // 15
```

---

### 5. Contoh di Expo (React Native)

Perhatikan contoh bagaimana JSON diolah di dalam layar HP:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function EksperimenJsonScreen() {
  const [hasilParse, setHasilParse] = useState<any>(null);
  const [teksJsonKirim, setTeksJsonKirim] = useState("");

  // SKENARIO 1: MERAKIT DATA JS JADI JSON UNTUK DIKIRIM KE SERVER
  const handleBungkusData = () => {
    const dataRelawan = {
      id: 101,
      nama: "Bagas Pratama",
      misiAktif: "Bantuan Banjir",
      isSiaga: true,
    };

    const paketString = JSON.stringify(dataRelawan);
    setTeksJsonKirim(paketString);
  };

  // SKENARIO 2: MEMBACA TEKS JSON DARI SERVER MENJADI OBJEK JS
  const handleBongkarData = () => {
    // Anggap teks ini baru saja kita terima dari server PMI
    const paketServer = '{"posko":"PMI Cianjur","kapasitas":500,"tersisa":120}';
    
    const dataObjek = JSON.parse(paketServer);
    setHasilParse(dataObjek);
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800 mb-4">
          Simulasi Pertukaran JSON
        </Text>

        {/* HASIL STRINGIFY */}
        <Pressable
          onPress={handleBungkusData}
          className="bg-blue-600 p-3 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-xs">
            1. Bungkus Objek Jadi JSON String
          </Text>
        </Pressable>
        {teksJsonKirim ? (
          <Text className="mt-2 text-xs font-mono text-gray-600 bg-gray-100 p-2 rounded">
            {teksJsonKirim}
          </Text>
        ) : null}

        {/* HASIL PARSE */}
        <Pressable
          onPress={handleBongkarData}
          className="bg-emerald-600 p-3 rounded-xl items-center mt-4"
        >
          <Text className="text-white font-bold text-xs">
            2. Bongkar JSON Server Jadi Objek UI
          </Text>
        </Pressable>
        {hasilParse ? (
          <View className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <Text className="font-bold text-emerald-900">
              Posko: {hasilParse.posko}
            </Text>
            <Text className="text-xs text-emerald-700">
              Sisa Kapasitas: {hasilParse.tersisa} dari {hasilParse.kapasitas} Jiwa
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
```

---

### 6. Bedah Kode

1. `JSON.stringify(dataRelawan)` mengubah objek `{ id: 101, ... }` menjadi teks mentah satu baris `'{"id":101,...}'` yang siap dikirim lewat kabel internet.
2. `JSON.parse(paketServer)` membongkar teks kiriman server menjadi objek JavaScript asli, sehingga kita bisa memanggil propertinya dengan rapi: `{hasilParse.posko}`.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Format string JSON tidak valid
```typescript
JSON.parse("{ nama: 'Bagas' }"); // 🚨 CRASH! SyntaxError: Unexpected token
```
*Kenapa salah?* Teks JSON mewajibkan tanda petik dua ganda `"` pada kunci: `{"nama": "Bagas"}`.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Kapan kamu menggunakan `JSON.stringify()` dan kapan kamu menggunakan `JSON.parse()`?

**Latihan 2:**  
Jika kamu punya data string berikut dari server:
```typescript
const respon = '{"status":"sukses","kantongDarah":12}';
```
Bagaimana cara kamu mengambil angka `12` dari string tersebut? Tuliskan kodenya!

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat satu objek profil pasien:
```typescript
const pasien = { nama: "Budi", gol: "AB", umur: 30 };
```
1. Ubah objek tersebut menjadi JSON string dengan `JSON.stringify`.
2. Kembalikan lagi string tersebut menjadi objek baru dengan `JSON.parse`.
3. Tampilkan nama pasien dari objek hasil parsing tersebut ke layar.
