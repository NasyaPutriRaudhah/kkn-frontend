import type { ReactNode } from 'react';
import { InfoCard, QuoteBlock, DialogScene, DialogBubble, FactChip, SpeciesCard, Timeline, TimelineItem, AlertBox, StepFlow, StepItem, SourceBox, SourceItem, CTABlock, KKNStrip, MonevGrid, MonevCard } from '@/components/forsa-digital';

export interface Chapter {
  id: string;
  emoji: string;
  label: string;
  title: string;
  desc: string;
  content: ReactNode;
}

export const chapters: Chapter[] = [
  // ─── CHAPTER 0: PENGANTAR ─────────────────────────────────────────
  {
    id: 'pengantar',
    emoji: '🌿',
    label: 'Pengantar',
    title: 'Selamat Datang di FORSA DIGITAL',
    desc: 'Sebuah perjalanan mendokumentasikan keajaiban hutan dan budaya pesisir Sebatik Barat melalui narasi visual yang menginspirasi.',
    content: (
      <>
        <KKNStrip
          main="KKN PPM Universitas Gadjah Mada"
          sub="Unit Taka Sebatik · Kecamatan Sebatik Barat, Kabupaten Nunukan · Kalimantan Utara"
          badge="2026"
        />

        <InfoCard label="Tentang Program" title="Apa itu FORSA DIGITAL?">
          <p><strong>FORSA DIGITAL (Forest Story Digital)</strong> adalah program kerja inovatif yang dirancang dalam kerangka <strong>KKN PPM UGM Unit Taka Sebatik 2026</strong> untuk mendokumentasikan dan menyajikan potensi hutan serta budaya yang ada di pesisir Kecamatan Sebatik Barat dalam bentuk narasi visual yang menarik dan dapat dikenal oleh masyarakat luas.</p>
          <br />
          <p>Program ini menggabungkan pandangan kehutanan dengan kearifan lokal melalui foto, video singkat, poster, dan infografis yang menyajikan <strong>ekosistem mangrove</strong>, vegetasi pantai, aktivitas masyarakat sekitar, serta nilai budaya setempat.</p>
        </InfoCard>

        <QuoteBlock
          text="Hutan bukan sekadar pohon — ia adalah warisan hidup yang menyimpan cerita generasi. Saatnya kita rekam, lestarikan, dan bagikan kepada dunia."
          source="Semangat Program FORSA DIGITAL · KKN PPM UGM Taka Sebatik 2026"
        />

        <DialogScene title="Dialog Perkenalan">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Kak, kenapa kita perlu mendokumentasikan hutan dan budaya Sebatik ini secara digital?
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            Ekosistem mangrove Sebatik menyimpan keanekaragaman hayati yang belum banyak orang tahu! Kalau tidak kita dokumentasikan sekarang, pengetahuan itu bisa hilang bersama perubahan zaman. <strong>FORSA DIGITAL hadir untuk menjembatani ilmu dengan cerita.</strong>
          </DialogBubble>
          <DialogBubble avatar="👴" name="Tetua Masyarakat Sebatik" variant="elder">
            Benar sekali, nak. Nenek moyang kami telah menjaga hutan ini dengan adat dan tradisi. Kalau adik-adik dari UGM mau merekam dan menyebarkan ceritanya — itulah cara terbaik melestarikan warisan kami untuk anak cucu.
          </DialogBubble>
          <DialogBubble position="right" avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Sebagai bagian dari KKN PPM UGM Taka Sebatik 2026, kami siap menjadi jembatan antara ilmu pengetahuan dan kearifan lokal Sebatik!
          </DialogBubble>
        </DialogScene>

        <InfoCard label="Tujuan Program" title="Mengapa Program Ini Penting?">
          <p>Kecamatan Sebatik Barat memiliki posisi strategis sebagai wilayah perbatasan Indonesia–Malaysia yang menyimpan kekayaan ekologis dan budaya luar biasa. Namun, potensi ini belum terdokumentasi secara sistematis. <strong>FORSA DIGITAL hadir untuk mengubah itu.</strong></p>
          <br />
          <div className="flex flex-wrap gap-2.5">
            <FactChip>Ekosistem Mangrove</FactChip>
            <FactChip color="blue">Kearifan Lokal</FactChip>
            <FactChip color="gold">Narasi Visual</FactChip>
            <FactChip>Vegetasi Pantai</FactChip>
            <FactChip color="blue">Budaya Pesisir</FactChip>
            <FactChip color="gold">Media Digital</FactChip>
          </div>
        </InfoCard>

        <CTABlock
          bigText="Mari Jelajahi Keajaiban Sebatik Barat"
          subText="Setiap halaman buku saku ini adalah jendela menuju kekayaan alam dan budaya yang menakjubkan. Dipersembahkan oleh mahasiswa KKN PPM UGM Unit Taka Sebatik 2026 — dengan sepenuh hati untuk Sebatik dan Indonesia."
        />

        <SourceBox title="Dasar Referensi">
          <SourceItem>Kementerian LHK. (2021). <em>Peta Mangrove Nasional Indonesia</em>. Jakarta: KLHK.</SourceItem>
          <SourceItem>Wahyudi, A.J. et al. (2020). Ekosistem mangrove Indonesia: tinjauan status dan ancaman. <em>Jurnal Pengelolaan Sumberdaya Alam dan Lingkungan</em>, 10(3), 493–507.</SourceItem>
          <SourceItem>Kusmana, C. (2014). Distribution and current status of mangrove forests in Indonesia. <em>Mangrove Ecosystems of Asia</em>, 37–60. Springer.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 1: MENGENAL SEBATIK BARAT ──────────────────────────────
  {
    id: 'sebatik-barat',
    emoji: '🏝️',
    label: 'Sebatik Barat',
    title: 'Mengenal Sebatik Barat',
    desc: 'Pulau di ujung timur Kalimantan Utara — tanah perbatasan yang menyimpan kekayaan alam dan budaya yang belum banyak diketahui dunia.',
    content: (
      <>
        <KKNStrip
          main="Wilayah Penugasan KKN PPM UGM"
          sub="Unit Taka Sebatik · Kec. Sebatik Barat, Kab. Nunukan, Kalimantan Utara · 2026"
          badge="Lokasi KKN"
        />

        <InfoCard label="Profil Wilayah" labelColor="blue" title="Sebatik Barat: Tanah Perbatasan yang Istimewa">
          <p>Kecamatan Sebatik Barat merupakan salah satu wilayah dalam Pulau Sebatik, Kabupaten Nunukan, Provinsi Kalimantan Utara. Secara geografis, pulau ini terbagi dua oleh garis perbatasan internasional antara <strong>Indonesia dan Malaysia</strong>, menjadikannya sebagai salah satu pulau terluar Indonesia yang unik dan strategis.</p>
          <br />
          <p>Wilayah pesisir Sebatik Barat dicirikan oleh garis pantai yang bervariasi — dari pantai berpasir, pantai berbatu, hingga kawasan mangrove yang lebat. Kondisi ini menciptakan habitat yang kaya bagi berbagai jenis flora dan fauna, sekaligus menjadi sumber penghidupan bagi masyarakat nelayan sekitarnya.</p>
        </InfoCard>

        <QuoteBlock
          text="Sebatik bukan hanya soal garis batas negara — ia adalah contoh nyata bagaimana alam dan manusia bisa hidup berdampingan di wilayah paling ujung tanah air. Justru di sinilah Indonesia perlu hadir lebih kuat melalui pemberdayaan budaya dan dokumentasi lingkungan."
          source="Direktorat Jenderal Perbatasan, Kemendagri (2022) · Dikaji oleh Tim KKN PPM UGM Taka Sebatik 2026"
          color="blue"
        />

        <DialogScene title="Mengenal Tanah Sebatik">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM Taka Sebatik" variant="student">
            Pak, saya baru pertama kali ke Sebatik. Apa yang membuat wilayah ini begitu spesial dibanding pulau-pulau lain di Indonesia?
          </DialogBubble>
          <DialogBubble position="right" avatar="👴" name="Pak Hamid, Nelayan Senior" variant="elder">
            Ha, banyak orang tidak tahu nak! Sebatik itu istimewa karena <strong>alam dan budayanya hidup bersamaan</strong> dengan cara yang unik. Di sini mangrovenya tebal, ikannya melimpah, dan orang-orangnya hidup berdampingan antara dua negara sudah turun-temurun.
          </DialogBubble>
          <DialogBubble avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            Betul! Dari sisi ekologi, Sebatik Barat menyimpan spesies mangrove yang bernilai tinggi secara ekologis maupun ekonomi. <strong>Sayang kalau tidak kita dokumentasikan — dan KKN PPM UGM hadir tepat untuk itu!</strong>
          </DialogBubble>
        </DialogScene>

        <InfoCard label="Fakta Menarik" labelColor="blue" title="Sebatik dalam Angka dan Fakta">
          <div className="flex flex-wrap gap-2.5">
            <FactChip color="blue">Luas ±246 km²</FactChip>
            <FactChip color="blue">Pesisir Perbatasan RI-Malaysia</FactChip>
            <FactChip color="gold">Multi-etnis: Tidung, Bugis, Jawa</FactChip>
            <FactChip>Mangrove Tebal di Pesisir Barat</FactChip>
            <FactChip color="gold">Zona Tangkap Ikan Produktif</FactChip>
            <FactChip color="blue">Kab. Nunukan, Kalimantan Utara</FactChip>
          </div>
        </InfoCard>

        <SourceBox title="Referensi">
          <SourceItem>BPS Kabupaten Nunukan. (2023). <em>Kecamatan Sebatik Barat dalam Angka 2023</em>. Nunukan: BPS.</SourceItem>
          <SourceItem>Kemendagri. (2022). <em>Profil Wilayah Perbatasan Pulau Sebatik</em>. Jakarta: Ditjen Bina Pemerintahan Desa.</SourceItem>
          <SourceItem>Dephut RI. (2019). <em>Rencana Pengelolaan Hutan Lindung Sebatik</em>. Jakarta: Kementerian Kehutanan.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 2: EKOSISTEM MANGROVE ──────────────────────────────────
  {
    id: 'mangrove',
    emoji: '🌳',
    label: 'Mangrove',
    title: 'Ekosistem Mangrove',
    desc: 'Benteng hijau di antara laut dan darat — mangrove Sebatik Barat adalah jantung dari keseimbangan alam pesisir yang perlu kita jaga bersama.',
    content: (
      <>
        <InfoCard label="Ilmu Pengetahuan" title="Apa Itu Ekosistem Mangrove?">
          <p>Mangrove adalah komunitas tumbuhan berkayu yang tumbuh di daerah pasang-surut pesisir tropis dan subtropis. Ekosistem ini merupakan salah satu ekosistem paling produktif di dunia — dengan kemampuan menyimpan karbon (<em>blue carbon</em>) yang jauh melampaui hutan darat. Di pesisir Sebatik Barat, <strong>mangrove berfungsi sebagai garis pertahanan alami</strong> terhadap abrasi, gelombang, dan badai sekaligus sebagai tempat berkembang biak berbagai spesies ikan bernilai ekonomi tinggi.</p>
          <br />
          <p>Menurut Donato et al. (2011), hutan mangrove Indonesia menyimpan rata-rata <strong>1.023 Mg C ha⁻¹</strong> — menjadikannya penyimpan karbon per-hektar tertinggi di antara semua ekosistem hutan tropis.</p>
        </InfoCard>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-5">
          <SpeciesCard icon="🌱" name="Bakau" latin="Rhizophora apiculata" desc="Dominan di pesisir, akar tunjang unik, habitat ikan dan kepiting" />
          <SpeciesCard icon="🌿" name="Api-api" latin="Avicennia marina" desc="Pionir reklamasi, tumbuh di zona pasang surut ekstrem" />
          <SpeciesCard icon="🍃" name="Pedada" latin="Sonneratia alba" desc="Buah dapat dimakan, penting untuk kelelawar penyerbuk" />
          <SpeciesCard icon="🌾" name="Tancang" latin="Bruguiera gymnorrhiza" desc="Kayu keras, digunakan lokal untuk bahan bangunan" />
        </div>

        <QuoteBlock
          text="Mangrove adalah laboratorium alam yang hidup. Kehilangan satu hektar mangrove bukan hanya hilangnya pohon, tapi runtuhnya fondasi ekosistem yang menopang ribuan makhluk dan jutaan manusia pesisir."
          source="Giri et al., 2011. Global distribution and conservation of mangrove forests. Endangered Species Research, 15(1), 1–13."
        />

        <DialogScene title="Belajar dari Mangrove">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Kak Ranger, tadi saya lihat ada nelayan yang memotong beberapa pohon mangrove. Apa itu tidak merusak ekosistem?
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            <strong>Masalahnya ketika dilakukan berlebihan tanpa rotasi.</strong> Sebatik punya kearifan lokal yang mengatur kapan dan berapa banyak yang boleh diambil. Itu contoh nyata pengelolaan berbasis ekosistem yang perlu kita dokumentasikan!
          </DialogBubble>
          <DialogBubble avatar="👴" name="Pak Hamid" variant="elder">
            Sejak kecil saya sudah diajarkan — <em>&ldquo;jangan ambil lebih dari yang kamu butuhkan, dan jangan pernah tebang pohon yang masih muda.&rdquo;</em> Itu bukan aturan tertulis, tapi mendarah daging di sini.
          </DialogBubble>
        </DialogScene>

        <SourceBox title="Referensi Ilmiah">
          <SourceItem>Donato, D.C. et al. (2011). Mangroves among the most carbon-rich forests in the tropics. <em>Nature Geoscience</em>, 4(5), 293–297.</SourceItem>
          <SourceItem>Giri, C. et al. (2011). Status and distribution of mangrove forests of the world. <em>Global Ecology and Biogeography</em>, 20(1), 154–159.</SourceItem>
          <SourceItem>Noor, Y.R., Khazali, M., &amp; Suryadiputra, I.N.N. (2006). <em>Panduan Pengenalan Mangrove di Indonesia</em>. Bogor: Wetlands International.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 3: VEGETASI PANTAI ─────────────────────────────────────
  {
    id: 'vegetasi-pantai',
    emoji: '🌴',
    label: 'Vegetasi Pantai',
    title: 'Vegetasi Pantai Sebatik',
    desc: 'Di balik garis pantai Sebatik Barat, tumbuh-tumbuhan tangguh menjaga keseimbangan antara laut dan darat — masing-masing dengan peran uniknya.',
    content: (
      <>
        <InfoCard label="Ilmu Pengetahuan" title="Zonasi Vegetasi Pantai">
          <p>Vegetasi pantai terbagi dalam zonasi berdasarkan jarak dari garis laut dan toleransi terhadap salinitas. <strong>Zona terdepan</strong> dihuni mangrove yang toleran garam ekstrem. Di belakangnya terdapat <strong>zona peralihan (ecotone)</strong> dengan vegetasi seperti Nipah (<em>Nypa fruticans</em>) yang menjadi penghasil gula tradisional. Lebih ke darat, tumbuh formasi <strong>Barringtonia-Pes-caprae</strong> yang tahan terhadap angin laut dan semprotan air asin.</p>
        </InfoCard>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 my-5">
          <SpeciesCard icon="🥥" name="Kelapa Pantai" latin="Cocos nucifera" desc="Multifungsi, penanda budaya, sumber pangan utama pesisir" />
          <SpeciesCard icon="🌿" name="Nipah" latin="Nypa fruticans" desc="Penghasil gula dan atap rumah tradisional masyarakat" />
          <SpeciesCard icon="🌺" name="Ketapang" latin="Terminalia catappa" desc="Pohon peneduh, buah dimakan, daun obat tradisional" />
          <SpeciesCard icon="🌱" name="Kangkung Laut" latin="Ipomoea pes-caprae" desc="Stabilisator pasir pantai, penutup tanah alami yang vital" />
          <SpeciesCard icon="🍃" name="Pandan Laut" latin="Pandanus odoratissimus" desc="Bahan anyaman tradisional, aroma khas, tumbuh di tepi pantai" />
          <SpeciesCard icon="🌾" name="Cemara Laut" latin="Casuarina equisetifolia" desc="Penahan angin dan abrasi, kayu berkualitas tinggi" />
        </div>

        <DialogScene title="Menelusuri Vegetasi Bersama">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Bu, daun apa ini? Saya lihat banyak tumbuh di sepanjang pantai, daunnya seperti hati ganda...
          </DialogBubble>
          <DialogBubble position="right" avatar="👴" name="Ibu Salmah, Petani Pesisir" variant="elder">
            Oh itu <em>Tapak Kuda</em> — Ipomoea pes-caprae. Nenek moyang kami menyebutnya <strong>&ldquo;penjaga pantai yang setia&rdquo;</strong>. Akarnya menjalar dan mengikat pasir agar tidak terbawa ombak. Daunnya juga bisa untuk obat kulit terkena ubur-ubur!
          </DialogBubble>
          <DialogBubble avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            Tepat sekali! Ipomoea pes-caprae memang <strong>tumbuhan pionir pantai berpasir</strong> yang sangat penting. Penelitian membuktikan efektivitasnya mengurangi erosi pantai hingga 60% pada daerah dengan tutupan rapat!
          </DialogBubble>
          <DialogBubble position="right" avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Ada ilmu tradisional DAN ilmu modern yang membuktikan hal yang sama! Ini yang harus kita rekam di FORSA DIGITAL KKN PPM UGM kita!
          </DialogBubble>
        </DialogScene>

        <SourceBox title="Referensi">
          <SourceItem>Tjitrosoedirdjo, S.S. (2016). Ekologi tumbuhan pantai berpasir di Kalimantan. <em>Jurnal Biologi Indonesia</em>, 12(1), 45–58.</SourceItem>
          <SourceItem>Setyawan, A.D. &amp; Winarno, K. (2006). Pemanfaatan langsung ekosistem mangrove di Jawa Tengah. <em>Biodiversitas</em>, 7(3), 282–291.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 4: BUDAYA & KEARIFAN LOKAL ────────────────────────────
  {
    id: 'budaya',
    emoji: '🎭',
    label: 'Budaya',
    title: 'Budaya & Kearifan Lokal',
    desc: 'Di balik kerimbunan mangrove dan derasnya gelombang, tersimpan kearifan yang telah menjaga keseimbangan alam Sebatik selama berabad-abad.',
    content: (
      <>
        <InfoCard label="Masyarakat & Budaya" labelColor="gold" title="Masyarakat Pesisir Sebatik: Multietnis yang Harmonis">
          <p>Masyarakat Sebatik Barat merupakan komunitas multietnis yang terdiri atas suku <strong>Tidung</strong> (sebagai penduduk asli), suku <strong>Bugis</strong> (pelaut dan pedagang ulung), serta berbagai etnis pendatang lainnya. Keberagaman ini memperkaya khazanah budaya lokal melalui proses akulturasi yang damai selama ratusan tahun.</p>
          <br />
          <p>Kearifan lokal masyarakat Sebatik dalam mengelola sumber daya alam pesisir tercermin dalam berbagai praktik tradisional: mulai dari <strong>aturan panen ikan musiman</strong>, <strong>ritual sebelum melaut</strong>, hingga <strong>pantangan tertentu</strong> yang secara tidak langsung berfungsi sebagai mekanisme konservasi ekologis.</p>
        </InfoCard>

        <QuoteBlock
          text="Kearifan lokal bukan mitos belaka — ia adalah ilmu yang lahir dari pengamatan panjang dan diuji oleh waktu. Ketika sains modern akhirnya membuktikan apa yang nenek moyang kita sudah tahu sejak dulu, itulah saat kita seharusnya merunduk hormat pada pengetahuan leluhur."
          source="Berkes, F. (2012). Sacred Ecology. Routledge. · Direfleksikan oleh Tim KKN PPM UGM Taka Sebatik 2026"
          color="gold"
        />

        <DialogScene title="Kearifan yang Diwariskan">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM Taka Sebatik" variant="student">
            Kek, saya dengar ada tradisi khusus sebelum nelayan berangkat melaut di sini. Boleh ceritakan?
          </DialogBubble>
          <DialogBubble position="right" avatar="👴" name="Kakek Daud, Pemuka Adat Tidung" variant="elder">
            Ohhh, itu <strong>Ritual Mappadendang</strong> — sebelum musim tangkap tiba, kami berkumpul, berdoa, dan membacakan syair-syair leluhur di tepi pantai. Intinya: meminta izin kepada alam dan berjanji tidak akan mengambil lebih dari yang dibutuhkan.
          </DialogBubble>
          <DialogBubble avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            Dari perspektif ilmu lingkungan, ritual seperti ini sangat efektif sebagai <strong>mekanisme regulasi sosial terhadap eksploitasi sumber daya!</strong> Komunitas yang masih mempraktikkan ritual serupa memiliki stok ikan yang lebih stabil.
          </DialogBubble>
          <DialogBubble position="right" avatar="👴" name="Kakek Daud" variant="elder">
            Kami sangat senang adik-adik dari UGM ada di sini untuk mendokumentasikan semua ini. Jangan sampai warisan kami hilang ditelan zaman!
          </DialogBubble>
        </DialogScene>

        <InfoCard label="Nilai Budaya" labelColor="gold" title="Kearifan Lokal yang Perlu Didokumentasikan">
          <div className="flex flex-wrap gap-2.5">
            <FactChip color="gold">Nyanyian Nelayan Tradisional</FactChip>
            <FactChip color="gold">Ritual Sebelum Melaut</FactChip>
            <FactChip>Tanaman Obat Pesisir</FactChip>
            <FactChip color="gold">Teknik Memancing Tradisional</FactChip>
            <FactChip>Arsitektur Rumah Pantai</FactChip>
            <FactChip color="gold">Kerajinan dari Nipah &amp; Pandan</FactChip>
          </div>
        </InfoCard>

        <SourceBox title="Referensi">
          <SourceItem>Berkes, F. (2012). <em>Sacred Ecology: Traditional Ecological Knowledge and Resource Management</em> (3rd ed.). Routledge.</SourceItem>
          <SourceItem>Ginting, L. &amp; Purnomo, H. (2018). Kearifan lokal masyarakat Tidung dalam pengelolaan hutan mangrove. <em>Jurnal Ilmu Kehutanan</em>, 12(2), 120–133.</SourceItem>
          <SourceItem>Suhartini. (2009). Kajian kearifan lokal masyarakat dalam pengelolaan sumber daya alam. <em>Prosiding Seminar Nasional UNY</em>. Yogyakarta: UNY Press.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 5: NARASI VISUAL & AKSI NYATA ──────────────────────────
  {
    id: 'narasi-visual',
    emoji: '📸',
    label: 'Narasi Visual',
    title: 'Narasi Visual & Aksi Nyata',
    desc: 'Dari halaman buku ke dunia nyata — panduan praktis untuk mewujudkan FORSA DIGITAL sebagai gerakan dokumentasi yang berdampak.',
    content: (
      <>
        <InfoCard label="Strategi Dokumentasi" labelColor="indigo" title="Narasi Visual yang Bercerita, Bukan Sekadar Foto">
          <p>Narasi visual yang efektif bukan hanya soal keindahan estetika — ia harus <strong>menceritakan sesuatu yang menggerakkan</strong>. Pendekatan <strong>Photovoice</strong> (Wang &amp; Burris, 1997) memberikan kamera kepada masyarakat lokal untuk mendokumentasikan perspektif mereka sendiri — teknik ini terbukti menghasilkan konten yang lebih autentik dan lebih efektif dalam menggerakkan perubahan sosial.</p>
        </InfoCard>

        <DialogScene title="Diskusi Strategi Konten">
          <DialogBubble avatar="🎓" name="Tim FORSA DIGITAL · KKN PPM UGM" variant="student">
            Kak, konten apa yang paling efektif untuk platform digital? Kita mau jangkau anak muda juga kan, bukan hanya akademisi?
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Koordinator Program" variant="ranger">
            <strong>Kuncinya ada di storytelling!</strong> Bukan angka teknis — tapi cerita manusia di balik ekosistem. Ubah data jadi narasi. Itu yang viral. Itu yang menggerakkan.
          </DialogBubble>
          <DialogBubble avatar="👴" name="Pak Hamid" variant="elder">
            <strong>Libatkan kami, masyarakat sini, sebagai narator!</strong> Kalau yang bercerita orang Sebatik sendiri, itu rasanya beda. Lebih nyata, lebih hidup. Saya siap jadi narator untuk konten KKN PPM UGM kalian!
          </DialogBubble>
          <DialogBubble position="right" avatar="🎓" name="Tim FORSA DIGITAL · KKN PPM UGM" variant="student">
            Ide brilian, Pak! Kita buat serial konten: <strong>&ldquo;Suara Pesisir Sebatik&rdquo;</strong> — dari mulut masyarakat lokal langsung ke layar Indonesia!
          </DialogBubble>
        </DialogScene>

        <InfoCard label="Rencana Konten" labelColor="indigo" title="Output FORSA DIGITAL KKN PPM UGM Taka Sebatik 2026">
          <div className="flex flex-wrap gap-2.5">
            <FactChip color="indigo">Foto Ekosistem</FactChip>
            <FactChip color="indigo">Reels / Short Video</FactChip>
            <FactChip color="gold">Infografis Ilmiah</FactChip>
            <FactChip>Peta Potensi</FactChip>
            <FactChip color="gold">Wawancara Tetua</FactChip>
            <FactChip color="indigo">Konten Media Sosial</FactChip>
            <FactChip>E-Booklet Digital</FactChip>
            <FactChip color="gold">Poster Edukatif</FactChip>
          </div>
        </InfoCard>

        <CTABlock
          bigText="Bersama KKN PPM UGM Kita Jaga Pesisir Sebatik"
          subText="FORSA DIGITAL bukan hanya tugas KKN — ia adalah gerakan nyata. Setiap foto yang diambil, setiap cerita yang direkam, setiap infografis yang dibuat oleh Tim KKN PPM UGM Taka Sebatik 2026 adalah batu bata yang membangun kesadaran publik tentang betapa berharganya warisan alam dan budaya Sebatik Barat."
        />

        <SourceBox title="Referensi Utama">
          <SourceItem>Berkes, F. (2012). <em>Sacred Ecology</em> (3rd ed.). Routledge.</SourceItem>
          <SourceItem>Donato, D.C. et al. (2011). Mangroves among the most carbon-rich forests. <em>Nature Geoscience</em>, 4(5), 293–297.</SourceItem>
          <SourceItem>Giri, C. et al. (2011). Status and distribution of mangrove forests. <em>Global Ecology and Biogeography</em>, 20(1), 154–159.</SourceItem>
          <SourceItem>Ginting, L. &amp; Purnomo, H. (2018). Kearifan lokal masyarakat Tidung. <em>Jurnal Ilmu Kehutanan</em>, 12(2), 120–133.</SourceItem>
          <SourceItem>Kementerian LHK. (2021). <em>Peta Mangrove Nasional Indonesia</em>. Jakarta: KLHK.</SourceItem>
          <SourceItem>Kusmana, C. (2014). Distribution and current status of mangrove forests in Indonesia. <em>Mangrove Ecosystems of Asia</em>, 37–60. Springer.</SourceItem>
          <SourceItem>Noor, Y.R. et al. (2006). <em>Panduan Pengenalan Mangrove di Indonesia</em>. Bogor: Wetlands International.</SourceItem>
          <SourceItem>Wang, C. &amp; Burris, M.A. (1997). Photovoice: Concept, methodology, and use. <em>Health Education &amp; Behavior</em>, 24(3), 369–387.</SourceItem>
          <SourceItem>BPS Kabupaten Nunukan. (2023). <em>Kecamatan Sebatik Barat dalam Angka 2023</em>. Nunukan: BPS.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 6: PENANAMAN MANGROVE ─────────────────────────────────
  {
    id: 'penanaman',
    emoji: '🌱',
    label: 'Penanaman',
    title: 'Cara Penanaman Mangrove',
    desc: 'Menanam mangrove bukan sekadar menancapkan bibit ke lumpur — ada ilmu dan urutan yang harus dipahami agar pohon tumbuh kuat dan memberi manfaat jangka panjang.',
    content: (
      <>
        <InfoCard label="Persiapan Awal" title="Kenali Lokasi Sebelum Menanam">
          <p>Keberhasilan penanaman mangrove sangat ditentukan oleh kesesuaian lokasi. Sebelum memulai, Tim KKN PPM UGM Taka Sebatik 2026 perlu melakukan <strong>survei awal</strong> untuk menilai: substrat (lumpur, pasir berlumpur, atau berpasir), kisaran pasang-surut, salinitas air, serta ancaman yang ada seperti gelombang besar atau aktivitas manusia. Jangan pernah menanam di lokasi yang tidak sesuai karena tingkat kematian bibit akan sangat tinggi.</p>
          <br />
          <div className="flex flex-wrap gap-2.5">
            <FactChip>Zona Pasang Surut</FactChip>
            <FactChip color="blue">Salinitas 10–30 ppt</FactChip>
            <FactChip color="gold">Suhu 20–35°C</FactChip>
            <FactChip>Substrat Berlumpur</FactChip>
            <FactChip color="teal">Jauh dari Ombak Besar</FactChip>
          </div>
        </InfoCard>

        <InfoCard label="Pemilihan Bibit" title="Memilih Bibit yang Tepat">
          <p>Gunakan <strong>propagul</strong> (buah yang sudah tua dan siap berkecambah) atau bibit dari persemaian yang berumur minimal 3–6 bulan. Untuk lokasi Sebatik Barat, spesies yang paling direkomendasikan adalah <em>Rhizophora apiculata</em> dan <em>R. mucronata</em> karena toleransi tinggi terhadap kondisi pasang-surut setempat. Bibit yang baik memiliki batang tegak, daun hijau segar, tidak berlubang atau layu, dan perakaran kompak.</p>
        </InfoCard>

        <StepFlow>
          <StepItem num={1} title="Survei dan pemetaan lokasi tanam" tags={[{ label: 'Persiapan' }, { label: '1–2 hari sebelum tanam', color: 'amber' }]}>
            Tandai area tanam berdasarkan hasil survei substrat dan pasang-surut. Pilih zona intertidal yang tergenang 2–4 jam per hari. Buat sketsa peta sederhana dengan titik koordinat GPS untuk dokumentasi FORSA DIGITAL.
          </StepItem>
          <StepItem num={2} title="Siapkan alat dan bahan" tags={[{ label: 'Peralatan' }]}>
            Ajir bambu/kayu (tinggi 60–80 cm) untuk penyangga, tali rafia, bibit propagul atau bibit polybag, tugal (kayu runcing untuk melubangi substrat), sarung tangan, dan sepatu boot. Untuk skala besar, siapkan tali grid untuk memastikan jarak tanam seragam.
          </StepItem>
          <StepItem num={3} title="Tentukan jarak dan pola tanam" tags={[{ label: 'Teknis' }, { label: 'Jarak 1×1 m atau 2×2 m', color: 'teal' }]}>
            Jarak tanam standar adalah <strong>1 × 1 m</strong> untuk pemulihan cepat atau <strong>2 × 2 m</strong> untuk pertumbuhan optimal jangka panjang. Gunakan pola bujur sangkar atau segitiga sama sisi. Tandai setiap titik tanam dengan ajir sementara sebelum mulai menanam.
          </StepItem>
          <StepItem num={4} title="Proses penanaman" tags={[{ label: 'Lakukan saat air surut', color: 'amber' }]}>
            Waktu terbaik menanam adalah <strong>saat air surut</strong>. Buat lubang dengan tugal sedalam 20–30 cm. Masukkan propagul dengan posisi tegak, ujung runcing ke bawah, tanam sedalam 1/3 panjang propagul. Untuk bibit polybag, sobek polybag hati-hati, masukkan akar dan media tanamnya bersama, lalu padatkan substrat di sekitar bibit.
          </StepItem>
          <StepItem num={5} title="Pasang ajir dan ikatan" tags={[{ label: 'Wajib untuk semua bibit', color: 'teal' }]}>
            Tancapkan ajir bambu di sisi bibit, ikat batang bibit ke ajir menggunakan tali rafia dengan simpul longgar (bukan simpul mati) agar tidak melukai batang. Satu bibit cukup satu ajir. Ajir berfungsi sebagai penyangga terhadap arus dan gelombang kecil selama fase akar belum kuat.
          </StepItem>
          <StepItem num={6} title="Dokumentasi dan pencatatan" tags={[{ label: 'FORSA DIGITAL' }, { label: 'Wajib tercatat', color: 'amber' }]}>
            Catat jumlah bibit tanam, koordinat GPS, tanggal, spesies, dan kondisi cuaca. Foto setiap titik tanam untuk rekam jejak FORSA DIGITAL. Data ini menjadi dasar pemantauan pertumbuhan di kemudian hari.
          </StepItem>
        </StepFlow>

        <AlertBox type="warning" icon="⚠️">
          <strong>Perhatian:</strong> Hindari menanam pada musim angin kencang atau saat tinggi gelombang &gt;0,5 m. Bibit yang baru ditanam sangat rentan terhadap gangguan fisik dalam 2–4 minggu pertama (fase kritis). Idealnya pilih musim tenang (April–Oktober di perairan Kalimantan Utara).
        </AlertBox>

        <DialogScene title="Praktik Penanaman di Lapangan">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Kak, propagul ini langsung ditancap ke lumpur begitu saja? Tidak perlu direndam dulu?
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            Propagul <em>Rhizophora</em> memang langsung tanam — tidak perlu perendaman karena ia sudah berkecambah di pohon induknya. <strong>Yang penting: tanam tegak, jangan miring!</strong> Kemiringan &gt;15° akan menghambat pembentukan akar tunjang dan meningkatkan risiko bibit tumbang terkena arus.
          </DialogBubble>
          <DialogBubble avatar="👴" name="Pak Hamid, Nelayan Senior" variant="elder">
            Kami dari dulu menanam bakau pas air habis surut — biar bisa lihat betul kondisi tanahnya. Nenek moyang bilang: <em>&ldquo;tanam di lumpur basah, bukan lumpur kering&rdquo;</em>. Kalau kering terlalu lama, akar tidak mau tumbuh.
          </DialogBubble>
          <DialogBubble position="right" avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Jadi kearifan lokal Pak Hamid itu sejalan dengan SOP teknis — menanam di lumpur basah saat surut! Ini yang akan kita dokumentasikan di FORSA DIGITAL sebagai bukti sains dan tradisi berjalan bersama.
          </DialogBubble>
        </DialogScene>

        <QuoteBlock
          text="Penanaman mangrove yang berhasil dimulai jauh sebelum bibit menyentuh tanah — ia dimulai dari pemilihan lokasi yang tepat, bibit yang sehat, dan tangan yang paham apa yang mereka tanam."
          source="Diadaptasi dari Alongi, D.M. (2002). Present state and future of the world&rsquo;s mangrove forests. Environmental Conservation, 29(3), 331–349."
        />

        <SourceBox title="Referensi Penanaman">
          <SourceItem>Alongi, D.M. (2002). Present state and future of the world&rsquo;s mangrove forests. <em>Environmental Conservation</em>, 29(3), 331–349.</SourceItem>
          <SourceItem>Elster, C. (2000). Reasons for reforestation success and failure with three mangrove species in Colombia. <em>Forest Ecology and Management</em>, 131(1–3), 201–214.</SourceItem>
          <SourceItem>Noor, Y.R., Khazali, M. &amp; Suryadiputra, I.N.N. (2006). <em>Panduan Pengenalan Mangrove di Indonesia</em>. Bogor: Wetlands International.</SourceItem>
          <SourceItem>BPDAS-HL Mahakam Berau. (2020). <em>Pedoman Teknis Rehabilitasi Mangrove di Kalimantan</em>. Samarinda: KLHK.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 7: PEMELIHARAAN MANGROVE ──────────────────────────────
  {
    id: 'pemeliharaan',
    emoji: '🪴',
    label: 'Pemeliharaan',
    title: 'Pemeliharaan Mangrove',
    desc: 'Menanam adalah awal — memelihara adalah tanggung jawab. Tanpa pemeliharaan yang konsisten, investasi penanaman bisa sia-sia dalam hitungan minggu.',
    content: (
      <>
        <InfoCard label="Prinsip Dasar" labelColor="gold" title="Mengapa Pemeliharaan Sangat Kritis?">
          <p>Fase 0–6 bulan pertama adalah masa paling kritis dalam siklus hidup bibit mangrove yang baru ditanam. Pada fase ini, akar belum cukup kuat untuk menopang batang dari gangguan arus, dan bibit belum mampu bersaing dengan gulma. Tanpa pemeliharaan rutin, tingkat kematian bibit bisa mencapai <strong>60–80%</strong> — sebuah kerugian besar yang mudah dicegah dengan intervensi yang tepat waktu.</p>
        </InfoCard>

        <Timeline>
          <TimelineItem period="Minggu 1–2 setelah tanam" title="Pemeriksaan harian kondisi bibit">
            Periksa setiap bibit: apakah masih tegak, ajir masih kokoh, dan tidak ada bibit yang terbawa arus atau hanyut. Tegakkan kembali bibit yang miring. Catat jumlah bibit yang mati atau hilang untuk data awal FORSA DIGITAL.
          </TimelineItem>
          <TimelineItem dotColor="amber" period="Bulan 1–3" periodColor="amber" title="Penyulaman (replanting) bibit mati">
            Ganti segera bibit yang mati dengan bibit baru dari stok cadangan. Lakukan penyulaman maksimal 2 minggu setelah bibit dinyatakan mati agar tidak terlambat memanfaatkan musim tanam. Target: tingkat hidup (survival rate) minimal 70% pada akhir bulan ke-3.
          </TimelineItem>
          <TimelineItem dotColor="teal" period="Bulan 1–6" periodColor="teal" title="Pengendalian gulma dan sampah">
            Bersihkan gulma (terutama alga dan tumbuhan merambat) yang menutupi bibit. Angkat sampah plastik dan debris yang tersangkut di batang bibit karena dapat menghambat pertumbuhan dan menarik hama. Lakukan setiap 2 minggu sekali di bulan pertama, kemudian bulanan.
          </TimelineItem>
          <TimelineItem dotColor="blue" period="Bulan 3–12" periodColor="blue" title="Pemantauan pertumbuhan dan penguatan ajir">
            Ukur tinggi bibit dan hitung jumlah daun setiap bulan. Perkuat atau ganti ajir yang patah/lapuk. Mulai longgarkan ikatan tali yang sudah terlalu ketat seiring bertambahnya diameter batang. Pada bibit yang sudah memiliki akar tunjang kuat, ajir bisa dilepas.
          </TimelineItem>
          <TimelineItem period="Bulan 6–24" title="Pemeliharaan intensif berkurang, pengawasan tetap">
            Bibit yang telah melewati 6 bulan dengan baik mulai memasuki fase mandiri. Frekuensi pemeliharaan dikurangi menjadi bulanan. Fokus beralih ke pemantauan pertumbuhan, pemantauan ancaman (penebangan liar, sampah masif), dan dokumentasi perkembangan ekosistem.
          </TimelineItem>
        </Timeline>

        <AlertBox type="info" icon="ℹ️">
          <strong>Tips Pemeliharaan Berbasis Kearifan Lokal:</strong> Libatkan masyarakat nelayan setempat sebagai &ldquo;penjaga bibit&rdquo; dengan sistem bagi hasil atau insentif sederhana. Masyarakat yang merasa memiliki area tanam akan jauh lebih konsisten dalam pemeliharaan dibanding relawan eksternal yang hanya datang sesekali. (Berkes, 2012)
        </AlertBox>

        <InfoCard label="Masalah & Solusi" labelColor="gold" title="Gangguan yang Sering Ditemui">
          <StepFlow>
            <StepItem num="🦀" title="Serangan kepiting dan hewan penggali">
              Kepiting Scylla spp. dan hewan penggali dapat merusak akar bibit muda. Solusi: pasang pelindung batang dari potongan botol plastik atau bambu belah di sekitar pangkal bibit selama 2 bulan pertama.
            </StepItem>
            <StepItem num="🌊" title="Bibit tumbang akibat arus deras">
              Perkuat dengan ajir ganda (X-frame) untuk lokasi berarus kencang. Pertimbangkan pembuatan pemecah gelombang sederhana dari bambu sebelum musim angin kencang tiba.
            </StepItem>
            <StepItem num="🗑️" title="Akumulasi sampah plastik">
              Sampah yang tersangkut di akar dan batang adalah ancaman nyata di pesisir Sebatik. Jadwalkan sesi bersih sampah komunal setiap 2 minggu bersama masyarakat lokal, dan dokumentasikan sebagai konten FORSA DIGITAL.
            </StepItem>
          </StepFlow>
        </InfoCard>

        <DialogScene title="Belajar Memelihara dari Pengalaman">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Kak, ada bibit yang sudah mati padahal baru 2 minggu ditanam. Kira-kira kenapa ya?
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            Bisa banyak penyebab — <strong>cek dulu apakah akar sudah terbentuk atau belum.</strong> Kalau bibit masih bisa dicabut mudah tanpa hambatan, berarti akar belum tumbuh dan mungkin kondisi substrat terlalu kering atau terlalu banyak tergenang. Catat kondisinya untuk data evaluasi!
          </DialogBubble>
          <DialogBubble avatar="👴" name="Pak Hamid" variant="elder">
            Kalau pengalaman saya — biasanya bibit yang mati paling cepat itu yang posisinya paling terekspos ombak. Nenek moyang kami dulu selalu <em>&ldquo;tanam di balik batu atau akar yang sudah ada&rdquo;</em> biar ada pelindung alami untuk bibit kecil.
          </DialogBubble>
        </DialogScene>

        <SourceBox title="Referensi Pemeliharaan">
          <SourceItem>Field, C.D. (1999). Rehabilitation of mangrove ecosystems: an overview. <em>Marine Pollution Bulletin</em>, 37(8–12), 383–392.</SourceItem>
          <SourceItem>Kamali, B. &amp; Hashim, R. (2011). Mangrove restoration without planting. <em>Ecological Engineering</em>, 37(2), 387–391.</SourceItem>
          <SourceItem>Primavera, J.H. &amp; Esteban, J.M.A. (2008). A review of mangrove rehabilitation in the Philippines. <em>Hydrobiologia</em>, 637(1), 45–59.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 8: MONITORING ──────────────────────────────────────────
  {
    id: 'monitoring',
    emoji: '📊',
    label: 'Monitoring',
    title: 'Monitoring (Pemantauan)',
    desc: 'Data adalah nyawa dari setiap program konservasi. Tanpa pemantauan yang terstruktur, kita tidak bisa tahu apakah mangrove yang kita tanam benar-benar tumbuh dan berfungsi.',
    content: (
      <>
        <InfoCard label="Konsep Dasar" labelColor="teal" title="Apa yang Dimaksud Monitoring?">
          <p>Monitoring atau pemantauan adalah proses <strong>pengumpulan data secara sistematis dan berkala</strong> untuk mengetahui kondisi dan perkembangan area penanaman mangrove dari waktu ke waktu. Monitoring yang baik bukan hanya mencatat apakah bibit hidup atau mati — ia merekam pertumbuhan, tutupan, kualitas lingkungan, serta respons ekosistem terhadap penanaman. Di FORSA DIGITAL, hasil monitoring juga menjadi konten ilmiah yang bisa disajikan kepada publik secara menarik.</p>
        </InfoCard>

        <MonevGrid>
          <MonevCard icon="📐" value="2×" label="Pengukuran per bulan (2 bulan pertama)" />
          <MonevCard icon="🌱" value="≥70%" valueColor="teal" label="Target survival rate bulan ke-3" />
          <MonevCard icon="📏" value="≥30 cm" valueColor="amber" label="Target tinggi bibit akhir bulan ke-6" />
          <MonevCard icon="📸" value="1×" label="Foto dokumentasi per titik per bulan" />
        </MonevGrid>

        <InfoCard label="Parameter Monitoring" labelColor="teal" title="Apa Saja yang Diukur?">
          <StepFlow>
            <StepItem num="A" title="Parameter biofisik bibit" tags={[{ label: 'Ukur setiap bulan', color: 'teal' }]}>
              Tinggi bibit (cm) diukur dari pangkal batang ke ujung tunas tertinggi. Jumlah daun dan kondisi daun (sehat/kuning/gugur). Diameter batang (mm) diukur dengan jangka sorong di ketinggian 5 cm dari pangkal. Jumlah akar tunjang yang terbentuk.
            </StepItem>
            <StepItem num="B" title="Tingkat keberhasilan hidup (survival rate)" tags={[{ label: 'Formula kunci', color: 'teal' }]}>
              Hitung jumlah bibit yang masih hidup dibagi total bibit yang ditanam, dikalikan 100%. Catat penyebab kematian jika diketahui (arus, hama, kekeringan, dll). SR = (Jumlah bibit hidup ÷ Jumlah bibit tanam) × 100%.
            </StepItem>
            <StepItem num="C" title="Parameter kualitas lingkungan" tags={[{ label: 'Per 2 bulan sekali', color: 'amber' }]}>
              Salinitas air (ppt) menggunakan refraktometer. Suhu air (°C). pH substrat. Tinggi muka air saat pasang dan surut (cm). Data ini diperlukan untuk menganalisis korelasi antara kondisi lingkungan dan keberhasilan tumbuh bibit.
            </StepItem>
            <StepItem num="D" title="Dokumentasi visual" tags={[{ label: 'FORSA DIGITAL' }]}>
              Foto dari titik tetap (fixed point photography) setiap bulan untuk merekam perubahan tutupan kanopi secara visual. Video time-lapse jika memungkinkan. Semua foto disimpan dengan metadata GPS dan tanggal untuk arsip FORSA DIGITAL.
            </StepItem>
          </StepFlow>
        </InfoCard>

        <InfoCard label="Metode Monitoring" labelColor="teal" title="Teknik Pemantauan di Lapangan">
          <p>Gunakan metode <strong>petak contoh permanen (permanent sample plot / PSP)</strong> — buat plot berukuran 10×10 m atau 5×5 m yang permanen dan semua bibit di dalamnya diukur setiap periode monitoring. Tandai setiap bibit dengan label nomor tahan air (misalnya label aluminium atau cat tahan air). Catat data di formulir lapangan yang sudah disiapkan dan masukkan ke spreadsheet segera setelah kembali dari lapangan untuk menghindari kehilangan data.</p>
          <br />
          <div className="flex flex-wrap gap-2.5">
            <FactChip color="teal">Form Data Lapangan</FactChip>
            <FactChip color="teal">Label Bibit Permanen</FactChip>
            <FactChip>Spreadsheet Digital</FactChip>
            <FactChip color="gold">GPS Koordinat Tetap</FactChip>
            <FactChip color="teal">Fixed Point Photo</FactChip>
          </div>
        </InfoCard>

        <AlertBox type="success" icon="✅">
          <strong>Integrasi dengan FORSA DIGITAL:</strong> Data monitoring dapat disajikan sebagai <em>infografis berkala</em> (misalnya &ldquo;Update Pertumbuhan Mangrove Sebatik — Bulan ke-3&rdquo;) yang disebarkan melalui media sosial. Ini mengubah data ilmiah menjadi konten edukatif yang menarik dan membangun akuntabilitas publik terhadap program KKN PPM UGM Taka Sebatik 2026.
        </AlertBox>

        <DialogScene title="Diskusi Teknik Monitoring">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Kak, kalau kita hanya 40 hari KKN, bagaimana kita bisa monitoring jangka panjang? Kan kita nanti sudah pulang ke Jogja...
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            <strong>Solusinya: latih warga lokal sebagai enumerator!</strong> Buat SOP monitoring sederhana dengan formulir yang mudah dipahami. Minta 2–3 warga terpilih untuk melanjutkan monitoring. Data mereka dikirim via WhatsApp ke tim Jogja. Ini juga model pemberdayaan masyarakat yang luar biasa!
          </DialogBubble>
          <DialogBubble avatar="👴" name="Kakek Daud" variant="elder">
            Saya dan beberapa pemuda kampung bersedia! Kalau ada pelatihan singkat, kami pasti bisa. Kami yang tinggal di sini justru lebih tahu kapan kondisi laut berubah, kapan musim ombak besar, dan perubahan apa yang terjadi setiap hari.
          </DialogBubble>
          <DialogBubble position="right" avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Sempurna! Kita buat modul pelatihan enumerator sederhana sebagai output tambahan FORSA DIGITAL. Masyarakat Sebatik bukan hanya objek penelitian — mereka mitra ilmiah kita!
          </DialogBubble>
        </DialogScene>

        <SourceBox title="Referensi Monitoring">
          <SourceItem>Kauffman, J.B. &amp; Donato, D.C. (2012). <em>Protocols for the measurement, monitoring and reporting of structure, biomass and carbon stocks in mangrove forests</em>. Bogor: CIFOR.</SourceItem>
          <SourceItem>Mukherjee, N. et al. (2014). The importance of monitoring for biodiversity conservation. <em>PLoS ONE</em>, 9(2), e89498.</SourceItem>
          <SourceItem>Bosire, J.O. et al. (2008). Functionality of restored mangroves. <em>Aquatic Botany</em>, 89(2), 251–259.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 9: EVALUASI PROGRAM ────────────────────────────────────
  {
    id: 'evaluasi',
    emoji: '✅',
    label: 'Evaluasi',
    title: 'Evaluasi Program',
    desc: 'Evaluasi adalah cermin kejujuran program — ia menunjukkan apa yang berhasil, apa yang gagal, dan ke mana kita harus melangkah selanjutnya.',
    content: (
      <>
        <InfoCard label="Konsep Evaluasi" labelColor="blue" title="Evaluasi vs. Monitoring: Apa Bedanya?">
          <p>Monitoring adalah proses <em>mengumpulkan data</em> secara berkelanjutan, sedangkan evaluasi adalah proses <em>menganalisis dan menilai</em> data tersebut untuk membuat keputusan. Evaluasi dilakukan pada titik-titik waktu tertentu (biasanya akhir bulan ke-3, ke-6, dan ke-12) untuk menilai apakah program berjalan sesuai target, mengidentifikasi hambatan, dan merumuskan perbaikan. Dalam konteks KKN PPM UGM Taka Sebatik 2026, evaluasi juga menjadi bahan laporan akhir yang bermakna secara akademik.</p>
        </InfoCard>

        <InfoCard label="Kerangka Evaluasi" labelColor="blue" title="Indikator Keberhasilan Program FORSA DIGITAL">
          <StepFlow>
            <StepItem num={1} title="Indikator ekologis" tags={[{ label: 'Ekologis', color: 'teal' }]}>
              Survival rate bibit ≥70% pada bulan ke-3 dan ≥60% pada bulan ke-12. Pertambahan tinggi rata-rata ≥5 cm/bulan. Terbentuknya akar tunjang pada ≥50% bibit hidup di bulan ke-6. Mulai terlihatnya fauna asosiasi (kepiting, ikan kecil, burung) di area tanam pada bulan ke-6–12.
            </StepItem>
            <StepItem num={2} title="Indikator sosial dan partisipasi" tags={[{ label: 'Sosial', color: 'teal' }]}>
              Jumlah masyarakat yang terlibat aktif dalam penanaman dan pemeliharaan. Terbentuknya kelompok enumerator lokal minimal 3 orang. Tingkat pengetahuan masyarakat tentang manfaat mangrove sebelum dan sesudah program (diukur dengan kuesioner pre-post).
            </StepItem>
            <StepItem num={3} title="Indikator dokumentasi FORSA DIGITAL" tags={[{ label: 'FORSA DIGITAL' }]}>
              Jumlah dan kualitas konten yang diproduksi (foto, video, infografis, poster). Jangkauan penyebaran di media sosial (reach dan engagement). Tersusunnya buku saku digital ini sebagai produk dokumentasi. Terdokumentasikannya minimal 5 kearifan lokal yang berkaitan dengan mangrove dan pesisir.
            </StepItem>
            <StepItem num={4} title="Indikator keberlanjutan" tags={[{ label: 'Keberlanjutan', color: 'amber' }]}>
              Adanya rencana pemeliharaan jangka panjang yang disepakati bersama masyarakat (minimal 1 tahun ke depan). Adanya komitmen pemerintah desa atau instansi terkait untuk melanjutkan program. Tersedianya data baseline yang bisa digunakan oleh tim KKN berikutnya.
            </StepItem>
          </StepFlow>
        </InfoCard>

        <InfoCard label="Metode Evaluasi" labelColor="blue" title="Cara Melaksanakan Evaluasi yang Bermakna">
          <p>Evaluasi yang baik menggunakan pendekatan <strong>partisipatif</strong> — melibatkan masyarakat sebagai penilai, bukan hanya objek penilaian. Beberapa metode yang dapat diterapkan:</p>
          <br />
          <div className="flex flex-wrap gap-2.5">
            <FactChip color="blue">Pre-post kuesioner</FactChip>
            <FactChip color="blue">FGD (Focus Group Discussion)</FactChip>
            <FactChip>Analisis data time-series</FactChip>
            <FactChip color="gold">Wawancara mendalam tokoh</FactChip>
            <FactChip color="teal">Perbandingan foto berkala</FactChip>
            <FactChip color="blue">Laporan akhir terstruktur</FactChip>
          </div>
        </InfoCard>

        <AlertBox type="warning" icon="⚠️">
          <strong>Jangan hanya hitung yang berhasil!</strong> Evaluasi yang jujur juga mencatat kegagalan dan penyebabnya. Bibit yang mati, partisipasi yang rendah, atau target yang tidak tercapai adalah data berharga yang membantu program selanjutnya menjadi lebih baik. Kegagalan yang terdokumentasi lebih bernilai daripada keberhasilan yang dilebih-lebihkan.
        </AlertBox>

        <Timeline>
          <TimelineItem period="Akhir minggu ke-2 (selama KKN)" title="Evaluasi baseline dan penanaman">
            Review kondisi awal bibit, kesesuaian lokasi, dan kelengkapan data penanaman. Identifikasi masalah awal dan lakukan perbaikan segera.
          </TimelineItem>
          <TimelineItem dotColor="amber" period="Akhir masa KKN (hari ke-40)" periodColor="amber" title="Evaluasi akhir KKN + serah terima">
            Presentasi hasil program kepada masyarakat dan pemerintah desa. Serahkan SOP pemeliharaan, data monitoring awal, dan modul pelatihan enumerator kepada kelompok lokal yang ditunjuk. Dokumentasikan momen serah terima sebagai bagian dari FORSA DIGITAL.
          </TimelineItem>
          <TimelineItem dotColor="teal" period="Bulan ke-3 (pasca KKN)" periodColor="teal" title="Evaluasi pertengahan — survei survival rate">
            Tim KKN bersama enumerator lokal melakukan survei survival rate. Data dikirim ke tim UGM untuk dianalisis. Jika SR di bawah 70%, identifikasi penyebab dan rekomendasikan penyulaman.
          </TimelineItem>
          <TimelineItem dotColor="blue" period="Bulan ke-12 (evaluasi tahunan)" periodColor="blue" title="Evaluasi komprehensif tahunan">
            Analisis menyeluruh semua indikator ekologis, sosial, dan dokumentasi. Susun laporan evaluasi tahunan yang dapat dipublikasikan sebagai artikel ilmiah atau policy brief untuk mendukung kebijakan konservasi pesisir Sebatik.
          </TimelineItem>
        </Timeline>

        <DialogScene title="Refleksi Evaluasi Bersama">
          <DialogBubble avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Kak, bagaimana kalau ternyata hasil evaluasi menunjukkan survival rate kita hanya 55%? Apakah program kita dianggap gagal?
          </DialogBubble>
          <DialogBubble position="right" avatar="🌲" name="Penyuluh Kehutanan" variant="ranger">
            <strong>Program rehabilitasi mangrove yang SR-nya 55% bukan gagal — itu adalah PELAJARAN.</strong> Yang penting: kita tahu MENGAPA 45%-nya tidak selamat. Apakah karena lokasi kurang tepat? Jenis bibit? Waktu tanam? Jawaban itu jauh lebih berharga dari angka keberhasilan yang tidak disertai analisis.
          </DialogBubble>
          <DialogBubble avatar="👴" name="Kakek Daud" variant="elder">
            Petani di sini pun tidak selalu berhasil panen. Yang penting setelah gagal, kita tahu kenapa — dan musim depan kita tanam lebih cerdas. <em>Akar yang kuat tidak tumbuh dalam sehari.</em> Begitu pun program konservasi.
          </DialogBubble>
          <DialogBubble position="right" avatar="🎓" name="Mahasiswa KKN PPM UGM" variant="student">
            Saya setuju. Dan semua cerita ini — keberhasilan maupun kegagalan — akan kita dokumentasikan jujur di FORSA DIGITAL. Karena kejujuran data adalah fondasi dari ilmu pengetahuan dan kepercayaan masyarakat!
          </DialogBubble>
        </DialogScene>

        <CTABlock
          bigText="Tanam hari ini, panen masa depan Sebatik"
          subText="Setiap bibit yang ditanam, dipelihara, dipantau, dan dievaluasi dengan serius oleh Tim KKN PPM UGM Taka Sebatik 2026 adalah bukti nyata bahwa ilmu pengetahuan bisa mengubah garis pantai — dan mengubah masa depan masyarakat pesisir. FORSA DIGITAL merekam setiap langkah perjalanan itu."
        />

        <SourceBox title="Referensi Evaluasi">
          <SourceItem>Primavera, J.H. &amp; Esteban, J.M.A. (2008). A review of mangrove rehabilitation in the Philippines. <em>Hydrobiologia</em>, 637(1), 45–59.</SourceItem>
          <SourceItem>Kauffman, J.B. &amp; Donato, D.C. (2012). <em>Protocols for the measurement, monitoring and reporting of structure, biomass and carbon stocks in mangrove forests</em>. Bogor: CIFOR.</SourceItem>
          <SourceItem>Walters, B.B. et al. (2008). Ethnobiology, socio-economics and management of mangrove forests. <em>Aquatic Botany</em>, 89(2), 220–236.</SourceItem>
          <SourceItem>IUCN. (2015). <em>A Guide to Mangrove Restoration</em>. Gland: IUCN.</SourceItem>
          <SourceItem>BPDAS-HL Mahakam Berau. (2020). <em>Pedoman Teknis Rehabilitasi Mangrove di Kalimantan</em>. Samarinda: KLHK.</SourceItem>
        </SourceBox>
      </>
    ),
  },

  // ─── CHAPTER 10: PENUTUP / BACK COVER ───────────────────────────────
  {
    id: 'penutup',
    emoji: '📖',
    label: 'Penutup',
    title: 'FORSA DIGITAL',
    desc: 'Forest Story Digital — Potensi Hutan & Budaya di Pesisir Kecamatan Sebatik Barat, Kalimantan Utara. Didokumentasikan dengan cinta oleh mahasiswa KKN PPM UGM untuk Indonesia.',
    content: (
      <div className="text-center">
        <div className="bg-gradient-to-br from-[#0d2b0f] via-[#1a4a1e] via-[#0a3d62] to-[#051e3e] rounded-2xl p-10 md:p-14 my-6 text-white">
          <h2 className="font-serif text-2xl md:text-3xl text-emerald-300 mb-3">FORSA DIGITAL</h2>
          <p className="text-[13px] text-white/50 tracking-widest uppercase mb-4">Forest Story Digital</p>
          <p className="text-sm text-white/70 leading-relaxed max-w-lg mx-auto mb-6">
            Potensi Hutan &amp; Budaya di Pesisir Kecamatan Sebatik Barat — Kalimantan Utara. Didokumentasikan dengan cinta oleh mahasiswa KKN PPM UGM untuk Indonesia.
          </p>

          <div className="inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-500/35 rounded-xl px-5 py-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center text-sm font-black text-[#003366]">UGM</div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-yellow-400">KKN PPM Universitas Gadjah Mada</div>
              <div className="text-[11px] text-white/55">Unit Taka Sebatik · Sebatik Barat · Kalimantan Utara · 2026</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center mb-5">
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">Ekosistem Mangrove</span>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300">Kearifan Lokal</span>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300">Narasi Visual</span>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300">Budaya Pesisir</span>
          </div>

          <p className="text-[11px] text-white/30 tracking-wider">KKN PPM UGM · Unit Taka Sebatik · Sebatik Barat · 2026</p>
        </div>
      </div>
    ),
  },
];
