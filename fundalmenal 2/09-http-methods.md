# Level 2 - Modul 09: HTTP Methods (Kata Kerja Aksi di Server)

---

### 1. Konsep Sederhana

Ketika kamu berbelanja di minimarket, kamu punya beberapa maksud:
- *"Mbak, mau lihat harga sabun"* (Membaca)
- *"Mbak, mau beli sabun baru"* (Menambah)
- *"Mbak, mau tukar sabun dengan merk lain"* (Mengubah)
- *"Mbak, sabun yang ini batal saya beli ya"* (Menghapus)

Di dunia internet, kita menyebut maksud-maksud tindakan tersebut sebagai **HTTP Method** (atau kata kerja HTTP).

> **HTTP Method adalah penanda aksi kepada server: ingin diapakan data di alamat tersebut? Apakah hanya dilihat, dibuat baru, diubah, atau dihapus?**

---

### 2. Lima HTTP Method Utama (Standar RESTful API)

| HTTP Method | Arti Tindakan | Analogi Nyata | Membawa Body? |
|---|---|---|---|
| **GET** | Mengambil / Membaca data | Membaca papan pengumuman | ❌ Tidak |
| **POST** | Membuat / Menambah data baru | Menyetor formulir pendaftaran baru | ✅ Ya |
| **PUT** | Mengganti data seutuhnya | Mengganti seluruh isi berkas lama dengan berkas baru | ✅ Ya |
| **PATCH** | Mengubah sebagian data saja | Mengoreksi satu kata nomor telepon di KTP | ✅ Ya |
| **DELETE** | Menghapus data | Membuang data ke tempat sampah | ❌ Jarang |

---

### 3. Studi Kasus Nyata di Aplikasi PMI

Bayangkan kita mengelola data pendaftaran donor darah:

#### 1. `GET` (Melihat Daftar Pendaftar)
```typescript
// Tanpa body, cukup panggil URL-nya
const response = await fetch("https://api.pmi.or.id/pendaftar");
```

#### 2. `POST` (Mendaftarkan Pasien Baru)
```typescript
const response = await fetch("https://api.pmi.or.id/pendaftar", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nama: "Bagas", golDarah: "O" }),
});
```

#### 3. `PUT` (Mengganti Seluruh Profil Pasien ID 101)
```typescript
const response = await fetch("https://api.pmi.or.id/pendaftar/101", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    nama: "Bagas Pratama",
    golDarah: "O",
    umur: 23,
    alamat: "Jakarta",
  }),
});
```

#### 4. `PATCH` (Cuma Mengubah Status Kehadiran Pasien ID 101)
```typescript
const response = await fetch("https://api.pmi.or.id/pendaftar/101", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    statusHadir: true, // Cuma satu field ini yang diubah!
  }),
});
```

#### 5. `DELETE` (Membatalkan / Menghapus Pendaftaran ID 101)
```typescript
const response = await fetch("https://api.pmi.or.id/pendaftar/101", {
  method: "DELETE",
});
```

---

### 4. Contoh di Expo (React Native)

Perhatikan komponen ringkas yang mendemonstrasikan pemilihan method:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function HttpMethodsScreen() {
  const [statusLog, setStatusLog] = useState("Pilih aksi di bawah ini");

  // CONTOH FUNGSI HAPUS (DELETE)
  const handleHapusData = async () => {
    setStatusLog("Mengirim sinyal DELETE ke server...");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });

      if (response.ok) {
        setStatusLog("✓ Data ID 1 berhasil dihapus dari server!");
      }
    } catch (err) {
      setStatusLog("✕ Gagal menghapus data.");
    }
  };

  // CONTOH FUNGSI UPDATE STATUS (PATCH)
  const handleUpdateStatus = async () => {
    setStatusLog("Mengirim sinyal PATCH ke server...");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Judul Baru yang Direvisi" }),
      });

      const hasil = await response.json();
      setStatusLog(`✓ PATCH Berhasil! Judul baru: "${hasil.title}"`);
    } catch (err) {
      setStatusLog("✕ Gagal update patch.");
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Uji Coba HTTP Methods
        </Text>

        <Text className="text-xs text-gray-500 mt-2">Log Hasil:</Text>
        <Text className="text-sm font-semibold text-blue-600 mt-1 mb-4">
          {statusLog}
        </Text>

        {/* TOMBOL-TOMBOL METODE */}
        <Pressable
          onPress={handleUpdateStatus}
          className="bg-amber-500 p-3 rounded-xl items-center mb-2"
        >
          <Text className="text-white font-bold text-xs">Uji Coba PATCH (Update Judul)</Text>
        </Pressable>

        <Pressable
          onPress={handleHapusData}
          className="bg-rose-600 p-3 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-xs">Uji Coba DELETE (Hapus Data)</Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Latihan (Uji Pemahaman)

**Latihan 1:**  
Tentukan HTTP Method apa yang paling tepat untuk kasus berikut:
1. Menampilkan daftar jadwal donor darah hari ini.
2. User baru menekan tombol "Daftar Akun Baru".
3. User hanya ingin mengganti foto profilnya saja.
4. User membatalkan janji temu donor darah.

**Latihan 2:**  
Apa perbedaan mendasar antara **PUT** dan **PATCH**?

---

### 6. Challenge (Tantangan Langsung di Expo)

Tuliskan sebuah panggilan `fetch` menggunakan method `POST` ke `https://jsonplaceholder.typicode.com/posts` dengan body berisi `{ title: "Latihan Level 2", userId: 1 }`.
