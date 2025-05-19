import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desenvolvedor | Luís Felipe Galleguillos Campos",
  description: "Minha página pessoal, contatos, portfólio e outras coisas.",
  openGraph:{
    title: 'Desenvolvedor | Luís Felipe Galleguillos Campos',
    description: 'Minha página pessoal, contatos, portfólio e outras coisas.',
    url: 'https://galleguillos.com.br/',
    siteName: 'Galleguillos',
    images: [
      {
        url: 'https://galleguillos.com.br/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview image for Galleguillos',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvedor | Luís Felipe Galleguillos Campos',
    description: 'Minha página pessoal, contatos, portfólio e outras coisas.',
    images: ['https://galleguillos.com.br/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-full bg-zinc-900 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
