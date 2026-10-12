# Level 2 - Modul 20: Membuat Alur CRUD Sederhana (Puncak Level 2)

---

### 1. Konsep Sederhana

Selamat telah sampai di **Modul 20 (Puncak dari Level 2)**! 🏆  
Hampir semua aplikasi besar di dunia (Instagram, WhatsApp, Tokopedia, sistem donor darah PMI) pada dasarnya berputar pada 4 operasi utama yang disingkat **CRUD**:

- **C - Create (Membuat data baru):** Mengirim formulir baru -> HTTP Method **`POST`**.
- **R - Read (Membaca/Mengambil data):** Menampilkan daftar data di layar -> HTTP Method **`GET`**.
- **U - Update (Mengubah/Mengedit data):** Mengoreksi atau mengganti status -> HTTP Method **`PUT / PATCH`**.
- **D - Delete (Menghapus data):** Membuang data yang sudah tidak dipakai -> HTTP Method **`DELETE`**.

---

### 2. Peta Alur Lengkap CRUD di Aplikasi Mobile

```text
[LAYAR EXPO HP]
   │
   ├─► 1. READ   (GET)    ──► Ambil daftar data ──► Tampilkan di FlatList
   │
   ├─► 2. CREATE (POST)   ──► Ketik data baru   ──► Kirim Body JSON ──► Tambah ke List
   │
   ├─► 3. UPDATE (PATCH)  ──► Tekan tombol checklist ──► Update status di Server
   │
   └─► 4. DELETE (DELETE) ──► Tekan ikon tempat sampah ──► Hapus item dari List
```

---

### 3. Studi Kasus Nyata di Expo (Aplikasi Manajemen Agenda PMI)

Berikut adalah satu komponen lengkap yang mempraktikkan ke-4 alur CRUD secara nyata:

```tsx
import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, ActivityIndicator, Alert } from "react-native";

interface Agenda {
  id: number;
  title: string;
  completed: boolean;
}

export default function CrudLengkapScreen() {
  const [agendas, setAgendas] = useState<Agenda[]>([]);
  const [inputTeks, setInputTeks] = useState("");
  const [loading, setLoading] = useState(false);

  // 1. READ (GET) - Mengambil data agenda awal
  const loadAgendas = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=4");
      const data = await res.json();
      setAgendas(data);
    } catch (err) {
      Alert.alert("Error", "Gagal memuat agenda.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAgendas();
  }, []);

  // 2. CREATE (POST) - Menambah agenda baru
  const handleTambah = async () => {
    if (!inputTeks.trim()) return;

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: inputTeks, completed: false }),
      });
      const dataBaru = await res.json();

      // Update state lokal kita (menggunakan spread operator Level 1!)
      setAgendas([{ id: Date.now(), title: inputTeks, completed: false }, ...agendas]);
      setInputTeks("");
      Alert.alert("Sukses", "Agenda baru berhasil ditambahkan!");
    } catch (err) {
      Alert.alert("Gagal", "Tidak bisa menambah agenda.");
    }
  };

  // 3. UPDATE (PATCH) - Mengubah status selesai
  const handleToggleSelesai = async (id: number, currentStatus: boolean) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !currentStatus }),
      });

      // Update state lokal dengan map (Level 1)
      setAgendas(
        agendas.map((item) =>
          item.id === id ? { ...item, completed: !currentStatus } : item
        )
      );
    } catch (err) {
      Alert.alert("Error", "Gagal update status.");
    }
  };

  // 4. DELETE (DELETE) - Menghapus agenda
  const handleHapus = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });

      // Update state lokal dengan filter (Level 1)
      setAgendas(agendas.filter((item) => item.id !== id));
      Alert.alert("Terhapus", "Agenda berhasil dihapus.");
    } catch (err) {
      Alert.alert("Error", "Gagal menghapus data.");
    }
  };

  return (
    <View className="flex-1 bg-gray-50 p-6 pt-12">
      <Text className="text-2xl font-black text-gray-800 mb-1">
        Manajemen Agenda Posko
      </Text>
      <Text className="text-xs text-gray-400 mb-4">
        Praktik Lengkap CRUD (GET, POST, PATCH, DELETE)
      </Text>

      {/* FORM CREATE */}
      <View className="flex-row gap-2 mb-4">
        <TextInput
          value={inputTeks}
          onChangeText={setInputTeks}
          placeholder="Tulis agenda baru..."
          className="flex-1 bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm"
        />
        <Pressable
          onPress={handleTambah}
          className="bg-red-600 px-5 rounded-xl justify-center items-center active:bg-red-700"
        >
          <Text className="text-white font-bold text-sm">+ Buat</Text>
        </Pressable>
      </View>

      {/* LIST READ */}
      {loading ? (
        <ActivityIndicator size="large" color="#dc2626" className="mt-8" />
      ) : (
        <FlatList
          data={agendas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-white p-4 mb-3 rounded-xl border border-gray-100 flex-row items-center justify-between shadow-sm">
              <Pressable
                onPress={() => handleToggleSelesai(item.id, item.completed)}
                className="flex-1 pr-3"
              >
                <Text
                  className={`text-sm font-semibold ${
                    item.completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {item.completed ? "✓ " : "○ "} {item.title}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => handleHapus(item.id)}
                className="bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200"
              >
                <Text className="text-rose-600 text-xs font-bold">Hapus</Text>
              </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
}
```

---

### 4. Bedah Arsitektur CRUD

Perhatikan bagaimana konsep Level 1 dan Level 2 bekerja berdampingan dengan harmonis:
1. **`async / await` & `try / catch`** mengamankan setiap panggilan internet.
2. **`fetch()` dengan method `GET`, `POST`, `PATCH`, dan `DELETE`** mengatur komunikasi ke server.
3. **`spread operator` (`...agendas`)** dipakai saat menambah item baru ke daftar.
4. **`map()`** dipakai saat mengupdate satu item spesifik.
5. **`filter()`** dipakai saat menghapus satu item dari daftar.

Sekarang kamu sudah memiliki gambaran utuh bagaimana sebuah aplikasi mobile modern bekerja dari ujung ke ujung!

---

### 5. Latihan & Uji Evaluasi Akhir Level 2

1. Sebutkan kepanjangan dari CRUD dan pasangkan masing-masing dengan HTTP Method-nya!
2. Ketika kita menghapus data di server dengan `DELETE`, mengapa kita juga perlu mengupdate array lokal di state HP menggunakan `.filter()`?
