"use client";

import React, { useState, useEffect } from "react";
import { Mail, MessageCircle, Copy, Check, ArrowUpRight, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  const emailAddress = "rayhankwartax@gmail.com";
  const whatsappNumber = "085155336772";
  const whatsappUrl = "https://wa.me/6285155336772?text=Halo%20Rayhan,%20saya%20tertarik%20dengan%20portofolio%20analisis%20data%20Anda";
  const githubUrl = "https://github.com/rayhankwarta";
  const linkedinUrl = "https://www.linkedin.com/in/rayhankwarta/";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      // Fallback
    }
  };

  const contactChannels = [
    {
      title: "Email Langsung",
      subtitle: emailAddress,
      icon: Mail,
      href: `mailto:${emailAddress}`,
      actionLabel: "Kirim Pesan Email",
      isEmail: true,
      copyValue: emailAddress,
    },
    {
      title: "Chat WhatsApp",
      subtitle: "+62 851-5533-6772 (085155336772)",
      icon: MessageCircle,
      href: whatsappUrl,
      actionLabel: "Buka WhatsApp",
      isEmail: false,
      copyValue: whatsappNumber,
    },
    {
      title: "Profil LinkedIn",
      subtitle: "linkedin.com/in/rayhankwarta",
      icon: LinkedinIcon,
      href: linkedinUrl,
      actionLabel: "Terhubung di LinkedIn",
      isEmail: false,
    },
    {
      title: "Repositori GitHub",
      subtitle: "github.com/rayhankwarta",
      icon: GithubIcon,
      href: githubUrl,
      actionLabel: "Lihat Repositori",
      isEmail: false,
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Informasi Kontak"
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 pb-3">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">[04]</span>
            <span>KOMUNIKASI // SALURAN KONTAK LANGSUNG</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
                Mari diskusikan peluang kerja sama &amp; eksplorasi data.
              </h2>
              <p className="font-sans text-neutral-600 dark:text-neutral-300 max-w-xl text-base font-light">
                Saat ini terbuka untuk posisi penuh waktu (full-time) sebagai Data Analyst, Business Intelligence, dan kolaborasi proyek berbasis data.
              </p>
            </div>

            {/* Jakarta Real-Time Clock Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-xs font-mono text-neutral-600 dark:text-neutral-300 self-start lg:self-auto">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span>JAKARTA (WIB / UTC+7):</span>
              <span className="font-bold text-neutral-900 dark:text-white">
                {currentTime || "14:58:43"}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="group relative p-6 sm:p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 hover:border-blue-500/70 dark:hover:border-blue-500/70 transition-all flex flex-col justify-between gap-6 shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {channel.copyValue && (
                      <button
                        type="button"
                        onClick={() => handleCopy(channel.copyValue!, channel.title)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                        aria-label={`Salin ${channel.title} ke papan klip`}
                      >
                        {copiedKey === channel.title ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                              TERSALIN
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>SALIN</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">
                      {channel.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 mt-1 break-all">
                      {channel.subtitle}
                    </p>
                  </div>
                </div>

                {/* Primary Outbound Action */}
                <div className="pt-2">
                  <a
                    href={channel.href}
                    target={channel.isEmail ? undefined : "_blank"}
                    rel={channel.isEmail ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    <span>{channel.actionLabel}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
