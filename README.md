# BEST KIDS Learning Center

Website profil BESTKIDS Galaxy Learning Center. Dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework, dan responsif untuk desktop, tablet, serta HP.

## Menjalankan project

Header, footer, dan tombol WhatsApp dimuat lewat `fetch()`, sehingga project **harus dijalankan melalui HTTP server**, misalnya ekstensi Live Server di VS Code.

Jika file HTML dibuka langsung dengan klik dua kali (`file://`), browser akan memblokir `fetch()` sehingga navbar, footer, dan tombol WhatsApp tidak muncul.

## Struktur file

```
bestkids/
├── index.html                 ← Beranda
├── program.html               ← Daftar program
├── tentang-kami.html          ← Profil, visi, misi
├── galeri.html                ← Galeri kegiatan + filter kategori
├── kontak.html                ← Info kontak + form pesan (Formspree)
├── detail-sensory-phonics.html
├── detail-phonics.html        ← dan halaman detail program lainnya
│
├── header.html                ← Navbar, dimuat oleh semua halaman
├── footer.html                ← Footer + tombol WhatsApp mengambang
│
├── css/
│   ├── base.css               ← Variabel warna, reset, tipografi, tombol, class utilitas
│   ├── layout.css             ← Navbar, menu HP, footer, tombol WhatsApp
│   ├── components.css         ← Komponen milik beberapa halaman (breadcrumb, banner CTA, page-hero)
│   ├── beranda.css            ← Khusus index.html
│   ├── program.css            ← Khusus program.html
│   ├── tentang-kami.css       ← Khusus tentang-kami.html
│   ├── galeri.css             ← Khusus galeri.html
│   ├── kontak.css             ← Khusus kontak.html
│   ├── detail.css             ← Dipakai bersama semua halaman detail-*.html
│   ├── overrides.css          ← Aturan yang harus menimpa style halaman
│   └── unused.css             ← Sisa style yang tidak terpakai (tidak dipanggil di HTML)
│
├── js/
│   └── script.js              ← Menu HP dan filter
│
├── assets/                    ← Logo, ikon, foto program
└── galeri/                    ← Foto kegiatan
```

## Cara kerja CSS

CSS dipisah per halaman agar perubahan pada satu halaman tidak merembet ke halaman lain.

Setiap halaman memanggil **5 file CSS**, dan **urutannya menentukan siapa yang menang** kalau ada aturan yang bentrok. File yang dipanggil belakangan menimpa yang di depannya.

```html
<link rel="stylesheet" href="css/base.css">        <!-- 1. fondasi -->
<link rel="stylesheet" href="css/layout.css">      <!-- 2. navbar & footer -->
<link rel="stylesheet" href="css/components.css">  <!-- 3. komponen bersama -->
<link rel="stylesheet" href="css/beranda.css">     <!-- 4. halaman ini saja -->
<link rel="stylesheet" href="css/overrides.css">   <!-- 5. penimpa, selalu terakhir -->
```

Baris ke-4 adalah satu-satunya yang berbeda di tiap halaman:

| Halaman | Baris ke-4 |
|---|---|
| index.html | `css/beranda.css` |
| program.html | `css/program.css` |
| tentang-kami.html | `css/tentang-kami.css` |
| galeri.html | `css/galeri.css` |
| kontak.html | `css/kontak.css` |
| detail-*.html | `css/detail.css` |

Empat baris lainnya selalu sama di semua halaman.

### Mau ubah apa, buka file mana

| Yang ingin diubah | File |
|---|---|
| Warna utama, ukuran font dasar, bentuk tombol | `base.css` |
| Navbar, menu HP, footer, tombol WhatsApp | `layout.css` |
| Breadcrumb, banner CTA, judul halaman | `components.css` |
| Isi satu halaman saja | file halaman itu |
| Semua halaman detail sekaligus | `detail.css` |

**Aturan praktisnya:** perubahan di file halaman (baris ke-4) aman, tidak akan merembet ke halaman lain. Perubahan di `base.css`, `layout.css`, `components.css`, atau `overrides.css` berdampak ke semua halaman, jadi perlu dicek di beberapa halaman setelahnya.

Kalau Anda mengubah sesuatu di file halaman tetapi tidak ada efeknya, kemungkinan aturan itu ditimpa oleh `overrides.css` yang dimuat paling akhir. Periksa file tersebut.

### Tentang overrides.css

Di `style.css` yang lama, ada sekumpulan aturan di bagian paling bawah file yang sengaja menimpa style halaman, misalnya warna `.btn-pink`, `.bg-pink-light`, dan `.badge-pink`. Aturan itu hanya bekerja kalau dimuat paling akhir, sehingga dikumpulkan di `overrides.css`. **File ini harus tetap berada di urutan terakhir** pada setiap halaman.

## Breakpoint responsif

| Lebar | Perubahan utama |
|---|---|
| ≤ 1200px | Slogan di navbar disembunyikan |
| ≤ 1024px | Grid berkurang kolomnya, gambar CTA menyesuaikan |
| ≤ 992px | Testimoni jadi 2 kartu |
| ≤ 760px | Navbar berubah jadi menu ☰ |
| ≤ 640px | Semua grid jadi 1 kolom, testimoni jadi 1 kartu |

## JavaScript

- `js/script.js` — menu HP dan filter berbasis `data-filter`
- Script inline di `index.html` — akordeon FAQ dan carousel testimoni
- Script inline di `galeri.html` — filter kategori galeri
- Script inline di setiap halaman — pemuat header dan footer

## Layanan pihak ketiga

- **Formspree** — pengiriman form di `kontak.html`
- **Google Fonts** — font Baloo 2 dan Nunito
