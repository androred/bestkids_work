/* ==========================================================================
   DATA WEBSITE BESTKIDS
   Semua isi yang sering berubah (program, galeri, testimoni, FAQ)
   dikumpulkan di file ini. Untuk menambah / mengubah isi, cukup edit file
   ini saja — tampilan kartunya dibuat otomatis oleh js/render.js.

   CATATAN PENTING: di dalam file JavaScript, path gambar WAJIB memakai
   garis miring biasa ( / ), bukan garis miring terbalik ( \ ).
   Benar  : "assets/galeri/calistung1.webp"
   Salah  : "assets\galeri\calistung1.webp"   <- \g dan \c dianggap kode khusus
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. PROGRAM
   Dipakai di: program.html (katalog) dan index.html (program unggulan).
   warna : pink | blue | yellow | green | purple
           (menentukan warna kartu, badge, dan tombol — memakai class yang
           sudah ada di CSS, jadi jangan diisi selain 5 kata itu)
   -------------------------------------------------------------------------- */
var DATA_PROGRAM = [
  {
    nama: "Sensory Phonics",
    usia: "Usia 3 – 4 tahun",
    warna: "pink",
    ikon: "assets/program_sensory_phonics.png",
    deskripsi: "Program pre-reading dan pre-writing berbasis phonics dengan pendekatan multi-sensory untuk usia dini.",
    durasi: "60 menit/sesi, 2x/minggu",
    harga: "Rp [PERLU DATA HARGA]",
    link: "detail-sensory-phonics.html"
  },
  {
    nama: "Phonics",
    usia: "Usia 4 – 8 tahun",
    warna: "blue",
    ikon: "assets/program_phonics.png",
    deskripsi: "Program reading dan writing berbasis phonics untuk membangun kesiapan anak memasuki jenjang SD.",
    durasi: "Mengikuti level",
    harga: "Rp [PERLU DATA HARGA]",
    link: "detail-phonics.html"
  },
  {
    nama: "Calistung",
    usia: "Usia 5 – 8 tahun",
    warna: "yellow",
    ikon: "assets/program_calistung.png",
    deskripsi: "Program belajar membaca, menulis dan berhitung dalam bahasa Indonesia untuk membangun kesiapan anak memasuki jenjang SD.",
    durasi: "± 5 – 6 bulan/level",
    harga: "Rp [PERLU DATA HARGA]",
    link: "detail-calistung.html"
  },
  {
    nama: "Pre-Math",
    usia: "Usia 4 – 6 tahun",
    warna: "green",
    ikon: "assets/program_pre_math.png",
    deskripsi: "Program basic math skills untuk membangun kesiapan anak memasuki jenjang SD.",
    durasi: "± 6 bulan/level",
    harga: "Rp [PERLU DATA HARGA]",
    link: "detail-pre-math.html"
  },
  {
    nama: "Math Class",
    usia: "Primary 1 – 6",
    warna: "purple",
    ikon: "assets/program_math_class.png",
    deskripsi: "Program bimbingan belajar matematika dengan pendekatan yang mudah dipahami.",
    durasi: "90 menit/sesi, 2x/minggu",
    harga: "Rp [PERLU DATA HARGA]",
    link: "detail-math-class.html"
  },
  {
    nama: "English for Young Learners",
    usia: "Kids – Teens",
    warna: "pink",
    ikon: "assets/program_eanglish.png",
    deskripsi: "Program bahasa Inggris berbasis kurikulum Cambridge.",
    durasi: "Mengikuti level",
    harga: "Rp [PERLU DATA HARGA]",
    link: "detail-english.html"
  }
];

/* --------------------------------------------------------------------------
   2. GALERI
   Dipakai di: galeri.html
   kategori : belajar | event | fasilitas | karya
              (harus sama dengan data-filter pada tombol filter)
   warna    : warna label di atas foto
   alt      : boleh dikosongkan — kalau kosong dipakai judul
   -------------------------------------------------------------------------- */
