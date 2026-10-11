# Modul 07: Parameter & Return

---

### 1. Konsep Sederhana

Kemarin kita sudah tahu kalau **function itu seperti mesin**.  
Tapi mesin yang kemarin masih kaku: cuma menghasilkan hal yang sama terus-menerus.

Bagaimana kalau kita ingin mesin yang lebih pintar?
- Kita masukkan bahan mentah ke dalam mesin (**Input**).
- Mesin memproses bahan tersebut.
- Mesin mengeluarkan produk jadi ke tangan kita (**Output**).

> **Parameter adalah bahan mentah (input) yang kita oper ke dalam function.**  
> **Return adalah hasil olahan akhir (output) yang dikembalikan oleh function kepada kita.**

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Mesin Blender Jus Buah**:
1. **Parameter (Input)**: Kamu memasukkan buah *Mangga* dan *Susu* ke dalam tabung blender. Mangga dan Susu adalah parameter.
2. **Proses**: Mesin memblender dan mencampur bahan-bahannya.
3. **Return (Output)**: Mesin menghasilkan *Segelas Jus Mangga Manis* yang bisa kamu minum atau simpan di kulkas.

Kalau blender tidak punya corong untuk mengeluarkan jus (`return`), jusnya akan terjebak di dalam mesin dan kamu tidak bisa menikmatinya!

---

### 3. Syntax Dasar

```typescript
// 1. Membuat function dengan parameter dan return
function hitungTotal(harga: number, jumlah: number): number {
  const hasil = harga * jumlah;
  return hasil; // Mengembalikan hasil keluar dari function
}

// 2. Memanggil dan menampung hasil kembaliannya
const totalBelanja = hitungTotal(25000, 2); 
console.log(totalBelanja); // 50000
```

Gaya Arrow Function:
```typescript
const formatNama = (nama: string): string => {
  return "Sdr. " + nama;
};

const namaResmi = formatNama("Bagas"); // "Sdr. Bagas"
```

---

### 4. Contoh di Expo (React Native)

Perhatikan bagaimana function dengan parameter & return dipakai untuk memformat mata uang dan menghitung total sumbangan:

```tsx
import { View, Text } from "react-native";

export default function DonasiScreen() {
  // FUNCTION DENGAN PARAMETER & RETURN
  // Parameter: nominal
  // Return: teks mata uang rupiah yang rapi
  const formatRupiah = (nominal: number): string => {
    return "Rp " + nominal.toLocaleString("id-ID");
  };

  // Menggunakan function di dalam kode
  const donasiA = 50000;
  const donasiB = 100000;
  const totalDonasi = donasiA + donasiB;

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-gray-500 text-sm">Rincian Bantuan:</Text>

      {/* Memanggil function dengan parameter berbeda */}
      <Text className="text-base text-gray-700 mt-2">
        Donatur 1: {formatRupiah(donasiA)}
      </Text>

      <Text className="text-base text-gray-700">
        Donatur 2: {formatRupiah(donasiB)}
      </Text>

      <Text className="text-xl font-bold text-emerald-600 mt-4">
        Total: {formatRupiah(totalDonasi)}
      </Text>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `const formatRupiah = (nominal: number) => { ... }`  
   `nominal` adalah **parameter**. Nilainya fleksibel, tergantung angka berapa yang kita oper saat memanggilnya.
2. `return "Rp " + nominal.toLocaleString("id-ID");`  
   Kata kunci **`return`** mengirimkan hasil teks rapi keluar dari function.
3. Di dalam JSX: `{formatRupiah(donasiA)}`  
   React Native memanggil function tersebut dengan membawa angka `50000`, lalu hasil return-nya (`"Rp 50.000"`) langsung ditempelkan ke dalam komponen `<Text>`.

---

### 6. Hubungkan dengan Konsep Sebelumnya

- Di Modul 01: Variabel menampung hasil data.
- Di Modul 06: Function tanpa parameter hanya bisa melakukan satu hal yang sama.
- Di Modul 07 ini: Dengan **parameter & return**, function menjadi alat bantu serbaguna yang bisa menerima data apa saja dan menghasilkan data baru yang siap ditampilkan di layar HP.

---

### 7. Kesalahan Umum Pemula

#### ❌ Kesalahan 1: Lupa menulis `return`
```typescript
const kaliDua = (angka: number) => {
  const hasil = angka * 2;
  // Lupa tulis return!
};

const hasilAkhir = kaliDua(5);
console.log(hasilAkhir); // undefined (kosong melompong!)
```
*Kenapa salah?* Tanpa `return`, function tidak mengeluarkan apa-apa.

#### ❌ Kesalahan 2: Menganggap `console.log` sama dengan `return`
`console.log` hanya mencetak tulisan ke terminal untuk kita baca sendiri. Ia **tidak mengembalikan data** ke dalam program.

---

### 8. Latihan (Uji Pemahaman)

**Latihan 1:**  
Buatlah sebuah function bernama `cekKelayakan` yang menerima satu parameter `umur: number`.
- Jika `umur >= 17`, return teks `"Boleh Donor"`.
- Jika di bawah 17, return teks `"Belum Cukup Umur"`.

**Latihan 2:**  
Perhatikan potongan kode ini:
```typescript
const tambah = (a: number, b: number) => {
  console.log(a + b);
};

const hasil = tambah(10, 5);
```
Berapa nilai dari variable `hasil`? Apakah `15` atau `undefined`? Jelaskan alasannya!

---

### 9. Challenge (Tantangan Langsung di Expo)

Buat sebuah fungsi converter berat badan donor:
- Buat function `hitungStatusBerat` dengan parameter `berat: number`.
- Jika berat >= 45, return `"Memenuhi Syarat"`, jika kurang return `"Kurang Berat"`.
- Panggil function tersebut di dalam komponen `<Text>` untuk menampilkan status pasien dengan berat `48` kg.
