# Operator 04: Lebih Kecil Dari (`<`)

---

### 1. Konsep & Cara Berpikir

Operator `<` digunakan untuk mengecek:
**Apakah angka di sebelah kiri LEBIH SEDIKIT daripada angka di sebelah kanan?**

- Jika **LEBIH SEDIKIT**, hasilnya bernilai **`true`**.
- Jika **SAMA ATAU LEBIH BANYAK**, hasilnya bernilai **`false`**.

> 💡 **Kapan dipakai di aplikasi HP?**  
> Sangat penting untuk mendeteksi kondisi darurat atau batas kritis:
> - Sisa baterai HP darurat kurang dari 20%
> - Sisa stok obat kurang dari 5 botol
> - Sisa kuota pendaftaran kurang dari 3 kursi

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Lampu Peringatan Bensin Ambulans**:
- Batas bahan bakar aman adalah 10 liter.
- Jika bensin di tangki tersisa 4 liter, maka `4 < 10` bernilai **`true`**. Lampu indikator bensin di dashboard langsung berkedip merah!

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Menampilkan peringatan darurat stok kantong darah langka (Golongan AB) yang menipis di bawah 10 kantong.

```tsx
import { View, Text } from "react-native";

export default function StokKritisScreen() {
  // DATA JAVASCRIPT
  const sisaStokGolonganAB: number = 4;
  const batasKritis: number = 10;

  // PERBANDINGAN LEBIH KECIL <
  const isStokKritis = sisaStokGolonganAB < batasKritis; // true (4 < 10)

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-500 text-sm">Inventaris Darah PMI</Text>

        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-2xl font-bold text-gray-800">Golongan AB</Text>
          <Text className="text-2xl font-black text-rose-600">
            {sisaStokGolonganAB} Kantong
          </Text>
        </View>

        {/* JIKA LEBIH KECIL DARI BATAS KRITIS, MUNCULKAN ALARM */}
        {isStokKritis ? (
          <View className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl">
            <Text className="text-rose-700 text-xs font-bold uppercase tracking-wider">
              🚨 PERINGATAN DARURAT
            </Text>
            <Text className="text-rose-600 text-sm mt-1">
              Stok berada di bawah {batasKritis} kantong! Segera buka pengumuman donor darah darurat.
            </Text>
          </View>
        ) : (
          <View className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <Text className="text-emerald-700 text-sm font-semibold">
              Stok mencukupi untuk kebutuhan harian.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `sisaStokGolonganAB < batasKritis`  
   JavaScript memeriksa apakah `4` lebih kecil dari `10`. Karena benar, variable `isStokKritis` menjadi `true`.
2. Di tampilan JSX, kita menggunakan ternary operator untuk menampilkan kotak merah jika `isStokKritis === true`.

---

### 5. Latihan Mandiri

Jika `kuotaPendaftar = 5` dan `batasMaksimal = 5`:
Apakah `kuotaPendaftar < batasMaksimal` bernilai `true` atau `false`? Jelaskan alasannya!
