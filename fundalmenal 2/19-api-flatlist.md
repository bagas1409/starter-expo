# Level 2 - Modul 19: Menampilkan Hasil API dengan FlatList

---

### 1. Konsep Sederhana

Di Modul 10, kita belajar menggunakan `.map()` di dalam `<ScrollView>`.  
Cara itu sangat bagus kalau datanya hanya 5 atau 10 item.  
Tapi bagaimana kalau server API mengirimkan **1.000 riwayat donor darah** atau **5.000 data logistik obat**?

Jika memakai `.map()`, HP akan mencoba menggambar ke-1.000 kartu itu sekaligus di memori HP. Akibatnya: **HP jadi panas, nge-lag parah, dan aplikasi bisa force-close karena kehabisan RAM!**

Untuk mengatasi ini, React Native menciptakan komponen raja performa: **`<FlatList>`**.

> **`<FlatList>` adalah komponen daftar pintar berkecepatan tinggi yang hanya menggambar item yang sedang terlihat di layar kaca HP saja. Item yang belum di-scroll tidak akan memakan memori.**

---

### 2. Tiga Properti Wajib di `<FlatList>`

1. **`data={...}`:** Sumber data array dari API yang ingin ditampilkan.
2. **`keyExtractor={...}`:** Fungsi untuk menentukan kunci unik (seperti `key={item.id}`).
3. **`renderItem={({ item }) => ( ... )}`:** Cetak biru bentuk kartu yang akan digambar untuk setiap satu item.

Bonus fitur canggih:  
- **`refreshing` & `onRefresh`:** Fitur **Pull-to-Refresh** (Tarik layar ke bawah untuk memperbarui data dari API)!

---

### 3. Contoh di Expo (React Native)

Perhatikan contoh screen daftar postingan dari API menggunakan FlatList lengkap dengan fitur tarik layar ke bawah (*pull-to-refresh*):

```tsx
import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

export default function FlatListApiScreen() {
  const [dataPost, setDataPost] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // FUNGSI AMBIL DATA DARI API
  const fetchDaftarPost = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const json = await res.json();
      setDataPost(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDaftarPost();
  }, []);

  // FUNGSI PULL-TO-REFRESH
  const handleRefresh = () => {
    setRefreshing(true);
    fetchDaftarPost();
  };

  // CETAK BIRU KARTU ITEM
  const renderItemCard = ({ item }: { item: any }) => (
    <View className="bg-white p-4 mb-3 rounded-xl border border-gray-100 shadow-sm">
      <Text className="text-xs font-bold text-rose-600 mb-1">
        LAPORAN #{item.id}
      </Text>
      <Text className="text-sm font-bold text-gray-800">
        {item.title}
      </Text>
      <Text className="text-xs text-gray-500 mt-2 line-clamp-2">
        {item.body}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="text-xl font-bold text-gray-800 mb-3 mt-8">
        Kanal Berita Bencana (FlatList)
      </Text>

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#dc2626" />
        </View>
      ) : (
        <FlatList
          data={dataPost}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemCard}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text className="text-center text-gray-400 mt-10">
              Tidak ada data laporan.
            </Text>
          }
        />
      )}
    </View>
  );
}
```

---

### 4. Bedah Kode

1. `data={dataPost}` memasukkan array hasil API.
2. `keyExtractor={(item) => item.id.toString()}` menjamin setiap item punya ID unik berupa string.
3. `onRefresh={handleRefresh}` otomatis menjalankan fungsi ambil data ulang saat layar ditarik ke bawah oleh jari pengguna.

---

### 5. Latihan (Uji Pemahaman)

**Latihan:**  
Mengapa menggunakan `<FlatList>` jauh lebih hemat memori dan baterai HP daripada menggunakan `<ScrollView>` dengan `.map()` ketika menampilkan ribuan data?
