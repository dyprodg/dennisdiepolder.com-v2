import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dennisdiepolder.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dennis Diepolder — Software & Platform Engineer",
    template: "%s — Dennis Diepolder",
  },
  description:
    "I build high-performance systems that close the gap between what enterprises use and what they actually need.",
  robots: "index, follow",
  alternates: {
    canonical: siteUrl,
    languages: {
      en: `${siteUrl}/en`,
      de: `${siteUrl}/de`,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "Dennis Diepolder — Software & Platform Engineer",
    description:
      "I build high-performance systems that close the gap between what enterprises use and what they actually need.",
    type: "website",
    url: siteUrl,
    siteName: "Dennis Diepolder",
    locale: "en",
    images: [
      {
        url: `${siteUrl}/dennisdiepolder.jpeg`,
        width: 800,
        height: 800,
        alt: "Dennis Diepolder — Software & Platform Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennis Diepolder — Software & Platform Engineer",
    description:
      "I build high-performance systems that close the gap between what enterprises use and what they actually need.",
    images: [`${siteUrl}/dennisdiepolder.jpeg`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dennis Diepolder",
    jobTitle: "Software & Platform Engineer",
    image: `${siteUrl}/dennisdiepolder.jpeg`,
    url: siteUrl,
    email: "info@dennisdiepolder.com",
    sameAs: [
      "https://github.com/dyprodg",
      "https://www.linkedin.com/in/dennis-diepolder-2a5a98276/",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
