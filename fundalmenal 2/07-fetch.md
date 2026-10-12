# Level 2 - Modul 07: fetch() (Jendela Menghubungkan Aplikasi ke Internet)

---

### 1. Konsep Sederhana

Sebelumnya kita hanya membuat data pura-pura di dalam kode kita sendiri (simulasi).  
Sekarang saatnya menghubungkan aplikasi Expo kamu ke **dunia luar (internet yang sesungguhnya)**!

JavaScript memiliki satu fungsi bawaan sakti bernama **`fetch()`**.

> **`fetch()` adalah fungsi bawaan browser dan React Native yang bertugas melakukan panggilan jarak jauh ke server internet (API) untuk meminta atau mengirim data.**

Fungsi `fetch()` selalu mengembalikan sebuah **Promise**. Karena mengembalikan Promise, kita selalu mendampinginya dengan kata kunci **`await`**!

---

### 2. Analogi Kehidupan Nyata: Pelayan Restoran yang Mengambil Pesanan 🤵

Bayangkan kamu sedang berada di restoran:
1. Kamu memanggil pelayan: *"Mas, tolong ambilkan daftar menu hari ini"* (`fetch(url)`).
2. Pelayan berjalan ke dapur (server di internet).
3. Kamu menunggu dengan sabar (**`await`**).
4. Pelayan kembali membawa buku menu ke mejamu (**Response**).

---

### 3. Syntax Dasar

```typescript
const ambilDataInternet = async () => {
  try {
    // 1. Panggil URL API menggunakan fetch + await
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // 2. Ubah hasil respons mentah menjadi objek JSON yang bisa dibaca JS
    const data = await response.json();

    // 3. Data siap digunakan!
    console.log("Judul Tugas:", data.title);
  } catch (error) {
    console.log("Gagal koneksi internet:", error);
  }
};
```

---

### 4. Contoh di Expo (React Native)

Perhatikan contoh screen nyata yang mengambil data asli dari internet (menggunakan API gratis yang populer):

```tsx
import { useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

export default function FetchApiScreen() {
  const [dataUser, setDataUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorPesan, setErrorPesan] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setErrorPesan("");
    setDataUser(null);

    try {
      // MEMANGGIL API ASLI DARI INTERNET DENGAN FETCH
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

      // BONGKAR MENJADI JSON
      const hasilJson = await response.json();

      // SIMPAN KE STATE UNTUK DITAMPILKAN DI LAYAR HP
      setDataUser(hasilJson);
    } catch (err: any) {
      setErrorPesan("Gagal mengambil data dari internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          Demo Pemanggilan API Nyata
        </Text>

        {/* LOADING INDICATOR */}
        {loading && (
          <View className="my-6 items-center">
            <ActivityIndicator size="large" color="#2563eb" />
            <Text className="text-gray-500 text-xs mt-2">Sedang mengunduh dari server...</Text>
          </View>
        )}

        {/* HASIL DATA DARI SERVER */}
        {dataUser && (
          <View className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <Text className="text-lg font-bold text-gray-800">
              {dataUser.name}
            </Text>
            <Text className="text-sm text-blue-700 mt-1">
              📧 Email: {dataUser.email}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              🏢 Perusahaan: {dataUser.company?.name}
            </Text>
          </View>
        )}

        {/* PESAN ERROR */}
        {errorPesan ? (
          <Text className="text-rose-600 text-sm mt-3">{errorPesan}</Text>
        ) : null}

        {/* TOMBOL PICU FETCH */}
        <Pressable
          onPress={handleFetchData}
          disabled={loading}
          className="mt-6 bg-blue-600 active:bg-blue-700 p-3 rounded-full items-center"
        >
          <Text className="text-white font-bold text-sm">
            Tarik Data User dari Internet
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `fetch("https://jsonplaceholder.typicode.com/users/1")`  
   Aplikasi Expo mengirimkan sinyal permintaan data ke URL server tersebut.
2. `const hasilJson = await response.json();`  
   Server mengembalikan data berbentuk paket teks JSON. Kita menunggu proses pembongkarannya menjadi objek JavaScript.
3. `dataUser.name`  
   Begitu tersimpan, kita bisa mengakses data asli dari server seperti mengakses objek biasa yang sudah kita pelajari di Level 1!

---

### 6. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa `await` pada `response.json()`
```typescript
const response = await fetch(url);
const data = response.json(); // 🚨 Lupa await!
console.log(data); // Hasilnya adalah Promise yang masih pending, bukan datanya!
```
*Ingat:* Pembongkaran JSON juga butuh waktu (asynchronous), jadi wajib pakai `await response.json()`.

---

### 7. Latihan (Uji Pemahaman)

**Latihan 1:**  
Apa tipe kembalian dari fungsi `fetch()`? Mengapa kita wajib menggunakan kata kunci `await` saat memanggilnya?

**Latihan 2:**  
Mengapa pada baris `response.json()` kita juga harus menambahkan kata kunci `await`?

---

### 8. Challenge (Tantangan Langsung di Expo)

Tuliskan sebuah async function `ambilPostinganPertama`:
- Panggil URL: `https://jsonplaceholder.typicode.com/posts/1` menggunakan `fetch`.
- Ambil properti `title` dan `body` dari respons tersebut.
- Cetak judul postingan tersebut ke terminal!
