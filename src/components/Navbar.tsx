"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Proyek", href: "#projects", index: "01" },
    { label: "Profil", href: "#about", index: "02" },
    { label: "Sertifikasi", href: "#certificates", index: "03" },
    { label: "Kontak", href: "#contact", index: "04" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? "bg-[#fbfbf9]/90 dark:bg-[#0a0b0d]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 shadow-xs"
        : "bg-transparent py-5 border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded py-0.5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div className="flex flex-col">
            <span className="font-mono text-xs font-semibold tracking-wider text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              M. RAYHAN KWARTA
            </span>
            <span className="font-serif italic text-[11px] text-neutral-500 dark:text-neutral-400 leading-none mt-0.5">
              Data Analyst
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-sans"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors py-1"
            >
              <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {link.index}
              </span>
              <span className="font-medium tracking-tight">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <ThemeToggle />

          <a
            href="/cv/CV_Mohammad_Rayhan_Kwarta_Nauval.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium tracking-wide uppercase border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors"
            title="Buka CV Mohammad Rayhan Kwarta Nauval"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide uppercase bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xs"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#fbfbf9] dark:bg-[#0a0b0d] px-6 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium py-2 border-b border-neutral-100 dark:border-neutral-900 text-neutral-800 dark:text-neutral-200"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-neutral-400">
                  {link.index}
                </span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="/cv/CV_Mohammad_Rayhan_Kwarta_Nauval.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono uppercase border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Buka CV (PDF 2026)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono uppercase bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-md"
              >
                <span>Kirim Pesan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
