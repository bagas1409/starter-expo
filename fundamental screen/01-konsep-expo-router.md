# Modul 01: Konsep Dasar Navigasi Expo Router

---

### 1. Konsep Sederhana: File-Based Routing

Di zaman dulu, membuat perpindahan halaman di React Native itu rumit: kita harus menginstal banyak library, mendaftarkan nama-nama screen di file konfigurasi panjang, dan membuat peta navigator manual.

Di **Expo modern (Expo Router)**, semuanya jadi sangat alami dan otomatis melalui konsep:  
👉 **File-Based Routing (Rute Berdasarkan File)**.

> **Setiap kali kamu membuat satu file baru di dalam folder `app/`, Expo secara otomatis menjadikannya sebuah halaman (screen) aplikasi HP kamu!**

Contoh:
- Kamu buat file `app/profil.tsx` ➡️ Otomatis jadi halaman yang bisa dibuka di URL/rute: `/profil`.
- Kamu buat file `app/bantuan.tsx` ➡️ Otomatis jadi halaman di rute: `/bantuan`.

---

### 2. Peta Anatomi Folder `app/` di Proyek Kita

Coba lihat struktur folder `app/` di aplikasimu saat ini:

```text
app/
├── _layout.tsx           <-- Induk Utama Seluruh Aplikasi (Root Stack Navigator)
├── (tabs)/               <-- Folder Khusus Layar yang Punya Tab Bar di Bawah
│   ├── _layout.tsx       <-- Pengatur Bilah Tab Bar Bawah
│   ├── home.tsx          <-- Screen Beranda (Muncul di Tab)
│   ├── about.jsx         <-- Screen About (Muncul di Tab)
│   └── proyek.jsx        <-- Screen Proyek
└── detail.tsx            <-- (Nanti kita buat) Screen biasa TANPA Tab Bar
```

---

### 3. Tanda Kurung `(tabs)` itu Apa Artinya?

Pernahkah kamu bingung kenapa ada tanda kurung pada nama folder `(tabs)`?

Di Expo Router, tanda kurung `(...)` dinamakan **Route Group (Kelompok Rute)**:
- Tanda kurung memberitahu Expo: *"Folder ini cuma untuk mengelompokkan file layout, **jangan masukkan kata 'tabs' ke dalam URL/alamat rutenya**."*
- Jadi untuk membuka `app/(tabs)/home.tsx`, kamu cukup memanggil rute `/home`, BUKAN `/tabs/home`!

---

### 4. Perbedaan: Screen Tab Bar vs Screen Bukan Tab Bar

| Jenis Screen | Lokasi File | Karakteristik Layar | Kapan Digunakan? |
|---|---|---|---|
| **Tab Bar Screen** | Di dalam `app/(tabs)/` | Ada menu navigasi ikon di bagian bawah layar HP. | Menu utama aplikasi: Beranda, Cari, Notifikasi, Akun. |
| **Bukan Tab Bar (Stack)** | Langsung di `app/` (di luar `(tabs)`) | Layar penuh (Full Screen). Tab bar di bawah **HILANG/TERTUTUP**. | Detail barang, Form formulir donor, Halaman pembayaran, Login. |

---

### 5. Ringkasan Kunci

- Mau screen yang **ada menu bawahnya**? ➡️ Taruh filenya di dalam `app/(tabs)/`.
- Mau screen yang **layar penuh menutup menu bawah**? ➡️ Taruh filenya di luar, langsung di dalam `app/`.