var DATA_GALERI = [
  {
    foto: "assets/galeri/calistung1.webp",
    alt: "Belajar Calistung Interaktif",
    judul: "Belajar Calistung",
    keterangan: "Anak-anak antusias mengenal huruf menggunakan media kancing warna-warni.",
    kategori: "belajar",
    label: "Kegiatan Belajar",
    warna: "pink"
  },
  {
    foto: "assets/galeri/phonics5.webp",
    alt: "Lomba Mewarnai",
    judul: "Celebration Day & Lomba Mewarnai",
    keterangan: "Keseruan unjuk kreativitas dan pembagian apresiasi untuk seluruh murid.",
    kategori: "event",
    label: "Event & Lomba",
    warna: "yellow"
  },
  {
    foto: "assets/galeri/phonics8.webp",
    alt: "Sesi Phonics Games",
    judul: "Fun Phonics Word Games",
    keterangan: "Melatih kefasihan membaca kata Bahasa Inggris lewat peragaan kartu bergambar.",
    kategori: "belajar",
    label: "Kegiatan Belajar",
    warna: "blue"
  },
  {
    foto: "assets/galeri/sensory2.webp",
    alt: "Ruang Kelas Semi Private",
    judul: "Ruang Kelas Semi-Private",
    keterangan: "Ruangan bersih, aman, ber-AC, dan didesain ramah anak (max 5 murid/kelas).",
    kategori: "fasilitas",
    label: "Fasilitas Kelas",
    warna: "green"
  },
  {
    foto: "assets/galeri/sensory3.webp",
    alt: "Hasil Karya Menulis",
    judul: "Crafting & Math Origami",
    keterangan: "Menggabungkan konsep dasar geometri dengan seni lipat kertas yang seru.",
    kategori: "karya",
    label: "Hasil Karya",
    warna: "purple"
  },
  {
    foto: "assets/galeri/premath1.webp",
    alt: "Pentas Seni BESTKIDS",
    judul: "Parent Teacher Conference",
    keterangan: "Momen diskusi hangat perkembangan anak bersama orang tua murid.",
    kategori: "event",
    label: "Event & Lomba",
    warna: "pink"
  }
];

/* --------------------------------------------------------------------------
   3. TESTIMONI
   Dipakai di: index.html (carousel)
   foto       : path foto. Kalau dikosongkan (""), otomatis diganti lingkaran
                berisi huruf depan nama (pakai "inisial" + "warnaAvatar").
   program    : label program di pojok kartu. Kosongkan ("") kalau tidak ada.
   warnaLabel : pink | blue | yellow | green | purple
   -------------------------------------------------------------------------- */
