# Level 2 - Modul 10: Request Body (Muatan Kiriman Data)

---

### 1. Konsep Sederhana

Ketika kamu ingin mendaftarkan anggota relawan baru di aplikasi, data seperti:
- Nama: "Bagas"
- Email: "bagas@example.com"
- Golongan Darah: "O"

Data tersebut tidak mungkin kita tempelkan di alamat URL karena URL akan jadi panjang dan tidak aman.  
Data tersebut kita kemas dan kita masukkan ke dalam **Request Body**.

> **Request Body (Muatan Permintaan) adalah data aktual yang dibawa di dalam paket HTTP Request saat kita mengirimkan data ke server (pada method POST, PUT, atau PATCH).**

---

### 2. Aturan Penting: Harus di-Stringify!

Server internet tidak bisa langsung menerima objek JavaScript mentah `{ nama: "Bagas" }`.  
Objek tersebut **WAJIB diubah menjadi string teks** menggunakan `JSON.stringify()`.

```typescript
// ❌ SALAH BESAR (Error Jaringan):
body: { nama: "Bagas" }

// ✅ BENAR:
body: JSON.stringify({ nama: "Bagas" })
```

---

### 3. Contoh di Expo (React Native)

Perhatikan contoh form input pendaftaran relawan di Expo:

```tsx
import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

export default function FormRequestBodyScreen() {
  const [nama, setNama] = useState("");
  const [golDarah, setGolDarah] = useState("");

  const handleKirimPendaftaran = async () => {
    // 1. SIAPKAN DATA OBJEK DARI FORM
    const payload = {
      namaLengkap: nama,
      golonganDarah: golDarah,
      tanggalDaftar: new Date().toISOString(),
    };

    try {
      // 2. MASUKKAN KE REQUEST BODY DALAM BENTUK JSON.STRINGIFY
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // <-- INI REQUEST BODY
      });

      const hasil = await response.json();
      Alert.alert("Sukses", `Data ${payload.namaLengkap} berhasil dikirim! ID: ${hasil.id}`);
      setNama("");
      setGolDarah("");
    } catch (err) {
      Alert.alert("Error", "Gagal mengirim data.");
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800 mb-4">
          Formulir Relawan Baru
        </Text>

        <Text className="text-xs text-gray-500 mb-1">Nama Relawan:</Text>
        <TextInput
          value={nama}
          onChangeText={setNama}
          placeholder="Contoh: Bagas Pratama"
          className="border border-gray-200 p-3 rounded-xl mb-3 text-sm"
        />

        <Text className="text-xs text-gray-500 mb-1">Golongan Darah:</Text>
        <TextInput
          value={golDarah}
          onChangeText={setGolDarah}
          placeholder="Contoh: O / A / B / AB"
          className="border border-gray-200 p-3 rounded-xl mb-4 text-sm"
        />

        <Pressable
          onPress={handleKirimPendaftaran}
          className="bg-red-600 p-3 rounded-xl items-center active:bg-red-700"
        >
          <Text className="text-white font-bold text-sm">
            Kirim ke Server
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. Kita mengambil nilai dari komponen `<TextInput>` menggunakan state `nama` dan `golDarah`.
2. Kita menyatukan keduanya menjadi objek `payload`.
3. Pada properti `body: JSON.stringify(payload)`, objek tersebut dibungkus rapi menjadi JSON string dan dikirim ke server.

---

### 5. Kesalahan Umum Pemula

#### ❌ Kesalahan: Lupa Header `"Content-Type": "application/json"`
Jika kamu mengirim Request Body berupa JSON tapi lupa memberi tahu server lewat Headers, banyak server akan menolak atau membaca body tersebut sebagai kosong!

---

### 6. Latihan & Challenge

**Latihan:**  
Mengapa pada method `GET` kita tidak menggunakan Request Body?

**Challenge:**  
Buat sebuah objek `laporanBencana` yang berisi `lokasi: "Posko PMI Jakarta"` dan `korbanTerdampak: 45`. Ubah menjadi Request Body yang siap dikirim lewat fetch!
