import { getDictionary, locales } from "@/i18n/locales";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

type RouteParams = {
  locale: string;
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!["en", "pt"].includes(locale)) notFound();

  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL("http://galleguillos.com.br"),
    title: dict.meta.title,
    description: dict.meta.description,
    // Tell search engines about every language version of this page
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
        "x-default": `/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
      images: [
        {
          url: "https://galleguillos.com.br/og.jpg",
          width: 1200,
          height: 630,
          alt: "Preview image for Galleguillos",
        },
      ],
    },
    twitter: dict.meta.twitter,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<RouteParams>;
}>) {
  const { locale } = await params;

  const lang = locale === "pt" ? "pt_BR" : "en_US";
  return (
    <html lang={"pt-br"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-full bg-zinc-900 text-zinc-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