var DATA_TESTIMONI = [
  {
    isi: "Akhirnya kami menemukan bimbel yang concern belajar math dan phonics dalam materi bahasa Inggris. Suka dengan cara mengajar gurunya yang detail dan personal approach, serta memastikan setiap anak tidak tertinggal teman sekelasnya.",
    nama: "Angeli Gavriel",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Angeli Gavriel.png",
    inisial: "A",
    warnaAvatar: "purple",
    program: "Math & Phonics",
    warnaLabel: "purple"
  },
  {
    isi: "Anak saya sebelumnya sempat ditolak di beberapa tempat les lain dengan alasan terlalu aktif. Hanya Best Kids yang berani menerima tantangan dan memberikan solusi. Hasilnya di luar ekspektasi, anak saya berkembang dengan sangat cepat.",
    nama: "Christy Travis",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Christy Travis.png",
    inisial: "C",
    warnaAvatar: "blue",
    program: "",
    warnaLabel: ""
  },
  {
    isi: "Anakku les Phonics di sini. Sudah berjalan lebih dari 3 bulan dan progressnya sudah terlihat. Miss-nya juga mengajar dengan sabar dan penjelasannya mudah dimengerti. Yang paling penting, anaknya happy belajar di sini.",
    nama: "Ayu Indriani",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Ayu Indriani.png",
    inisial: "A",
    warnaAvatar: "pink",
    program: "Phonics",
    warnaLabel: "blue"
  },
  {
    isi: "Anak ku les phonics disini setelah mencari cari dan cocok disini. Saat trial class anak ku merasa happy, dengan miss miss yang berpengalaman serta ramah dan sabar saat mengajar. Tempatnya juga bersih mendukung banget dalam kegiatan mengajar dikelas dan lokasi nya juga strategis! Sukses selalu bestkids!",
    nama: "Nylla Allyn",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/nylla allyn.png",
    inisial: "N",
    warnaAvatar: "blue",
    program: "Phonics",
    warnaLabel: "blue"
  },
  {
    isi: "The instructors are not only highly qualified but also incredibly patient and engaging, which really helps in building children's confidence in speaking English. The classes are tailored according to age and skill level, so every child can progress at their own pace.",
    nama: "Achmad Faizal Reza",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Achmad Faizal Reza.png",
    inisial: "A",
    warnaAvatar: "green",
    program: "English",
    warnaLabel: "pink"
  },
  {
    isi: "Tempat les rasa sekolah, karena sangat terstruktur dan terorganisir dengan baik. Ada aplikasi khusus yang menghubungkan orang tua dengan tempat les, dan ada pertemuan private antara orang tua dan teacher untuk membahas perkembangan akademis anak.",
    nama: "Lilian Daniella",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Lilian Daniella.png",
    inisial: "L",
    warnaAvatar: "pink",
    program: "",
    warnaLabel: ""
  },
  {
    isi: "Program phonics-nya sangat membantu anak saya dalam meningkatkan kemampuan membaca dan mengenal bunyi huruf. Teachers di sini sangat kreatif dan membuat pembelajaran jadi menyenangkan.",
    nama: "Melvina Karina",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Melvina Karina.png",
    inisial: "M",
    warnaAvatar: "blue",
    program: "Phonics",
    warnaLabel: "blue"
  },
  {
    isi: "Metode pengajarannya sangat baik. Anakku umur 3 tahun ikut kelas phonics-nya dan enjoy sekali. Terima kasih Bestkids Galaxy.",
    nama: "Clara Andyna",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Clara Andyna.png",
    inisial: "C",
    warnaAvatar: "yellow",
    program: "Phonics",
    warnaLabel: "blue"
  },
  {
    isi: "I like their method. Only 5 kids in a class with 2 teachers. They give extra class to students who need more lessons. Teachers are polite, cheerful, kind and pay attention to our son.",
    nama: "Yara Destani",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Yara Destani.png",
    inisial: "Y",
    warnaAvatar: "green",
    program: "",
    warnaLabel: ""
  },
  {
    isi: "Anak ku disini ambil les phonics, dengan miss-miss yang sangat berpengalaman dan perlengkapan lengkap yang menunjang proses pembelajaran. Menurutku ini tempat yang tepat untuk anak 3-8 tahun belajar membaca dan menulis dalam bahasa Inggris dengan fun learning tetapi tetap fokus. Tempatnya nyaman dan lokasi sangat strategis 👍🏻",
    nama: "Kenneth Daniel Prasetya",
    sumber: "Ulasan Google",
    foto: "assets/testimoni-bestkids/Kenneth Daniel Prasetya.png",
    inisial: "K",
    warnaAvatar: "pink",
    program: "Phonics",
    warnaLabel: "blue"
  }
];

/* --------------------------------------------------------------------------
   4. FAQ
   Dipakai di: index.html (dan halaman lain yang punya wadah #faqList)

   warna    : pink | blue | yellow   -> warna nomor 01, 02, 03, ...
              (nomornya dibuat otomatis sesuai urutan, tidak perlu ditulis)
   buka     : true  -> pertanyaan ini terbuka saat halaman dimuat
              (sebaiknya hanya satu yang true)
   lanjutan : true  -> pertanyaan ini disembunyikan dulu, baru muncul saat
              tombol "Lihat Semua Pertanyaan" diklik
   jawaban  : boleh memakai tag HTML sederhana seperti <strong>, <em>, <br>,
              <p>, dan <a href="...">
   -------------------------------------------------------------------------- */
