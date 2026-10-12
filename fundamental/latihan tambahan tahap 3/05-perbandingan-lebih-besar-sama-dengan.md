# Operator 05: Lebih Besar Sama Dengan (`>=`)

---

### 1. Konsep & Cara Berpikir

Operator `>=` adalah gabungan dari "lebih besar" ATAU "sama dengan".  
Artinya:
**Apakah angka di sebelah kiri LEBIH BESAR daripada angka kanan, ATAU MINIMAL SAMA PERSIS dengan angka kanan?**

- Jika **LEBIH BANYAK** -> **`true`**
- Jika **PAS-PASAN SAMA** -> **`true`** (Perhatikan bedanya dengan `>`!)
- Jika **LEBIH SEDIKIT** -> **`false`**

> 💡 **Kata kuncinya: "MINIMAL" atau "PALING SEDIKIT".**  
> Kapan pun kamu mendengar aturan *"Minimal umur 17 tahun"*, atau *"Minimal belanja Rp 50.000"*, rumus kodenya selalu menggunakan `>=`.

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Syarat Usia Pembuatan SIM / Donor Darah**:
- Aturannya: *"Hanya boleh donor jika usia MINIMAL 17 tahun"*.
- Jika umurmu 16 tahun -> Ditolak (`false`).
- Jika umurmu 17 tahun pas -> **Boleh! (`true`)**.
- Jika umurmu 20 tahun -> **Boleh! (`true`)**.

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Form pendaftaran relawan donor darah untuk mengecek apakah usia calon pendonor sudah memenuhi syarat minimal 17 tahun.

```tsx
import { View, Text } from "react-native";

export default function SyaratDonorScreen() {
  // DATA JAVASCRIPT
  const usiaCalonPendonor: number = 17; // Coba ganti jadi 16 atau 25
  const syaratMinimalUsia: number = 17;

  // PERBANDINGAN LEBIH BESAR SAMA DENGAN >=
  const isCukupUmur = usiaCalonPendonor >= syaratMinimalUsia; // true (17 >= 17)

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-500 text-xs uppercase font-bold tracking-wider">
          Validasi Kelayakan Donor
        </Text>

        <Text className="text-xl font-bold text-gray-800 mt-2">
          Usia Calon: {usiaCalonPendonor} Tahun
        </Text>
        
        <Text className="text-gray-500 text-sm">
          Syarat minimal PMI: {syaratMinimalUsia} Tahun
        </Text>

        {/* TAMPILAN SESUAI KELAYAKAN >= */}
        <View
          className={`mt-4 p-4 rounded-xl border ${
            isCukupUmur
              ? "bg-emerald-50 border-emerald-200"
              : "bg-rose-50 border-rose-200"
          }`}
        >
          <Text
            className={`font-bold text-sm ${
              isCukupUmur ? "text-emerald-800" : "text-rose-800"
            }`}
          >
            {isCukupUmur
              ? "✓ Usia Memenuhi Syarat untuk Donor Darah"
              : "✕ Belum Cukup Umur (Minimal 17 Tahun)"}
          </Text>
        </View>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `usiaCalonPendonor >= syaratMinimalUsia` -> `17 >= 17`  
   Karena usianya 17 pas, syarat "minimal" terpenuhi! Hasilnya bernilai `true`.
2. Jika kita memakai `>` (tanpa sama dengan), orang yang tepat berumur 17 tahun akan ditolak secara tidak adil (`17 > 17` adalah `false`). Itulah kenapa tanda sama dengan `=` sangat penting di sini!

---

### 5. Latihan Mandiri

Aturan berat badan donor darah PMI: *"Pendonor harus memiliki berat badan paling sedikit 45 kg"*.  
Jika pasien bernama Siti memiliki berat badan 45 kg:
1. Tuliskan satu baris variabel `isLolosBerat` menggunakan operator `>=`.
2. Apakah hasilnya bernilai `true` atau `false`?
