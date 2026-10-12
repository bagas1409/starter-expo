# Level 2 - Modul 13: response.json() (Membongkar Paket Stream Data)

---

### 1. Konsep Sederhana

Kamu mungkin bertanya:  
*"Kenapa kita harus menulis `await response.json()`, padahal tadi kita sudah menulis `await fetch(url)`? Kenapa harus dua kali `await`?"*

Ini adalah salah satu misteri terbesar bagi pemula di JavaScript!

Mari kita bongkar rahasianya:
1. **`await fetch(url)`:**  
   Menunggu koneksi internet tersambung dan menerima **kepala surat (Headers & Status)** dari server. Di tahap ini, kabel internet baru mulai menerima aliran data (stream).
2. **`await response.json()`:**  
   Menunggu seluruh aliran potongan data mentah selesai diunduh sampai tuntas, lalu **mengubah teks JSON tersebut menjadi Objek/Array JavaScript** yang siap kita pakai.

> **`response.json()` adalah metode yang membaca seluruh aliran teks yang dikirim server sampai tetes terakhir, lalu otomatis membongkarnya (parsing) menjadi objek JavaScript.**

---

### 2. Analogi Kehidupan Nyata: Mengunduh File Video Berukuran Besar 🎥

Bayangkan kamu memesan paket DVD:
1. Kurir datang membunyikan bel rumahmu (**`await fetch`**): Kamu tahu kurir sudah sampai dan amplopnya ada di tanganmu.
2. Tapi isi di dalamnya masih berupa kepingan DVD yang terkunci di dalam kotak. Kamu harus memasukkan DVD ke pemutar dan menunggu proses membaca datanya selesai (**`await response.json()`**).

---

### 3. Syntax Dasar

```typescript
const ambilData = async () => {
  // 1. Dapatkan koneksi respons
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // 2. Baca aliran isi paket sampai habis dan ubah jadi objek
  const data = await response.json();

  console.log(data); // { userId: 1, id: 1, title: "...", completed: false }
};
```

#### Alternatif Lain: `response.text()`
Jika server membalas dengan teks biasa (bukan format JSON), kamu bisa memakai:
```typescript
const teksMentah = await response.text();
```

---

### 4. Contoh di Expo (React Native)

Perhatikan contoh screen yang mendemonstrasikan hasil bongkar `response.json()`:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function ResponseJsonScreen() {
  const [judulTugas, setJudulTugas] = useState("");
  const [isSelesai, setIsSelesai] = useState<boolean | null>(null);

  const handleBongkarJson = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      
      // BONGKAR STREAM DATA DENGAN AWAIT .json()
      const data = await response.json();

      setJudulTugas(data.title);
      setIsSelesai(data.completed);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Uji Bongkar response.json()
        </Text>

        {judulTugas ? (
          <View className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <Text className="text-sm font-semibold text-purple-900">
              Judul Agenda: {judulTugas}
            </Text>
            <Text className="text-xs text-purple-700 mt-1">
              Status: {isSelesai ? "Sudah Selesai" : "Belum Selesai"}
            </Text>
          </View>
        ) : (
          <Text className="text-gray-400 text-sm mt-3">Belum ada data dibongkar.</Text>
        )}

        <Pressable
          onPress={handleBongkarJson}
          className="mt-6 bg-purple-600 p-3 rounded-xl items-center active:bg-purple-700"
        >
          <Text className="text-white font-bold text-sm">
            Unduh & Bongkar JSON
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Latihan (Uji Pemahaman)

**Latihan:**  
Jelaskan dengan bahasamu sendiri mengapa kita butuh menulis kata kunci `await` dua kali saat menggunakan `fetch()`: satu kali di depan `fetch()` dan satu kali di depan `response.json()`!
