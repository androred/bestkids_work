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

  function jumlahHalaman() {
    return Math.max(1, Math.ceil(kartuTampil().length / jumlahTampil()));
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
    clearTimeout(rel._tunggu);
    rel._tunggu = setTimeout(perbarui, 80);
  });

  var tungguUbah;
  window.addEventListener("resize", function () {
    clearTimeout(tungguUbah);
    tungguUbah = setTimeout(function () { buatTitik(); perbarui(); }, 150);
  });

  pasangFilter();
  buatTitik();
  perbarui();
})();