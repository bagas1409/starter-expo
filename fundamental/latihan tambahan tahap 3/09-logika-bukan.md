# Operator 09: Logika BUKAN / Kebalikan (`!`)

---

### 1. Konsep & Cara Berpikir

Operator tanda seru `!` (dibaca: *Logical NOT* atau *Negasi*) digunakan untuk **MEMBALIKKAN NILAI BOOLEAN**:
- Dari yang tadinya **`true`** menjadi **`false`**.
- Dari yang tadinya **`false`** menjadi **`true`**.

> 💡 **Kapan dipakai di aplikasi HP?**  
> Di React Native, operator `!` sangat sering dipakai untuk kondisi:
> - Tombol dinonaktifkan jika form **BELUM LENGKAP** (`!isLengkap`)
> - Banner muncul jika user **BELUM VERIFIKASI** (`!isTerverifikasi`)
> - Loading spinner muncul jika data **BELUM SIAP** (`!isReady`)

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Saklar Pembalik / Cermin Terbalik**:
- Kamu punya status: `isLapar = false` (artinya kamu kenyang).
- Sekarang kamu ditanya: *"Apakah kamu TIDAK lapar?"* (`!isLapar`) -> Jawabannya adalah **`true`** (Ya, betul saya tidak lapar).

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Menonaktifkan tombol "Kirim Laporan Bencana" jika relawan **belum mengunggah foto bukti**.

```tsx
import { View, Text, Pressable } from "react-native";

export default function LaporanBencanaScreen() {
  // STATUS UPLOAD FOTO BUKTI
  const isFotoSudahDiunggah: boolean = false; // Belum upload foto

  // KEBATALAN / NEGASI DENGAN !
  // "Belum Siap Kirim" adalah kebalikan dari "Foto Sudah Diunggah"
  const isBelumSiapKirim = !isFotoSudahDiunggah; // true (kebalikan dari false)

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Form Laporan Bencana PMI
        </Text>

        <Text className="text-sm text-gray-500 mt-2">
          Status Lampiran: {isFotoSudahDiunggah ? "Foto Terlampir" : "Belum Ada Foto"}
        </Text>

        {/* TAMPILKAN PERINGATAN JIKA BELUM ADA FOTO */}
        {isBelumSiapKirim && (
          <View className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200">
            <Text className="text-amber-800 text-xs font-semibold">
              ⚠️ Anda wajib melampirkan foto lokasi sebelum mengirim laporan!
            </Text>
          </View>
        )}

        {/* TOMBOL DIBUAT MATI JIKA BELUM SIAP KIRIM */}
        <Pressable
          disabled={isBelumSiapKirim}
          className={`mt-4 p-4 rounded-xl items-center ${
            isBelumSiapKirim ? "bg-gray-300" : "bg-red-600 active:bg-red-700"
          }`}
        >
          <Text
            className={`font-bold text-sm ${
              isBelumSiapKirim ? "text-gray-500" : "text-white"
            }`}
          >
            {isBelumSiapKirim ? "Tombol Terkunci" : "Kirim Laporan Sekarang"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `const isBelumSiapKirim = !isFotoSudahDiunggah;`  
   Karena `isFotoSudahDiunggah` bernilai `false`, penambahan tanda seru di depannya `!false` otomatis membalikkan nilainya menjadi `true`.
2. Di komponen `<Pressable disabled={isBelumSiapKirim}>`:  
   Properti `disabled` React Native menerima nilai boolean. Karena bernilai `true`, tombol langsung mati dan tidak bisa ditekan oleh user sampai foto diunggah.

---

### 5. Latihan Mandiri

Jika variabel `isLogin = false`:
1. Berapa nilai dari `!isLogin`?
2. Kapan sebaiknya kamu menggunakan tanda seru `!` pada fitur halaman aplikasi?
