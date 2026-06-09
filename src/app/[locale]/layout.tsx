import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await props.params;
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale;
  const isDe = locale === "de";

  const title = "Dennis Diepolder — Software & Platform Engineer";
  const description = isDe
    ? "Software & Platform Engineer aus der Schweiz. Ich baue performante Systeme, Echtzeit-Monitoring, E-Commerce-Plattformen und Custom-Web-Apps für Unternehmen in der DACH-Region."
    : "Software & Platform Engineer based in Switzerland. I build high-performance systems, real-time monitoring, e-commerce platforms, and custom web applications for businesses across the DACH region.";

  const canonical = `${siteUrl}/${locale}`;
  const ogImage = `${siteUrl}/dennisdiepolder.jpg`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s — Dennis Diepolder",
    },
    description,
    applicationName: "Dennis Diepolder",
    authors: [{ name: "Dennis Diepolder", url: siteUrl }],
    creator: "Dennis Diepolder",
    publisher: "Dennis Diepolder",
    keywords: isDe
      ? [
          "Software Engineer",
          "Platform Engineer",
          "Full-Stack Entwickler",
          "Web Entwicklung",
          "Next.js",
          "Go",
          "React",
          "Echtzeit-Monitoring",
          "E-Commerce",
          "SaaS",
          "Schweiz",
          "DACH",
          "Freelancer",
        ]
      : [
          "Software Engineer",
          "Platform Engineer",
          "Full-Stack Developer",
          "Web Development",
          "Next.js",
          "Go",
          "React",
          "Real-Time Monitoring",
          "E-Commerce",
          "SaaS",
          "Switzerland",
          "DACH",
          "Freelancer",
        ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "Dennis Diepolder",
      locale: isDe ? "de_CH" : "en_US",
      alternateLocale: isDe ? ["en_US"] : ["de_CH"],
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: "Dennis Diepolder — Software & Platform Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    category: "technology",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const isDe = locale === "de";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dennis Diepolder",
    jobTitle: "Software & Platform Engineer",
    image: `${siteUrl}/dennisdiepolder.jpg`,
    url: siteUrl,
    email: "info@dennisdiepolder.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
    },
    sameAs: [
      "https://github.com/dyprodg",
      "https://www.linkedin.com/in/dennis-diepolder-2a5a98276/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Platform Engineering",
      "Real-Time Systems",
      "E-Commerce",
      "Go",
      "TypeScript",
      "Next.js",
      "React",
      "AWS",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: isDe ? "Business-Landing-Page" : "Business Landing Page",
        description: isDe
          ? "Eine schnelle, moderne One-Pager-Website, die einen starken ersten Eindruck macht. Gebaut mit Next.js und optimiert für Conversions."
          : "A fast, modern single-page site that makes a strong first impression. Built with Next.js and optimized for conversions.",
        offers: { "@type": "Offer", price: "990", priceCurrency: "CHF" },
      },
      {
        "@type": "Service",
        name: isDe ? "Business-Web-Applikation" : "Business Web Application",
        description: isDe
          ? "Für KMUs und SaaS-MVPs, die mehr als eine Visitenkarten-Website brauchen — mit CMS, Authentifizierung und produktionsreifer Zahlungsabwicklung."
          : "For SMEs and SaaS MVPs that need more than a brochure site — with a CMS, authentication, and production-grade payment processing.",
        offers: { "@type": "Offer", price: "4990", priceCurrency: "CHF" },
      },
      {
        "@type": "Service",
        name: isDe ? "Custom Platform & Integrationen" : "Custom Platform & Integrations",
        description: isDe
          ? "Ein komplettes Business-Backbone — Echtzeitsysteme, individuelle Dashboards und massgeschneiderte Plattformen, wo Standard-Tools nicht reichen."
          : "A complete business backbone — real-time systems, custom dashboards, and bespoke platforms where off-the-shelf tools fall short.",
        offers: { "@type": "Offer", price: "14900", priceCurrency: "CHF" },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isDe
          ? "Arbeiten Sie mit internationalen Kunden?"
          : "Do you work with international clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isDe
            ? "Ja, ich arbeite mit Kunden weltweit. Mein Fokus liegt auf der DACH-Region, aber Remote-Zusammenarbeit ist für alle Projekte möglich."
            : "Yes, I work with clients worldwide. My focus is on the DACH region, but remote collaboration is possible for all projects.",
        },
      },
      {
        "@type": "Question",
        name: isDe
          ? "Wie sieht ein typischer Projektzeitplan aus?"
          : "What is your typical project timeline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isDe
            ? "Kleinere Projekte dauern in der Regel 2–4 Wochen, grössere Plattformen 8–16 Wochen. Jedes Projekt beginnt mit einer detaillierten Planungsphase."
            : "Smaller projects typically take 2–4 weeks, larger platforms 8–16 weeks. Every project starts with a detailed planning phase.",
        },
      },
      {
        "@type": "Question",
        name: isDe
          ? "Bieten Sie Wartung nach dem Launch an?"
          : "Do you offer maintenance after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isDe
            ? "Ja, ich biete laufende Wartungs- und Support-Pakete an, damit Ihre Systeme sicher, aktuell und performant bleiben."
            : "Yes, I offer ongoing maintenance and support packages to ensure your systems remain secure, up-to-date, and performant.",
        },
      },
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-900 dark:text-zinc-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScroll>
              <AnimatedBackground />
              <Header />
              <main>{children}</main>
            </SmoothScroll>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
