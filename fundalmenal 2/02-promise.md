# Level 2 - Modul 02: Promise (Janji Masa Depan)

---

### 1. Konsep Sederhana

Kemarin kita sudah tahu apa itu **Asynchronous**: proses yang butuh waktu lama dititipkan ke latar belakang agar layar HP tidak macet.

Tapi muncul masalah baru:  
**Bagaimana cara JavaScript memberi tahu kita kalau proses di latar belakang itu sudah selesai? Dan bagaimana kalau prosesnya gagal (misal koneksi internet putus)?**

Di sinilah JavaScript menciptakan **`Promise`**.

> **Promise (artinya: Janji) adalah sebuah wadah khusus di JavaScript yang mewakili hasil dari proses asynchronous yang belum selesai sekarang, tapi PASTI akan memberikan hasil di masa depan.**

Hasil dari sebuah Promise cuma ada 2 kemungkinan:
1. **Ditepati (Berhasil / Sukses / Resolved):** Data yang kita minta berhasil didapat.
2. **Dibatalkan (Gagal / Ditolak / Rejected):** Terjadi masalah, misalnya server error atau kuota habis.

---

### 2. Analogi Kehidupan Nyata: Pager Getar di Restoran 📟

Bayangkan kamu memesan burger di restoran cepat saji:
1. Kamu membayar pesanan di kasir.
2. Kasir belum bisa langsung memberikan burger karena rotinya sedang dipanggang.
3. Kasir memberikan kamu **alat pager getar kecil**:
   - Pager itu adalah **Promise**.
   - Pager itu **berjanji** akan berbunyi kalau burgermu sudah matang.
4. Kamu duduk santai sambil scroll HP (layar tidak freeze).
5. **Saat burger matang:** Pager bergetar dan lampu hijau menyala (**Resolved / Sukses**). Kamu ambil burger.
6. **Kalau gas habis di dapur:** Kasir memanggilmu minta maaf bahwa pesanan batal (**Rejected / Gagal**).

---

### 3. Tiga Status (State) dalam Promise

Sebuah Promise selalu berada di salah satu dari 3 kondisi ini:
1. **`Pending` (Menunggu):** Proses sedang berjalan, belum tahu berhasil atau gagal (pager belum bergetar).
2. **`Fulfilled / Resolved` (Berhasil):** Janji ditepati, data sukses diterima.
3. **`Rejected` (Gagal):** Janji gagal ditepati, memunculkan alasan error.

---

### 4. Syntax Dasar Membuat & Membaca Promise

#### A. Cara Membuat Promise
```typescript
const cekStokDarahPMI = new Promise((resolve, reject) => {
  const adaStok = true; // Coba ubah jadi false

  // Simulasi tunggu 2 detik
  setTimeout(() => {
    if (adaStok) {
      resolve("Stok Darah Golongan O Tersedia!"); // Janji ditepati
    } else {
      reject("Mohon Maaf, Stok Darah Sedang Kosong."); // Janji gagal
    }
  }, 2000);
});
```

#### B. Cara Mengambil Hasilnya (`.then()` dan `.catch()`)
```typescript
cekStokDarahPMI
  .then((hasil) => {
    // Berjalan jika SUKSES (resolve)
    console.log("Sukses:", hasil);
  })
  .catch((alasanError) => {
    // Berjalan jika GAGAL (reject)
    console.log("Error:", alasanError);
  });
```

---

### 5. Contoh di Expo (React Native)

Perhatikan contoh screen simulasi permintaan data donor darah dengan status sukses atau gagal:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function SimulasiPromiseScreen() {
  const [pesan, setPesan] = useState("Tekan tombol untuk cek ketersediaan.");
  const [statusWarna, setStatusWarna] = useState("text-gray-700");

  const jalankanJanji = () => {
    setPesan("Sedang memeriksa database PMI... (Pending)");
    setStatusWarna("text-amber-500");

    // MEMBUAT PROMISE
    const requestData = new Promise((resolve, reject) => {
      setTimeout(() => {
        const serverOnline = true; // Simulasi kondisi server

        if (serverOnline) {
          resolve("Kantong Darah Ditemukan di PMI Kramat!");
        } else {
          reject("Gagal terhubung ke server database.");
        }
      }, 2000);
    });

    // MENANGKAP HASIL PROMISE
    requestData
      .then((dataSukses: any) => {
        setPesan("✓ " + dataSukses);
        setStatusWarna("text-emerald-600");
      })
      .catch((error: any) => {
        setPesan("✕ " + error);
        setStatusWarna("text-rose-600");
      });
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-center">
        <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          Eksperimen Promise
        </Text>

        <Text className={`text-base font-bold text-center mt-4 ${statusWarna}`}>
          {pesan}
        </Text>

        <Pressable
          onPress={jalankanJanji}
          className="mt-6 bg-rose-600 active:bg-rose-700 px-6 py-3 rounded-full"
        >
          <Text className="text-white font-bold text-sm">
            Periksa Stok (2 Detik)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 6. Bedah Kode

1. `new Promise((resolve, reject) => { ... })`  
   Kita membuat objek janji baru.
   - `resolve(...)` dipanggil saat semuanya sukses.
   - `reject(...)` dipanggil saat terjadi kendala.
2. `.then((data) => { ... })`  
   Kata kunci `.then` (artinya: *"Lalu setelah berhasil..."*) menangkap data yang dikirim oleh `resolve`.
3. `.catch((error) => { ... })`  
   Kata kunci `.catch` (artinya: *"Tangkap jika ada error..."*) menangkap pesan kegagalan dari `reject`.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa menangkap `.catch()`
Jika Promise mengalami `reject` tapi kamu tidak menyediakan `.catch()`, JavaScript akan memunculkan error fatal di terminal:  
*`UnhandledPromiseRejectionWarning`*. Selalu siapkan `.catch()`.

#### ❌ Kesalahan 2: Menganggap Promise langsung menghasilkan data instan
```typescript
const data = cekStokDarahPMI;
console.log(data); // 🚨 Hasilnya: [object Promise], BUKAN teks stok darah!
```
Data di dalam Promise hanya bisa diambil lewat `.then()` atau via `async/await` (yang akan kita pelajari di modul berikutnya).

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Jelaskan dengan bahasamu sendiri apa 3 status (state) yang bisa dialami oleh sebuah Promise, dan berikan contoh nyatanya saat memesan ojek online!

**Latihan 2:**  
Apa fungsi dari `resolve()` dan apa fungsi dari `reject()` di dalam sebuah Promise?

**Latihan 3:**  
Jika sebuah Promise memanggil `reject("Sinyal internet lemah")`, bagian mana yang akan menjalankannya: blok `.then()` atau blok `.catch()`?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat sebuah fungsi Promise sederhana bernama `verifikasiOtp(kode: string)`:
- Jika kode adalah `"1234"`, panggil `resolve("Login Berhasil!")`
- Jika bukan `"1234"`, panggil `reject("Kode OTP Salah!")`
- Jalankan fungsi tersebut dan tangkap hasilnya dengan `.then()` dan `.catch()`.
