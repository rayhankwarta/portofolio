# Portfolio Personal — Mohammad Rayhan Kwarta Nauval
> Production-grade personal portfolio & data analytics dossier for **Mohammad Rayhan Kwarta Nauval** (Data Analyst & Fresh Graduate Universitas Mercu Buana).

---

## 🏛️ Arah Desain & Tipografi (Anti "AI Slop")

Website ini dirancang dengan gaya **Editorial Financial/Data Journalism**:
- **Bebas AI Slop**: Tidak ada gradien neon ungu-biru generik, tidak ada blob blur, tidak ada emoji berlebihan, tidak ada progress bar persentase palsu, dan tidak ada teks klise *"passionate developer crafting digital experiences"*.
- **Tipografi Berkarakter**:
  - **Display / Heading**: `Newsreader` (Google Font Serif dengan optical size & italic tajam, memberi bobot akademis dan jurnalistik).
  - **Body / Sans**: `Plus Jakarta Sans` (Geometris bersih, ergonomis untuk membaca paragraf analitis).
  - **Meta / Indexing**: `JetBrains Mono` (Untuk stamp indeks `[01]`, kode, metrik kuantitatif, dan label stack).
  - `text-wrap: balance` pada setiap judul utama untuk menghindari typographic widows.
- **Palet Warna Terbatas & Kontras WCAG AA**:
  - **Light Mode**: Crisp Warm Ivory (`#FBFBF9`), Slate Ink (`#121316`), Hairline Divider (`#E3E4DC`).
  - **Dark Mode**: Deep Obsidian (`#0A0B0D`), Off-white text (`#F4F5F7`), Muted Hairline (`#222630`).
  - **Aksen Utama**: *Metric Data Cobalt* (`#1D4ED8` di light / `#3B82F6` di dark).
