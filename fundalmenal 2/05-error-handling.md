# Level 2 - Modul 05: Error Handling (Menangani Masalah dengan Anggun)

---

### 1. Konsep Sederhana

Aplikasi profesional bukan aplikasi yang tidak pernah terkena error, melainkan aplikasi yang **tahu bagaimana cara bersikap saat error itu datang**.

Bayangkan jika internet user mati saat menekan tombol "Daftar Donor Darah":
- **Aplikasi Buruk:** Layar tiba-tiba putih, aplikasi tertutup sendiri (force close), atau memunculkan tulisan mengerikan seperti:  
  *`NetworkError: Failed to execute 'fetch' on 'Window' TypeError: Failed to fetch at line 301`*. User langsung panik!
- **Aplikasi Profesional:** Menangkap error tersebut secara tenang, lalu menampilkan pesan manusiawi:  
  *"Koneksi internet kamu sedang bermasalah. Periksa jaringanmu dan coba tekan tombol Ulangi ya!"*.

> **Error Handling adalah seni mendeteksi, menangkap, dan menerjemahkan kesalahan teknis menjadi pesan yang ramah serta memberikan jalan keluar bagi pengguna aplikasi.**

---

### 2. Analogi Kehidupan Nyata: Pelayanan Resepsionis Rumah Sakit 🏥

Bayangkan kamu datang ke loket pendaftaran PMI:
- Jika komputer loket mati, resepsionis yang ramah tidak akan berteriak membacakan kode kabel yang terbakar.
- Resepsionis akan tersenyum dan berkata: *"Mohon maaf Mas Bagas, sistem kami sedang mengalami gangguan server. Silakan tunggu 5 menit di kursi tunggu atau isi formulir manual ini terlebih dahulu."*

Resepsionis yang baik telah menerapkan **Error Handling yang anggun**.

---

### 3. Anatomi Objek Error di JavaScript

Di JavaScript, setiap kali error terjadi, ia dikemas dalam sebuah objek bawaan bernama `Error`:
```typescript
try {
  throw new Error("Nomor KTP tidak valid!");
} catch (error: any) {
  console.log(error.name);    // "Error"
  console.log(error.message); // "Nomor KTP tidak valid!"
}
```
Properti paling penting yang sering kita baca adalah **`error.message`**.

---

### 4. Contoh di Expo (React Native)

Perhatikan contoh screen pendaftaran relawan yang dilengkapi penanganan error ramah dan tombol "Coba Lagi" (Retry):

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function ErrorHandlingScreen() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const kirimDataRelawan = async (nama: string) => {
    setErrorMessage("");
    setIsSuccess(false);

    try {
      // VALIDASI LOGIKA BISNIS
      if (!nama || nama.trim() === "") {
        throw new Error("Nama relawan tidak boleh kosong!");
      }

      // SIMULASI CEK KONEKSI (Error Jaringan)
      const isInternetAda = false; // Simulasi offline
      if (!isInternetAda) {
        throw new Error("Koneksi internet terputus. Pastikan WiFi atau paket data aktif.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      // TANGKAP DAN TERJEMAHKAN KE UI USER
      setErrorMessage(err.message || "Terjadi kesalahan yang tidak terduga.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Form Pendaftaran Relawan
        </Text>

        {/* STATUS SUKSES */}
        {isSuccess && (
          <View className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <Text className="text-emerald-800 text-sm font-bold">
              ✓ Pendaftaran Berhasil Dikirim!
            </Text>
          </View>
        )}

        {/* PESAN ERROR RAMAH USER */}
        {errorMessage ? (
          <View className="mt-4 p-4 bg-rose-50 rounded-xl border border-rose-200">
            <Text className="text-rose-800 font-bold text-sm">
              Gagal Memproses Data
            </Text>
            <Text className="text-rose-600 text-xs mt-1">
              {errorMessage}
            </Text>

            {/* TOMBOL RETRY / COBA LAGI */}
            <Pressable
              onPress={() => kirimDataRelawan("Bagas")}
              className="mt-3 bg-rose-600 py-2 rounded-lg items-center active:bg-rose-700"
            >
              <Text className="text-white font-bold text-xs">Coba Lagi</Text>
            </Pressable>
          </View>
        ) : null}

        {/* TOMBOL TRIGGER ERROR */}
        <Pressable
          onPress={() => kirimDataRelawan("")}
          className="mt-6 bg-gray-800 py-3 rounded-full items-center active:bg-black"
        >
          <Text className="text-white font-bold text-sm">
            Kirim Data (Simulasi Error)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `throw new Error(...)`  
   Kita bisa secara sengaja "melempar" error jika ada kondisi yang tidak wajar (misalnya kolom nama kosong).
2. `catch (err: any) { setErrorMessage(err.message) }`  
   Pesan kesalahan dari `err.message` langsung disimpan ke state untuk ditampilkan ke layar dalam kotak berwarna merah yang sopan.
3. Tombol **"Coba Lagi"** memberi solusi nyata bagi pengguna aplikasi alih-alih membiarkan mereka terjebak dalam kebingungan.

---

### 6. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Memperlihatkan pesan error mentah dari server ke user
Contoh: Memunculkan tulisan *"Internal Server Error 500 at line /usr/var/db..."* ke layar HP. User tidak mengerti kode server! Ganti dengan bahasa sederhana: *"Maaf, server kami sedang sibuk. Silakan coba sesaat lagi"*.

---

### 7. Latihan (Uji Pemahaman)

**Latihan 1:**  
Mengapa menampilkan pesan error teknis mentah (seperti `TypeError: Cannot read property...`) ke pengguna aplikasi HP dianggap buruk?

**Latihan 2:**  
Bagaimana cara kamu membuat error manual di JavaScript jika berat badan calon donor kurang dari 45 kg?

---

### 8. Challenge (Tantangan Langsung di Expo)

Buat potongan logika validasi PIN:
- Jika PIN yang diinput bukan 6 digit (`pin.length !== 6`), lemparkan error dengan pesan `"PIN harus terdiri dari 6 angka!"`.
- Tangkap error tersebut di dalam blok `catch` dan simpan pesan ramahnya ke sebuah variabel.
