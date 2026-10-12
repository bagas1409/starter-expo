# Operator 02: Tidak Sama Persis (`!==`)

---

### 1. Konsep & Cara Berpikir

Operator `!==` (dibaca: *Strict Not Equal* atau *Tidak Sama Persis*) adalah kebalikan dari `===`.  
Kita memakainya saat ingin mengecek:
**Apakah data di sebelah kiri BERBEDA dari data di sebelah kanan?**

- Jika **BERBEDA**, hasilnya bernilai **`true`**.
- Jika **SAMA**, hasilnya bernilai **`false`**.

> 💡 **Kapan dipakai di aplikasi HP?**  
> Sangat sering dipakai ketika kita ingin menyaring status data yang "belum selesai", atau mengecek apakah data tertentu "bukan pengunjung gelap".

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Satpam Kompleks PMI**:
- Satpam punya daftar: *"Bukan Warga Kompleks"*.
- Jika plat nomor mobil yang masuk **TIDAK SAMA DENGAN** plat warga terdaftar (`!==`), maka satpam menahan mobil itu untuk dimintai KTP tamu.

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Menampilkan peringatan revisi jika status pengerjaan proyek PMI **belum berstatus "Selesai"**.

```tsx
import { View, Text } from "react-native";

export default function StatusProyekScreen() {
  // DATA JAVASCRIPT
  const namaProyek = "Aplikasi PMI Donor Mobile";
  const statusProyek = "Dalam Revisi"; // Coba ganti jadi "Selesai"

  // MEMERIKSA APAKAH STATUSNYA BELUM SELESAI
  const isBelumSelesai = statusProyek !== "Selesai"; // true

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          {namaProyek}
        </Text>

        <Text className="text-sm text-gray-500 mt-1">
          Status Saat Ini: <Text className="font-semibold text-gray-700">{statusProyek}</Text>
        </Text>

        {/* TAMPILKAN BANNER PERINGATAN JIKA BELUM SELESAI */}
        {isBelumSelesai ? (
          <View className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200">
            <Text className="text-amber-800 text-sm font-semibold">
              ⚠️ Proyek ini masih membutuhkan review sebelum diluncurkan!
            </Text>
          </View>
        ) : (
          <View className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <Text className="text-emerald-800 text-sm font-semibold">
              ✓ Proyek telah rampung dan siap digunakan.
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

1. `statusProyek !== "Selesai"`  
   Komputer membandingkan: *"Apakah 'Dalam Revisi' tidak sama dengan 'Selesai'?"*.  
   Karena memang tidak sama (berbeda), maka hasilnya adalah `true`.
2. Karena bernilai `true`, komponen layar menampilkan kotak peringatan berwarna kuning (`bg-amber-50`).

---

### 5. Latihan Mandiri

Perhatikan kode seleksi donor berikut:
```typescript
const golonganDarahPasien = "B";
const isBukanGolonganA = golonganDarahPasien !== "A";
```
Apakah nilai `isBukanGolonganA` bernilai `true` atau `false`? Apa arti logikanya dalam kehidupan nyata?
