# BEST KIDS Learning Center

Project dipisahkan menjadi halaman HTML terpisah dan dibuat responsif mengikuti referensi desain BEST KIDS yang diberikan.

## Struktur
- `index.html` — landing page
- `program.html` — daftar program + filter
- `detail-kelas.html` — detail kelas Calistung
- `tentang-kami.html` — profil, visi, misi, statistik
- `pendaftaran.html` — form pendaftaran
- `dashboard.html` — dashboard orang tua
- `css/style.css` — seluruh styling responsif
- `js/script.js` — menu mobile, filter program, submit demo form
- `assets/` — aset BEST KIDS dari ZIP yang diberikan

> Header dan footer di-load dari `header.html` dan `footer.html` agar struktur navigasi tidak perlu diduplikasi pada setiap halaman. Jika dijalankan dengan `file://`, browser tertentu dapat memblokir `fetch()`. Gunakan Live Server/HTTP server untuk menjalankan project.
