# Level 2 - Modul 15: Loading State (Memberi Kepastian pada Pengguna)

---

### 1. Konsep Sederhana

Pernahkah kamu menekan tombol di sebuah aplikasi, lalu **tidak ada reaksi apapun selama 3 detik**? Layar diam, tombol tidak bergerak.  
Apa yang kamu lakukan? Biasanya kamu akan menekan tombol itu berulang kali: *klik-klik-klik!*  
Akibatnya: transaksi terkirim 5 kali, uang terpotong dobel!

Itu adalah contoh aplikasi dengan pengalaman pengguna (User Experience) yang sangat buruk.

> **Loading State adalah kondisi di mana aplikasi memberi tahu pengguna secara visual bahwa permintaan mereka sedang diproses di latar belakang.**

Selama fase Loading:
1. Kita memunculkan indikator putar-putar (`<ActivityIndicator>`).
2. Kita **mengunci tombol (`disabled={true}`)** agar user tidak menekan berkali-kali.

---

### 2. Analogi Kehidupan Nyata: Jam Pasir atau Suara Kasir ⏳

Bayangkan saat kamu menarik uang di mesin ATM:
Setelah memasukkan nominal Rp 100.000, mesin tidak diam membisu. Mesin mengeluarkan suara deru menghitung uang *"kreeek-kreeek"* dan layar menampilkan tulisan: *"Harap tunggu, transaksi Anda sedang diproses"*.  
Suara dan tulisan itu membuatmu tenang karena tahu mesin sedang bekerja dan kartumu aman.

---

### 3. Syntax Pola Standar Loading di React Native

```typescript
const [isLoading, setIsLoading] = useState(false);

const handleAction = async () => {
  setIsLoading(true); // 1. NYALAKAN LOADING
  try {
    await fetchApi();
  } catch (error) {
    // tangani error
  } finally {
    setIsLoading(false); // 2. MATIKAN LOADING DI FINALLY
  }
};
```

---

### 4. Contoh di Expo (React Native)

Perhatikan contoh screen tombol donasi yang aman dengan Loading State:

```tsx
import { useState } from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";

export default function LoadingStateScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [totalKlik, setTotalKlik] = useState(0);

  const handleKirimDonasi = async () => {
    setIsLoading(true);

    try {
      // SIMULASI PROSES KE SERVER SELAMA 2 DETIK
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTotalKlik((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-50 p-6">
      <View className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 items-center">
        <Text className="text-xl font-bold text-gray-800">
          Kirim Bantuan Bencana
        </Text>

        <Text className="text-xs text-gray-500 mt-2">
          Jumlah donasi terkirim: {totalKlik} kali
        </Text>

        {/* TOMBOL YANG DILINDUNGI LOADING STATE */}
        <Pressable
          onPress={handleKirimDonasi}
          disabled={isLoading} // KUNCI TOMBOL SAAT LOADING!
          className={`mt-6 w-full p-4 rounded-xl flex-row justify-center items-center ${
            isLoading ? "bg-red-300" : "bg-red-600 active:bg-red-700"
          }`}
        >
          {isLoading ? (
            <>
              {/* INDIKATOR PUTAR-PUTAR BAWAAN REACT NATIVE */}
              <ActivityIndicator size="small" color="#ffffff" />
              <Text className="text-white font-bold text-sm ml-2">
                Memproses Pembayaran...
              </Text>
            </>
          ) : (
            <Text className="text-white font-bold text-sm">
              Donasi Sekarang (Rp 50.000)
            </Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 5. Bedah Kode

1. `disabled={isLoading}`  
   Ini pencegah bug nomor satu! Saat `isLoading` bernilai `true`, sentuhan jari user diabaikan oleh tombol.
2. Ternary operator `{isLoading ? <ActivityIndicator /> : <Text>Donasi</Text>}`  
   Mengubah isi tombol secara dinamis dan elegan.

---

### 6. Latihan (Uji Pemahaman)

**Latihan 1:**  
Apa bahayanya jika tombol transaksi pembayaran di aplikasi mobile tidak dikunci (`disabled`) selama proses loading berlangsung?

**Latihan 2:**  
Komponen apa yang disediakan secara bawaan oleh React Native untuk menampilkan animasi indikator putar-putar?
