# Modul 14: Spread Operator (`...`)

---

### 1. Konsep Sederhana

Pernahkah kamu ingin:
1. Menggabungkan 2 daftar relawan menjadi 1 daftar besar?
2. Meng-copy data profil user, lalu **cuma mau mengganti statusnya saja** tanpa mengubah data aslinya?

Di JavaScript kuno, ini membutuhkan loop yang panjang. Tapi dengan **Spread Operator (`...`)**, semuanya bisa diselesaikan dalam 1 detik!

> **Spread Operator (disimbolkan dengan 3 titik: `...`) berfungsi untuk "menghamburkan" atau mengeluarkan semua isi dari dalam array atau object, lalu menyalinnya ke wadah baru.**

Di React Native, operator ini adalah jantung dari konsep **Immutability** (kebiasaan baik untuk tidak mengubah data asli secara langsung).

---

### 2. Analogi Kehidupan Nyata

Bayangkan kamu punya **Folder Berkas Lamaran Lama**:
- Kamu ingin membuat berkas lamaran baru untuk perusahaan lain.
- Apakah kamu mencorat-coret berkas asli yang lama? Jangan!
- Kamu **fotokopi seluruh isi folder lama** (`...folderLama`), masukkan ke map baru, lalu kamu ganti surat lamarannya dengan tanggal hari ini. Folder yang asli tetap aman dan bersih.

Tiga titik `...` itu seperti mesin fotokopi serbaguna!

---

### 3. Syntax Dasar

#### A. Pada Array (Menggabungkan / Menyalin Daftar)
```typescript
const relawanLama = ["Bagas", "Doni"];
const relawanBaru = ["Siti", "Ahmad"];

// Menggabungkan keduanya menjadi satu array baru:
const semuaRelawan = [...relawanLama, ...relawanBaru];
console.log(semuaRelawan); // ["Bagas", "Doni", "Siti", "Ahmad"]

// Menambah data baru di depan atau belakang:
const antreanBaru = ["Pasien VIP", ...relawanLama];
```

#### B. Pada Object (Menyalin & Mengupdate Properti)
```typescript
const userLama = {
  nama: "Bagas",
  peran: "Anggota",
  lokasi: "Jakarta"
};

// Salin semua data userLama, tapi ubah perannya jadi Koordinator:
const userUpdate = {
  ...userLama,
  peran: "Koordinator" // Properti yang ditulis belakangan akan menimpa properti lama!
};

console.log(userUpdate);
// { nama: "Bagas", peran: "Koordinator", lokasi: "Jakarta" }
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana spread operator digunakan untuk memperbarui status proyek relawan di aplikasi:

```tsx
import { View, Text } from "react-native";

export default function UpdateProyekScreen() {
  // DATA AWAL PROYEK
  const proyekAwal = {
    id: 1,
    nama: "Aplikasi PMI",
    status: "Dalam Pengerjaan",
    revisi: 1,
  };

  // KITA UPDATE MENGGUNAKAN SPREAD OPERATOR
  const proyekTerbaru = {
    ...proyekAwal,
    status: "Selesai 100%",
    revisi: 2,
  };

  return (
    <View className="flex-1 justify-center p-6 bg-gray-50">
      <Text className="text-xl font-bold text-gray-800 mb-4">
        Log Pembaruan Proyek
      </Text>

      {/* TAMPILKAN HASIL OBJECT BARU */}
      <View className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
        <Text className="text-lg font-bold text-gray-800">
          {proyekTerbaru.nama}
        </Text>
        <Text className="text-emerald-600 font-semibold mt-1">
          Status Baru: {proyekTerbaru.status}
        </Text>
        <Text className="text-gray-500 text-sm mt-1">
          Revisi Ke: {proyekTerbaru.revisi}
        </Text>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `{ ...proyekAwal, status: "Selesai 100%" }`  
   - Komputer membuka `proyekAwal`, menuangkan semua isinya (`id: 1`, `nama: "Aplikasi PMI"`).
   - Lalu saat melihat `status: "Selesai 100%"`, komputer memperbarui statusnya.
   - Variabel `proyekAwal` yang asli **sama sekali tidak rusak**! Ini sangat penting saat nanti kamu belajar `useState` di React.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 08 & 09: Kita belajar Array dan Object.
- Di Modul 14 ini: Tiga titik `...` memberi kita kekuatan untuk menggabungkan, memodifikasi, dan menduplikasi Array dan Object dengan bersih tanpa mengubah data aslinya.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa memberi pembungkus `{}` atau `[]`
```typescript
const daftar = ...relawanLama; // 🚨 ERROR! Tiga titik harus berada di dalam wadah baru: [...relawanLama]
```

#### ❌ Kesalahan 2: Urutan properti terbalik saat update object
```typescript
const update = {
  status: "Selesai",
  ...proyekAwal // 🚨 BAHAYA! status dari proyekAwal yang ada di dalam titik-titik akan menimpa "Selesai" kembali!
};
```
*Aturan:* Tuliskan `...proyekAwal` di urutan pertama, baru tuliskan properti yang ingin kamu timpa di urutan setelahnya.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Kamu punya data:
```typescript
const makanan = ["Nasi", "Roti"];
const minuman = ["Kopi", "Teh"];
```
Bagaimana cara membuat array baru `menuLengkap` yang menggabungkan isi `makanan` dan `minuman` menggunakan spread operator?

**Latihan 2:**  
Diberikan data relawan:
```typescript
const relawan = {
  nama: "Bagas",
  kota: "Jakarta",
  isHadir: false
};
```
Tuliskan satu baris kode untuk membuat object baru `relawanHadir` yang menyalin data `relawan`, tetapi mengubah nilai `isHadir` menjadi `true`!

---

### 9. Challenge (Tantangan Langsung di Expo)

Diberikan profil pasien:
```typescript
const profilAwal = {
  nama: "Ahmad",
  golDarah: "B",
  statusVerifikasi: "Menunggu"
};
```
Gunakan spread operator untuk membuat variabel `profilTerverifikasi` yang menyalin profil awal tetapi mengubah status menjadi `"Terverifikasi"`, lalu tampilkan hasilnya di layar HP menggunakan `<Text>`.
