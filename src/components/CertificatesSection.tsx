"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { certificates } from "@/data/certificates";
import {
  Award,
  ExternalLink,
  ShieldCheck,
  Filter,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function CertificatesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("SEMUA");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = useMemo(() => {
    return ["SEMUA", "BNSP & NASIONAL", "IBM & COURSERA", "ORACLE ACADEMY"];
  }, []);

  const filteredCertificates = useMemo(() => {
    if (selectedCategory === "SEMUA") return certificates;
    return certificates.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate active slide index (0 to N-1)
    const cardEl = el.firstElementChild as HTMLElement;
    if (cardEl) {
      const cardWidth = cardEl.offsetWidth + 24; // width + gap-6
      const slide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(slide);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredCertificates]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardEl = el.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 360;
    // On desktop scroll by 3 cards (or 1 on mobile)
    const multiplier = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;
    const offset = cardWidth * multiplier;

    el.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardEl = el.firstElementChild as HTMLElement;
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 360;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certificates"
      aria-label="Sertifikasi dan Lisensi Profesional"
      className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">[03]</span>
              <span>KREDENSIAL // LISENSI &amp; SERTIFIKASI PROFESIONAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
              Sertifikasi &amp; Lisensi Resmi
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-300 max-w-xl text-base font-light">
              Validasi kompetensi terakreditasi dari lembaga sertifikasi nasional (BNSP Republik Indonesia), korporasi teknologi global (IBM, Oracle Academy), dan program Kementerian (MSIB Kampus Merdeka).
            </p>
          </div>

          {/* Category Filter Pills & Navigation Arrows */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 mr-1">
                <Filter className="w-3 h-3" />
                <span>KATEGORI:</span>
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-xs"
                        : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
                    }`}
                    aria-pressed={isActive}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="hidden sm:flex items-center gap-2 shrink-0 border-l border-neutral-200 dark:border-neutral-800 pl-4">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Geser ke sertifikat sebelumnya"
                className={`p-2 rounded-lg border transition-all cursor-pointer ${
                  canScrollLeft
                    ? "border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-300"
                    : "border-neutral-200 dark:border-neutral-800 text-neutral-300 dark:text-neutral-700 cursor-not-allowed opacity-40"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Geser ke sertifikat selanjutnya"
                className={`p-2 rounded-lg border transition-all cursor-pointer ${
                  canScrollRight
                    ? "border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-300"
                    : "border-neutral-200 dark:border-neutral-800 text-neutral-300 dark:text-neutral-700 cursor-not-allowed opacity-40"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Counter & Swipe Hint */}
        <div className="pt-4 pb-2 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <span>MENAMPILKAN</span>
            <span className="font-semibold text-neutral-900 dark:text-white">
              {filteredCertificates.length}
            </span>
            <span>SERTIFIKAT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] text-neutral-400">
              Gunakan tombol panah atau geser ke kanan untuk melihat lainnya
            </span>
            <span className="sm:hidden text-[11px] text-blue-600 dark:text-blue-400">
              Geser ke kanan →
            </span>
          </div>
        </div>

        {/* 3-Card Carousel Slider Container */}
        <div className="relative mt-4">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col"
              >
                <article
                  className={`group flex flex-col justify-between h-full border rounded-xl overflow-hidden transition-all duration-300 bg-white dark:bg-neutral-900/60 p-6 shadow-xs ${
                    cert.isFeatured
                      ? "border-blue-300 dark:border-blue-800/80 hover:border-blue-500 dark:hover:border-blue-400"
                      : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Meta Top: Category & Year */}
                    <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 dark:text-neutral-400 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                        {cert.category === "BNSP & NASIONAL" && <ShieldCheck className="w-3.5 h-3.5" />}
                        {cert.category === "IBM & COURSERA" && <Award className="w-3.5 h-3.5" />}
                        {cert.category === "ORACLE ACADEMY" && <FileText className="w-3.5 h-3.5" />}
                        <span>{cert.category}</span>
                      </span>
                      {cert.year && <span>{cert.year}</span>}
                    </div>

                    {/* Title & Issuer */}
                    <div className="space-y-1.5 min-h-[58px]">
                      <h3 className="font-serif text-lg font-medium leading-snug text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 font-medium truncate">
                        {cert.issuer}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-light line-clamp-3 min-h-[54px]">
                      {cert.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1 min-h-[52px]">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link: View PDF Document */}
                  <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Buka dokumen sertifikat ${cert.title} (PDF)`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-500" />
                      <span>Lihat Dokumen PDF</span>
                      <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    {cert.isFeatured && (
                      <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60">
                        Utama
                      </span>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Left/Right Floating Gradient Indicators for Mobile */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-0 bottom-6 w-12 bg-linear-to-r from-neutral-50 dark:from-neutral-950/80 to-transparent sm:hidden" />
          )}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-0 bottom-6 w-12 bg-linear-to-l from-neutral-50 dark:from-neutral-950/80 to-transparent sm:hidden" />
          )}
        </div>

        {/* Mobile Nav & Slide Dots */}
        <div className="pt-2 flex items-center justify-between sm:justify-center gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto py-2">
            {filteredCertificates.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Pindah ke slide sertifikat nomor ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? "w-6 h-1.5 bg-blue-600 dark:bg-blue-400"
                    : "w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Sebelumnya"
              className="p-1.5 rounded border border-neutral-300 dark:border-neutral-700 disabled:opacity-30"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Selanjutnya"
              className="p-1.5 rounded border border-neutral-300 dark:border-neutral-700 disabled:opacity-30"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Section Footer Callout */}
        <div className="mt-14 p-6 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Semua kredensial di atas dilengkapi dokumen PDF resmi yang dapat diverifikasi langsung.</span>
          </div>
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-4"
          >
            Hubungi untuk Verifikasi Dokumen Tambahan →
          </a>
        </div>
      </div>
    </section>
  );
}
