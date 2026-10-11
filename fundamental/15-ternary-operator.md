# Modul 15: Ternary Operator (`kondisi ? ya : tidak`)

---

### 1. Konsep Sederhana

Di Modul 04, kita belajar `if / else` seperti ini:
```typescript
let teks = "";
if (isLogin) {
  teks = "Selamat Datang";
} else {
  teks = "Silakan Masuk";
}
```
Kode itu butuh 7 baris panjang. Padahal intinya cuma memilih antara dua pilihan singkat.

Dan yang paling krusial: **Di dalam tampilan React Native (JSX), kamu TIDAK BISA menulis blok `if / else` langsung di dalam kurung kurawal `{ }`!**

Di sinilah **Ternary Operator** menjadi pahlawan.

> **Ternary Operator adalah cara menulis `if / else` dalam 1 baris singkat dengan rumus: `Kondisi ? Pilihan_Jika_Benar : Pilihan_Jika_Salah`**

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Papan Lampu Indikator Ambulans**:
- Apakah saklar darurat aktif?
  - Kalau **YA (`?`)** : Nyalakan lampu **MERAH**.
  - Kalau **TIDAK (`:`)** : Nyalakan lampu **HIJAU**.

Rumus sederhananya:  
`Apakah lapar? (Makan) : (Nanti dulu)`

---

### 3. Syntax Dasar

```typescript
const isLulus = true;

// Rumus: kondisi ? jika_true : jika_false
const status = isLulus ? "Selamat Anda Lulus!" : "Silakan Coba Lagi";

console.log(status); // "Selamat Anda Lulus!"
```

Tanda tanya `?` artinya: *"Kalau benar, ambil yang ini."*  
Titik dua `:` artinya: *"Kalau salah, ambil yang ini."*

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana Ternary Operator dipakai langsung di dalam JSX untuk mengubah teks, warna tampilan, dan badge status donor:

```tsx
import { View, Text } from "react-native";

export default function StatusDonorScreen() {
  const isDonorSelesai = true;
  const jumlahKantong = 2;

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="bg-white p-6 rounded-2xl w-full shadow-sm border border-gray-100 items-center">
        <Text className="text-gray-500 text-sm">Status Pemeriksaan:</Text>

        {/* 1. TERNARY UNTUK MENGUBAH TEKS */}
        <Text
          className={`text-2xl font-bold mt-2 ${
            isDonorSelesai ? "text-emerald-600" : "text-amber-500"
          }`}
        >
          {isDonorSelesai ? "Donor Berhasil Dilakukan!" : "Masih Dalam Proses..."}
        </Text>

        {/* 2. TERNARY UNTUK LOGIKA JUMLAH KANTONG */}
        <Text className="text-gray-600 mt-2">
          {jumlahKantong > 0
            ? `Terkumpul ${jumlahKantong} Kantong Darah`
            : "Belum ada kantong darah"}
        </Text>

        {/* 3. LOGICAL AND (&&): Hanya tampil jika selesai */}
        {isDonorSelesai && (
          <View className="bg-emerald-100 px-4 py-1.5 rounded-full mt-4">
            <Text className="text-emerald-700 text-xs font-bold">
              SERTIFIKAT DIGITAL TERSEDIA
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. Di dalam properti `className`:  
   `${isDonorSelesai ? "text-emerald-600" : "text-amber-500"}`  
   Jika selesai, warnanya hijau (`text-emerald-600`). Jika belum, warnanya kuning (`text-amber-500`). Dinamis dan sangat rapi!
2. Di dalam komponen `<Text>`:  
   `{isDonorSelesai ? "Donor Berhasil..." : "Masih Dalam Proses..."}`  
   Ini alasan kenapa ternary operator adalah raja di React Native. Kita bisa membuat kondisi langsung di dalam tampilan tanpa keluar dari JSX.
3. Pola `{isDonorSelesai && ( <View>...</View> )}`  
   Ini singkatan cerdas: *"Jika `isDonorSelesai` bernilai true, tolong munculkan kotak ini. Kalau false, sembunyikan!"*.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 04: Kita belajar `if / else` untuk alur logika program di bagian atas fungsi.
- Di Modul 15 ini: Kita menyempurnakannya dengan **Ternary Operator** agar logika kondisi bisa langsung diselipkan ke dalam tampilan layar HP (JSX) secara elegan.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Mencoba menulis blok `if / else` di dalam JSX
```tsx
// SALAH BESAR (ERROR SYNTAX):
<View>
  {
    if (isAktif) { // 🚨 Komputer bingung! 'if' tidak boleh ada di dalam { } JSX!
      <Text>Aktif</Text>
    }
  }
</View>

// BENAR: Gunakan ternary:
<View>
  <Text>{isAktif ? "Aktif" : "Nonaktif"}</Text>
</View>
```

#### ❌ Kesalahan 2: Ternary bertingkat terlalu panjang (Nested Ternary)
```typescript
// Sering bikin pusing dibaca:
const hasil = a ? b ? c : d : e; // Hindari ini! Kalau cabangnya banyak, kembali gunakan if/else biasa.
```

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Ubah kode `if / else` berikut menjadi satu baris menggunakan **Ternary Operator**:
```typescript
let statusKoneksi = "";
if (isOnline) {
  statusKoneksi = "Tersambung";
} else {
  statusKoneksi = "Offline";
}
```

**Latihan 2:**  
Perhatikan baris JSX berikut:
```tsx
<Text>{skor >= 75 ? "Lulus" : "Remedial"}</Text>
```
Jika `skor = 70`, teks apa yang akan muncul di layar HP?

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat potongan layar kartu status relawan:
- Buat variabel boolean `isBertugas = false`.
- Gunakan ternary operator di dalam `<Text>` untuk menampilkan teks:
  - Jika `isBertugas === true`: `"Sedang di Lapangan"`
  - Jika `isBertugas === false`: `"Standby di Posko"`
- Tambahkan ternary untuk warna teks: hijau jika sedang bertugas, abu-abu jika standby.
