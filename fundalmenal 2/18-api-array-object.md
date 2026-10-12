# Level 2 - Modul 18: Menggabungkan API dengan Array & Object

---

### 1. Konsep Sederhana

Selamat! Di titik ini, kamu menghubungkan kekuatan **Level 1** dan **Level 2**!

Ketika server internet membalas request kita, server biasanya mengirimkan:
**Array of Objects** (Daftar objek yang berisi puluhan data).

Data mentah dari internet ini seringkali belum siap 100% untuk ditampilkan ke layar:
- Kita perlu **menyaring (filter)** hanya data yang aktif.
- Kita perlu **mengubah format (map)** teks atau angkanya.
- Kita perlu **mencari (find)** satu data tertentu berdasarkan kata kunci pencarian user.

> **Semua jurus sakti Level 1 (`map`, `filter`, `find`, `destructuring`) adalah alat utama kamu untuk mencerna dan mengolah data mentah yang datang dari API!**

---

### 2. Alur Integrasi API ke Array & Object

```text
Server Internet (API) 
      ↓ [fetch]
Data Mentah (JSON Array) 
      ↓ [response.json()]
State Komponen (Array of Objects) 
      ↓ [.filter() / .map()]
Komponen Tampilan di Layar HP (UI)
```

---

### 3. Contoh di Expo (React Native)

Perhatikan contoh screen pencarian dan penyaringan data relawan yang diambil langsung dari API:

```tsx
import { useState } from "react";
import { View, Text, TextInput, Pressable, ActivityIndicator } from "react-native";

export default function ApiArrayObjectScreen() {
  const [semuaUser, setSemuaUser] = useState<any[]>([]);
  const [kataKunci, setKataKunci] = useState("");
  const [loading, setLoading] = useState(false);

  // 1. AMBIL DATA DARI API INTERNET
  const handleLoadUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setSemuaUser(data); // Simpan Array of Objects ke state
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 2. OLAH DENGAN FILTER (LEVEL 1): Cari berdasarkan nama
  const userTersaring = semuaUser.filter((user) =>
    user.name.toLowerCase().includes(kataKunci.toLowerCase())
  );

  return (
    <View className="flex-1 justify-center bg-gray-50 p-6">
      <View className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <Text className="text-xl font-bold text-gray-800">
          Daftar Kontak Relawan API
        </Text>

        <Pressable
          onPress={handleLoadUsers}
          className="mt-3 bg-blue-600 p-2.5 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-xs">
            Tarik 10 Data dari Server
          </Text>
        </Pressable>

        {/* INPUT PENCARIAN */}
        {semuaUser.length > 0 && (
          <TextInput
            value={kataKunci}
            onChangeText={setKataKunci}
            placeholder="Ketik nama untuk mencari..."
            className="border border-gray-200 p-2.5 rounded-xl mt-3 text-xs"
          />
        )}

        {/* LOADING */}
        {loading && (
          <View className="my-4 items-center">
            <ActivityIndicator size="small" color="#2563eb" />
          </View>
        )}

        {/* OLAH DENGAN MAP (LEVEL 1) UNTUK TAMPILAN */}
        <View className="mt-3 space-y-2">
          {userTersaring.slice(0, 3).map((item) => {
            // DESTRUCTURING (LEVEL 1)
            const { id, name, email, phone } = item;

            return (
              <View key={id} className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <Text className="font-bold text-gray-800 text-sm">{name}</Text>
                <Text className="text-xs text-blue-600">{email}</Text>
                <Text className="text-xs text-gray-400 mt-1">{phone}</Text>
              </View>
            );
          })}
        </View>

        {semuaUser.length > 0 && userTersaring.length === 0 && (
          <Text className="text-xs text-rose-500 text-center mt-3">
            Tidak ada relawan dengan nama tersebut.
          </Text>
        )}
      </View>
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `fetch(".../users")` mengambil data array berisi 10 objek pengguna.
2. `semuaUser.filter(...)` menyaring data tersebut secara instan saat user mengetik di kotak pencarian tanpa perlu menghubungi server ulang!
3. `userTersaring.slice(0, 3).map(...)` dan destructuring `{ id, name, email }` mencetak 3 data teratas secara rapi di layar HP.

---

### 5. Latihan & Challenge

**Latihan:**  
Mengapa menyaring (filter) data langsung di aplikasi HP terkadang lebih cepat daripada mengirim request filter baru ke server?

**Challenge:**  
Jika kamu punya data API berisi `[{ id: 1, golDarah: "A" }, { id: 2, golDarah: "O" }]`, bagaimana cara mengambil hanya yang bergolongan darah `"O"` menggunakan `.filter()`?
