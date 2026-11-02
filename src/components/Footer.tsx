import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer
      aria-label="Footer Situs"
      className="border-t border-neutral-200 dark:border-neutral-800 bg-[#fbfbf9] dark:bg-[#0a0b0d] py-12"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-200/60 dark:border-neutral-800/60 font-mono text-xs">
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
              MOHAMMAD RAYHAN KWARTA NAUVAL
            </div>
            <div className="text-neutral-500 dark:text-neutral-400">
              Data Analyst • Fresh Graduate Universitas Mercu Buana, Jakarta
            </div>
          </div>

          <a
            href="#main-content"
            className="group flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-2 py-1"
            aria-label="Kembali ke atas halaman"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
          <div>
            © 2026 Mohammad Rayhan Kwarta Nauval. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-3">
            <span>NEXT.JS (APP ROUTER)</span>
            <span>•</span>
            <span>TAILWIND CSS V4</span>
            <span>•</span>
            <span>TYPESCRIPT STRICT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
