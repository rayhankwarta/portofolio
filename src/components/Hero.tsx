"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Cpu, Share2, LineChart, Layers, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-label="Introduction and Overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-neutral-200 dark:border-neutral-800/80 overflow-hidden"
    >
      {/* Background subtle editorial coordinates grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Editorial Sub-header strip */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">[00]</span>
            <span>RINGKASAN // JAKARTA, INDONESIA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">UNIVERSITAS MERCU BUANA</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              TERSEDIA UNTUK BEKERJA
            </span>
          </div>
        </motion.div>

        {/* Asymmetrical Layout Main Grid */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Main Typography Column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
                IDENTITAS &amp; SPESIALISASI
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
              Data tanpa konteks hanyalah kebisingan. Saya mengisolasi{" "}
              <span className="italic font-serif underline decoration-blue-500/40 underline-offset-8">
                sinyal
              </span>{" "}
              yang menggerakkan keputusan bisnis.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl text-pretty font-light pt-2">
              Saya <strong className="font-semibold text-neutral-900 dark:text-white">Mohammad Rayhan Kwarta Nauval</strong>,
              seorang Data Analyst dan fresh graduate dari <span className="text-neutral-900 dark:text-white font-medium">Universitas Mercu Buana</span>.
              Saya menghubungkan analisis data eksploratif (EDA), pemodelan kohort statistik, dan SQL data warehousing
              untuk mengubah data mentah menjadi kerangka pengambilan keputusan yang presisi dan berdampak.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-sm font-mono tracking-wide rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                <span>JELAJAHI PROYEK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="/cv/CV_Mohammad_Rayhan_Kwarta_Nauval.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3.5 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-400 text-blue-900 dark:text-blue-200 text-sm font-mono tracking-wide rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LIHAT / UNDUH CV</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3.5 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 text-neutral-800 dark:text-neutral-200 text-sm font-mono tracking-wide rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                <span>HUBUNGI LANGSUNG</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Data Dossier Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col"
          >
            <div className="border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-6 rounded-lg backdrop-blur-xs shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-400">
                <span>KARTU INDEKS // 001</span>
                <span>STATUS: TERVERIFIKASI</span>
              </div>

              {/* Core Analyst Disciplines matched to Rayhan's real projects */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 mt-1 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h2 className="text-xs font-mono font-semibold uppercase text-neutral-800 dark:text-neutral-200">
                      Supervised ML &amp; Klasifikasi
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Random Forest Classifier, evaluasi recall risiko tinggi 91%, dan Psychosocial Burden Index (Uji Kompetensi).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Share2 className="w-4 h-4 mt-1 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <div>
                    <h2 className="text-xs font-mono font-semibold uppercase text-neutral-800 dark:text-neutral-200">
                      Analisis Jaringan B2B &amp; Kohort
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Social Network Analysis (NetworkX) hub buyer-seller, deteksi fraud voucher, dan retensi log-scale (Bitlabs x Paper.id).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LineChart className="w-4 h-4 mt-1 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h2 className="text-xs font-mono font-semibold uppercase text-neutral-800 dark:text-neutral-200">
                      EDA Ritel &amp; Intelijen Pendapatan
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Analisis 149K+ data transaksi ritel kopi, pemetaan tren peak rush per jam, dan benchmarking 3 cabang (Kaggle).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 mt-1 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <h2 className="text-xs font-mono font-semibold uppercase text-neutral-800 dark:text-neutral-200">
                      Clustering &amp; Segmentasi Gizi
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      K-Means clustering, optimasi Elbow Method &amp; Silhouette Score pada pola konsumsi makronutrien (Skripsi UMB).
                    </p>
                  </div>
                </div>
              </div>

              {/* Footnote stamp */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>PORTFOLIO // 4 KARYA UTAMA</span>
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">S.Kom. / BITLABS ALUMNI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quantitative Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              200K+
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase mt-1">
              Baris Transaksi &amp; Data Dianalisis
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              4
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase mt-1">
              Studi Kasus Analisis Data Nyata
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              89.0%
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase mt-1">
              Akurasi Model Machine Learning
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              100%
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase mt-1">
              Kode Reproduksibel (Colab &amp; GitHub)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
