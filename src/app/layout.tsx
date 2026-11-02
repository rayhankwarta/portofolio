import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipLink } from "@/components/SkipLink";

const serifDisplay = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sansBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoDetail = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayhankwarta.dev"),
  title: {
    default: "Mohammad Rayhan Kwarta Nauval — Data Analyst",
    template: "%s | Mohammad Rayhan Kwarta Nauval",
  },
  description:
    "Portofolio pribadi dan studi kasus analitik data oleh Mohammad Rayhan Kwarta Nauval. Fresh graduate dari Universitas Mercu Buana dengan spesialisasi Exploratory Data Analysis (EDA), SQL Data Warehousing, Machine Learning, dan Dashboard Business Intelligence.",
  keywords: [
    "Mohammad Rayhan Kwarta Nauval",
    "Data Analyst",
    "Business Intelligence",
    "Universitas Mercu Buana",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Analisis Kohort",
    "Data Analyst Jakarta",
  ],
  authors: [{ name: "Mohammad Rayhan Kwarta Nauval" }],
  creator: "Mohammad Rayhan Kwarta Nauval",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rayhankwarta.dev",
    title: "Mohammad Rayhan Kwarta Nauval — Data Analyst",
    description:
      "Mengubah data mentah menjadi keputusan bisnis bernilai tinggi. Fresh graduate Universitas Mercu Buana.",
    siteName: "Portofolio Mohammad Rayhan Kwarta Nauval",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Rayhan Kwarta Nauval — Data Analyst",
    description:
      "Data Analyst & Fresh Graduate Universitas Mercu Buana. SQL, Python, Analisis Kohort, dan Sistem BI.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${serifDisplay.variable} ${sansBody.variable} ${monoDetail.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" sizes="64x64" />
        <link rel="icon" href="/favicon-32x32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" />
        {/* Anti-FOUC theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('rayhan-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <ThemeProvider>
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
