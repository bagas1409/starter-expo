# Operator 08: Logika ATAU (`||`)

---

### 1. Konsep & Cara Berpikir

Operator `||` (dibaca: *Logical OR*) digunakan saat kamu memiliki beberapa pilihan atau alternatif, dan **CUKUP SALAH SATU SAJA YANG BENAR** agar seluruh kondisi dianggap lolos.

- Jika **ADA MINIMAL SATU SYARAT BENAR (`true`)** -> Hasilnya **`true`**.
- Hasilnya baru **`false`** JIKA dan HANYA JIKA **SEMUA PILIHAN SALAH**.

> 💡 **Tabel Kebenaran Sederhana:**  
> - `true || false` = **`true`** (Lolos, karena ada yang benar)  
> - `false || true` = **`true`** (Lolos juga)  
> - `true || true` = **`true`** (Apalagi dua-duanya)  
> - `false || false` = **`false`** (Gagal total, tak ada yang benar)

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Metode Pembayaran Donasi PMI**:
- Donatur bisa bayar pakai: **QRIS** ATAU **Transfer Bank**.
- Jika donatur punya saldo di QRIS -> Transaksi berhasil (`true`).
- Jika donatur tidak punya QRIS tapi punya Transfer Bank -> Tetap berhasil (`true`).
- Transaksi hanya gagal jika donatur tidak punya QRIS DAN tidak punya Transfer Bank (`false || false`).

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Izin membuka pintu gudang logistik obat darurat PMI: Pintu boleh dibuka jika orang tersebut adalah **Dokter Jaga** ATAU **Koordinator PMI**.

```tsx
import { View, Text } from "react-native";

export default function IzinAksesGudangScreen() {
  // STATUS USER YANG SEDANG MENEMPELKAN KARTU AKSES
  const isDokterJaga = false;         // Bukan dokter
  const isKoordinatorPMI = true;      // Tapi dia Koordinator PMI

  // LOGIKA ATAU (||): CUKUP SALAH SATU UNTUK BISA MASUK
  const bolehBukaGudang = isDokterJaga || isKoordinatorPMI; // true

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-500 text-xs uppercase font-bold tracking-wider">
          Smart Lock Gudang Obat Darurat
        </Text>

        <View className="mt-3">
          <Text className="text-sm text-gray-700">
            Status Dokter: {isDokterJaga ? "Ya" : "Bukan"}
          </Text>
          <Text className="text-sm text-gray-700 mt-1">
            Status Koordinator: {isKoordinatorPMI ? "Ya" : "Bukan"}
          </Text>
        </View>

        {/* STATUS PINTU BERDASARKAN HASIL LOGIKA || */}
        <View
          className={`mt-4 p-4 rounded-xl border ${
            bolehBukaGudang
              ? "bg-emerald-50 border-emerald-300"
              : "bg-rose-50 border-rose-300"
          }`}
        >
          <Text
            className={`font-bold text-center text-sm ${
              bolehBukaGudang ? "text-emerald-800" : "text-rose-800"
            }`}
          >
            {bolehBukaGudang
              ? "🔓 PINTU GUDANG TERBUKA (AKSES DITERIMA)"
              : "🔒 AKSES DITOLAK: ANDA TIDAK MEMILIKI OTORISASI"}
          </Text>
        </View>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `isDokterJaga || isKoordinatorPMI` -> `false || true`  
   Meskipun `isDokterJaga` bernilai `false`, komputer melihat operator `||` lalu mengecek kondisi kedua (`isKoordinatorPMI`). Karena kondisi kedua bernilai `true`, maka hasil akhir `bolehBukaGudang` adalah `true`.
2. Pintu langsung terbuka di layar HP!

---

### 5. Latihan Mandiri

Perhatikan kode pendaftaran donor kilat berikut:
```typescript
const bawaKTP = false;
const bawaKartuDonorLama = true;

const bolehRegistrasi = bawaKTP || bawaKartuDonorLama;
```
Berapa nilai `bolehRegistrasi`? Mengapa operator `||` lebih ramah daripada operator `&&` dalam kasus ini?
