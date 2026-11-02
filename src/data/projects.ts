import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Klasifikasi Prediktif Tingkat Stres & Kesehatan Mental Mahasiswa",
    slug: "student-stress-level-prediction",
    description:
      "Analisis prediktif dan pemodelan behavioral yang dikembangkan pada saat Uji Kompetensi (Ujikom) Keahlian Data Analytics. Menerapkan klasifikasi Random Forest pada 2.100+ data mahasiswa dengan akurasi 89%, memetakan korelasi tidur/studi, dan merancang Psychosocial Burden Index.",
    tags: ["Python", "Random Forest", "Scikit-Learn", "EDA & Seaborn", "Google Colab"],
    year: "2026",
    thumbnail: "/projects/student-stress-analysis.svg",
    liveUrl: "https://colab.research.google.com/drive/1AVcuvGWslC8Oq7Szv6rdw1_ZcKQY5AwS?usp=sharing",
    repoUrl: "https://github.com/rayhankwarta/ujikom/blob/main/41822010123_MohammadRayhanKwartaNauval_Ujikom.ipynb",
    subtitle: "Analisis Uji Kompetensi (Ujikom) Keahlian Data Analytics — Pipeline Diagnostik Faktor Fisiologis & Psikososial Distress Mahasiswa",
    role: "Data Analyst & ML Developer (Uji Kompetensi)",
    client: "Uji Kompetensi (Ujikom) Keahlian Data Analytics",
    duration: "Sertifikasi Uji Kompetensi",
    impactMetrics: [
      { label: "Akurasi Model", value: "89.0%" },
      { label: "Data Dianalisis", value: "2.100 Baris" },
      { label: "Recall Risiko Tinggi", value: "91.0%" },
      { label: "Faktor Utama", value: "Tekanan Darah & Tidur" },
    ],
    problemStatement:
      "Dikembangkan dalam rangka Uji Kompetensi (Ujikom) Keahlian Data Analytics, proyek ini merespons tantangan institusi pendidikan dalam mendeteksi tanda awal burnout mahasiswa. Dengan keterkaitan kompleks antara gejala fisiologis, gaya hidup, dan tekanan psikososial, alur kerja analitik ini dirancang untuk mengklasifikasi tingkat stres dan mengidentifikasi indikator risiko secara objektif.",
    methodology: [
      "Mengekstraksi, mengaudit, dan menstandarisasi dua dataset mahasiswa Kaggle (Stress Monitoring 1.100 baris dan Global Lifestyle 1.000 baris) dengan verifikasi data hygiene tanpa missing values.",
      "Merekayasa metrik komposit berdampak tinggi seperti Psychosocial Burden Index (sintesis bullying, peer pressure, beban studi, dan kecemasan karir), jam belajar harian, serta rasio screen-to-study.",
      "Membagi data dengan stratified 80:20 train-test split dan melatih model multi-class Random Forest Classifier pada 20+ dimensi sosio-fisiologis.",
      "Menghitung feature importances berbasis Gini-impurity untuk mengisolasi pemicu fisik utama (tekanan darah, kualitas tidur) dan faktor institusional.",
      "Membuat visualisasi Seaborn dan Matplotlib yang menggambarkan distribusi kategori stres terhadap ambang batas jam belajar.",
    ],
    keyFindings: [
      "Model klasifikasi Random Forest menghasilkan akurasi keseluruhan 89%, dengan recall 91% pada kategori High Stress dan 93% pada Medium Stress.",
      "Tekanan darah fisiologis (importance 14,5%) dan kualitas tidur restoratif (8,1%) menjadi faktor paling menentukan dalam mendeteksi distress mahasiswa.",
      "Mahasiswa dengan waktu tidur di bawah 6 jam dan rasio screen-to-study yang tidak seimbang memiliki kemungkinan 2,4x lebih tinggi masuk kategori High Stress.",
      "Hubungan positif antara dosen-mahasiswa dan pemenuhan kebutuhan dasar terbukti menjadi faktor protektif utama yang menurunkan skor beban psikososial.",
    ],
    techDetails: [
      { category: "Machine Learning & Pemodelan", items: ["Random Forest Classifier (Scikit-Learn)", "Stratified Train-Test Splitting", "Classification Report (F1, Precision, Recall)"] },
      { category: "Rekayasa Fitur & Pipeline Data", items: ["Psychosocial Burden Index", "Rasio Waktu Layar terhadap Belajar", "Wrangling Data Pandas & NumPy"] },
      { category: "Eksplorasi & Lingkungan Kerja", items: ["Google Colaboratory (Interactive Notebook)", "Visualisasi Matplotlib & Seaborn", "Dataset Benchmark Kaggle"] },
    ],
  },
  {
    title: "Analisis Jaringan Pembayaran Digital B2B & Retensi Kohort",
    slug: "b2b-digital-payment-network-analysis",
    description:
      "Final Capstone Project pada program Bootcamp Data Analytics di Bitlabs Academy bekerja sama dengan Paper.id. Menganalisis 50.000+ transaksi pembayaran B2B melalui Social Network Analysis (SNA) pemetaan hub buyer-seller, perancangan aturan deteksi eksploitasi voucher promo, dan penyusunan matriks retensi kohort.",
    tags: ["Python", "SQL / SQLite", "Social Network Analysis", "Cohort Analysis", "Google Colab", "EDA"],
    year: "2025",
    thumbnail: "/projects/b2b-payment-network.svg",
    liveUrl: "https://colab.research.google.com/drive/1cdnkblY8LIab5d58jcE6CHGsGUI1pD5o#scrollTo=kQJYuWyB2bhT",
    repoUrl: "https://github.com/rayhankwarta/capstone-project-msib",
    subtitle: "Capstone Project Program Bootcamp Data Analytics di Bitlabs Academy — Paper.id B2B Payment Network, Promo Abuse Surveillance, & Retention Analytics",
    role: "Lead Data Analyst (Bitlabs Academy — PBL Group 18)",
    client: "Bitlabs Academy Bootcamp x Paper.id Capstone",
    duration: "Bootcamp & Capstone Project",
    impactMetrics: [
      { label: "Transaksi Diaudit", value: "50.000 Baris" },
      { label: "Nilai Transaksi Maks.", value: "Rp 20,14 Miliar" },
      { label: "Ambang Batas Promo", value: "3x Klaim" },
      { label: "Engine Graf Jaringan", value: "NetworkX + SQLite" },
    ],
    problemStatement:
      "Sebagai Capstone Project Program Bootcamp Data Analytics di Bitlabs Academy bersama Paper.id, proyek ini memecahkan tantangan lonjakan volume faktur digital B2B. Analisis ini menyediakan diagnostik kuantitatif untuk memetakan central trading hubs, mendeteksi akun yang mengeksploitasi cashback voucher promosi, serta memahami tren retensi pelanggan multi-bulan.",
    methodology: [
      "Mengintegrasikan 4 skema data relasional (50k transaksi pembayaran, 50k profil perusahaan, dimensi promo, dan invoice payment requests) ke database in-memory SQLite.",
      "Melakukan audit anomali pada distribusi transaksi yang sangat skewed (rata-rata Rp 19,65 juta, nilai maksimum Rp 20,14 miliar) serta standarisasi Z-score pasangan buyer-seller.",
      "Merancang algoritma deteksi eksploitasi voucher promo (flagging akun yang mengklaim promo >3 kali) guna mencegah kebocoran margin promosi perusahaan.",
      "Memodelkan graf jaringan B2B terarah dan berbobot menggunakan NetworkX untuk mengidentifikasi hub transaksi utama dan konektivitas rantai pasok.",
      "Membangun heatmap retensi kohort bulanan dengan skala log-transformed (np.log1p) untuk menormalisasi variasi volume antarkohort.",
    ],
    keyFindings: [
      "Sebagian kecil entitas hub pembeli dan penjual berderajat tinggi menopang lebih dari 40% dari total volume pembayaran platform.",
      "Distribusi transaksi sangat right-skewed dengan lonjakan institusional mencapai Rp 20,14 miliar di samping pembayaran invoice standar.",
      "Algoritma deteksi eksploitasi promo berhasil mengidentifikasi akun-akun berfrekuensi klaim tinggi, melindungi anggaran cashback pemasaran.",
      "Analisis kohort menunjukkan akun dengan verifikasi identitas usaha (KYB/KYC) dan relasi bisnis aktif mempertahankan kestabilan transaksi jangka panjang.",
    ],
    techDetails: [
      { category: "Analisis Jaringan & Graf", items: ["NetworkX (Social Network Analysis)", "Topologi Graf Buyer-Seller", "Sentralitas Node & Bobot Edge"] },
      { category: "Penyimpanan & Transformasi Data", items: ["In-Memory SQLite Engine", "Agregasi Query SQL", "Pipeline Pandas & NumPy"] },
      { category: "Retensi & Visualisasi", items: ["Heatmap Kohort (Skala Log1p)", "Seaborn & Matplotlib", "Google Colab Interactive Environment"] },
    ],
  },
  {
    title: "Performa Penjualan & Intelijen Pendapatan Coffee Shop",
    slug: "coffee-shop-sales-revenue-intelligence",
    description:
      "Analisis data eksploratif (EDA) dan diagnostik pendapatan komersial pada 149.116 catatan transaksi Kaggle lintas cabang ritel kopi. Memetakan kecepatan pembelian per jam, mengidentifikasi lonjakan permintaan morning rush, serta membandingkan margin kategori produk lintas gerai.",
    tags: ["Python", "Pandas & NumPy", "EDA & Seaborn", "Google Colab", "Analisis Pendapatan"],
    year: "2026",
    thumbnail: "/projects/coffee-shop-transactions.svg",
    liveUrl: "https://colab.research.google.com/drive/1KxrthmfHW-yC8UqA-EfE-bTdzRG7wXv6",
    repoUrl: "https://github.com/rayhankwarta/Coffee-Shop-Transactions-Revenue-Dataset-Kaggle/blob/main/Coffee_Shop_Transaction_Kaggle.ipynb",
    subtitle: "Diagnostik Transaksi Eksploratif, Kecepatan Penjualan per Jam, dan Pemodelan Pendapatan Produk Multi-Cabang",
    role: "Data Analyst & Peneliti",
    client: "Studi Kasus Ritel Kaggle",
    duration: "Studi Independen",
    impactMetrics: [
      { label: "Transaksi Diaudit", value: "149.116 Baris" },
      { label: "Cakupan Cabang", value: "3 Gerai NYC" },
      { label: "Waktu Pendapatan Puncak", value: "08:00 - 10:00 Pagi" },
      { label: "Pendorong Volume Utama", value: "Kopi Seduh & Teh" },
    ],
    problemStatement:
      "Bisnis ritel makanan dan minuman (F&B) beroperasi dengan margin yang ketat, di mana profitabilitas sangat bergantung pada perputaran inventaris, penjadwalan tenaga kerja selama jam sibuk, serta optimasi ukuran keranjang belanja (basket size). Menganalisis aliran transaksi point-of-sale (POS) mentah sangat penting untuk mengidentifikasi ritme belanja harian (diurnal rhythms), paket produk ber-margin tinggi, serta disparitas pendapatan antarcabang gerai (Hell's Kitchen, Astoria, dan Lower Manhattan).",
    methodology: [
      "Mengekstrak, mengaudit, dan membersihkan 149.116 catatan transaksi dari dataset Kaggle Coffee Shop, memverifikasi konsistensi skema dan kebersihan nilai null.",
      "Merekayasa fitur temporal dengan mengekstrak timestamp transaksi ke dalam jam, hari, bulan, dan shift operasional sibuk (Morning Rush, Siang Hari, Sore/Malam).",
      "Menghitung pendapatan kotor per baris transaksi (qty * unit price) dan menyusun tabel pivot agregasi multi-dimensi berdasarkan lokasi gerai dan kategori produk.",
      "Melakukan benchmarking komparatif antargerai dengan mengevaluasi kepadatan pengunjung terhadap rata-rata nilai pesanan (AOV) di cabang Lower Manhattan, Astoria, dan Hell's Kitchen.",
      "Menyintesis temuan ke dalam visualisasi interaktif Google Colab menggunakan Matplotlib dan Seaborn untuk mengomunikasikan pendorong pendapatan utama serta peluang cross-selling.",
    ],
    keyFindings: [
      "Distribusi transaksi harian menunjukkan lonjakan waktu pagi yang signifikan antara pukul 08:00 hingga 10:00, menyumbang lebih dari 38% volume penjualan harian di seluruh lokasi.",
      "Kategori produk Kopi dan Teh mendominasi pendapatan toko dengan menghasilkan lebih dari 67% total penjualan, di mana minuman berbahan dasar espresso memberikan margin keuntungan per unit tertinggi.",
      "Cabang Lower Manhattan dan Hell's Kitchen mengalami lonjakan pesat pada hari kerja (weekday business commuters), sedangkan cabang Astoria menunjukkan kestabilan pengunjung yang tinggi di akhir pekan.",
      "Sebagian besar transaksi terdiri dari 1-2 item per pembelian (rata-rata 1,44 item), mengindikasikan potensi peningkatan pendapatan signifikan melalui promosi paket sarapan (coffee + pastry bundling).",
    ],
    techDetails: [
      { category: "Eksplorasi & Wrangling Data", items: ["Python (Pandas, NumPy)", "Rekayasa Fitur Datetime", "Normalisasi Skema POS"] },
      { category: "Analisis Statistik & Bisnis", items: ["Profiling Kecepatan Penjualan per Jam", "Kontribusi Kategori Produk", "Benchmarking Performa Gerai"] },
      { category: "Visualisasi & Lingkungan Kerja", items: ["Notebook Google Colaboratory", "Visual Matplotlib & Seaborn", "Data Benchmark Kaggle POS"] },
    ],
  },
  {
    title: "Segmentasi Pola Asupan Gizi Harian & Profil Kesehatan Mahasiswa",
    slug: "student-nutritional-intake-segmentation",
    description:
      "Karya ilmiah Tugas Akhir (Skripsi) menerapkan algoritma unsupervised machine learning (K-Means Clustering) untuk mengelompokkan pola asupan nutrisi makro harian mahasiswa Universitas Mercu Buana. Menggunakan Elbow Method dan Silhouette Coefficient untuk menentukan pemisahan klaster optimal pada kalori, protein, karbohidrat, dan lemak.",
    tags: ["Python", "K-Means Clustering", "Scikit-Learn", "Elbow & Silhouette", "Google Colab", "EDA"],
    year: "2026",
    thumbnail: "/projects/nutritional-intake-clustering.svg",
    liveUrl: "https://colab.research.google.com/drive/1wlPrz-1bSQIO8Nfk7I6Nt7AKHm6dSTOj",
    repoUrl: "https://github.com/rayhankwarta/tugas-akhir/blob/main/TA_MohammadRayhanKwartaNauval.ipynb",
    subtitle: "Tugas Akhir (Skripsi): Segmentasi Pola Asupan Gizi Harian pada Mahasiswa Universitas Mercu Buana Menggunakan Algoritma K-Means",
    role: "Peneliti Utama & Penulis Skripsi",
    client: "Universitas Mercu Buana (Tugas Akhir Skripsi)",
    duration: "Tugas Akhir Sarjana",
    impactMetrics: [
      { label: "Algoritma Utama", value: "K-Means Clustering" },
      { label: "Optimasi Klaster", value: "Elbow + Silhouette" },
      { label: "Dimensi Nutrisi", value: "4 Makronutrien" },
      { label: "Milestone Akademik", value: "Skripsi Sarjana" },
    ],
    problemStatement:
      "Pergeseran gaya hidup mahasiswa di era digital, beban aktivitas perkuliahan yang padat, serta tingginya konsumsi makanan olahan cepat saji sering memicu pola makan yang tidak seimbang. Hal ini meningkatkan risiko defisit energi, kelelahan kronis, hingga masalah metabolik jangka panjang. Tanpa data empiris tersegmentasi, pihak universitas tidak dapat merancang intervensi kesehatan atau program edukasi gizi yang tepat sasaran.",
    methodology: [
      "Mengumpulkan, mengaudit, dan memvalidasi log catatan gizi harian mahasiswa serta data antropometri (tinggi, berat badan, kalori harian, karbohidrat, protein, lemak, dan indikator massa tubuh).",
      "Menstandarisasi distribusi nutrisi makro menggunakan StandardScaler guna menghilangkan bias skala antar-satuan kilokalori (skala ribuan) dan gram (skala puluhan/ratusan).",
      "Menghitung Within-Cluster Sum of Squares (WCSS) melalui Elbow Method untuk menemukan titik infleksi inersia dan memvalidasi kualitas klaster menggunakan Silhouette Coefficient.",
      "Melatih dan menerapkan algoritma K-Means untuk mengelompokkan mahasiswa ke dalam profil perilaku gizi yang spesifik (Klaster Gizi Seimbang, Klaster Kelebihan Kalori/Lemak, dan Klaster Defisit Energi).",
      "Menyusun perbandingan centroid klaster dan visualisasi distribusi menggunakan Matplotlib dan Seaborn di Google Colaboratory.",
    ],
    keyFindings: [
      "Algoritma K-Means berhasil mempartisi mahasiswa ke dalam pola konsumsi yang jelas, memisahkan mahasiswa bergizi seimbang dari kelompok yang berisiko defisit maupun kelebihan kalori.",
      "Ditemukan kelompok mahasiswa yang mengalami defisit karbohidrat dan protein signifikan terhadap kebutuhan energi basal (BMR), terutama dipicu oleh kebiasaan melewatkan waktu makan pada periode ujian.",
      "Klaster dengan asupan kalori dan lemak berlebih berkorelasi kuat dengan kebiasaan ngemil larut malam dan konsumsi makanan cepat saji.",
      "Pemetaan klaster ini memberikan rekomendasi empiris bagi institusi dalam merancang intervensi gizi terarah dan pedoman menu sehat di kantin kampus.",
    ],
    techDetails: [
      { category: "Unsupervised Machine Learning", items: ["K-Means Clustering (Scikit-Learn)", "Elbow Method (Optimasi WCSS)", "Analisis & Validasi Silhouette"] },
      { category: "Preprocessing & Standarisasi Data", items: ["Standarisasi StandardScaler", "Kalkulasi Rasio Makronutrien", "Wrangling Data Pandas & NumPy"] },
      { category: "Visualisasi & Lingkungan Kerja", items: ["Notebook Google Colaboratory", "Visual Seaborn & Matplotlib", "Analitik Centroid Klaster"] },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
