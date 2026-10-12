# Operator 03: Lebih Besar Dari (`>`)

---

### 1. Konsep & Cara Berpikir

Operator `>` digunakan untuk membandingkan dua angka:
**Apakah angka di sebelah kiri LEBIH BANYAK daripada angka di sebelah kanan?**

- Jika **LEBIH BANYAK**, hasilnya bernilai **`true`**.
- Jika **SAMA ATAU LEBIH SEDIKIT**, hasilnya bernilai **`false`**.

> ⚠️ **Penting:** Jika angkanya sama persis, hasilnya adalah `false`!  
> Contoh: `10 > 10` hasilnya **`false`** (karena 10 tidak lebih besar dari 10, melainkan sama).

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Target Penggalangan Kantong Darah**:
- Target harian adalah 50 kantong.
- Jika hari ini terkumpul 51 kantong, maka perolehan **LEBIH BESAR DARI** target (`51 > 50` = `true`). Relawan mendapatkan bonus apresiasi!

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Menampilkan badge *"Target Terlampaui!"* jika perolehan kantong donor melebihi target minimal posko PMI.

```tsx
import { View, Text } from "react-native";

export default function TargetDonorScreen() {
  // DATA JAVASCRIPT
  const targetMinimal: number = 50;
  const kantongTerkumpul: number = 68;

  // PERBANDINGAN LEBIH BESAR >
  const isMelebihiTarget = kantongTerkumpul > targetMinimal; // true (68 > 50)

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100 items-center">
        <Text className="text-gray-500 text-sm">Posko PMI Kramat Raya</Text>

        <Text className="text-4xl font-extrabold text-rose-600 mt-2">
          {kantongTerkumpul} <Text className="text-lg text-gray-400">/ {targetMinimal}</Text>
        </Text>

        <Text className="text-gray-600 text-sm mt-1">Kantong Darah Terkumpul</Text>

        {/* JIKA LEBIH BESAR DARI TARGET, TAMPILKAN BADGE SPESIAL */}
        {isMelebihiTarget && (
          <View className="mt-4 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-300">
            <Text className="text-emerald-800 text-xs font-bold">
              🎉 TARGET TERLAMPAUI (+{kantongTerkumpul - targetMinimal} KANTONG)
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

1. `kantongTerkumpul > targetMinimal` -> `68 > 50`  
   Karena 68 memang lebih besar dari 50, maka `isMelebihiTarget` bernilai `true`.
2. Di dalam JSX: `{isMelebihiTarget && ( ... )}`  
   Badge hijau hanya akan dirender ke layar HP jika kondisinya benar.

---

### 5. Latihan Mandiri

Jika `saldoDonasi = 100000` dan `hargaPaketP3K = 100000`:
Apakah `saldoDonasi > hargaPaketP3K` menghasilkan `true` atau `false`?  
Bagaimana solusinya jika kamu ingin membolehkan pembelian ketika saldonya pas-pasan sama dengan harga?
