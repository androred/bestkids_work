/* ==========================================================================
   RENDER KONTEN DARI data.js
   File ini mengubah data di js/data.js menjadi kartu-kartu di halaman.
   Cara kerjanya: kalau di halaman ada wadah dengan id tertentu, isinya diisi.
   Kalau wadahnya tidak ada, bagian itu dilewati begitu saja — jadi file ini
   aman dipasang di semua halaman.

     #programGrid      -> katalog program      (program.html)
     #programGridHome  -> program unggulan     (index.html)
     #galeriGrid       -> galeri kegiatan      (galeri.html)
     #testimoniTrack   -> testimoni            (index.html)
     #keunggulanGrid   -> kenapa memilih       (index.html + tentang-kami.html)
     #faqList          -> daftar FAQ           (index.html)

   PENTING: urutan script sebelum </body> harus seperti ini
     <script src="js/data.js"></script>
     <script src="js/render.js"></script>
     <script src="js/script.js"></script>
     ... baru script carousel testimoni & filter galeri ...
   ========================================================================== */
(function () {
  /* Mengamankan teks agar tanda < > & dari data tidak merusak halaman.
     Dipakai untuk semua isi KECUALI jawaban FAQ, yang memang boleh HTML. */
  function aman(teks) {
    return String(teks == null ? "" : teks)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isi(id, data, buatKartu) {
    var wadah = document.getElementById(id);
    if (!wadah || !Array.isArray(data)) return null;
    wadah.innerHTML = data.map(buatKartu).join("");
    return wadah;
  }

  /* ---------- Katalog program (program.html) ---------- */
  isi("programGrid", window.DATA_PROGRAM, function (p) {
    // Kalau ada hargaCoret, harga normal ditampilkan dicoret di atas harga promo
    var blokHarga = p.hargaCoret
      ? '<span class="price-old">' + aman(p.hargaCoret) + '</span>' +
        '<span class="price-text">' + aman(p.harga) + '</span>'
      : '<span class="price-text">' + aman(p.harga) + '</span>';

    return (
      '<article class="program-card-new bg-' + aman(p.warna) + '">' +
        '<div class="card-icon-floating">' +
          '<img src="' + aman(p.ikon) + '" alt="' + aman(p.nama) + '">' +
        '</div>' +
        '<h3>' + aman(p.nama) + '</h3>' +
        '<span class="age-badge badge-' + aman(p.warna) + '">' + aman(p.usia) + '</span>' +
        '<p class="card-desc">' + aman(p.deskripsi) + '</p>' +
        '<div class="card-meta-row">' +
          '<div class="meta-item">' +
            '<img src="assets/durasi.png" alt="Durasi">' +
            '<span>' + aman(p.durasi) + '</span>' +
          '</div>' +
          '<div class="meta-item">' +
            '<img src="assets/harga_promo.png" alt="Harga">' +
            '<span class="price-wrap">' + blokHarga + '</span>' +
          '</div>' +
        '</div>' +
        '<a href="' + aman(p.link) + '" class="btn btn-' + aman(p.warna) + ' btn-block">Lihat Detail →</a>' +
      '</article>'
    );
  });

  /* ---------- Program unggulan di beranda (index.html) ---------- */
  isi("programGridHome", window.DATA_PROGRAM, function (p) {
    return (
      '<article class="program-col-card bg-' + aman(p.warna) + '">' +
        '<img src="' + aman(p.ikon) + '" alt="' + aman(p.nama) + '" loading="lazy">' +
        '<h3>' + aman(p.nama) + '</h3>' +
        '<span class="age-tag tag-' + aman(p.warna) + '">' + aman(p.usia) + '</span>' +
        '<p>' + aman(p.deskripsi) + '</p>' +
        '<a class="btn btn-' + aman(p.warna) + ' btn-sm btn-block" href="' + aman(p.link) + '">Lihat Detail →</a>' +
      '</article>'
    );
  });

  /* ---------- Galeri kegiatan (galeri.html) ---------- */
  isi("galeriGrid", window.DATA_GALERI, function (g) {
    return (
      '<article class="gallery-card" data-category="' + aman(g.kategori) + '">' +
        '<div class="gallery-img-wrapper">' +
          '<img src="' + aman(g.foto) + '" alt="' + aman(g.alt || g.judul) + '" loading="lazy">' +
          '<span class="gallery-tag tag-' + aman(g.warna) + '">' + aman(g.label) + '</span>' +
        '</div>' +
        '<div class="gallery-info">' +
          '<h3>' + aman(g.judul) + '</h3>' +
          '<p>' + aman(g.keterangan) + '</p>' +
        '</div>' +
      '</article>'
    );
  });

  /* ---------- Testimoni (index.html) ---------- */
  isi("testimoniTrack", window.DATA_TESTIMONI, function (t) {
    var avatar = t.foto
      ? '<img class="testi-avatar" src="' + aman(t.foto) + '" alt="' + aman(t.nama) + '" loading="lazy">'
      : '<span class="testi-avatar testi-initial bg-' + aman(t.warnaAvatar) + '">' + aman(t.inisial) + '</span>';

    var label = t.program
      ? '<span class="age-tag tag-' + aman(t.warnaLabel) + ' testi-program">' + aman(t.program) + '</span>'
      : '';

    return (
      '<article class="testi-card">' +
        '<div class="testi-top">' +
          '<span class="testi-stars" aria-label="Rating 5 dari 5">★★★★★</span>' +
        '</div>' +
        '<p class="testi-text">' + aman(t.isi) + '</p>' +
        '<div class="testi-person">' +
          avatar +
          '<div><strong>' + aman(t.nama) + '</strong><small>' + aman(t.sumber) + '</small></div>' +
          label +
        '</div>' +
      '</article>'
    );
  });

  /* ---------- Keunggulan "Kenapa Memilih BESTKIDS" ----------
     Wadah #keunggulanGrid ada di index.html DAN tentang-kami.html.
     Karena keduanya halaman terpisah, id yang sama boleh dipakai di
     keduanya — hasilnya sama persis di kedua halaman. */
  isi("keunggulanGrid", window.DATA_KEUNGGULAN, function (k) {
    return (
      '<div class="why-choose-card card-' + aman(k.warna) + '">' +
        '<div class="why-icon-wrapper">' +
          '<img src="' + aman(k.ikon) + '" alt="' + aman(k.judul) + '" ' +
            'style="width: 32px; height: 32px; object-fit: contain;" loading="lazy">' +
        '</div>' +
        '<h3>' + aman(k.judul) + '</h3>' +
        '<p>' + aman(k.teks) + '</p>' +
      '</div>'
    );
  });

  /* ---------- FAQ (index.html) ----------
     Nomor 01, 02, 03 ... dibuat otomatis mengikuti urutan di data.js.
     Tombol "Lihat Semua Pertanyaan" ikut dibuat di sini, lalu langsung
     dipasangi fungsi buka/tutupnya di bawah. */
  var faqWadah = isi("faqList", window.DATA_FAQ, function (f, i) {
    var nomor = (i + 1) < 10 ? "0" + (i + 1) : String(i + 1);
    var kelas = "faq-item" + (f.lanjutan ? " faq-more-item" : "");

    return (
      '<details class="' + kelas + '"' + (f.buka ? " open" : "") + '>' +
        '<summary>' +
          '<span class="faq-num num-' + aman(f.warna) + '">' + nomor + '</span>' +
          '<strong>' + aman(f.pertanyaan) + '</strong>' +
          '<span class="arrow">▾</span>' +
        '</summary>' +
        '<div class="faq-answer">' + (f.jawaban || "") + '</div>' +
      '</details>'
    );
  });

  // Tombol "Lihat Semua Pertanyaan" + fungsinya (menggantikan script lama di index.html)
  if (faqWadah && document.querySelector(".faq-more-item")) {
    var kotakTombol = document.createElement("div");
    kotakTombol.className = "faq-more text-center";
    kotakTombol.style.marginTop = "16px";
    kotakTombol.innerHTML =
      '<button type="button" id="toggleFaqBtn" class="link-blue-underline" ' +
      'style="background:none; border:none; cursor:pointer;">Lihat Semua Pertanyaan →</button>';
    faqWadah.appendChild(kotakTombol);

    var tombol = kotakTombol.querySelector("#toggleFaqBtn");
    var terbuka = false;
    tombol.addEventListener("click", function () {
      terbuka = !terbuka;
      var tambahan = document.querySelectorAll(".faq-more-item");
      for (var i = 0; i < tambahan.length; i++) {
        tambahan[i].style.display = terbuka ? "block" : "none";
      }
      tombol.textContent = terbuka ? "Sembunyikan Pertanyaan ↑" : "Lihat Semua Pertanyaan →";
    });
  }

  // Penanda bahwa konten sudah selesai dibuat (kalau sewaktu-waktu dibutuhkan)
  document.dispatchEvent(new Event("konten-siap"));
})();