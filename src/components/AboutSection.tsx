"use client";

import React from "react";
import {
  Database,
  Binary,
  BarChart3,
  TerminalSquare,
  GraduationCap,
  CheckCircle2,
  FileText,
  ArrowUpRight,
} from "lucide-react";

export function AboutSection() {
  const skillCategories = [
    {
      category: "Querying & Pemodelan Data",
      icon: Database,
      description: "Mengekstrak, menormalisasi, dan menyusun skema data transaksi mentah agar siap dianalisis secara akurat.",
      skills: [
        "SQL Tingkat Lanjut (CTEs, Window Functions, Stored Procedures)",
        "PostgreSQL & MySQL",
        "Google Cloud BigQuery",
        "dbt Core (Data Build Tool)",
        "Pemodelan Dimensional (Star & Snowflake Schema)",
      ],
    },
    {
      category: "Analisis Statistik & Prediktif",
      icon: Binary,
      description: "Menerapkan metodologi statistik dan machine learning untuk mengungkap tren perilaku dan memitigasi risiko bisnis.",
      skills: [
        "Python (pandas, NumPy, SciPy, scikit-learn)",
        "Segmentasi Pelanggan RFM & Analisis Retensi Kohort",
        "Klasifikasi Data Imbalanced & Isolation Forests",
        "Peramalan Time-Series (Prophet, Seasonal Decomposition)",
        "Uji Hipotesis (A/B Testing, Chi-Square, ANOVA)",
      ],
    },
    {
      category: "Business Intelligence & Pelaporan",
      icon: BarChart3,
      description: "Menerjemahkan output query yang kompleks menjadi dashboard interaktif yang intuitif bagi pengambil keputusan.",
      skills: [
        "Power BI (DAX Measures, Pemodelan Dataflow)",
        "Tableau Desktop & Cloud",
        "Streamlit (Aplikasi Analisis Interaktif)",
        "Looker Studio",
        "Metabase & Tata Kelola Data Self-Service",
      ],
    },
    {
      category: "Tools, Alur Kerja & Tata Kelola",
      icon: TerminalSquare,
      description: "Menjamin reproduksibilitas riset, version control yang rapi, dan pipeline data yang dapat diaudit.",
      skills: [
        "Alur Kerja Git & GitHub",
        "Jupyter Lab & VS Code",
        "Microsoft Excel Lanjutan & Power Pivot",
        "Kontainerisasi Lingkungan Docker",
        "Komputasi Statistik R & ggplot2",
      ],
    },
  ];

  return (
    <section
      id="about"
      aria-label="Tentang dan Kompetensi Teknis"
      className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pb-3">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">[02]</span>
            <span>DOSIR // LATAR BELAKANG &amp; ARSITEKTUR KEAHLIAN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
            Filosofi Analitik &amp; Kompetensi Teknis
          </h2>
        </div>

        {/* Narrative Split: Bio & Principles */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-neutral-200 dark:border-neutral-800">
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-medium text-neutral-900 dark:text-neutral-100">
              Mengubah data yang kompleks menjadi keputusan bisnis yang meyakinkan.
            </h3>
            <div className="space-y-4 font-sans text-neutral-600 dark:text-neutral-300 leading-relaxed text-base font-light">
              <p>
                Sebagai fresh graduate dari <strong className="font-medium text-neutral-900 dark:text-white">Universitas Mercu Buana</strong>,
                pendekatan saya dalam analisis data dibentuk oleh dataset dunia nyata di mana data jarang bersih, distribusinya sering kali memiliki skewness tinggi, dan kebutuhan stakeholder selalu mendesak.
              </p>
              <p>
                Saya percaya kesalahan paling fatal dalam analisis adalah terburu-buru membangun model machine learning yang rumit sebelum memeriksa kebersihan data secara mendalam. Fokus saya selalu berawal dari verifikasi skema yang ketat, audit nilai null, serta pengujian hipotesis eksploratif.
              </p>
              <p>
                Baik saat menghitung retensi pelanggan di B2B fintech, mengungkap kecepatan penjualan di 149.000+ data transaksi ritel kopi, maupun mengelompokkan pola asupan gizi mahasiswa dengan machine learning clustering, saya merancang solusi yang mudah dipahami dan dapat langsung ditindaklanjuti oleh stakeholder.
              </p>
            </div>

            {/* Academic & Professional Credential Pills */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 uppercase block">
                    Pendidikan Formal
                  </span>
                  <span className="font-sans font-medium text-xs text-neutral-800 dark:text-neutral-200 block">
                    Universitas Mercu Buana — Sarjana Komputer (S.Kom.)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-neutral-100/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400 uppercase block">
                    Program Bootcamp
                  </span>
                  <span className="font-sans font-medium text-xs text-neutral-800 dark:text-neutral-200 block">
                    Bitlabs Academy — Data Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Quick CV Download Banner */}
            <div className="p-4 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                    Curriculum Vitae Terbaru (2026)
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 text-[11px]">
                    Format PDF resmi memuat rekam jejak analitik data, sertifikasi, &amp; keahlian
                  </span>
                </div>
              </div>
              <a
                href="/cv/CV_Mohammad_Rayhan_Kwarta_Nauval.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shrink-0 shadow-xs cursor-pointer"
              >
                <span>Buka CV (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Analytical Tenets */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/40 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block pb-2 border-b border-neutral-200 dark:border-neutral-800">
                PRINSIP KERJA UTAMA
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                      01 // Integritas Sebelum Pemodelan
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      Garbage in, garbage out. Validasi nilai null, anomali, dan pergeseran skema sejak tahap penyerapan data.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                      02 // Berpijak pada Metrik Bisnis
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      Kaitkan setiap output analitik langsung ke unit ekonomi bisnis: churn rate, lead-time SLA, atau margin laba.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 block">
                      03 // Narasi Kuantitatif yang Konkret
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      Dashboard harus mampu menjawab &quot;lalu apa dampaknya?&quot; dalam hitungan detik untuk memandu eksekusi tim.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grouped Skills Grid */}
        <div className="pt-12">
          <div className="pb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
              MATRIKS KOMPETENSI TEKNIS (TERKATEGORISASI)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 space-y-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <h4 className="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        {cat.category}
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                    {cat.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="text-blue-500 dark:text-blue-400 select-none">›</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
