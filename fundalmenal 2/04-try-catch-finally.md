# Level 2 - Modul 04: try / catch / finally (Jaring Pengaman Error)

---

### 1. Konsep Sederhana

Ketika kita menggunakan `async / await`, semuanya terlihat mulus.  
Tapi bagaimana kalau di tengah jalan:
- Server sedang down (rusak)?
- Paket kuota internet user habis?
- URL server salah ketik?

Kalau terjadi error dan kita tidak menangkapnya, **aplikasi HP akan langsung CRASH (menutup sendiri secara paksa)**. User pasti akan kesal dan memberi rating bintang 1 di Play Store.

Di sinilah kita butuh blok **`try / catch / finally`**.

> **`try / catch / finally` adalah jaring pengaman agar jika terjadi error saat eksekusi kode, aplikasi tidak roboh (crash), melainkan kita bisa menangkap masalahnya dan menampilkan pesan yang sopan kepada user.**

---

### 2. Analogi Kehidupan Nyata: Pemain Sirkus dengan Jaring Pengaman 🎪

Bayangkan atraksi sirkus akrobatik:
1. **`try` (Mencoba):** Pemain sirkus mencoba melakukan lompatan berbahaya di udara.
2. **`catch` (Menangkap jika jatuh):** Jika pemain sirkus terpeleset dan jatuh, ada **jaring pengaman** di bawah yang menangkapnya dengan aman. Pemain tidak mati atau cedera parah.
3. **`finally` (Pasti Dijalankan):** Baik pemain sirkus berhasil mendarat mulus ataupun jatuh ke jaring, lampu sorot sirkus akan tetap dimatikan di akhir pertunjukan.

---

### 3. Syntax Dasar

```typescript
try {
  // 1. Letakkan kode berisiko di sini
  const hasil = await ambilDataServer();
  console.log("Sukses:", hasil);
} catch (error) {
  // 2. Jika ada error di blok try, langsung loncat ke sini
  console.log("Terjadi masalah:", error);
} finally {
  // 3. Apapun yang terjadi (sukses atau gagal), blok ini PASTI jalan
  console.log("Proses selesai, matikan loading spinner.");
}
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana `try / catch / finally` digunakan untuk mengambil data stok obat darurat:

```tsx
import { useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

// Simulasi fungsi server yang bisa gagal
const fetchStokObat = (harusSukses: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (harusSukses) {
        resolve("Stok 100 Botol Paracetamol Tersedia!");
      } else {
        reject("Server PMI sedang dalam perbaikan berkala.");
      }
    }, 2000);
  });
};

export default function TryCatchScreen() {
  const [dataObat, setDataObat] = useState("");
  const [pesanError, setPesanError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCekObat = async (modeSukses: boolean) => {
    setLoading(true);
    setPesanError("");
    setDataObat("");

    try {
      // 1. BLOK TRY (Mencoba)
      const respon: any = await fetchStokObat(modeSukses);
      setDataObat(respon);
    } catch (err: any) {
      // 2. BLOK CATCH (Menangkap error)
      setPesanError(err);
    } finally {
      // 3. BLOK FINALLY (Selalu matikan loading, apapun hasilnya)
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          Sistem Logistik Obat PMI
        </Text>

        {/* LOADING INDICATOR */}
        {loading && (
          <View className="my-4 items-center">
            <ActivityIndicator size="small" color="#dc2626" />
            <Text className="text-gray-500 text-xs mt-2">Menghubungkan...</Text>
          </View>
        )}

        {/* JIKA BERHASIL */}
        {dataObat ? (
          <View className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
            <Text className="text-emerald-800 font-bold text-sm">
              ✓ {dataObat}
            </Text>
          </View>
        ) : null}

        {/* JIKA GAGAL */}
        {pesanError ? (
          <View className="mt-4 p-3 bg-rose-50 rounded-xl border border-rose-200">
            <Text className="text-rose-800 font-bold text-sm">
              ✕ {pesanError}
            </Text>
          </View>
        ) : null}

        {/* DUA TOMBOL TEST */}
        <View className="mt-6 flex-row gap-2">
          <Pressable
            onPress={() => handleCekObat(true)}
            className="flex-1 bg-emerald-600 p-3 rounded-xl items-center"
          >
            <Text className="text-white font-bold text-xs">Simulasi Sukses</Text>
          </Pressable>

          <Pressable
            onPress={() => handleCekObat(false)}
            className="flex-1 bg-rose-600 p-3 rounded-xl items-center"
          >
            <Text className="text-white font-bold text-xs">Simulasi Error</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. Di dalam `try`: Kita meletakkan kode `await fetchStokObat()`. Jika berhasil, baris `setDataObat(respon)` langsung jalan.
2. Jika server melempar error (`reject`), JavaScript langsung **MELOMPAT KELUAR** dari blok `try` dan masuk ke `catch (err)`.
3. Variabel `err` menampung pesan error dari server, lalu kita simpan ke `setPesanError(err)`.
4. Blok `finally` memanggil `setLoading(false)` agar animasi loading putar-putar berhenti, baik saat data berhasil didapat maupun saat gagal. Sangat rapi!

---

### 6. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Membiarkan blok `catch` kosong (Silent Failure)
```typescript
try {
  await kirimData();
} catch (error) {
  // Dibiarkan kosong tanpa penanganan
}
```
*Kenapa bahaya?* Kalau aplikasi gagal kirim data, user tidak tahu apa-apa dan mengira datanya sudah terkirim! Minimal tampilkan pesan error atau `console.log(error)`.

#### ❌ Kesalahan 2: Mematikan loading hanya di dalam `try`
Jika kamu menulis `setLoading(false)` hanya di `try`, maka saat terjadi error, loading spinner akan berputar selamanya tanpa pernah berhenti! Gunakan `finally` untuk mematikan loading.

---

### 7. Latihan (Uji Pemahaman)

**Latihan 1:**  
Jelaskan peran masing-masing dari ketiga blok: `try`, `catch`, dan `finally`!

**Latihan 2:**  
Mengapa blok `finally` adalah tempat yang paling ideal untuk mematikan status `loading` di aplikasi mobile?

---

### 8. Challenge (Tantangan Langsung di Expo)

Tuliskan sebuah async function `simpanCatatanDonor`:
- Bungkus dengan blok `try / catch / finally`.
- Di dalam `try`, cetak `"Menyimpan data..."`, lalu lemparkan error manual dengan `throw new Error("Koneksi terputus")`.
- Di dalam `catch`, cetak pesan error yang ditangkap.
- Di dalam `finally`, cetak `"Penyimpanan selesai dibersihkan."`.
