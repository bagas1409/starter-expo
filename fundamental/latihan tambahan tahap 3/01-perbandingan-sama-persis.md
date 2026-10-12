# Operator 01: Sama Persis (`===`)

---

### 1. Konsep & Cara Berpikir

Operator `===` (dibaca: *Strict Equality* atau *Sama Persis*) digunakan saat kamu ingin memastikan bahwa:
**Data di sebelah kiri BENAR-BENAR SAMA PERSIS dengan data di sebelah kanan, baik nilainya maupun tipe datanya.**

Jika sama persis, hasilnya menghasilkan boolean **`true`**.  
Jika beda sedikit saja (atau beda tipe data), hasilnya menghasilkan **`false`**.

> 💡 **Kenapa wajib 3 tanda sama dengan (`===`) bukan 2 (`==`)?**  
> Di JavaScript, `"10" == 10` itu dianggap benar (`true`) padahal yang satu teks dan yang satu angka! Ini bahaya di aplikasi perbankan atau medis. Dengan `===`, `"10" === 10` langsung ditolak (`false`) karena jenisnya beda.

---

### 2. Analogi Kehidupan Nyata

Bayangkan **Pemeriksaan Kunci Pintu Ruang Khusus**:
- Kunci yang kamu bawa harus pas bentuk lekukannya DAN pas ukurannya (`===`).
- Jika lubang kuncinya butuh kunci emas asli, kamu tidak bisa memasukkan kunci mainan dari plastik meskipun warnanya mirip.

---

### 3. Studi Kasus Nyata di Expo Mobile

**Kasus:** Menampilkan status verifikasi relawan dan lencana khusus jika jabatannya adalah `"Koordinator Lapangan"`.

```tsx
import { View, Text } from "react-native";

export default function VerifikasiRoleScreen() {
  // 1. DATA JAVASCRIPT
  const roleUser: string = "Koordinator Lapangan";
  const kodeAksesMasuk: string = "PMI-2026";
  const inputUser: string = "PMI-2026";

  // MEMBANDINGKAN SAMA PERSIS DENGAN ===
  const isKoordinator = roleUser === "Koordinator Lapangan"; // true
  const isKodeAksesValid = inputUser === kodeAksesMasuk;      // true

  // 2. TAMPILAN REACT NATIVE
  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-gray-500 text-xs uppercase tracking-wider">
          Pemeriksaan Hak Akses
        </Text>

        <Text className="text-xl font-bold text-gray-800 mt-2">
          Jabatan: {roleUser}
        </Text>

        {/* TAMPILAN BERDASARKAN HASIL === */}
        <View className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-200">
          <Text className="text-blue-700 font-semibold text-sm">
            {isKoordinator
              ? "✓ Akses Penuh: Anda memiliki izin mengelola posko darurat."
              : "Akses Terbatas: Hanya anggota biasa."}
          </Text>
        </View>

        <Text className="text-xs text-gray-400 mt-3">
          Status Kode Rahasia: {isKodeAksesValid ? "Cocok" : "Salah"}
        </Text>
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `const isKoordinator = roleUser === "Koordinator Lapangan";`  
   JavaScript memeriksa apakah isi toples `roleUser` bernilai persis sama dengan teks `"Koordinator Lapangan"`. Karena sama, hasilnya adalah `true`.
2. Hasil `true` ini kemudian dipakai di UI:
   `isKoordinator ? "Akses Penuh..." : "Akses Terbatas..."`  
   Sehingga layar otomatis menampilkan hak akses yang benar.

---

### 5. Latihan Mandiri

Diberikan kode berikut:
```typescript
const pinDisimpan = "1234";
const pinDiinput = 1234;

const isPinCocok = pinDisimpan === pinDiinput;
```
Berapa nilai `isPinCocok`? Apakah `true` atau `false`? Jelaskan mengapa tipe data berpengaruh di sini!