var DATA_FAQ = [
  {
    warna: "pink",
    buka: true,
    lanjutan: false,
    pertanyaan: "Apa saja program yang ada di Bestkids Galaxy Learning Center?",
    jawaban: "Saat ini kami memiliki program untuk anak usia mulai dari 3 tahun - 18 tahun: Sensory Phonics, Phonics, Calistung, Pre-Math, Math Class, dan English For Young Learners."
  },
  {
    warna: "blue",
    buka: false,
    lanjutan: false,
    pertanyaan: "Bagaimana metode belajar yang digunakan di Bestkids Galaxy Learning Center?",
    jawaban: "Kami menggunakan metode pembelajaran yang <em>fun</em>, interaktif, dan sesuai dengan kebutuhan serta tahap perkembangan anak melalui <em>games, hands-on activities, movement, challenges</em>."
  },
  {
    warna: "yellow",
    buka: false,
    lanjutan: false,
    pertanyaan: "Berapa jumlah anak dalam satu kelas?",
    jawaban: "Kelas kami menggunakan sistem <em>semi-private</em> dengan jumlah murid dalam satu kelas terbatas <strong>hanya 5 anak saja</strong>."
  },
  {
    warna: "pink",
    buka: false,
    lanjutan: true,
    pertanyaan: "Berapa lama durasi di setiap pertemuan?",
    jawaban: "Untuk kelas <em>weekday</em>, pembelajaran berlangsung 2 kali seminggu dengan durasi 1 jam. Untuk kelas <em>weekend</em>, 1 kali seminggu dengan durasi 2 jam."
  },
  {
    warna: "blue",
    buka: false,
    lanjutan: true,
    pertanyaan: "Bagaimana cara mendaftarkan anak di Bestkids Galaxy Learning Center?",
    jawaban: "Orang tua dapat langsung menghubungi admin Bestkids via WhatsApp / Kontak Kami untuk informasi program, jadwal, biaya, dan pendaftaran."
  },
  {
    warna: "yellow",
    buka: false,
    lanjutan: true,
    pertanyaan: "Ada promo apa di Bestkids Galaxy Learning Center?",
    jawaban: "<strong>Spesial Promo Trial Class:</strong> Diskon s.d 20% dan Gratis Biaya Pendaftaran."
  },
  {
    warna: "pink",
    buka: false,
    lanjutan: true,
    pertanyaan: "Apa perbedaan program Phonics, Calistung dan Pre-Math untuk persiapan masuk SD?",
    jawaban:
      "<strong>Phonics:</strong> Program membaca dan menulis dalam Bahasa Inggris, mulai dari mengenal bunyi huruf, blending, membaca kata, menulis kalimat, hingga membaca buku cerita.<br>" +
      "<strong>Calistung:</strong> Program membaca, menulis, dan berhitung dalam Bahasa Indonesia, dari mengenal huruf dan angka hingga membaca, menulis kalimat, dan berhitung.<br>" +
      "<strong>Pre-Math:</strong> Program berhitung dengan Bahasa Inggris untuk mempersiapkan anak masuk SD, mulai dari mengenal angka hingga penjumlahan dan konsep matematika dasar lainnya." +
      "<p>Ketiganya menggunakan metode pembelajaran yang sama, dengan perbedaan utama pada bahasa pengantar dan fokus pembelajarannya.</p>"
  }
];

/* --------------------------------------------------------------------------
   5. KEUNGGULAN ("Kenapa Memilih BESTKIDS")
   Dipakai di: index.html (versi ringkas) dan tentang-kami.html (versi lengkap)
 
   warna   : blue | pink | yellow | green | purple
             menentukan warna kartu (class card-*)
   ikon    : path gambar ikon. Ingat pakai garis miring biasa ( / )
   ringkas : satu kalimat, dipakai di beranda
   lengkap : penjelasan lebih panjang, dipakai di halaman Tentang Kami.
             Kalau dikosongkan (""), otomatis memakai isi "ringkas".
   -------------------------------------------------------------------------- */
var DATA_KEUNGGULAN = [
  {
    judul: "Unlimited Free Extra Class",
    warna: "blue",
    ikon: "assets/Unlimited Free Extra Class.png",
    teks: "Jika anak membutuhkan waktu lebih untuk memahami materi kami menyediakan extra class yang dapat diikuti tanpa batas dan tanpa biaya tambahan"
  },
  {
    judul: "Semi-Private Class",
    warna: "pink",
    ikon: "assets/Semi-Private Class.png",
    teks: "Hanya 3 sampai 5 anak per kelas agar pembelajaran lebih fokus, efektif, nyaman dan kondusif."
  },
  {
    judul: "Result-Oriented",
    warna: "yellow",
    ikon: "assets/resault_oriented.png",
    teks: "Setiap kelas memiliki target pembelajaran yang jelas, sehingga orang tua dapat melihat perkembangan belajar anak secara berkala."
  },
  {
    judul: "Personal Approach",
    warna: "green",
    ikon: "assets/Personal Approach.png",
    teks: "Anak didampingi dengan pendekatan personal dan observasi intensif untuk memenuhi kebutuhan belajarnya secara optimal."
  },
  {
    judul: "Brain Boosting Activity",
    warna: "purple",
    ikon: "assets/Brain Boosting Activity.png",
    teks: "Kelas selalu diawali dengan fun games untuk membangun fokus, konsentrasi, kemampuan kognitif dan kesiapan belajar anak."
  }
];