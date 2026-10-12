# Level 2 - Modul 14: Status Code (Nomor Kode Rahasia Server)

---

### 1. Konsep Sederhana

Saat kamu menelepon nomor yang salah, operator telepon berkata: *"Nomor yang Anda tuju tidak terdaftar"*.  
Di internet, server tidak berbicara dengan kata-kata panjang, melainkan menggunakan **angka 3 digit** yang disebut **HTTP Status Code**.

> **Status Code adalah nomor standar 3 digit yang dikirimkan server untuk memberi tahu apakah permintaan kita berhasil, salah alamat, ditolak, atau servernya yang sedang rusak.**

Sebagai programmer mobile, kamu **wajib hafal keluarga angka-angka ini** agar bisa mengambil keputusan yang tepat di layar HP.

---

### 2. Lima Golongan Besar Status Code

| Awalan Angka | Golongan Arti | Makna Sederhana |
|---|---|---|
| **`2xx`** (200-299) | **SUCCESS** | Permintaanmu sukses dan lancar jaya! |
| **`3xx`** (300-399) | **REDIRECT** | Halaman/data sudah pindah alamat lain. |
| **`4xx`** (400-499) | **CLIENT ERROR** | Kamu (aplikasi HP) yang salah minta! (Salah input, belum login, salah URL). |
| **`5xx`** (500-599) | **SERVER ERROR** | Server di cloud yang sedang rusak atau meledak! (Bukan salah aplikasimu). |

---

### 3. Nomor Status Code yang Paling Wajib Dihafal

1. **`200 OK`:** Data berhasil diambil.
2. **`201 Created`:** Data baru berhasil dibuat (biasanya balasan dari `POST`).
3. **`400 Bad Request`:** Data yang kamu kirim di body tidak lengkap atau salah format.
4. **`401 Unauthorized`:** Kamu belum login atau token tiketmu sudah kedaluwarsa. *(Tindakan di HP: Lempar user ke halaman Login!)*
5. **`403 Forbidden`:** Kamu sudah login, tapi tidak punya izin (misal: user biasa mencoba akses menu khusus Admin).
6. **`404 Not Found`:** Alamat URL data tidak ditemukan di server.
7. **`500 Internal Server Error`:** Server database di cloud sedang mengalami error kodingan.
8. **`503 Service Unavailable`:** Server sedang overload (terlalu banyak pengunjung) atau dalam perbaikan (*maintenance*).

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana kita mengambil keputusan UI berdasarkan kode status:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function StatusCodeDecisionScreen() {
  const [pesanAksi, setPesanAksi] = useState("Pilih skenario status code:");

  const handleSimulasiStatus = (statusCode: number) => {
    switch (statusCode) {
      case 200:
        setPesanAksi("✓ (200 OK): Tampilkan daftar data donor darah.");
        break;
      case 201:
        setPesanAksi("✓ (201 Created): Berhasil mendaftar! Munculkan popup ucapan selamat.");
        break;
      case 401:
        setPesanAksi("🔒 (401 Unauthorized): Sesi habis! Lempar otomatis ke Halaman Login.");
        break;
      case 404:
        setPesanAksi("🔍 (404 Not Found): Data tidak ditemukan di database.");
        break;
      case 500:
        setPesanAksi("⚠️ (500 Server Error): Server PMI sedang dalam perbaikan. Coba 5 menit lagi.");
        break;
      default:
        setPesanAksi("Status Code tidak dikenal.");
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Simulator Pengambilan Keputusan Status Code
        </Text>

        <View className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <Text className="text-sm font-bold text-blue-900">
            Respon Aplikasi:
          </Text>
          <Text className="text-xs text-blue-700 mt-1">
            {pesanAksi}
          </Text>
        </View>

        {/* TOMBOL BERBAGAI KODE */}
        <View className="mt-4 flex-row flex-wrap gap-2">
          <Pressable onPress={() => handleSimulasiStatus(200)} className="bg-emerald-600 px-3 py-2 rounded-lg">
            <Text className="text-white text-xs font-bold">200 OK</Text>
          </Pressable>
          <Pressable onPress={() => handleSimulasiStatus(201)} className="bg-emerald-700 px-3 py-2 rounded-lg">
            <Text className="text-white text-xs font-bold">201 Created</Text>
          </Pressable>
          <Pressable onPress={() => handleSimulasiStatus(401)} className="bg-amber-600 px-3 py-2 rounded-lg">
            <Text className="text-white text-xs font-bold">401 Auth</Text>
          </Pressable>
          <Pressable onPress={() => handleSimulasiStatus(404)} className="bg-rose-500 px-3 py-2 rounded-lg">
            <Text className="text-white text-xs font-bold">404 Hilang</Text>
          </Pressable>
          <Pressable onPress={() => handleSimulasiStatus(500)} className="bg-rose-800 px-3 py-2 rounded-lg">
            <Text className="text-white text-xs font-bold">500 Rusak</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
```

---

### 5. Latihan (Uji Pemahaman)

**Latihan 1:**  
Jika aplikasi mobile kamu menerima status `401 Unauthorized` dari server, tindakan apa yang lazimnya harus dilakukan oleh aplikasi terhadap user?

**Latihan 2:**  
Apa perbedaan tanggung jawab antara error berawalan `4xx` dengan error berawalan `5xx`?
