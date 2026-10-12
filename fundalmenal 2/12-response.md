# Level 2 - Modul 12: Response (Paket Balasan dari Server)

---

### 1. Konsep Sederhana

Setelah kamu mengirimkan HTTP Request, server memproses permintaanmu dan mengirimkan surat balasan. Surat balasan ini disebut **Response**.

Banyak pemula mengira bahwa hasil dari `const response = await fetch(url)` adalah langsung data JSON-nya. **Itu salah!**

> **Objek `Response` adalah amplop paket balasan dari server secara utuh, yang berisi status keberhasilan, kode nomor balasan, header server, dan bungkusan data yang masih terkunci.**

Sebelum membongkar isi datanya, kita wajib memeriksa kondisi amplopnya terlebih dahulu!

---

### 2. Properti Kunci di dalam Objek `Response`

Saat kamu memegang objek `response`, ada beberapa properti penting yang bisa kamu intip:

1. **`response.ok` (Boolean):**  
   Bernilai `true` jika permintaan berhasil (kode status 200 - 299).  
   Bernilai `false` jika gagal (misal data tidak ditemukan atau server error).
2. **`response.status` (Number):**  
   Nomor kode resmi dari server (contoh: `200` = Sukses, `404` = Halaman Tidak Ada, `500` = Server Rusak).
3. **`response.statusText` (String):**  
   Penjelasan teks dari kode status (contoh: `"OK"`, `"Not Found"`).

---

### 3. Contoh di Expo (React Native)

Perhatikan cara memeriksa `response.ok` sebelum mencoba mengambil datanya:

```tsx
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function ResponseCheckScreen() {
  const [infoResponse, setInfoResponse] = useState<any>(null);

  const cekResponsServer = async (urlTarget: string) => {
    try {
      const response = await fetch(urlTarget);

      // MEMBEDAH PROPERTI OBJEK RESPONSE
      const detail = {
        status: response.status,
        isOk: response.ok,
        statusText: response.statusText,
      };

      setInfoResponse(detail);

      // ATURAN TERBAIK: CEK response.ok DULU!
      if (!response.ok) {
        throw new Error(`Permintaan gagal dengan kode HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data berhasil diambil:", data);
    } catch (err: any) {
      console.log("Log error:", err.message);
    }
  };

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Bedah Objek Response
        </Text>

        {infoResponse && (
          <View className="mt-4 p-4 bg-gray-100 rounded-xl space-y-1">
            <Text className="text-sm font-semibold text-gray-700">
              Kode Status: <Text className="font-bold text-blue-600">{infoResponse.status}</Text>
            </Text>
            <Text className="text-sm font-semibold text-gray-700">
              Apakah Sukses (response.ok):{" "}
              <Text className={infoResponse.isOk ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>
                {infoResponse.isOk ? "true (Sukses)" : "false (Gagal)"}
              </Text>
            </Text>
          </View>
        )}

        {/* DUA TOMBOL UJI COBA */}
        <Pressable
          onPress={() => cekResponsServer("https://jsonplaceholder.typicode.com/posts/1")}
          className="mt-4 bg-emerald-600 p-3 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-xs">Uji URL Valid (Status 200)</Text>
        </Pressable>

        <Pressable
          onPress={() => cekResponsServer("https://jsonplaceholder.typicode.com/url-ngawur-tidak-ada")}
          className="mt-2 bg-rose-600 p-3 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-xs">Uji URL Rusak (Status 404)</Text>
        </Pressable>
      </View>
    </View>
  );
}
```

---

### 4. Latihan (Uji Pemahaman)

**Latihan:**  
Mengapa kita sebaiknya memeriksa `if (!response.ok)` terlebih dahulu sebelum memanggil `response.json()`?
