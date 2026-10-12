# Operator 07: Logika DAN (`&&`)

---

### 1. Konsep & Cara Berpikir

Operator `&&` (dibaca: *Logical AND*) digunakan saat kamu memiliki **LEBIH DARI SATU SYARAT, dan SEMUA SYARAT TERSEBUT HARUS TERPENUHI**.

- Jika **SEMUA SYARAT BENAR (`true`)** -> Hasilnya **`true`**.
- Jika **ADA SATU SAJA YANG SALAH (`false`)** -> Hasilnya langsung **`false`**!

> 💡 **Tabel Kebenaran Sederhana:**  
> - `true && true` = **`true`** (Dua-duanya lolos)  
> - `true && false` = **`false`** (Gagal karena ada yang bolong)  
> - `false && false` = **`false`**

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Syarat Menjadi Donor Darah**:
Petugas PMI menetapkan 2 syarat wajib:
1. Usia harus cukup (`umur >= 17`)
2. **DAN** Berat badan harus cukup (`beratBadan >= 45`)

Kalau kamu umur 20 tahun tapi berat badan cuma 40 kg, kamu **TIDAK BOLEH** donor darah. Harus dua-duanya terpenuhi!

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Verifikasi kelayakan lengkap donor darah di layar pendaftaran aplikasi mobile.

```tsx
import { View, Text } from "react-native";

export default function ValidasiLengkapDonorScreen() {
  // DATA PASIEN
  const umurPasien = 19;
  const beratBadanPasien = 52;
  const tensiDarahNormal = true;

  // LOGIKA DAN (&&): TIGA SYARAT HARUS BENAR SEMUA
  const syaratUmur = umurPasien >= 17;           // true
  const syaratBerat = beratBadanPasien >= 45;      // true
  const syaratTensi = tensiDarahNormal === true;  // true

  // MENGGABUNGKAN KETIGANYA DENGAN &&
  const isBolehDonor = syaratUmur && syaratBerat && syaratTensi; // true

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Hasil Skrining Donor
        </Text>

        <View className="mt-3 space-y-1">
          <Text className="text-sm text-gray-600">
            • Usia (Min 17): {syaratUmur ? "✓ Lolos" : "✕ Gagal"}
          </Text>
          <Text className="text-sm text-gray-600">
            • Berat Badan (Min 45kg): {syaratBerat ? "✓ Lolos" : "✕ Gagal"}
          </Text>
          <Text className="text-sm text-gray-600">
            • Tekanan Darah Normal: {syaratTensi ? "✓ Lolos" : "✕ Gagal"}
          </Text>
        </View>

        {/* KEPUTUSAN FINAL MENGGUNAKAN && */}
        <View
          className={`mt-4 p-4 rounded-xl ${
            isBolehDonor ? "bg-emerald-500" : "bg-rose-500"
          }`}
        >
          <Text className="text-white font-bold text-center text-base">
            {isBolehDonor
              ? "SELAMAT! ANDA LAYAK DONOR DARAH"
              : "MOHON MAAF, ANDA BELUM MEMENUHI SYARAT"}
          </Text>
        </View>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `syaratUmur && syaratBerat && syaratTensi`  
   Komputer membaca dari kiri:
   - Apakah syarat umur lolos? YA (`true`).
   - Apakah syarat berat lolos? YA (`true`).
   - Apakah tensi normal? YA (`true`).
   Karena ketiganya `true`, hasil akhirnya adalah `true`.
2. Jika misalnya `beratBadanPasien` diubah menjadi `42` kg, maka `syaratBerat` menjadi `false`. Begitu bertemu satu `false`, seluruh hasil `isBolehDonor` langsung berubah jadi `false`!

---

### 5. Latihan Mandiri

Di sebuah fitur Login aplikasi:
```typescript
const emailTerisi = true;
const passwordDiisi = true;
const centangSyaratKetentuan = false;

const bisaTekanDaftar = emailTerisi && passwordDiisi && centangSyaratKetentuan;
```
Apakah tombol pendaftaran bisa ditekan (`true` atau `false`)? Jelaskan mengapa!
