# Level 2 - Modul 03: async / await (Menulis Asinkron Rasa Sinkron)

---

### 1. Konsep Sederhana

Di modul sebelumnya, kita belajar `Promise` dengan memakai `.then()` dan `.catch()`.  
Tapi bayangkan kalau alur aplikasi kita panjang seperti ini:
1. Login dulu `.then(...)`
2. Setelah login, ambil data profil `.then(...)`
3. Setelah profil ada, ambil daftar postingan `.then(...)`
4. Setelah postingan ada, ambil komentar `.then(...)`

Kodenya akan bergeser terus ke kanan dan jadi sangat berantakan (sering disebut *Promise Hell* atau *Callback Hell*).

JavaScript modern memberikan solusi paling dicintai para programmer: **`async` dan `await`**.

> **`async / await` adalah cara modern menulis kode asynchronous yang butuh waktu tunggu, namun dengan gaya penulisan yang rapi, lurus dari atas ke bawah seolah-olah kode biasa (synchronous).**

---

### 2. Analogi Kehidupan Nyata: Duduk Menunggu Pelayan 🍽️

Bayangkan kamu sedang makan di restoran:
- **`async`** menandakan bahwa kamu sedang berada di "Zona Restoran", di mana semua aktivitas di dalam ruangan ini melibatkan waktu masak.
- **`await`** seperti kamu berkata kepada diri sendiri:  
  *"Saya duduk tenang di sini, **TUNGGU (await)** makanan ini dihidangkan di atas meja, BARU SETELAH ITU saya mulai menyantapnya."*

Kamu tidak perlu repot memegang pager getar `.then()`. Kode programmu sendiri yang akan dengan sabar menanti hasil janji (Promise) itu selesai di baris tersebut.

---

### 3. Dua Aturan Emas `async / await`

1. **Kata kunci `async`** harus selalu ditempelkan di depan deklarasi fungsi.  
   Fungsi ini otomatis menjadi fungsi asynchronous.
2. **Kata kunci `await`** HANYA BISA digunakan di dalam fungsi yang bertanda `async`.  
   `await` bertugas menghentikan jalannya baris kode berikutnya di dalam fungsi itu sampai Promise selesai memberikan hasil.

---

### 4. Perbandingan Gaya Penulisan

#### Gaya Lama (Memakai `.then`):
```typescript
ambilDataUser().then((user) => {
  console.log("Nama User:", user.nama);
});
```

#### Gaya Modern (Memakai `async / await`):
```typescript
const tampilkanUser = async () => {
  // Komputer menunggu dengan sopan di baris ini sampai data selesai:
  const user = await ambilDataUser();
  console.log("Nama User:", user.nama);
};
```
*Lihat! Kodenya bersih, lurus, dan tidak perlu kurung kurawal bertingkat!*

---

### 5. Contoh di Expo (React Native)

Perhatikan contoh screen pengambilan data rumah sakit darurat:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

// Fungsi simulasi yang mengembalikan Promise (butuh 2 detik)
const fetchRumahSakitPMI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        namaRS: "RS PMI Bogor",
        stokKantongO: 35,
        statusAmbulans: "Siaga",
      });
    }, 2000);
  });
};

export default function AsyncAwaitScreen() {
  const [dataRS, setDataRS] = useState<any>(null);
  const [isMemuat, setIsMemuat] = useState(false);

  // FUNGSI ASYNC AWAIT KITA
  const handleLoadData = async () => {
    setIsMemuat(true);

    // KITA TUNGGU PROMOSI DENGAN 'AWAIT'
    const hasil = await fetchRumahSakitPMI();

    // Baris ini baru jalan setelah 2 detik berlalu!
    setDataRS(hasil);
    setIsMemuat(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-400 text-xs font-bold uppercase tracking-wider">
          Data Faskes Darurat
        </Text>

        {isMemuat ? (
          <Text className="text-amber-600 font-bold mt-4">
            ⏳ Sedang mengunduh data dari server...
          </Text>
        ) : dataRS ? (
          <View className="mt-4">
            <Text className="text-xl font-bold text-gray-800">
              {dataRS.namaRS}
            </Text>
            <Text className="text-sm text-gray-600 mt-1">
              Stok Golongan O: {dataRS.stokKantongO} Kantong
            </Text>
            <Text className="text-sm text-emerald-600 font-bold mt-1">
              Status Ambulans: {dataRS.statusAmbulans}
            </Text>
          </View>
        ) : (
          <Text className="text-gray-500 mt-4">Belum ada data dimuat.</Text>
        )}

        <Pressable
          onPress={handleLoadData}
          disabled={isMemuat}
          className={`mt-6 px-6 py-3 rounded-full items-center ${
            isMemuat ? "bg-gray-300" : "bg-blue-600 active:bg-blue-700"
          }`}
        >
          <Text className="text-white font-bold text-sm">
            {isMemuat ? "Menunggu..." : "Ambil Data RS (async/await)"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 6. Bedah Kode

1. `const handleLoadData = async () => { ... }`  
   Kita memberi tanda `async` pada fungsi tombol.
2. `const hasil = await fetchRumahSakitPMI();`  
   Kata `await` memerintahkan JavaScript: *"Tunggu sampai janji data RS selesai diunduh. Begitu selesai, simpan objek hasilnya langsung ke variabel `hasil`."*
3. Setelah proses `await` selesai, baris `setDataRS(hasil)` dan `setIsMemuat(false)` langsung dieksekusi dengan mulus.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Menulis `await` di fungsi yang tidak bertanda `async`
```typescript
function ambilData() {
  const hasil = await ambilDariServer(); // 🚨 SyntaxError: await is only valid in async functions!
}
```

#### ❌ Kesalahan 2: Lupa menulis `await`
```typescript
const data = ambilDariServer(); // Lupa tulis await!
console.log(data); // 🚨 Yang kamu dapatkan adalah Promise kosong yang masih pending, bukan datanya!
```

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Apa kelebihan utama menggunakan `async / await` dibandingkan gaya lama yang memakai rantai `.then()`?

**Latihan 2:**  
Perhatikan fungsi ini:
```typescript
const loadProfile = () => {
  const user = await getUser();
  console.log(user);
};
```
Mengapa kode di atas akan memunculkan error merah di editor? Bagaimana cara memperbaikinya?

---

### 9. Challenge (Tantangan Langsung di Expo)

Tuliskan sebuah async arrow function bernama `handleCekLokasiPosko`:
- Di dalamnya, buat proses menunggu menggunakan `await` terhadap sebuah Promise sederhana selama 1.5 detik.
- Setelah selesai, cetak hasil `"Lokasi Posko Ditemukan: Posko Jakarta Pusat"` ke console.
