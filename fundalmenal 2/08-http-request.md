# Level 2 - Modul 08: HTTP Request (Anatomi Surat Permintaan)

---

### 1. Konsep Sederhana

Saat kamu memanggil `fetch()`, apa sebenarnya yang sedang terjadi di balik layar jaringan kabel dan sinyal seluler?

HP kamu sedang mengirimkan sebuah **HTTP Request** ke server.

> **HTTP Request adalah paket surat permintaan resmi yang dikirimkan oleh aplikasi klien (HP Expo kita) kepada komputer pelayan (Server) melalui protokol internet.**

Hubungan ini dinamakan arsitektur **Client - Server**:
- **Client (Klien):** HP user yang meminta sesuatu (*"Tolong berikan daftar stok darah"*).
- **Server:** Komputer besar di cloud yang melayani permintaan (*"Ini daftarnya"*).

---

### 2. Analogi Kehidupan Nyata: Mengirim Surat Pos Kilat ✉️

Bayangkan kamu sedang mengirim surat pos ke kantor pusat PMI:
1. **Alamat Tujuan (URL / Endpoint):** Di amplop tertulis: `Jl. Kramat Raya No. 47` (misal: `https://api.pmi.or.id/stok-darah`).
2. **Tindakan yang Diminta (HTTP Method):** Apakah kamu cuma mau "Melihat data", atau mau "Menyetor berkas baru"?
3. **Catatan Tambahan di Amplop (Headers):** Seperti stiker perangko, bahasa surat, dan nomor kartu tanda pengenal pengirim.
4. **Isi Surat di Dalam Amplop (Body):** Formulir data diri yang kamu selipkan di dalam amplop.

---

### 3. Empat Komponen Utama HTTP Request

Setiap kali aplikasi Expo kamu berbicara ke internet, paket permintaannya selalu terdiri dari 4 hal:

1. **URL (Endpoint):** Alamat tujuan spesifik tempat data disimpan di server.  
   Contoh: `https://api.pmi.or.id/v1/relawan`
2. **Method (Metode HTTP):** Aksi apa yang ingin kamu lakukan (Mengambil? Menyimpan? Mengubah? Menghapus?).
3. **Headers (Kepala Surat):** Informasi metadata tentang permintaan (seperti jenis format data dan token otentikasi login).
4. **Body (Isi Surat / Muatan):** Data aktual yang dikirimkan (biasanya dalam format JSON). *Catatan: Jika hanya mengambil data, Body ini biasanya kosong.*

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana kita menyusun sebuah HTTP Request lengkap di dalam fungsi `fetch()`:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function HttpRequestStructureScreen() {
  const [logStatus, setLogStatus] = useState("Menunggu pengiriman request...");

  const handleKirimSuratRequest = async () => {
    setLogStatus("Mengirimkan HTTP Request ke server...");

    try {
      // ANATOMI LENGKAP SEBUAH HTTP REQUEST:
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        // 1. METHOD: Tindakan apa yang kita mau
        method: "POST",

        // 2. HEADERS: Metadata amplop surat
        headers: {
          "Content-Type": "application/json", // "Halo server, isi surat saya ini berformat JSON!"
        },

        // 3. BODY: Isi surat yang dikirimkan (harus dibungkus jadi teks JSON string)
        body: JSON.stringify({
          title: "Laporan Bantuan Gempa",
          body: "Bantuan medis telah sampai di posko utama.",
          userId: 1,
        }),
      });

      const dataRespon = await response.json();
      setLogStatus(`✓ Berhasil! ID Surat Baru dari Server: ${dataRespon.id}`);
    } catch (err) {
      setLogStatus("✕ Gagal mengirim HTTP Request.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          Anatomi HTTP Request
        </Text>

        <Text className="text-sm font-semibold text-gray-700 mt-4">
          Status Pengiriman:
        </Text>
        <Text className="text-base font-bold text-blue-600 mt-1">
          {logStatus}
        </Text>

        <Pressable
          onPress={handleKirimSuratRequest}
          className="mt-6 bg-blue-600 active:bg-blue-700 p-3 rounded-full items-center"
        >
          <Text className="text-white font-bold text-sm">
            Kirim Paket HTTP Request Lengkap
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

- Parameter pertama `fetch("https://...")` adalah **URL Endpoint**.
- Parameter kedua adalah sebuah objek konfigurasi `{ method, headers, body }` yang menjelaskan detail surat permohonan kita kepada server.

---

### 6. Latihan (Uji Pemahaman)

**Latihan 1:**  
Sebutkan 4 bagian utama dari sebuah paket HTTP Request!

**Latihan 2:**  
Apa perbedaan peran antara **Client** dan **Server** dalam arsitektur aplikasi mobile?

---

### 7. Challenge (Tantangan Langsung di Expo)

Tuliskan sebuah konfigurasi objek untuk `fetch`:
- Method: `"POST"`
- Headers: `"Content-Type": "application/json"`
- Body: Berisi data `{ namaPasien: "Bagas", umur: 22 }` yang sudah di-`JSON.stringify`.
