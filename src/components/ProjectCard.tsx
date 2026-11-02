"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { ArrowUpRight, ExternalLink, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryHref = `/projects/${project.slug}`;
  const isExternalPrimary = false;
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      aria-labelledby={`project-title-${project.slug}`}
      className="group relative flex flex-col border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/70 dark:hover:border-blue-500/70 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-black/50"
    >
      {/* Top Meta Strip */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50/70 dark:bg-neutral-900/80">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            [{formattedIndex}]
          </span>
          <span className="uppercase tracking-wider">PROYEK</span>
        </div>
        <div className="flex items-center gap-3">
          {project.role && (
            <span className="hidden sm:inline text-[11px] text-neutral-400 dark:text-neutral-500">
              {project.role}
            </span>
          )}
          <span className="font-semibold text-neutral-700 dark:text-neutral-300">
            {project.year}
          </span>
        </div>
      </div>

      {/* Visual Thumbnail Frame */}
      <div className="relative w-full aspect-16/9 overflow-hidden bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <Image
          src={project.thumbnail}
          alt={`Visualisasi data dan metodologi untuk ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          priority={index < 2}
        />
        {/* Subtle gradient vignette */}
        <div
          className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity"
          aria-hidden="true"
        />

        {/* Impact metric badge overlay */}
        {project.impactMetrics && project.impactMetrics[0] && (
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded bg-black/80 text-emerald-400 backdrop-blur-md border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.impactMetrics[0].label}: {project.impactMetrics[0].value}
            </span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between gap-6">
        <div className="space-y-3">
          {/* Main Title using Stretched-Link Pattern */}
          <h3
            id={`project-title-${project.slug}`}
            className="font-serif text-2xl sm:text-[1.65rem] font-medium leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 text-balance group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
          >
            {isExternalPrimary ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline-none after:absolute after:inset-0 after:z-0 after:content-['']"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="inline-block ml-1.5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                href={primaryHref}
                className="focus-visible:outline-none after:absolute after:inset-0 after:z-0 after:content-['']"
              >
                <span>{project.title}</span>
                <ArrowUpRight className="inline-block ml-1.5 w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </h3>

          <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed text-pretty">
            {project.description}
          </p>
        </div>

        {/* Tags and Action Bar */}
        <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5" aria-label="Teknologi yang digunakan">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2.5 py-1 text-xs font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/80 rounded border border-neutral-200/60 dark:border-neutral-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Independent, Non-Conflicting Interactive Action Buttons (relative z-10) */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka demo langsung untuk ${project.title} di tab baru`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo Langsung</span>
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat repositori kode sumber untuk ${project.title} di GitHub`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repositori</span>
                </a>
              )}
            </div>

            {/* Deep-Dive Case Study Route Link */}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              aria-label={`Baca studi kasus untuk ${project.title}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="underline underline-offset-4">Studi Kasus</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
