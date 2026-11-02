"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { Database, Filter } from "lucide-react";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string>("SEMUA");

  const availableFilters = useMemo(() => {
    return ["SEMUA", "SQL", "Python", "Power BI", "Tableau", "Streamlit"];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "SEMUA") return projects;
    return projects.filter((p) =>
      p.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase()))
    );
  }, [projects, selectedTag]);

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-24 md:py-32 border-b border-neutral-200 dark:border-neutral-800/80"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Index Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">[01]</span>
              <span>INDEKS // KARYA &amp; ANALISIS DATA</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
              Karya Terpilih &amp; Studi Kasus
            </h2>
            <p className="font-sans text-neutral-600 dark:text-neutral-300 max-w-xl text-base font-light">
              Pipeline data end-to-end, pemodelan statistik, dan dashboard BI yang dirancang untuk mengubah data mentah menjadi keputusan bisnis yang berdampak nyata.
            </p>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-400 mr-1">
              <Filter className="w-3 h-3" />
              <span>TEKNOLOGI:</span>
            </span>
            {availableFilters.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold shadow-xs"
                      : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
                  }`}
                  aria-pressed={isActive}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-neutral-500 font-mono text-sm">
            Tidak ada proyek yang sesuai dengan filter &quot;{selectedTag}&quot;.
          </div>
        )}

        {/* Section Footer Callout */}
        <div className="mt-16 p-6 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Butuh analisis data khusus atau implementasi pipeline prediktif?</span>
          </div>
          <a
            href="#contact"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-4"
          >
            Hubungi untuk Diskusi Teknis Lengkap →
          </a>
        </div>
      </div>
    </section>
  );
}
