/* ==========================================================================
   js/galeri-carousel.js
   Mengubah #galeriGrid menjadi carousel beberapa baris, SEKALIGUS menangani
   tombol filter kategori (.gallery-tabs .tab-btn).

   Jumlah baris TIDAK diatur di sini, melainkan lewat --baris di CSS.
   Berkas ini membacanya, jadi cukup ubah satu angka di galeri.css.

   Dua hal itu harus ditangani satu berkas. Kalau filter dibiarkan di skrip
   terpisah seperti sebelumnya, ia menyembunyikan kartu tanpa memberi tahu
   carousel, sehingga jumlah titik penanda dan batas geseran jadi salah.

   WAJIB dimuat SETELAH render.js, karena kartunya baru ada setelah
   render.js selesai bekerja:
     <script src="js/data.js"></script>
     <script src="js/render.js"></script>
     <script src="js/galeri-carousel.js"></script>
     <script src="js/script.js"></script>

   Geseran dan snap ditangani browser lewat CSS (scroll-snap). Berkas ini
   hanya mengurus tombol panah, titik penanda, dan filter.
   ========================================================================== */
(function () {
  var rel = document.getElementById("galeriGrid");
  if (!rel) return;

  var bungkus = rel.closest(".galeri-carousel");
  if (!bungkus) return;

  var tombolPrev = bungkus.querySelector(".galeri-prev");
  var tombolNext = bungkus.querySelector(".galeri-next");
  var wadahTitik = bungkus.querySelector(".galeri-dots");

  /* Hanya kartu yang sedang tampil yang dihitung — kartu yang disembunyikan
     filter tidak boleh ikut menentukan jumlah halaman. */
  function kartuTampil() {
    var semua = rel.querySelectorAll(".gallery-card");
    var hasil = [];
    for (var i = 0; i < semua.length; i++) {
      if (semua[i].offsetParent !== null) hasil.push(semua[i]);
    }
    return hasil;
  }

  /* Lebar satu langkah = lebar satu kartu + jarak antar kartu */
  function lebarLangkah() {
    var kartu = kartuTampil()[0];
    if (!kartu) return rel.clientWidth || 1;
    var jarak = parseFloat(getComputedStyle(rel).columnGap) || 0;
    return kartu.getBoundingClientRect().width + jarak;
  }

  /* Berapa kartu yang muat sekaligus di layar saat ini */
  function jumlahTampil() {
    return Math.max(1, Math.round(rel.clientWidth / lebarLangkah()));
  }

  /* Jumlah baris dibaca dari CSS (--baris), supaya JS ikut berubah sendiri
     setiap kali media query mengganti angkanya. */
  function jumlahBaris() {
    var n = parseInt(getComputedStyle(bungkus).getPropertyValue("--baris"), 10);
    return n > 0 ? n : 1;
  }

  function jumlahHalaman() {
    /* Kartu disusun ke bawah dulu, jadi yang dihitung adalah KOLOM. */
    var kolom = Math.ceil(kartuTampil().length / jumlahBaris());
    return Math.max(1, Math.ceil(kolom / jumlahTampil()));
  }

  function halamanSekarang() {
    var langkah = lebarLangkah() * jumlahTampil();
    if (!langkah) return 0;
    return Math.round(rel.scrollLeft / langkah);
  }

  function geser(arah) {
    rel.scrollBy({ left: arah * lebarLangkah() * jumlahTampil(), behavior: "smooth" });
  }

  /* ---------- Titik penanda ---------- */
  function buatTitik() {
    if (!wadahTitik) return;
    wadahTitik.innerHTML = "";

    var total = jumlahHalaman();
    /* Satu halaman saja berarti tidak ada yang bisa digeser */
    if (total < 2) return;

    for (var i = 0; i < total; i++) {
      var t = document.createElement("button");
      t.type = "button";
      t.setAttribute("aria-label", "Ke halaman galeri " + (i + 1));
      t.dataset.ke = i;
      wadahTitik.appendChild(t);
    }
  }

  function perbarui() {
    var kini = halamanSekarang();

    if (wadahTitik) {
      var titik = wadahTitik.children;
      for (var i = 0; i < titik.length; i++) {
        titik[i].setAttribute("aria-current", i === kini ? "true" : "false");
      }
    }

    /* Angka 2 = toleransi pembulatan pecahan piksel */
    var diAwal = rel.scrollLeft <= 2;
    var diAkhir = rel.scrollLeft >= rel.scrollWidth - rel.clientWidth - 2;

    if (tombolPrev) tombolPrev.disabled = diAwal;
    if (tombolNext) tombolNext.disabled = diAkhir;
  }

  /* ---------- Filter kategori ----------
     Menggantikan skrip filter lama yang ada di dalam galeri.html.
     Skrip lama itu HARUS DIHAPUS, kalau tidak keduanya akan saling rebutan. */
  function pasangFilter() {
    var tombolTab = document.querySelectorAll(".gallery-tabs .tab-btn");
    if (!tombolTab.length) return;

    for (var i = 0; i < tombolTab.length; i++) {
      tombolTab[i].addEventListener("click", function () {
        for (var j = 0; j < tombolTab.length; j++) {
          tombolTab[j].classList.remove("active");
        }
        this.classList.add("active");

        var pilihan = this.getAttribute("data-filter");
        var kartu = rel.querySelectorAll(".gallery-card");

        for (var k = 0; k < kartu.length; k++) {
          var cocok = pilihan === "all" || kartu[k].getAttribute("data-category") === pilihan;
          /* "" (kosong), bukan "flex" — supaya kartu kembali memakai aturan
             dari CSS, termasuk lebar flex-nya. */
          kartu[k].style.display = cocok ? "" : "none";
        }

        /* Kembali ke awal rel, lalu hitung ulang halaman & tombol */
        /* "instant", bukan "auto". "auto" mengikuti scroll-behavior: smooth di CSS,
           sehingga rel masih bergerak saat titik penanda dihitung ulang. */
        rel.scrollTo({ left: 0, behavior: "instant" });
        buatTitik();
        perbarui();
      });
    }
  }

  /* ---------- Pemasangan ---------- */
  if (tombolPrev) tombolPrev.addEventListener("click", function () { geser(-1); });
  if (tombolNext) tombolNext.addEventListener("click", function () { geser(1); });

  if (wadahTitik) {
    wadahTitik.addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t) return;
      rel.scrollTo({ left: t.dataset.ke * lebarLangkah() * jumlahTampil(), behavior: "smooth" });
    });
  }

  rel.addEventListener("scroll", function () {
    /* Selama rel bergeser, efek hover kartu dimatikan lewat kelas ini.
       Tanpa itu, setiap kartu yang terlewati kursor menjalankan animasi
       naik + bayangan, dan geseran jadi tersendat saat kartunya banyak. */
    bungkus.classList.add("sedang-geser");

    clearTimeout(rel._tunggu);
    rel._tunggu = setTimeout(function () {
      bungkus.classList.remove("sedang-geser");
      perbarui();
    }, 120);
  }, { passive: true });

  var tungguUbah;
  window.addEventListener("resize", function () {
    clearTimeout(tungguUbah);
    tungguUbah = setTimeout(function () { buatTitik(); perbarui(); }, 150);
  });

  pasangFilter();
  buatTitik();
  perbarui();

  /* Dihitung ulang setelah semua gambar selesai dimuat. Saat skrip ini
     pertama kali jalan, tinggi/lebar kartu kadang belum final, sehingga
     jumlah titik penanda bisa meleset. */
  window.addEventListener("load", function () {
    buatTitik();
    perbarui();
  });
})();