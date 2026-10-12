# Operator 06: Lebih Kecil Sama Dengan (`<=`)

---

### 1. Konsep & Cara Berpikir

Operator `<=` adalah kebalikan dari `>=`.  
Artinya:
**Apakah angka di sebelah kiri LEBIH KECIL daripada angka kanan, ATAU MAKSIMAL SAMA PERSIS dengan angka kanan?**

- Jika **LEBIH SEDIKIT** -> **`true`**
- Jika **PAS-PASAN SAMA** -> **`true`**
- Jika **LEBIH BANYAK** -> **`false`**

> 💡 **Kata kuncinya: "MAKSIMAL" atau "PALING BANYAK".**  
> Kapan pun kamu mendengar aturan *"Maksimal kapasitas ambulans 4 orang"*, atau *"Waktu tunggu maksimal 30 menit"*, gunakan `<=`.

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Kapasitas Muatan Mobil Ambulans Darurat**:
- Daya muat maksimal ambulans adalah 4 orang penumpang.
- Jika penumpang ada 3 orang -> Aman (`3 <= 4` = `true`).
- Jika penumpang ada 4 orang pas -> **Masih boleh! (`4 <= 4` = `true`)**.
- Jika penumpang ada 5 orang -> Kelebihan beban / ditolak (`5 <= 4` = `false`).

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Aplikasi logistik PMI memeriksa apakah beban obat dan kantong darah yang dimasukkan ke dalam boks pendingin masih dalam batas toleransi aman (maksimal 15 kg).

```tsx
import { View, Text } from "react-native";

export default function KapasitasBoksScreen() {
  // DATA JAVASCRIPT
  const kapasitasMaksimalBoks: number = 15; // kg
  const beratMuatanSaatIni: number = 15;   // kg (pas-pasan batas)

  // PERBANDINGAN LEBIH KECIL SAMA DENGAN <=
  const isMuatanAman = beratMuatanSaatIni <= kapasitasMaksimalBoks; // true (15 <= 15)

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-500 text-xs font-bold uppercase tracking-wider">
          Logistik Pendingin Darah (Coolbox)
        </Text>

        <View className="flex-row justify-between items-center mt-3">
          <Text className="text-gray-700 font-semibold">Berat Boks:</Text>
          <Text className="text-2xl font-black text-blue-600">
            {beratMuatanSaatIni} kg
          </Text>
        </View>

        <Text className="text-xs text-gray-400 mt-1">
          Batas maksimum muatan: {kapasitasMaksimalBoks} kg
        </Text>

        {/* STATUS AMAN/OVERLOAD DENGAN <= */}
        <View
          className={`mt-4 p-3 rounded-xl border ${
            isMuatanAman
              ? "bg-emerald-50 border-emerald-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <Text
            className={`text-sm font-bold ${
              isMuatanAman ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {isMuatanAman
              ? "✓ Kapasitas Aman: Boks siap diberangkatkan."
              : "⚠️ Overload: Kurangi muatan sebelum ditutup!"}
          </Text>
        </View>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `beratMuatanSaatIni <= kapasitasMaksimalBoks` -> `15 <= 15`  
   Karena beratnya 15 kg dan batasnya 15 kg, muatannya tepat di ambang batas maksimal. Operator `<=` menghasilkan `true` (masih aman).
2. Jika beratnya naik jadi 15.1 kg, operator langsung menghasilkan `false` dan boks dinyatakan overload.

---

### 5. Latihan Mandiri

Waktu tunggu antrean donor darah diatur: *"Pasien dianggap waktu tunggu normal jika menunggu maksimal 20 menit"*.
Jika pasien Bagas sudah menunggu selama 25 menit:
1. Buat perbandingan menggunakan `<=` antara `waktuTunggu` dan `batasMaksimal`.
2. Apakah hasilnya `true` atau `false`?
