import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink, Database, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Studi Kasus Tidak Ditemukan — Mohammad Rayhan Kwarta Nauval",
    };
  }

  return {
    title: `${project.title} | Studi Kasus Data — M. Rayhan Kwarta Nauval`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Studi Kasus`,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          width: 800,
          height: 480,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#0a0b0d] text-neutral-900 dark:text-neutral-100">
      <Navbar />

      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Back Navigation Breadcrumb */}
          <div className="pb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>KEMBALI KE DAFTAR PROYEK</span>
            </Link>
          </div>

          {/* Editorial Header */}
          <header className="space-y-4 pb-10 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">[STUDI KASUS]</span>
              <span>•</span>
              <span>{project.year}</span>
              {project.role && (
                <>
                  <span>•</span>
                  <span>{project.role}</span>
                </>
              )}
              {project.duration && (
                <>
                  <span>•</span>
                  <span>{project.duration}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                {project.subtitle}
              </p>
            )}

            {/* External Links Cluster */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka Demo Notebook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 text-neutral-800 dark:text-neutral-200 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repositori Kode Sumber</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </header>

          {/* Visual Showcase Graphic */}
          <div className="my-10 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 aspect-16/9 relative shadow-md">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Quantitative Impact Strip */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div className="my-10 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {project.impactMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1 uppercase">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deep-Dive Editorial Breakdown */}
          <div className="space-y-12 pt-6">
            {/* Problem Statement */}
            {project.problemStatement && (
              <section className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  <Database className="w-4 h-4" />
                  <span>01 // Konteks Bisnis &amp; Rumusan Masalah</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  Tantangan &amp; Masalah Utama
                </h2>
                <p className="font-sans text-neutral-600 dark:text-neutral-300 leading-relaxed text-base font-light">
                  {project.problemStatement}
                </p>
              </section>
            )}

            {/* Methodology */}
            {project.methodology && project.methodology.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  <Layers className="w-4 h-4" />
                  <span>02 // Metodologi Analitik &amp; Alur Kerja Pipeline</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  Tahapan Pemrosesan &amp; Pemodelan Data
                </h2>
                <div className="space-y-3 pt-2">
                  {project.methodology.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/30 font-sans text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                        TAHAP 0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Findings */}
            {project.keyFindings && project.keyFindings.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>03 // Temuan Kunci &amp; Dampak Strategis</span>
                </div>
                <h2 className="font-serif text-2xl font-medium text-neutral-900 dark:text-neutral-100">
                  Hasil Analisis &amp; Wawasan Terukur
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.keyFindings.map((finding, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans"
                    >
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Stack Details */}
            {project.techDetails && project.techDetails.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  04 // Spesifikasi Teknis &amp; Alat
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {project.techDetails.map((td) => (
                    <div
                      key={td.category}
                      className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40"
                    >
                      <h3 className="font-mono text-xs font-semibold uppercase text-neutral-900 dark:text-neutral-100 mb-2">
                        {td.category}
                      </h3>
                      <ul className="space-y-1 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                        {td.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke semua proyek</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Diskusikan studi kasus ini</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
