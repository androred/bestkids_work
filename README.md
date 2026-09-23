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
├── kebijakan-privasi.html     ← Kebijakan privasi (untuk kebutuhan iklan)
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
│   ├── kebijakan.css          ← Khusus kebijakan-privasi.html
│   ├── detail.css             ← Dipakai bersama semua halaman detail-*.html
│   ├── overrides.css          ← Aturan yang harus menimpa style halaman
│   └── unused.css             ← Sisa style yang tidak terpakai (tidak dipanggil di HTML)
│
├── js/
│   ├── data.js                ← ISI WEBSITE: program, galeri, testimoni, FAQ
│   ├── render.js              ← Mengubah isi data.js menjadi kartu di halaman
│   └── script.js              ← Menu HP dan filter
│
└── assets/                    ← Logo, ikon, foto program
    ├── galeri/                ← Foto kegiatan (.webp)
    ├── ornamen/               ← Ornamen hero (bintang, hati, garis gelombang, dll.)
    └── testimoni-bestkids/    ← Foto orang tua di bagian testimoni
```

## Mengubah isi website (paling sering dipakai)

Isi yang sering berubah **tidak lagi ditulis di HTML**, melainkan dikumpulkan di satu file: **`js/data.js`**.

| Yang ingin diubah | Edit daftar ini di `js/data.js` | Tampil di |
|---|---|---|
| Program (nama, usia, durasi, harga, link) | `DATA_PROGRAM` | `program.html` dan `index.html` |
| Foto galeri (foto, judul, kategori) | `DATA_GALERI` | `galeri.html` |
| Testimoni orang tua | `DATA_TESTIMONI` | `index.html` |
| Pertanyaan & jawaban FAQ | `DATA_FAQ` | `index.html` |

Menambah satu program, misalnya, cukup menyalin satu blok `{ ... }` di `DATA_PROGRAM` lalu mengganti isinya. Kartunya otomatis muncul di dua halaman sekaligus, lengkap dengan warna dan tombolnya.

### Aturan saat mengedit data.js

1. **Path gambar pakai garis miring biasa (`/`), bukan (`\`).**
   Benar: `"assets/galeri/calistung1.webp"`
   Salah: `"assets\galeri\calistung1.webp"` — di JavaScript, `\g` dan `\c` dianggap kode khusus dan path-nya rusak.
2. Setiap isian dipisah koma. Isian terakhir di dalam satu `{ }` tidak diberi koma.
3. Kolom `warna` hanya boleh diisi: `pink`, `blue`, `yellow`, `green`, `purple`.
   Khusus FAQ hanya: `pink`, `blue`, `yellow` (mengikuti class `num-*` di CSS).
4. Nomor FAQ (`01`, `02`, …) dibuat otomatis mengikuti urutan. Menyisipkan pertanyaan di tengah akan menggeser nomor sesudahnya dengan sendirinya.
5. Pada FAQ, kolom `jawaban` boleh memakai tag HTML sederhana (`<strong>`, `<em>`, `<br>`, `<p>`, `<a>`). Kolom lain akan ditampilkan apa adanya sebagai teks biasa.

### Cara kerjanya

`js/render.js` mencari wadah kosong ber-`id` di halaman, lalu mengisinya dengan kartu-kartu dari `data.js`. Kalau wadahnya tidak ada di suatu halaman, bagian itu dilewati begitu saja — jadi file yang sama aman dipasang di semua halaman.

| Wadah di HTML | Diisi dengan |
|---|---|
| `<div class="program-catalog-grid" id="programGrid">` | `DATA_PROGRAM` (katalog di program.html) |
| `<div class="program-6-grid" id="programGridHome">` | `DATA_PROGRAM` (unggulan di index.html) |
| `<div class="gallery-grid" id="galeriGrid">` | `DATA_GALERI` |
| `<div class="testi-track" id="testimoniTrack">` | `DATA_TESTIMONI` |
| `<div class="faq-list" id="faqList">` | `DATA_FAQ` + tombol "Lihat Semua Pertanyaan" |

Wadah-wadah itu **harus dibiarkan kosong** di HTML. Isinya dibuat saat halaman dimuat.

### Urutan script (wajib)

Di setiap halaman yang memakai data, tiga baris ini ditulis sebelum `</body>`:

```html
<script src="js/data.js"></script>
<script src="js/render.js"></script>
<script src="js/script.js"></script>
```

Urutannya tidak boleh dibalik: `render.js` membutuhkan `data.js`, dan keduanya harus berjalan **sebelum** script carousel testimoni di `index.html` — carousel menghitung jumlah kartu, jadi kartunya harus sudah dibuat lebih dulu.

Ketiganya juga harus berada **di bawah**, bukan di `<head>`. Kalau dipasang di `<head>`, wadahnya belum terbentuk saat script berjalan sehingga tidak ada yang terisi.

### Kalau nanti mengganti wadah menjadi HTML biasa lagi

Saat menghapus blok kartu dan menggantinya dengan wadah kosong, **hapus juga baris `<div>` pembukanya**, bukan hanya isinya. Kalau `<div>` lama tertinggal, wadah baru jadi anak dari wadah lama dan seluruh kartu menyempit ke satu kolom.

Cara cepat memastikan: cari nama class-nya di file (`program-catalog-grid`, `gallery-grid`, dan seterusnya) — harus ketemu **tepat satu kali**.

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
| kebijakan-privasi.html | `css/kebijakan.css` |
| detail-*.html | `css/detail.css` |

Empat baris lainnya selalu sama di semua halaman.

### Mau ubah apa, buka file mana

| Yang ingin diubah | File |
|---|---|
| Isi program, galeri, testimoni, FAQ | `js/data.js` |
| Warna utama, ukuran font dasar, bentuk tombol | `css/base.css` |
| Navbar, menu HP, footer, tombol WhatsApp | `css/layout.css` |
| Breadcrumb, banner CTA, judul halaman | `css/components.css` |
| Tampilan satu halaman saja | file CSS halaman itu |
| Semua halaman detail sekaligus | `css/detail.css` |
| Bentuk kartu yang dibuat otomatis | `js/render.js` |

**Aturan praktisnya:** perubahan di file halaman (baris ke-4) aman, tidak akan merembet ke halaman lain. Perubahan di `base.css`, `layout.css`, `components.css`, atau `overrides.css` berdampak ke semua halaman, jadi perlu dicek di beberapa halaman setelahnya.

Kalau Anda mengubah sesuatu di file halaman tetapi tidak ada efeknya, kemungkinan aturan itu ditimpa oleh `overrides.css` yang dimuat paling akhir. Periksa file tersebut.

### Tentang overrides.css

Di `style.css` yang lama, ada sekumpulan aturan di bagian paling bawah file yang sengaja menimpa style halaman, misalnya warna `.btn-pink`, `.bg-pink-light`, dan `.badge-pink`. Aturan itu hanya bekerja kalau dimuat paling akhir, sehingga dikumpulkan di `overrides.css`. **File ini harus tetap berada di urutan terakhir** pada setiap halaman.

### Tentang unused.css

Berisi style yang tidak ditemukan pemakaiannya di halaman mana pun. File ini tidak dipanggil di HTML dan bisa dihapus jika setelah beberapa waktu tidak ada tampilan yang bermasalah.

### Ornamen hero

Ornamen mengambang di bagian hero (`.hero-decorations` dan `.decor-*`) ditulis di file CSS masing-masing halaman. Gambarnya ada di `assets/ornamen/`, dan ornamen bersifat dekoratif saja — `pointer-events: none`, `alt=""`, serta berada di lapisan bawah teks.

## Breakpoint responsif

| Lebar | Perubahan utama |
|---|---|
| ≤ 1200px | Slogan di navbar disembunyikan; ornamen hero mengecil |
| ≤ 1024px | Grid berkurang kolomnya, gambar CTA menyesuaikan |
| ≤ 992px | Testimoni jadi 2 kartu |
| ≤ 980px | Katalog program jadi 2 kolom |
| ≤ 760px | Navbar berubah jadi menu ☰ |
| ≤ 640px | Semua grid jadi 1 kolom, testimoni jadi 1 kartu |

## JavaScript

| File / lokasi | Tugasnya |
|---|---|
| `js/data.js` | Menyimpan isi program, galeri, testimoni, FAQ |
| `js/render.js` | Membuat kartu dari data.js + tombol "Lihat Semua Pertanyaan" pada FAQ |
| `js/script.js` | Menu HP dan filter berbasis `data-filter` |
| Script inline di `index.html` | Carousel testimoni (panah, titik indikator, geser) |
| Script inline di `galeri.html` | Filter kategori galeri |
| Script inline di setiap halaman | Pemuat header dan footer |

Catatan: fungsi buka/tutup FAQ dulunya berupa script inline di `index.html`. Sekarang sudah pindah ke `render.js`, dan script inline itu **sudah dihapus** — jangan ditambahkan kembali, karena tombolnya baru dibuat setelah script inline berjalan sehingga akan menimbulkan error.

## Catatan SEO

Karena isi program, galeri, testimoni, dan FAQ sekarang dibuat oleh JavaScript, isinya tidak ada di HTML mentah. Google umumnya tetap bisa membacanya, tetapi mesin pencari lain dan preview tautan di media sosial belum tentu. Karena itu judul halaman (`<title>`), `<h1>`, dan teks pengantar setiap section sengaja **tetap ditulis langsung di HTML**, bukan di `data.js`.

## Layanan pihak ketiga

- **Formspree** — pengiriman form di `kontak.html`
- **Google Fonts** — font Baloo 2 dan Nunito