- **Aksesibilitas & Standar Produksi**:
  - Skip link aksesibel (`#main-content`).
  - Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Dukungan preferensi `prefers-reduced-motion` dan zero-FOUC (Flash of Unstyled Content) saat render tema.
  - Stretched-link pattern pada project cards dengan tombol mandiri (`relative z-10`) untuk Live Demo dan GitHub repo.

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router, React 19, TypeScript strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Dikonfigurasi via CSS native `@theme` di `src/app/globals.css`, bukan file konfigurasi legacy)
- **Animasi**: [Motion](https://motion.dev) (`motion/react`)
- **Font**: `next/font/google` (`Newsreader`, `Plus_Jakarta_Sans`, `JetBrains_Mono`)
- **Ikon**: Lucide React + custom pixel-perfect SVG icons
- **Package Manager**: `pnpm`

---

## 🚀 Cara Menjalankan Secara Lokal

Pastikan Anda telah menginstal **Node.js** (v20+) dan **pnpm**.

```bash
# 1. Masuk ke direktori project
cd portofolio

# 2. Install dependensi
pnpm install

# 3. Jalankan development server
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Perintah Penting Lainnya:
```bash
# Jalankan Type-Checking dan Linting
pnpm lint

# Jalankan Production Build lokal
pnpm build

# Jalankan Server Production lokal
pnpm start
```

---

## 📁 Struktur Direktori

```text
portofolio/
├── public/
│   └── projects/              # SVG thumbnail visualisasi data
│       ├── ecommerce-churn.svg
│       ├── logistics-optimization.svg
│       ├── financial-fraud.svg
│       └── academic-forecaster.svg
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind CSS v4 @theme & CSS variables
│   │   ├── layout.tsx         # RootLayout, next/font, SEO metadata, ThemeProvider
│   │   ├── page.tsx           # Home landing page (Hero, Works, About, Contact)
│   │   ├── robots.ts          # SEO crawler robots.txt
│   │   ├── sitemap.ts         # Dynamic SEO sitemap
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx   # Dynamic deep-dive case study route
│   ├── components/
│   │   ├── Navbar.tsx         # Brand header, navlinks, theme toggle, mobile drawer
│   │   ├── Hero.tsx           # Asymmetrical editorial hero, stats strip, CTA
│   │   ├── ProjectCard.tsx    # Stretched-link card, isolated live/repo buttons
│   │   ├── ProjectsSection.tsx# Project catalog with interactive tag filtering
│   │   ├── AboutSection.tsx   # Mercu Buana journey, grouped skills (no progress bars)
│   │   ├── ContactSection.tsx # Direct channels, email copy feedback, Jakarta clock
│   │   ├── Footer.tsx         # Minimalist editorial footer
│   │   ├── ThemeProvider.tsx  # Zero-FOUC Theme context & persistent storage
│   │   ├── ThemeToggle.tsx    # Light/Dark switcher
│   │   ├── SkipLink.tsx       # Accessibility skip link
│   │   └── Icons.tsx          # Custom SVG GitHub & LinkedIn icons
│   ├── data/
│   │   └── projects.ts        # Data project terketik (Array of Project)
│   ├── hooks/
│   │   └── useMounted.ts      # React 19 useSyncExternalStore hydration hook
│   └── types/
│       └── project.ts         # TypeScript Project interface
└── data/
    └── projects.ts            # Root proxy alias untuk /data/projects.ts
```

---

## 📝 Cara Menambah Project Baru

Semua project dikelola secara terpusat dan strictly typed di file [`src/data/projects.ts`](file:///c:/Users/Rayhan/Documents/FILE%20REHUN/Project/portofolio/src/data/projects.ts).

Untuk menambahkan project baru:

1. Siapkan file visualisasi/thumbnail di folder `public/projects/nama-file.svg` (atau `.png` / `.webp`).
2. Buka `src/data/projects.ts` dan tambahkan objek baru ke array `projects`:

```typescript
{
  title: "Judul Analisis Anda",
  slug: "judul-analisis-anda", // Akan menjadi URL /projects/judul-analisis-anda
  description: "Penjelasan ringkas 1-2 kalimat mengenai masalah bisnis, dataset, dan dampaknya.",
  tags: ["SQL", "Python", "Power BI", "A/B Testing"],
  year: "2024",
  thumbnail: "/projects/nama-file.svg",
  liveUrl: "https://demo-anda.streamlit.app", // Opsional
  repoUrl: "https://github.com/rayhankwarta/repo-anda", // Opsional
  
  // Opsional untuk halaman detail /projects/[slug]
  subtitle: "Penjelasan tambahan satu baris",
  role: "Lead Data Analyst",
  client: "Nama Klien / Studi Kasus",
  duration: "2 Bulan",
  impactMetrics: [
    { label: "Metric Utama", value: "+24.5%" },
    { label: "Data Processed", value: "50,000 Rows" }
  ],
  problemStatement: "Latar belakang masalah bisnis yang dipecahkan...",
  methodology: [
    "Langkah 1: Pengambilan dan pembersihan data...",
    "Langkah 2: Pemodelan statistik..."
  ],
  keyFindings: [
    "Temuan 1...",
    "Temuan 2..."
  ],
  techDetails: [
    { category: "Querying", items: ["PostgreSQL", "dbt"] }
  ]
}
```

3. Simpan file. Halaman utama dan halaman detail `/projects/[slug]` akan otomatis di-generate secara statis saat build berikutnya!

---

## 🌐 Cara Deploy ke Vercel

Project ini dirancang untuk deploy instan tanpa konfigurasi tambahan (*zero-config*) di **Vercel**:

### Opsi 1: Lewat Git & Dashboard Vercel (Direkomendasikan)
1. Push project ini ke repository GitHub Anda (misal: `https://github.com/rayhankwarta/portfolio`).
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New Project"** lalu pilih repository GitHub Anda.
4. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: `Next.js`
   - **Package Manager**: `pnpm`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
5. Klik **"Deploy"**. Website Anda akan live dalam hitungan detik dengan SSL HTTPS gratis dan CDN global.

### Opsi 2: Lewat Vercel CLI
```bash
# Install Vercel CLI
pnpm add -g vercel

# Login dan deploy
vercel
```

---

## 👤 Pemilik Portofolio

**Mohammad Rayhan Kwarta Nauval**
- **Role**: Data Analyst
- **Almamater**: Fresh Graduate Universitas Mercu Buana, Jakarta
- **Email**: rayhankwartax@gmail.com
- **WhatsApp**: [+62 851-5533-6772 (085155336772)](https://wa.me/6285155336772)
- **LinkedIn**: [linkedin.com/in/rayhankwarta](https://www.linkedin.com/in/rayhankwarta/)
- **GitHub**: [github.com/rayhankwarta](https://github.com/rayhankwarta)
